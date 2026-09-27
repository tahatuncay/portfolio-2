"use client";

import { useLanguage } from "@/hooks/useLanguage";
import { usePortfolioData } from "@/hooks/usePortfolioData";
import ScrollReveal from "./ui/ScrollReveal";
import styles from "./AboutSection.module.css";

export default function AboutSection() {
  const { t } = useLanguage();
  const { profile, education } = usePortfolioData();

  return (
    <section id="hakkimda" className={styles.section}>
      <div className={styles.container}>
        {/* Eyebrow */}
        <ScrollReveal>
          <span className={styles.eyebrow}>{t("about.eyebrow")}</span>
        </ScrollReveal>

        {/* Statement */}
        <ScrollReveal delay={0.1}>
          <h2 className={styles.statement}>{profile.statement}</h2>
        </ScrollReveal>

        {/* Body */}
        <ScrollReveal delay={0.2}>
          <div className={styles.body}>
            <p className={styles.bodyText}>{profile.bio}</p>
          </div>
        </ScrollReveal>

        {/* Metadata grid */}
        <div className={styles.metaGrid}>
          {education.length > 0 && (
            <ScrollReveal delay={0.3}>
              <div className={styles.metaCard}>
                <span className={styles.metaLabel}>{t("about.education")}</span>
                <span className={styles.metaValue}>
                  {education[0].institution}
                </span>
                <span className={styles.metaSub}>
                  {education[0].field} · {education[0].degree}
                </span>
              </div>
            </ScrollReveal>
          )}

          <ScrollReveal delay={0.4}>
            <div className={styles.metaCard}>
              <span className={styles.metaLabel}>{t("about.location")}</span>
              <span className={styles.metaValue}>{profile.location}</span>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.5}>
            <div className={styles.metaCard}>
              <span className={styles.metaLabel}>{t("about.specialization")}</span>
              <span className={styles.metaValue}>
                {profile.specialization}
              </span>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.6}>
            <div className={styles.metaCard}>
              <span className={styles.metaLabel}>{t("about.interests")}</span>
              <span className={styles.metaValue}>
                {t("about.interestsValue")}
              </span>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
