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
		title: "Aset Ikon 3D - Valentine",
		title_en: "Valentine's Day 3D Assets",
		date: "2023-10-15",
		detail: "/detail/free-3d-valentines-assets/",
		url: "https://web.606design.art/landings/004-free-3d-valentines-assets/",
		cover: ['free-3d-valentines-assets/01.jpg','free-3d-valentines-assets/02.jpg','free-3d-valentines-assets/03.jpg','free-3d-valentines-assets/04.jpg',],
		tags: ['3D', 'WEB', 'ICON']
	},
	{
		title: "Aplikasi Web Todo List",
		title_en: "Online Todo List",
		date: "2023-10-15",
		detail: "/detail/todo",
		url: "https://www.ricocc.com/todo/",
		cover: ['cover/cover-todo.jpg'],
		tags: ['WEB', 'UI', 'TODO']
	},
	{
		title: "Jurnal Perjalanan Tink",
		title_en: "Travel Diary Landing Page",
		date: "2023-10-15",
		url: "https://travellife.zeabur.app/",
		detail: "/detail/tinklife",
		cover: ['travel/01.jpg','travel/02.jpg','travel/03.jpg','travel/04.jpg'],
		tags: ['WEB', 'MOBILE']
	},
];

