export type SakiGraphicMood =
  | 'hero'
  | 'idle'
  | 'working'
  | 'excited'
  | 'curious'
  | 'searching'
  | 'reading'
  | 'music'
  | 'presenting'
  | 'books'
  | 'idea'
  | 'coffee'
  | 'sleeping'
  | 'laughing'
  | 'wink'
  | 'surprised'
  | 'password'
  | 'peek'
  | 'loading'
  | 'error'
  | 'success'
  | 'turn-quarter'
  | 'turn-side'
  | 'turn-back'
  | 'turn-back-side'
  | 'gardening'
  | 'champion'
  | 'database'
  | 'ai-agent'
  | 'deploy'
  | 'security'
  | 'exploring';

export type FaceMood =
  | 'idle'
  | 'email'
  | 'password'
  | 'peek'
  | 'error'
  | 'success'
  | 'loading';

export type SakiMood = 'senang' | 'khawatir';

export type SakiPropName =
  | 'goggles'
  | 'bandana'
  | 'backpack'
  | 'laptop'
  | 'books'
  | 'coffee'
  | 'plant'
  | 'chart'
  | 'lightbulb'
  | 'magnifier'
  | 'headphones'
  | 'open-book'
  | 'database'
  | 'code-terminal'
  | 'ai-spark'
  | 'trophy'
  | 'compass'
  | 'rocket'
  | 'puzzle'
  | 'shield';

export interface SakiMoodInfo {
  title: string;
  subtitle: string;
  say: string;
  category: 'Ekspresi & Pose' | 'Aktivitas & Props' | 'Reaksi & Interaksi';
  badgeText?: string;
  badgeColor?: string;
  bgPreview: string;
}

export const SAKI_MOOD_CONFIG: Record<SakiGraphicMood, SakiMoodInfo> = {
  hero: {
    title: 'Sapaan Ceria (Main Mascot)',
    subtitle: 'Pose utama Saki melambai ceria dengan goggle, syal kuning, dan ransel hijau',
    say: 'Halo! Aku Saki, siap menemani eksplorasi karyamu!',
    category: 'Ekspresi & Pose',
    badgeText: 'Main Hero',
    badgeColor: 'bg-amber-50 text-amber-800 border-amber-200',
    bgPreview: 'bg-white',
  },
  idle: {
    title: 'Senang Standar (Front Basic)',
    subtitle: 'Pose menghadap depan dengan senyum kucing :3 dan kedipan ramah',
    say: 'Siap memulai eksplorasi baru hari ini!',
    category: 'Ekspresi & Pose',
    badgeText: 'Turnaround',
    badgeColor: 'bg-sky-50 text-sky-800 border-sky-200',
    bgPreview: 'bg-white',
  },
  excited: {
    title: 'Lompat Gembira (Excited > <)',
    subtitle: 'Mata > < penuh antusiasme dengan kedua tangan terangkat ceria',
    say: 'Yeay! Ayo diskusi & bangun solusi bareng!',
    category: 'Ekspresi & Pose',
    badgeText: 'Excited',
    badgeColor: 'bg-amber-50 text-amber-800 border-amber-200',
    bgPreview: 'bg-white',
  },
  curious: {
    title: 'Penasaran (Curious ?)',
    subtitle: 'Tangan di dagu merenung dengan tanda tanya di atas kepala',
    say: 'Hmm... bagaimana arsitektur di balik sistem ini ya?',
    category: 'Ekspresi & Pose',
    badgeText: 'Curious',
    badgeColor: 'bg-slate-100 text-slate-700 border-slate-300',
    bgPreview: 'bg-white',
  },
  laughing: {
    title: 'Tertawa Lepas (Laughing)',
    subtitle: 'Mata melengkung bahagia dengan tawa lebar penuh semangat',
    say: 'Hahaha, senang bisa berbagi karya di sini!',
    category: 'Ekspresi & Pose',
    badgeText: 'Joy',
    badgeColor: 'bg-emerald-50 text-emerald-700 border-emerald-200',
    bgPreview: 'bg-white',
  },
  wink: {
    title: 'Kedip Percaya Diri (Wink)',
    subtitle: 'Satu mata berkedip tajam (<) penuh percaya diri',
    say: 'Mari terhubung di jejaring sosialku ;)',
    category: 'Ekspresi & Pose',
    badgeText: 'Playful',
    badgeColor: 'bg-amber-50 text-amber-800 border-amber-200',
    bgPreview: 'bg-white',
  },
  surprised: {
    title: 'Terkejut (Surprised)',
    subtitle: 'Mata bulat berbinar dan mulut terkesiap melihat hal baru',
    say: 'Wah! Temuan arsitektur yang menarik!',
    category: 'Ekspresi & Pose',
    badgeText: 'Alert',
    badgeColor: 'bg-yellow-50 text-yellow-800 border-yellow-200',
    bgPreview: 'bg-white',
  },
  working: {
    title: 'Fokus Laptop (Coding)',
    subtitle: 'Duduk tekun di depan laptop menyelesaikan arsitektur sistem',
    say: 'Merancang kode & skema database yang skalabel...',
    category: 'Aktivitas & Props',
    badgeText: 'Engineering',
    badgeColor: 'bg-slate-100 text-slate-700 border-slate-300',
    bgPreview: 'bg-white',
  },
  searching: {
    title: 'Meneliti (Magnifying Glass)',
    subtitle: 'Memegang kaca pembesar berlensa biru untuk mengamati data',
    say: 'Mengamati pola data & metrik secara presisi!',
    category: 'Aktivitas & Props',
    badgeText: 'Research',
    badgeColor: 'bg-sky-50 text-sky-800 border-sky-200',
    bgPreview: 'bg-white',
  },
  reading: {
    title: 'Membaca Buku (Reading)',
    subtitle: 'Membaca dokumentasi bersampul hijau sage dengan penuh sukacita',
    say: 'Mempelajari riset akademik & kolaborasi industri!',
    category: 'Aktivitas & Props',
    badgeText: 'Study',
    badgeColor: 'bg-emerald-50 text-emerald-700 border-emerald-200',
    bgPreview: 'bg-white',
  },
  music: {
    title: 'Mendengarkan Musik (Headphone)',
    subtitle: 'Memakai headphone hijau menikmati alunan musik santai ♫',
    say: 'Ngoding santai ditemani musik favorit ♫',
    category: 'Aktivitas & Props',
    badgeText: 'Vibes',
    badgeColor: 'bg-emerald-50 text-emerald-700 border-emerald-200',
    bgPreview: 'bg-white',
  },
  presenting: {
    title: 'Presentasi Grafik (Analytics)',
    subtitle: 'Menunjuk papan grafik batang kuning yang terus meningkat',
    say: 'Lihat pertumbuhan metrik & rekam jejak proyek ini!',
    category: 'Aktivitas & Props',
    badgeText: 'Analytics',
    badgeColor: 'bg-amber-50 text-amber-800 border-amber-200',
    bgPreview: 'bg-white',
  },
  books: {
    title: 'Membawa Tumpukan Buku (Books)',
    subtitle: 'Mendekap tiga tumpuk buku referensi tebal dengan antusias',
    say: 'Fondasi riset lapangan & dokumentasi lengkap!',
    category: 'Aktivitas & Props',
    badgeText: 'Foundation',
    badgeColor: 'bg-sky-50 text-sky-800 border-sky-200',
    bgPreview: 'bg-white',
  },
  idea: {
    title: 'Aha! Punya Ide (Lightbulb)',
    subtitle: 'Bohlam kuning menyala terang saat mengerjakan proyek di laptop',
    say: 'Aha! Otomasi & solusi cerdas untuk bisnis!',
    category: 'Aktivitas & Props',
    badgeText: 'Innovation',
    badgeColor: 'bg-yellow-50 text-yellow-800 border-yellow-200',
    bgPreview: 'bg-white',
  },
  coffee: {
    title: 'Rehat Minum Kopi (Coffee Break)',
    subtitle: 'Menyeruput secangkir minuman hangat berasap dengan mata terpejam',
    say: 'Operasional dapur & sistem berjalan mulus sambil ngopi!',
    category: 'Aktivitas & Props',
    badgeText: 'Operations',
    badgeColor: 'bg-amber-50 text-amber-800 border-amber-200',
    bgPreview: 'bg-white',
  },
  sleeping: {
    title: 'Tidur Pulas (Sleeping zZz)',
    subtitle: 'Rebahan nyaman memakai headphone setelah tuntas beraktivitas',
    say: 'Zzz... semua sistem berjalan otomatis dan aman.',
    category: 'Aktivitas & Props',
    badgeText: 'Rest',
    badgeColor: 'bg-slate-100 text-slate-700 border-slate-300',
    bgPreview: 'bg-white',
  },
  password: {
    title: 'Tutup Mata Privasi (Password)',
    subtitle: 'Kedua tangan bulat Saki menutup mata rapat menjaga rahasia',
    say: 'Aku tutup mata rapat, keamanan terjaga!',
    category: 'Reaksi & Interaksi',
    badgeText: 'Security',
    badgeColor: 'bg-slate-100 text-slate-700 border-slate-300',
    bgPreview: 'bg-white',
  },
  peek: {
    title: 'Mengintip Sedikit (Peek)',
    subtitle: 'Satu tangan menutup mata kiri, tangan kanan turun sedikit mengintip',
    say: 'Intip sedikit detail arsitekturnya yuk!',
    category: 'Reaksi & Interaksi',
    badgeText: 'Peek',
    badgeColor: 'bg-sky-50 text-sky-800 border-sky-200',
    bgPreview: 'bg-white',
  },
  loading: {
    title: 'Sedang Berpikir (Loading)',
    subtitle: 'Mata melirik ke atas sambil memproses informasi',
    say: 'Sebentar ya, sedang memuat data...',
    category: 'Reaksi & Interaksi',
    badgeText: 'Loading',
    badgeColor: 'bg-sky-50 text-sky-800 border-sky-200',
    bgPreview: 'bg-white',
  },
  error: {
    title: 'Murung / Bingung (Error)',
    subtitle: 'Alis menurun dengan raut wajah sedih saat terjadi kendala',
    say: 'Ups, ada kendala kecil, mari kita periksa!',
    category: 'Reaksi & Interaksi',
    badgeText: 'Error',
    badgeColor: 'bg-rose-50 text-rose-700 border-rose-200',
    bgPreview: 'bg-white',
  },
  success: {
    title: 'Puas & Berhasil (Success)',
    subtitle: 'Mata melengkung bahagia ^ ^ dengan kilau keberhasilan',
    say: 'Hore! Proyek berhasil di-deploy dengan sempurna!',
    category: 'Reaksi & Interaksi',
    badgeText: 'Success',
    badgeColor: 'bg-emerald-50 text-emerald-700 border-emerald-200',
    bgPreview: 'bg-white',
  },
  'turn-quarter': {
    title: 'Turnaround 3/4 Kiri (Quarter View)',
    subtitle: 'Pose turnaround menghadap 3/4 kiri memperlihatkan tali goggle dan tas ransel',
    say: 'Tampilan 3/4 samping kiri dengan ransel penjelajah!',
    category: 'Ekspresi & Pose',
    badgeText: 'Turnaround #2',
    badgeColor: 'bg-sky-50 text-sky-800 border-sky-200',
    bgPreview: 'bg-white',
  },
  'turn-side': {
    title: 'Turnaround Samping Kiri (Side Profile)',
    subtitle: 'Pose turnaround profil samping kiri utuh sesuai character sheet saki.png',
    say: 'Siap melangkah maju dari sisi samping!',
    category: 'Ekspresi & Pose',
    badgeText: 'Turnaround #3',
    badgeColor: 'bg-sky-50 text-sky-800 border-sky-200',
    bgPreview: 'bg-white',
  },
  'turn-back': {
    title: 'Turnaround Belakang (Back View)',
    subtitle: 'Pose menghadap belakang memperlihatkan detail tas ransel hijau sage & gesper kuning',
    say: 'Tas ransel hijau Saki selalu siap membawa perlengkapan!',
    category: 'Ekspresi & Pose',
    badgeText: 'Turnaround #4',
    badgeColor: 'bg-sky-50 text-sky-800 border-sky-200',
    bgPreview: 'bg-white',
  },
  'turn-back-side': {
    title: 'Turnaround Belakang 3/4 (Back Quarter)',
    subtitle: 'Pose belakang 3/4 memperlihatkan posisi tas ransel dari sudut miring',
    say: 'Detail punggung dan tas ransel dari sudut 3/4 belakang!',
    category: 'Ekspresi & Pose',
    badgeText: 'Turnaround #5',
    badgeColor: 'bg-sky-50 text-sky-800 border-sky-200',
    bgPreview: 'bg-white',
  },
  gardening: {
    title: 'Merawat Tunas Tanaman (Sprout Pot)',
    subtitle: 'Memegang pot tanaman tunas hijau dengan penuh kasih sayang (Props #7 saki.png)',
    say: 'Setiap proyek dan ilmu tumbuh bertahap seperti tunas ini 🌱',
    category: 'Aktivitas & Props',
    badgeText: 'Growth',
    badgeColor: 'bg-emerald-50 text-emerald-700 border-emerald-200',
    bgPreview: 'bg-white',
  },
  champion: {
    title: 'Memegang Piala Juara (Champion Trophy)',
    subtitle: 'Mengangkat piala emas berkilau merayakan pencapaian kompetisi',
    say: 'Yeay! Kerja keras kita membuahkan hasil juara 🏆',
    category: 'Aktivitas & Props',
    badgeText: 'Award',
    badgeColor: 'bg-amber-50 text-amber-800 border-amber-200',
    bgPreview: 'bg-white',
  },
  database: {
    title: 'Arsitek Database (Relational Data)',
    subtitle: 'Menunjuk struktur silinder database relasional berlapis yang stabil',
    say: 'Skema database dan transaksi data sudah terstruktur rapi!',
    category: 'Aktivitas & Props',
    badgeText: 'Data Arch',
    badgeColor: 'bg-sky-50 text-sky-800 border-sky-200',
    bgPreview: 'bg-white',
  },
  'ai-agent': {
    title: 'Orkestrasi AI Agent (Multi-Agent)',
    subtitle: 'Mengendalikan node workflow cerdas dan kilau bintang otomasi AI',
    say: 'Multi-agent AI siap mengotomasi alur kerja kompleks ✨',
    category: 'Aktivitas & Props',
    badgeText: 'AI Agent',
    badgeColor: 'bg-amber-50 text-amber-800 border-amber-200',
    bgPreview: 'bg-white',
  },
  deploy: {
    title: 'Peluncuran Roket (Rocket Launch)',
    subtitle: 'Bersorak gembira mengiringi roket peluncuran sistem ke produksi',
    say: '3, 2, 1... Sistem meluncur cepat ke production 🚀',
    category: 'Aktivitas & Props',
    badgeText: 'Deploy',
    badgeColor: 'bg-amber-50 text-amber-800 border-amber-200',
    bgPreview: 'bg-white',
  },
  security: {
    title: 'Perisai Reliabilitas (Fallback Shield)',
    subtitle: 'Memegang perisai keamanan hijau sage menjaga ketahanan sistem',
    say: 'Sistem aman terlindungi dengan strategi fallback berlapis 🛡️',
    category: 'Aktivitas & Props',
    badgeText: 'Security',
    badgeColor: 'bg-emerald-50 text-emerald-700 border-emerald-200',
    bgPreview: 'bg-white',
  },
  exploring: {
    title: 'Navigasi Kompas (Explorer Compass)',
    subtitle: 'Memegang kompas penjelajah sambil berkedip percaya diri menentukan arah',
    say: 'Mari kita petakan arah pengembangan selanjutnya 🧭',
    category: 'Aktivitas & Props',
    badgeText: 'Discovery',
    badgeColor: 'bg-sky-50 text-sky-800 border-sky-200',
    bgPreview: 'bg-white',
  },
};

export interface ProjectSakiMeta {
  mood: SakiGraphicMood;
  prop: SakiPropName;
  caption: string;
}

export const PROJECT_SAKI_MAP: Record<string, ProjectSakiMeta> = {
  bookkeeping: {
    mood: 'database',
    prop: 'database',
    caption: '4-Stage Financial & Data Architecture',
  },
  bridgeu: {
    mood: 'champion',
    prop: 'trophy',
    caption: 'Juara 2 UBM Inspire • Academic & Industry Matching',
  },
  dapurtwin: {
    mood: 'coffee',
    prop: 'coffee',
    caption: 'Smart Recipe BOM, POS & Real-Time KDS',
  },
  tukangin: {
    mood: 'exploring',
    prop: 'code-terminal',
    caption: 'Location & Time Recommendation Marketplace',
  },
  suparta: {
    mood: 'idea',
    prop: 'lightbulb',
    caption: 'Brand Building & Multi-Language Commerce',
  },
  studentsupport: {
    mood: 'gardening',
    prop: 'open-book',
    caption: 'First Database & User Research Foundation',
  },
  penerbangan: {
    mood: 'searching',
    prop: 'magnifier',
    caption: 'CRISP-DM & XGBoost Flight Delay Analytics',
  },
  isfest: {
    mood: 'security',
    prop: 'shield',
    caption: 'Failover Resilience & Backblaze B2 Storage',
  },
  'n8n-orchestra': {
    mood: 'ai-agent',
    prop: 'ai-spark',
    caption: 'Multi-Agent LangChain & n8n Orchestrator',
  },
};
