"use client";

import { useEffect, useState, useCallback, createContext, useContext } from "react";

export type Language = "tr" | "en";

interface LanguageContextValue {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextValue>({
  language: "tr",
  toggleLanguage: () => {},
  t: (key: string) => key,
});

const STORAGE_KEY = "portfolio-language";

function getInitialLanguage(): Language {
  if (typeof window === "undefined") return "tr";
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored === "tr" || stored === "en") return stored;
  return "tr";
}

// ═══════════════════════════════════════════════════════════════
// Çeviri Sözlüğü — UI etiketleri ve statik metinler
// ═══════════════════════════════════════════════════════════════
const translations: Record<Language, Record<string, string>> = {
  tr: {
    // Navbar
    "nav.home": "Ana Sayfa",
    "nav.about": "Hakkımda",
    "nav.experience": "Deneyim",
    "nav.projects": "Projeler",
    "nav.certifications": "Sertifikalar",
    "nav.volunteering": "Gönüllülük",
    "nav.skills": "Yetenekler",
    "nav.contact": "İletişim",
    "nav.openMenu": "Menüyü aç",
    "nav.closeMenu": "Menüyü kapat",

    // Hero
    "hero.viewProjects": "Projelerimi İncele",
    "hero.viewCV": "CV'mi Görüntüle",
    "hero.location": "Konum",
    "hero.specialization": "Uzmanlık",
    "hero.status": "Durum",

    // About
    "about.eyebrow": "Hakkımda",
    "about.education": "Eğitim",
    "about.location": "Konum",
    "about.specialization": "Uzmanlık",
    "about.interests": "İlgi Alanları",
    "about.interestsValue": "Yapay Zeka · Açık Kaynak · Web Servisleri · API",

    // Experience
    "exp.verticalLabel": "İş Deneyimlerim",
    "exp.eyebrow": "Profesyonel Deneyim",
    "exp.present": "Günümüz",
    "exp.responsibilities": "Öne Çıkan Sorumluluklar",

    // Projects
    "proj.eyebrow": "Seçili Çalışmalar",
    "proj.heading": "Projelerim",
    "proj.livesite": "Canlı Site",
    "proj.developing": "Geliştiriliyor",

    // Certifications
    "cert.eyebrow": "Profesyonel Gelişim",
    "cert.heading": "Sertifikalarım",
    "cert.all": "Tümü",
    "cert.verify": "Doğrula",

    // Volunteering
    "vol.eyebrow": "Topluma Katkı",
    "vol.heading": "Gönüllülük Deneyimlerim",
    "vol.present": "Günümüz",
    "vol.contributions": "Katkılarım",
    "vol.website": "Web Sitesi",

    // Skills
    "skills.eyebrow": "Teknik Yetkinlikler",
    "skills.heading": "Yeteneklerim",

    // Contact
    "contact.eyebrow": "İletişim",
    "contact.heading1": "Bir Fikrin mi Var?",
    "contact.heading2": "Konuşalım.",
    "contact.description": "Yeni projeler, iş birliği fırsatları veya sadece merhaba demek için bana ulaşabilirsin.",
    "contact.downloadCV": "CV'yi İndir",
    "contact.nameLabel": "Ad Soyad",
    "contact.namePlaceholder": "Adınız ve soyadınız",
    "contact.emailLabel": "E-posta",
    "contact.emailPlaceholder": "E-posta adresiniz",
    "contact.messageLabel": "Mesaj",
    "contact.messagePlaceholder": "Mesajınızı yazın...",
    "contact.submit": "Gönder",
    "contact.submitting": "Gönderiliyor...",
    "contact.submitted": "Gönderildi ✓",
    "contact.successMessage": "Mesajınız başarıyla iletildi! En kısa sürede dönüş yapacağım.",
    "contact.errorMessage": "Bağlantı hatası oluştu. Lütfen doğrudan e-posta ile iletişime geçiniz.",
    "contact.failMessage": "Mesaj gönderilemedi. Lütfen tekrar deneyiniz.",
    "contact.directMail": "Doğrudan mail göndermek için tıklayın.",
    "contact.missingKey": "E-posta servisi henüz aktif edilmedi.",
    "contact.missingKeyDirect": "Veya şimdi doğrudan mail uygulamasıyla gönderin.",
    "contact.subject": "Portfolyo İletişim",

    // Footer
    "footer.about": "Hakkında",
    "footer.navigation": "Navigasyon",
    "footer.links": "Bağlantılar",
    "footer.copyright": "Tüm hakları saklıdır.",
    "footer.tagline": "Dijital dünyada üretmeye devam ediyor.",

    // Theme toggle
    "theme.day": "Gündüz",
    "theme.night": "Gece",
    "theme.switchDay": "Gündüz temasına geç",
    "theme.switchNight": "Gece temasına geç",

    // Language toggle
    "lang.switch": "Switch to English",
  },
  en: {
    // Navbar
    "nav.home": "Home",
    "nav.about": "About",
    "nav.experience": "Experience",
    "nav.projects": "Projects",
    "nav.certifications": "Certifications",
    "nav.volunteering": "Volunteering",
    "nav.skills": "Skills",
    "nav.contact": "Contact",
    "nav.openMenu": "Open menu",
    "nav.closeMenu": "Close menu",

    // Hero
    "hero.viewProjects": "View My Projects",
    "hero.viewCV": "View My CV",
    "hero.location": "Location",
    "hero.specialization": "Specialization",
    "hero.status": "Status",

    // About
    "about.eyebrow": "About Me",
    "about.education": "Education",
    "about.location": "Location",
    "about.specialization": "Specialization",
    "about.interests": "Interests",
    "about.interestsValue": "Artificial Intelligence · Open Source · Web Services · API",

    // Experience
    "exp.verticalLabel": "Work Experience",
    "exp.eyebrow": "Professional Experience",
    "exp.present": "Present",
    "exp.responsibilities": "Key Responsibilities",

    // Projects
    "proj.eyebrow": "Selected Works",
    "proj.heading": "My Projects",
    "proj.livesite": "Live Site",
    "proj.developing": "In Development",

    // Certifications
    "cert.eyebrow": "Professional Development",
    "cert.heading": "My Certifications",
    "cert.all": "All",
    "cert.verify": "Verify",

    // Volunteering
    "vol.eyebrow": "Community Impact",
    "vol.heading": "Volunteering Experience",
    "vol.present": "Present",
    "vol.contributions": "Contributions",
    "vol.website": "Website",

    // Skills
    "skills.eyebrow": "Technical Skills",
    "skills.heading": "My Skills",

    // Contact
    "contact.eyebrow": "Contact",
    "contact.heading1": "Have an Idea?",
    "contact.heading2": "Let's Talk.",
    "contact.description": "Feel free to reach out for new projects, collaboration opportunities, or just to say hello.",
    "contact.downloadCV": "Download CV",
    "contact.nameLabel": "Full Name",
    "contact.namePlaceholder": "Your full name",
    "contact.emailLabel": "Email",
    "contact.emailPlaceholder": "Your email address",
    "contact.messageLabel": "Message",
    "contact.messagePlaceholder": "Write your message...",
    "contact.submit": "Send",
    "contact.submitting": "Sending...",
    "contact.submitted": "Sent ✓",
    "contact.successMessage": "Your message has been sent successfully! I'll get back to you soon.",
    "contact.errorMessage": "A connection error occurred. Please contact me directly via email.",
    "contact.failMessage": "Message could not be sent. Please try again.",
    "contact.directMail": "Click here to send a direct email.",
    "contact.missingKey": "Email service has not been activated yet.",
    "contact.missingKeyDirect": "Or send directly via your mail app now.",
    "contact.subject": "Portfolio Contact",

    // Footer
    "footer.about": "About",
    "footer.navigation": "Navigation",
    "footer.links": "Links",
    "footer.copyright": "All rights reserved.",
    "footer.tagline": "Continuing to create in the digital world.",

    // Theme toggle
    "theme.day": "Day",
    "theme.night": "Night",
    "theme.switchDay": "Switch to day mode",
    "theme.switchNight": "Switch to night mode",

    // Language toggle
    "lang.switch": "Türkçe'ye geç",
  },
};

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("tr");
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    const initial = getInitialLanguage();
    setLanguage(initial);
    document.documentElement.setAttribute("lang", initial);
    setIsHydrated(true);
  }, []);

  useEffect(() => {
    if (!isHydrated) return;
    document.documentElement.setAttribute("lang", language);
    localStorage.setItem(STORAGE_KEY, language);
  }, [language, isHydrated]);

  const toggleLanguage = useCallback(() => {
    setLanguage((prev) => (prev === "tr" ? "en" : "tr"));
  }, []);

  const t = useCallback(
    (key: string): string => {
      return translations[language][key] || key;
    },
    [language]
  );

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
