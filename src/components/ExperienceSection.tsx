"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { experience } from "@/data/portfolio";
import ScrollReveal from "./ui/ScrollReveal";
import styles from "./ExperienceSection.module.css";

export default function ExperienceSection() {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggle = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="deneyim" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.layout}>
          {/* Vertical label */}
          <ScrollReveal className={styles.verticalLabelWrap}>
            <span className={styles.verticalLabel}>İş Deneyimlerim</span>
          </ScrollReveal>

          {/* List */}
          <div className={styles.list}>
            <ScrollReveal>
              <span className={styles.eyebrow}>Profesyonel Deneyim</span>
            </ScrollReveal>

            {experience.map((exp, index) => (
              <ScrollReveal key={exp.id} delay={0.1 * index}>
                <div
                  className={`${styles.item} ${
                    openId === exp.id ? styles.open : ""
                  }`}
                >
                  <div className={styles.divider} />

                  <button
                    className={styles.head}
                    onClick={() => toggle(exp.id)}
                    aria-expanded={openId === exp.id}
                    aria-controls={`panel-${exp.id}`}
                  >
                    <div className={styles.company}>
                      <span className={styles.companyName}>{exp.company}</span>
                      <span className={styles.position}>{exp.position}</span>
                    </div>

                    <div className={styles.meta}>
                      {exp.type && (
                        <span className={styles.type}>{exp.type}</span>
                      )}
                      <span className={styles.date}>
                        {exp.startDate} — {exp.endDate || "Günümüz"}
                      </span>
                      <div className={styles.toggle}>
                        <span />
                        <span />
                      </div>
                    </div>
                  </button>

                  <AnimatePresence initial={false}>
                    {openId === exp.id && (
                      <motion.div
                        id={`panel-${exp.id}`}
                        className={styles.panel}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{
                          height: { duration: 0.4, ease: [0.16, 1, 0.3, 1] },
                          opacity: { duration: 0.3, delay: 0.1 },
                        }}
                      >
                        <div className={styles.panelInner}>
                          <p className={styles.description}>
                            {exp.description}
                          </p>

                          {exp.responsibilities.length > 0 && (
                            <div className={styles.responsibilities}>
                              <span className={styles.respLabel}>
                                Öne Çıkan Sorumluluklar
                              </span>
                              <ul className={styles.respList}>
                                {exp.responsibilities.map((resp, i) => (
                                  <li key={i}>{resp}</li>
                                ))}
                              </ul>
                            </div>
                          )}

                          {exp.technologies.length > 0 && (
                            <div className={styles.techRow}>
                              {exp.technologies.map((tech) => (
                                <span key={tech} className={styles.techTag}>
                                  {tech}
                                </span>
                              ))}
                            </div>
                          )}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </ScrollReveal>
            ))}

            <div className={styles.divider} />
          </div>
        </div>
      </div>
    </section>
  );
}
