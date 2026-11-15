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
	{
		title: "DapurTwin — Fullstack F&B Operational & POS SaaS",
		title_en: "Smart Recipe BOM, Dynamic HPP & Real-Time Kitchen Display System",
		date: "2026-11-15",
		url: "https://gtnich.vercel.app",
		detail: "/detail/dapurtwin",
		cover: [
			'dapurtwin/cover-dapurtwin.png',
			'dapurtwin/overview.png',
			'dapurtwin/menu_resep.png',
			'dapurtwin/proses_pesanan.png',
			'dapurtwin/kondisi_bahan.png',
			'dapurtwin/laporan.png'
		],
		tags: ['NEXT.JS', 'SUPABASE', 'POSTGRESQL', 'POS & KDS', 'F&B SAAS', 'BOM ENGINE']
	},
	{
		title: "Tukang.in — On-Demand Home Service & Technician Marketplace",
		title_en: "Early-Stage Laravel Monolith, Relational Database & Recommendation Matching",
		date: "2026-11-15",
		url: "https://tukangin.sakia.id",
		detail: "/detail/tukangin",
		cover: [
			'tukangin/tukangin-cover.png',
			'tukangin/home.png',
			'tukangin/layanan.png',
			'tukangin/teknisi.png',
			'tukangin/profile.png'
		],
		tags: ['LARAVEL', 'PHP', 'MYSQL', 'MARKETPLACE', 'HEURISTIC MATCHING', 'OPTIMIZATION']
	},
	{
		title: "SUPARTA — Brand Building, Multi-Language & Sales Enablement",
		title_en: "Official Brand Platform, Bilingual Architecture & High-Ticket Sales Conversion",
		date: "2026-11-15",
		url: "https://www.suparta.com/id",
		detail: "/detail/suparta",
		cover: [
			'suparta/suparta-cover.webp',
			'suparta/home.webp',
			'suparta/project.webp',
			'suparta/story.webp'
		],
		tags: ['BRAND BUILDING', 'BRAND MANAGEMENT', 'NEXT.JS', 'I18N MULTI-LANGUAGE', 'SALES CONVERSION', 'WEBP']
	},
];
