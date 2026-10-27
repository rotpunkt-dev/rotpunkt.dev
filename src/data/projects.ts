export type Project = {
	slug: string;
	name: string;
	discipline: string;
	title: string;
	description: string;
	url: string;
	image: string;
	alt: string;
	colour: string;
	summary: string;
	services: string[];
	techStack: string[];
};

export const projects: Project[] = [
	{
		slug: 'fritz-miller', name: 'Fritz Miller', discipline: 'Mountain guide',
		title: 'A calm, image-led home for a mountain guide and alpinist.',
		description: 'An editorial website that leaves room for the stories, routes and partnerships behind an alpine career.',
		url: 'https://www.fritzmiller.rocks', image: '/projects/fritz-miller.webp',
		alt: 'Homepage screenshot for Fritz Miller, alpine guide', colour: 'acid',
		summary: 'A calm, image-led home for a mountain guide and alpinist. The site makes a wide body of work easy to explore while keeping the outdoors at the centre of the experience.',
		services: ['Strategy', 'Web design', 'Development'],
		techStack: ['Next.js', 'Sanity.io'],
	},
	{
		slug: 'korbinian-schmidtner', name: 'Korbinian Schmidtner', discipline: 'Mountain guide',
		title: 'Guided summer and winter experiences in the Alps.',
		description: 'A focused introduction to guided summer and winter experiences in the Alps.',
		url: 'https://www.korbinian-schmidtner.com', image: '/projects/korbinian-schmidtner.webp',
		alt: 'Homepage screenshot for Korbinian Schmidtner, mountain guide', colour: 'violet',
		summary: 'A direct, capable website for an IFMGA mountain guide. Strong imagery, clear offers and a low-friction route to enquiries give visitors confidence before they commit.',
		services: ['Information architecture', 'Web design', 'Astro development'],
		techStack: ['Astro'],
	},
	{
		slug: 'kassen-taher-saleh', name: 'Kassem Taher Saleh', discipline: 'Member of Parliament',
		title: 'Fresh, clear and accessible political communication.',
		description: 'A public-facing presence built to make political work, positions and contact accessible.',
		url: 'https://www.kassem-taher-saleh.de', image: '/projects/kassen-taher-saleh.webp',
		alt: 'Homepage screenshot for Kassem Taher Saleh', colour: 'coral',
		summary: 'A content-led website designed around public accountability. The structure gives speeches, positions and practical ways to get in touch the prominence they need.',
		services: ['Content strategy', 'Web design', 'Development'],
		techStack: ['Next.js', 'Sanity.io'],
	},
	{
		slug: 'swantje-michaelsen', name: 'Swantje Michaelsen', discipline: 'Member of Parliament',
		title: 'Making political work visible.',
		description: 'A robust editorial platform for updates, political priorities and local connection.',
		url: 'https://www.swantje-michaelsen.de', image: '/projects/swantje-michaelsen.webp',
		alt: 'Homepage screenshot for Swantje Michaelsen, Member of Parliament', colour: 'blue',
		summary: 'An accessible publication platform for a Member of the German Bundestag. It combines current reporting, campaign themes and practical contact paths in one familiar home.',
		services: ['Design system', 'CMS integration', 'Web development'],
		techStack: ['Next.js', 'Sanity.io'],
	},
];
