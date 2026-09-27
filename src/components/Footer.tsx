"use client";

import { useLanguage } from "@/hooks/useLanguage";
import { usePortfolioData } from "@/hooks/usePortfolioData";
import ScrollReveal from "./ui/ScrollReveal";
import styles from "./Footer.module.css";

export default function Footer() {
  const { t } = useLanguage();
  const { profile, socialLinks } = usePortfolioData();

  const navItems = [
    { id: "hero", labelKey: "nav.home" },
    { id: "hakkimda", labelKey: "nav.about" },
    { id: "deneyim", labelKey: "nav.experience" },
    { id: "projeler", labelKey: "nav.projects" },
    { id: "sertifikalar", labelKey: "nav.certifications" },
    { id: "gonulluluk", labelKey: "nav.volunteering" },
    { id: "yetenekler", labelKey: "nav.skills" },
    { id: "iletisim", labelKey: "nav.contact" },
  ];

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Big typographic name */}
        <ScrollReveal>
          <div className={styles.bigName}>
            <span className={styles.bigNameText}>
              {profile.firstName} {profile.lastName}
            </span>
          </div>
        </ScrollReveal>

        <div className={styles.grid}>
          {/* Info */}
          <ScrollReveal delay={0.1}>
            <div className={styles.col}>
              <span className={styles.colTitle}>{t("footer.about")}</span>
              <p className={styles.colText}>
                {profile.title} · {profile.location}
              </p>
              <a
                href={`mailto:${profile.email}`}
                className={styles.colLink}
              >
                {profile.email}
              </a>
            </div>
          </ScrollReveal>

          {/* Navigation */}
          <ScrollReveal delay={0.2}>
            <div className={styles.col}>
              <span className={styles.colTitle}>{t("footer.navigation")}</span>
              <nav className={styles.navList}>
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    className={styles.navLink}
                    onClick={() => scrollTo(item.id)}
                  >
                    {t(item.labelKey)}
                  </button>
                ))}
              </nav>
            </div>
          </ScrollReveal>

          {/* Social */}
          <ScrollReveal delay={0.3}>
            <div className={styles.col}>
              <span className={styles.colTitle}>{t("footer.links")}</span>
              <div className={styles.socialList}>
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.socialLink}
                  >
                    {link.name}
                    <svg
                      width="10"
                      height="10"
                      viewBox="0 0 12 12"
                      fill="none"
                    >
                      <path
                        d="M2 10L10 2M10 2H4M10 2v6"
                        stroke="currentColor"
                        strokeWidth="1.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </a>
                ))}
                <a
                  href={profile.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialLink}
                >
                  CV
                  <svg
                    width="10"
                    height="10"
                    viewBox="0 0 12 12"
                    fill="none"
                  >
                    <path
                      d="M2 10L10 2M10 2H4M10 2v6"
                      stroke="currentColor"
                      strokeWidth="1.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Bottom bar */}
        <div className={styles.bottom}>
          <span className={styles.copyright}>
            © {year} {profile.firstName} {profile.lastName}. {t("footer.copyright")}
          </span>
          <span className={styles.tagline}>
            {t("footer.tagline")}
          </span>
        </div>
      </div>
    </footer>
  );
}
