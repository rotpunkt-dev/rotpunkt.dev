# rotpunkt.dev

First-draft portfolio website for rotpunkt.dev, built with Astro from the [Maria](https://github.com/xocothemes/maria) starter (MIT License).

## Development

Requires Node.js 22 or newer and pnpm.

```sh
pnpm install
pnpm dev
```

Create a production build with:

```sh
pnpm build
```

## Contact form / AWS SES

The contact form runs through `/api/contact` and sends email with AWS SES. The Astro app uses the Vercel adapter and server output so the endpoint is deployed as a Vercel function.

Configure these environment variables in the deployment environment:

```sh
AWS_REGION=eu-central-1
CONTACT_EMAIL_TO=your-inbox@example.com
CONTACT_EMAIL_FROM=verified-sender@example.com
# Optional explicit credentials; an IAM role is preferred where available.
AWS_SES_ACCESS_KEY=your-access-key
AWS_SES_SECRET_ACCESS_KEY=your-secret-access-key
```

The form supports the custom `AWS_SES_ACCESS_KEY` and `AWS_SES_SECRET_ACCESS_KEY` names, as well as the standard `AWS_ACCESS_KEY_ID` and `AWS_SECRET_ACCESS_KEY` names. An attached IAM role is preferred where available. The `CONTACT_EMAIL_FROM` identity must be verified in SES. While an SES account is in sandbox mode, recipient addresses must also be verified.

The sending IAM identity only needs permission to call `ses:SendEmail` / `ses:SendRawEmail` for the configured sender. Do not commit credentials to the repository.

Project screenshots in `public/projects/` are current captures of client websites and must only be used with client approval.
