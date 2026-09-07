export const siteConfig = {
    siteName: import.meta.env.PUBLIC_SITE_NAME,
    siteUrl: import.meta.env.PUBLIC_SITE_URL,
}

interface NavItem {
    label: string;
    href: string;
    target?: string;
}

interface Nav {
    avatar?: string;
    items?: NavItem[];
}

// Navigasi Utama
export const nav: Nav = {
	avatar: '/assets/author.png',
    items: [
        { label: 'Beranda', href: '/', target: '_self' },
        { label: 'Proyek', href: '/project', target: '_self' },
        { label: 'Tentang', href: '/about', target: '_self' },
        { label: 'Blog', href: '/blog', target: '_self' },
    ],
};

// Footer
export const footerText = `© ${new Date().getFullYear()} Portfolio. All Rights Reserved.`

// SEO TDK
interface SeoTdk {
	title?: string
	description?: string
	keywords?: string
}

// SEO TDK Beranda
export const homeTdk: SeoTdk = {
	title: 'Portfolio Pribadi',
	description: 'Showcase proyek dan portofolio karya saya',
	keywords: 'portfolio, proyek, developer, desainer, blog'
}

// SEO TDK Blog
export const blogTdk: SeoTdk = {
	title: 'Blog & Catatan',
	description: 'Kumpulan artikel, catatan, dan pemikiran seputar teknologi dan desain',
	keywords: 'blog, catatan, artikel, developer'
}

// SEO TDK Tentang
export const aboutTdk: SeoTdk = {
	title: 'Tentang Saya',
	description: 'Profil dan pengenalan diri saya',
	keywords: 'tentang, profil, bio, portfolio'
}

// SEO TDK Proyek
export const projectTdk: SeoTdk = {
	title: 'Daftar Proyek',
	description: 'Showcase koleksi karya dan proyek pilihan',
	keywords: 'proyek, portfolio, karya, showcase'
}

// SEO TDK 404
export const notFoundTdk: SeoTdk = {
	title: '404 Tidak Ditemukan - Halaman Tidak Ada',
	description: '404 Tidak Ditemukan - Halaman yang Anda cari tidak ditemukan.',
	keywords: '404, tidak ditemukan'
}

// Tautan Sosial Media
export const socialLinks = [
	{
		name: 'Github',
		url: 'https://github.com/BakiTacos',
		icon: `<svg t="1730125604816" class="icon ic-github ic-social" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="12741" width="256" height="256"><path d="M511.957333 21.333333C241.024 21.333333 21.333333 240.981333 21.333333 512c0 216.832 140.544 400.725333 335.573334 465.664 24.490667 4.394667 32.256-10.069333 32.256-23.082667 0-11.690667 0.256-44.245333 0-85.205333-136.448 29.610667-164.736-64.64-164.736-64.64-22.314667-56.704-54.4-71.765333-54.4-71.765333-44.586667-30.464 3.285333-29.824 3.285333-29.824 49.194667 3.413333 75.178667 50.517333 75.178667 50.517333 43.776 75.008 114.816 53.333333 142.762666 40.789333 4.522667-31.658667 17.152-53.376 31.189334-65.536-108.970667-12.458667-223.488-54.485333-223.488-242.602666 0-53.546667 19.114667-97.322667 50.517333-131.669334-5.034667-12.330667-21.930667-62.293333 4.778667-129.834666 0 0 41.258667-13.184 134.912 50.346666a469.802667 469.802667 0 0 1 122.88-16.554666c41.642667 0.213333 83.626667 5.632 122.88 16.554666 93.653333-63.488 134.784-50.346667 134.784-50.346666 26.752 67.541333 9.898667 117.504 4.864 129.834666 31.402667 34.346667 50.474667 78.122667 50.474666 131.669334 0 188.586667-114.730667 230.016-224.042666 242.090666 17.578667 15.232 33.578667 44.672 33.578666 90.453334v135.850666c0 13.141333 7.936 27.605333 32.853334 22.869334C862.250667 912.597333 1002.666667 728.746667 1002.666667 512 1002.666667 240.981333 783.018667 21.333333 511.957333 21.333333z" p-id="12742"></path></svg>`
	},
	{
		name: 'LinkedIn',
		url: 'www.linkedin.com/in/kevin-sakia-putra-2661a42a7',
		icon: `<svg class="icon ic-linkedin ic-social" viewBox="0 0 24 24" width="256" height="256"><path fill="currentColor" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>`
	},
	{
		name: 'Instagram',
		url: 'https://www.instagram.com/kevin.sakia',
		icon: `<svg class="icon ic-instagram ic-social" viewBox="0 0 24 24" width="256" height="256"><path fill="currentColor" d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>`
	},
	{
		name: 'RSS',
		url: '/rss.xml',
		icon: `<svg t="1730123988138" class="icon ic-rss ic-social " viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="11766" width="256" height="256"><path d="M329.143 768q0 45.714-32 77.714t-77.714 32-77.715-32-32-77.714 32-77.714 77.715-32 77.714 32 32 77.714z m292.571 70.286q1.143 16-9.714 27.428-10.286 12-26.857 12H508q-14.286 0-24.571-9.428T472 844.57q-12.571-130.857-105.429-223.714T142.857 515.43q-14.286-1.143-23.714-11.429t-9.429-24.571v-77.143q0-16.572 12-26.857 9.715-9.715 24.572-9.715h2.857q91.428 7.429 174.857 46T472 515.43q65.143 64.571 103.714 148t46 174.857z m292.572 1.143q1.143 15.428-10.286 26.857-10.286 11.428-26.286 11.428H796q-14.857 0-25.429-10T759.43 843.43Q752.57 720.57 701.714 610T569.43 418t-192-132.286T144 227.43q-14.286-0.572-24.286-11.143t-10-24.857v-81.715q0-16 11.429-26.285 10.286-10.286 25.143-10.286H148q149.714 7.428 286.571 68.571t243.143 168q106.857 106.286 168 243.143t68.572 286.572z" p-id="11767"></path></svg>`
	}
];

// Tag Header Halaman
interface PageTag {
	index: string
	about: string
	blog: string
	project: string
}
export const pageTag: PageTag = {
	index: 'PORTFOLIO',
	about: 'TENTANG',
	blog: 'BLOG',
	project: 'PROYEK'
}

// Deskripsi Halaman
interface PageDescription {
	index?: string
	project?: string
	blog?: string
	about?: string
}
export const pageDescription: PageDescription = {
	index: 'Selamat datang di portfolio saya! Di sini Anda dapat menjelajahi koleksi karya, proyek, serta artikel dan catatan seputar desain dan teknologi.',
	project: "Berikut adalah daftar proyek dan karya pilihan yang telah saya kerjakan.",
	about: 'Fokus pada pengembangan produk digital, desain antarmuka, dan inovasi web modern.',
	blog: 'Kumpulan artikel, catatan teknis, dan ide seputar pengembangan. Semoga bermanfaat!',
}

// Item Filter Proyek Beranda
export interface FilterItem {
	content: string
	dataGroup: string
}
export const filterItems: FilterItem[] = [
	{ content: "💎 Rekomendasi", dataGroup: "recommend" },
	{ content: "Web", dataGroup: "web" },
	{ content: "UI", dataGroup: "ui" },
	{ content: "3D", dataGroup: "3d" },
	{ content: "Fotografi", dataGroup: "photography" },
	{ content: "Branding", dataGroup: "brand" },
];



