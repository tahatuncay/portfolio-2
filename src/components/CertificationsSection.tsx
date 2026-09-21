"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { certifications } from "@/data/portfolio";
import ScrollReveal from "./ui/ScrollReveal";
import styles from "./CertificationsSection.module.css";

export default function CertificationsSection() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const categories = Array.from(
    new Set(certifications.map((c) => c.category))
  );

  const filtered = activeCategory
    ? certifications.filter((c) => c.category === activeCategory)
    : certifications;

  return (
    <section id="sertifikalar" className={styles.section}>
      <div className={styles.container}>
        <ScrollReveal>
          <span className={styles.eyebrow}>Profesyonel Gelişim</span>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <h2 className={styles.heading}>Sertifikalarım</h2>
        </ScrollReveal>

        {/* Filter */}
        <ScrollReveal delay={0.2}>
          <div className={styles.filters}>
            <button
              className={`${styles.filterBtn} ${
                !activeCategory ? styles.active : ""
              }`}
              onClick={() => setActiveCategory(null)}
            >
              Tümü
            </button>
            {categories.map((cat) => (
              <button
                key={cat}
                className={`${styles.filterBtn} ${
                  activeCategory === cat ? styles.active : ""
                }`}
                onClick={() =>
                  setActiveCategory(activeCategory === cat ? null : cat)
                }
              >
                {cat}
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* Grid */}
        <div className={styles.grid}>
          <AnimatePresence mode="popLayout">
            {filtered.map((cert, index) => (
              <motion.div
                key={cert.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.05,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                <article className={styles.card}>
                  <div className={styles.cardTop}>
                    <span className={styles.category}>{cert.category}</span>
                    <span className={styles.date}>{cert.date}</span>
                  </div>

                  <h3 className={styles.certName}>{cert.name}</h3>
                  <span className={styles.issuer}>{cert.issuer}</span>

                  <div className={styles.cardBottom}>
                    {cert.credentialId && (
                      <span className={styles.credId}>
                        ID: {cert.credentialId}
                      </span>
                    )}
                    {cert.verifyUrl && (
                      <a
                        href={cert.verifyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.verifyLink}
                      >
                        Doğrula
                        <svg
                          width="12"
                          height="12"
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
                    )}
                  </div>
                </article>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
