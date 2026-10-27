import type { APIRoute } from 'astro';
import { SESv2Client, SendEmailCommand } from '@aws-sdk/client-sesv2';

const required = (name: string) => {
	const value = import.meta.env[name] ?? process.env[name];
	if (!value) throw new Error(`Missing required environment variable: ${name}`);
	return value;
};

const optional = (...names: string[]) => {
	for (const name of names) {
		const value = import.meta.env[name] ?? process.env[name];
		if (value) return value;
	}
	return undefined;
};

const escapeHeader = (value: string) => value.replace(/[\r\n]/g, ' ').trim();

export const POST: APIRoute = async ({ request, redirect }) => {
	try {
		const form = await request.formData();
		const name = String(form.get('name') ?? '').trim();
		const email = String(form.get('email') ?? '').trim();
		const message = String(form.get('message') ?? '').trim();
		const website = String(form.get('website') ?? '').trim();

		// Quietly accept honeypot submissions without sending them.
		if (website) return redirect('/contact?sent=1', 303);
		if (!name || !email || !message || !/^\S+@\S+\.\S+$/.test(email)) {
			return redirect('/contact?error=validation', 303);
		}

		const region = required('AWS_REGION');
		const recipient = required('CONTACT_EMAIL_TO');
		const sender = required('CONTACT_EMAIL_FROM');
		const accessKeyId = optional('AWS_SES_ACCESS_KEY', 'AWS_ACCESS_KEY_ID');
		const secretAccessKey = optional('AWS_SES_SECRET_ACCESS_KEY', 'AWS_SECRET_ACCESS_KEY');
		const credentials = accessKeyId && secretAccessKey ? { accessKeyId, secretAccessKey } : undefined;
		const client = new SESv2Client({ region, credentials });

		await client.send(new SendEmailCommand({
			FromEmailAddress: sender,
			Destination: { ToAddresses: [recipient] },
			ReplyToAddresses: [escapeHeader(email)],
			Content: {
				Simple: {
					Subject: { Data: `New project enquiry from ${escapeHeader(name)}`, Charset: 'UTF-8' },
					Body: { Text: { Data: `Name: ${name}\nEmail: ${email}\n\n${message}`, Charset: 'UTF-8' } },
				},
			},
		}));

		return redirect('/contact?sent=1', 303);
	} catch (error) {
		console.error('Contact form submission failed', error);
		return redirect('/contact?error=server', 303);
	}
};
