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
];
