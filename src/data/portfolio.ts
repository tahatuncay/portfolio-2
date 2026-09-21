// ═══════════════════════════════════════════════════════════════
// Merkezi İçerik Dosyası — Tüm portfolyo verileri burada
// Kişisel bilgilerinizi güncellemek için sadece bu dosyayı düzenleyin.
// ═══════════════════════════════════════════════════════════════

export interface Profile {
  firstName: string;
  lastName: string;
  title: string;
  location: string;
  email: string;
  bio: string;
  shortBio: string;
  statement: string;
  avatar: string;
  resumeUrl: string;
  availability: string;
  specialization: string;
}

export interface Experience {
  id: string;
  company: string;
  position: string;
  startDate: string;
  endDate: string | null; // null = Devam ediyor
  type?: string; // Tam zamanlı, Yarı zamanlı, Staj, vb.
  description: string;
  responsibilities: string[];
  technologies: string[];
}

export interface Project {
  id: string;
  slug: string;
  number: string;
  name: string;
  description: string;
  role: string;
  year: string;
  technologies: string[];
  status: string;
  image?: string;
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
}

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  date: string;
  category: string;
  credentialId?: string;
  verifyUrl?: string;
  image?: string;
}

export interface Volunteering {
  id: string;
  organization: string;
  position: string;
  startDate: string;
  endDate: string | null;
  description: string;
  contributions: string[];
  url?: string;
  url2?: string;
  urlLabel?: string;
  url2Label?: string;
}

export interface SkillGroup {
  category: string;
  skills: string[];
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  field: string;
  startDate: string;
  endDate: string | null;
  description?: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface MusicTrack {
  title: string;
  artist?: string;
  src: string;
}

// ═══════════════════════════════════════════════════════════════
// VERİLER
// ═══════════════════════════════════════════════════════════════

export const profile: Profile = {
  firstName: "Taha",
  lastName: "Tuncay",
  title: "İş Analisti",
  location: "İstanbul, Türkiye",
  email: "taha.tuncay@icloud.com",
  bio: "İş Analisti olarak, kurumların ihtiyaçlarını analiz ederek sorunlara çözüm stratejileri geliştiriyor, paydaşlar arasında bir köprü kurarak iş süreçlerini iyileştiriyor ve verimliliği artırıyorum. Boş zamanlarımda kişisel çalışmalarımla kullanıcılara yönelik yeni projeler geliştiriyorum. Sürekli öğrenmeye açık, problem çözme odaklı ve takım çalışmasına yatkın biriyim.",
  shortBio: "Dijital ürünler, teknoloji ve yaratıcı çözümler üzerine çalışıyorum.",
  statement: "",
  avatar: "/avatar/profile.jpg",
  resumeUrl: "/resume/cv.pdf",
  availability: "Yeni fırsatlara açık",
  specialization: "İş Analizi ve Yapay Zeka",
};

export const experience: Experience[] = [
  {
    id: "exp-1",
    company: "Steel Sigorta ve Reasürans Brokerliği A.Ş.",
    position: "İş Analisti",
    startDate: "08.2024",
    endDate: null,
    type: "Tam Zamanlı",
    description:
      "Sigorta ve reasürans sektöründe dijital dönüşüm süreçlerinde aktif rol alıyorum. ",
    responsibilities: [
      "Kullanılan sigorta hızlı teklif al programının geliştirilmesi ve son kullanıcı desteği verilmesi",
      "Tüm şirket raporlamalarının yapılması ve sunumu",
      "tebom.net web sitesinin güncel tutulması ve geliştirilmesi",
      "Şirket içindeki teknoloji ve süreç analizleri",
    ],
    technologies: ["Microsoft Office", "Google Workspace", "Claude Code", "Web Servisleri", "API", ""],
  },
  {
    id: "exp-2",
    company: "Ankara Yıldırım Beyazıt Üniversitesi",
    position: "Dış İlişkiler Koordinatörlüğü Ofis Asistanı",
    startDate: "10.2023",
    endDate: "06.2024",
    type: "Yarı Zamanlı",
    description:
      "Yurt dışından gelen heyetlerle iletişimin koordinasyonu ve üniversitenin uluslararası ilişkilerinin yürütülmesi.",
    responsibilities: [
      "Yurt dışından gelen Erasmus öğrencileriyle iletişimin koordinasyonu",
      "Erasmus+ programı kapsamında yürütülen faaliyetlerin desteklenmesi",
      "Üniversite personeli ve öğrencileri için abroad-related konularda destek sağlama",
      "Uluslararası projelerin yürütülmesi ve desteklenmesi"
    ],
    technologies: ["İletişim", "Koordinasyon", "Erasmus+", "Uluslararası Projeler"],
  },
  {
    id: "exp-3",
    company: "Fiyat Performans Bilişim A.Ş.",
    position: "Frontend Geliştirici Stajyeri",
    startDate: "06.2023",
    endDate: "07.2023",
    type: "Staj",
    description:
      "Profesyonel yazılım geliştirme süreçlerini öğrenerek, ekip çalışması ve frontend konusunda deneyim kazandım.",
    responsibilities: [
      "Mevcut sistemlerin bakım ve iyileştirmesi",
      "Test süreçlerine katkı sağlama",
      "Teknik dokümantasyon yazımı",
    ],
    technologies: ["JavaScript", "React", "Git", "HTML", "CSS"],
  },
];

export const projects: Project[] = [
  {
    id: "proj-1",
    slug: "proje-bir",
    number: "01",
    name: "Akıllı Özgeçmiş",
    description:
      "Sıfırdan özgeçmiş oluşturma ve cv'sini iyileştirme programı. Ek olarak iş ilanına göre cv'yi düzenleme özelliği.",
    role: "Full Stack Geliştirici",
    year: "2026",
    technologies: ["Next.js", "TypeScript", "Claude Code", "HTML", "CSS", "JAVASCRIPT"],
    status: "Tamamlandı",
    image: "/projects/akilli-ozgecmis-logo.png",
    githubUrl: "https://github.com/tahatuncay/akilli-ozgecmis",
    liveUrl: "https://akilliozgecmis.com",
    featured: true,
  },
  {
    id: "proj-2",
    slug: "proje-iki",
    number: "02",
    name: "Dijital Radar",
    description:
      "Yapay zeka gelişmelerini takip eden ve video görsel olarak sunan sosyal medya platformu.",
    role: "Full Stack Geliştirici",
    year: "2025",
    technologies: ["n8n", " Claude Code", "ElevenLabs"],
    status: "Tamamlandı",
    image: "/projects/dijital-radar.png",
    githubUrl: "#",
    featured: true,
  },
  {
    id: "proj-3",
    slug: "proje-uc",
    number: "03",
    name: "Flavourlab",
    description:
      "Kişilerin seçtikleri malzemelere göre yemek öneren bir sipraiş verme uygulaması.",
    role: "Ortak Geliştirici",
    year: "2024",
    technologies: ["Wordpress", "WooCommerce", "AI"],
    status: "Tamamlandı",
    githubUrl: "#",
    liveUrl: "https://flavourlab.com.tr",
    featured: true,
  },
  {
    id: "proj-4",
    slug: "proje-dort",
    number: "04",
    name: "[Proje Adı]",
    description:
      "E-ticaret altyapısı için özel olarak tasarlanmış, yüksek performanslı mikro servis mimarisi.",
    role: "Yazılım Mühendisi",
    year: "2023",
    technologies: ["Go", "gRPC", "Redis", "Kubernetes"],
    status: "Tamamlandı",
    featured: false,
  },
];

export const certifications: Certification[] = [
  {
    id: "cert-1",
    name: "İlkyardım",
    issuer: "T.C. Sağlık Bakanlığı",
    date: "10.2025",
    category: "Sağlık",
    credentialId: "",
    verifyUrl: "",
  },

  {
    id: "cert-2",
    name: "Analysis for Business Systems",
    issuer: "University of Minnesota",
    date: "02.2024",
    category: "İş Analizi",
    credentialId: "2W6B7YE3NGAC",
    verifyUrl: "https://www.coursera.org/account/accomplishments/verify/2W6B7YE3NGAC",
  },
  {
    id: "cert-3",
    name: "Leadership Development Experience",
    issuer: "AIESEC",
    date: "09.2023",
    category: "Gelişim",
    credentialId: "6473509",
    verifyUrl: "",
  },
  {
    id: "cert-4",
    name: "İleri Seviye Java",
    issuer: "BTK Akademi",
    date: "09.2022",
    category: "Kodlama",
    verifyUrl: "https://www.btkakademi.gov.tr/portal/certificate/validate?certificateId=pKmhKPdDn7",
  },
  {
    id: "cert-5",
    name: "Uygulamalarla SQL",
    issuer: "BTK Akademi",
    date: "08.2022",
    category: "Veri",
    verifyUrl: "https://www.btkakademi.gov.tr/portal/certificate/validate?certificateId=NowfrYNoPB",
  },
  {
    id: "cert-6",
    name: "Java ile Programlamaya Giriş",
    issuer: "BTK Akademi",
    date: "07.2022",
    category: "Kodlama",
    verifyUrl: "https://www.btkakademi.gov.tr/portal/certificate/validate?certificateId=7rptZm7GmA",
  },
];

export const volunteering: Volunteering[] = [
  {
    id: "vol-1",
    organization: "Erasmus Student Network",
    position: "Şube Başkanı",
    startDate: "2022",
    endDate: "2024",
    description:
      "Avrupanın en büyük öğrenci topluluğu olan Erasmus Student Network'ün üniversitemiz şubesinde başkanlık görevinde bulundum. Bir ekip yönetmenin yanısıra diğer ulusal ve uluslararası ESN şubeleriye yakın temasta bulunarak kendi şubemizin görünürlüğüne katkı sağladım. Ek olarak aybu.esnturkey.org adresinin kullanıcı dostu ve güncel tutulmasından sorumlu olarak görev yaptım.",
    contributions: [
      "Yabancı öğrencilere yönelik kültürel etkinliklerin planlanması ve yürütülmesi",
      "Yerel öğrencilere yönelik Erasmus+ tanıtım faaliyetleri düzenlenmesi",
      "Ulusal ve Uluslararası diğer şubelerle iletişimin ve iş birliklerinin geliştirilmesi",
    ],
    url: "https://aybu.esnturkey.org/",
    url2: "https://esn.org/",
  },
  {
    id: "vol-2",
    organization: "AIESEC",
    position: "Eğitmen",
    startDate: "08.2023",
    endDate: "09.2023",
    description:
      "Dünyanın en büyük öğrenci topluluğu olan AIESEC aracılığıyla Hindistan'ın Mumbai şehrinde 2023 Ağustos ve Eylül aylarında 6 hafta boyunca gönüllü olarak çalıştım. Benim gibi farklı ülkelerden diğer gönüllülerle birlikte, Hintli çocuklara temel İngilizce eğitiminin yanı sıra Coğrafya ve Matematik gibi dersler de verdik. Bu gönüllülük projesine katılmak, kişiliğimin gelişiminde ve farklı bir kültüre uyum sağlama yeteneğimde büyük rol oynadı. Ayrıca farklı ülkelerden birçok bağlantı edindim.",
    contributions: [
      "Okul sonrası eğitim programlarının planlanması ve yürütülmesi.",
      "Kültürel etkinlikler düzenleyerek yerel halk ile kaynaşma.",
      "Uluslararası bir ortamda farklı kültürleri deneyimleme ve yerel kültürleri öğrenme.",
    ],
    url: "https://aiesec.org/"
  },
];

export const skills: SkillGroup[] = [
  {
    category: "Frontend",
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "HTML/CSS",
    ],
  },
  {
    category: "Veritabanı",
    skills: ["SQL", "Firebase", "Supabase"],
  },
  {
    category: "DevOps & Bulut",
    skills: ["Docker", "Vercel", "GitHub Actions"],
  },
  {
    category: "Yapay Zeka",
    skills: ["Claude Code", "Vercel", "OpenAI API"],
  },
  {
    category: "Tasarım & Araçlar",
    skills: ["Figma", "Git", "VS Code", "Postman"],
  },
];

export const education: Education[] = [
  {
    id: "edu-1",
    institution: "Ankara Yıldırım Beyazıt Üniversitesi",
    degree: "Lisans",
    field: "Yönetim Bilişim Sistemleri",
    startDate: "2019",
    endDate: "2024",
    description: "Yönetim Bilişim Sistemleri alanında akademik çalışmalar ve projeler.",
  },
];

export const socialLinks: SocialLink[] = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/tahatuncay/",
    icon: "linkedin",
  },
  {
    name: "GitHub",
    url: "https://github.com/tahatuncay",
    icon: "github",
  },
  {
    name: "E-posta",
    url: "mailto:taha.tuncay@icloud.com",
    icon: "mail",
  },
];

export const musicTrack: MusicTrack = {
  title: "Ceza — Türk Marşı",
  artist: "Ceza",
  src: "/audio/ceza-turk-march.mp3",
};
