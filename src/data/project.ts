export interface ProjectItem {
	id?: number;
	title: string
	title_en?: string
	description?: string
	date?: string
	detail?: string
  	url?: string
	tags?: string[]
	cover?: string[]
}

export const projectItems: ProjectItem[] = [
	{
		title: "Bookkeeping & Financial Management System",
		title_en: "Transactions, Inventory, Accounts & Financial Reporting",
		date: "2026-09-11",
		detail: "/detail/bookkeeping",
		cover: ['bookkeeping/cover.png', 'bookkeeping/start.png', 'bookkeeping/v3.png', 'bookkeeping/v2.png', 'bookkeeping/v1.png'],
		tags: ['NEXT.JS', 'POSTGRESQL', 'FIREBASE', 'EXCEL', 'FINANCE', 'DATA ARCHITECTURE']
	},
	{
		title: "BridgeU — University & Industry Collaboration Platform",
		title_en: "2nd Place Winner — UBM Inspire 1.0 Competition",
		date: "2026-10-15",
		url: "https://bridge-u-one.vercel.app",
		detail: "/detail/bridgeu",
		cover: [
			'bridgeu/bridgeu-cover.png',
			'bridgeu/collaborate.png',
			'bridgeu/portfolio-tracker.png',
			'bridgeu/profile.png'
		],
		tags: ['NEXT.JS', 'SUPABASE', 'POSTGRESQL', 'ALGORITHM', 'AWARD', 'COLLABORATION']
	},
];
