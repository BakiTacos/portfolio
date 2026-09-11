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
		title: "Tink Travel Life Diary",
		title_en: "Travel Diary Landing Page",
		date: "2025-05-09",
		url: "https://travellife.zeabur.app/",
		detail: "/detail/tinklife",
		cover: ['travel/01.jpg','travel/02.jpg','travel/03.jpg','travel/04.jpg'],
		tags: ['WEB', 'MOBILE']
	},
	{
		title: "Tink Travel Life Diary (Archive)",
		title_en: "Travel Diary Landing Page",
		date: "2023-10-15",
		url: "https://travellife.zeabur.app/",
		detail: "/detail/tinklife",
		cover: ['travel/01.jpg','travel/02.jpg','travel/03.jpg','travel/04.jpg'],
		tags: ['WEB', 'MOBILE']
	},
];

