"use client";

import { volunteering } from "@/data/portfolio";
import ScrollReveal from "./ui/ScrollReveal";
import styles from "./VolunteeringSection.module.css";

function formatUrlLabel(url: string) {
  try {
    const formatted = url.startsWith("http://") || url.startsWith("https://") ? url : `https://${url}`;
    const parsed = new URL(formatted);
    return parsed.hostname.replace(/^www\./, "");
  } catch {
    return "Web Sitesi";
  }
}

export default function VolunteeringSection() {
  return (
    <section id="gonulluluk" className={styles.section}>
      <div className={styles.container}>
        <ScrollReveal>
          <span className={styles.eyebrow}>Topluma Katkı</span>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <h2 className={styles.heading}>Gönüllülük Deneyimlerim</h2>
        </ScrollReveal>

        <div className={styles.list}>
          {volunteering.map((vol, index) => {
            const hasUrl1 = Boolean(vol.url && vol.url.trim());
            const hasUrl2 = Boolean(vol.url2 && vol.url2.trim());

            return (
              <ScrollReveal key={vol.id} delay={0.15 * index}>
                <article className={styles.card}>
                  <div className={styles.cardHeader}>
                    <div className={styles.orgInfo}>
                      <div className={styles.orgIcon}>
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                        >
                          <path
                            d="M10 2L13 8H7L10 2Z"
                            fill="currentColor"
                            opacity="0.3"
                          />
                          <circle
                            cx="10"
                            cy="13"
                            r="4"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            fill="none"
                          />
                        </svg>
                      </div>
                      <div>
                        <h3 className={styles.orgName}>{vol.organization}</h3>
                        <span className={styles.position}>{vol.position}</span>
                      </div>
                    </div>
                    <span className={styles.date}>
                      {vol.startDate} — {vol.endDate || "Günümüz"}
                    </span>
                  </div>

                  <p className={styles.description}>{vol.description}</p>

                  {vol.contributions.length > 0 && (
                    <div className={styles.contributions}>
                      <span className={styles.contLabel}>Katkılarım</span>
                      <ul className={styles.contList}>
                        {vol.contributions.map((cont, i) => (
                          <li key={i}>{cont}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {(hasUrl1 || hasUrl2) && (
                    <div className={styles.cardFooter}>
                      {hasUrl1 && (
                        <a
                          href={vol.url!.startsWith("http") ? vol.url! : `https://${vol.url!}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={styles.linkButton}
                        >
                          <svg
                            width="14"
                            height="14"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <circle cx="12" cy="12" r="10" />
                            <line x1="2" y1="12" x2="22" y2="12" />
                            <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                          </svg>
                          <span>{vol.urlLabel || formatUrlLabel(vol.url!)}</span>
                          <svg
                            width="12"
                            height="12"
                            viewBox="0 0 12 12"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.5"
                          >
                            <path
                              d="M2.5 9.5L9.5 2.5M9.5 2.5H4M9.5 2.5V8"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </a>
                      )}

                      {hasUrl2 && (
                        <a
                          href={vol.url2!.startsWith("http") ? vol.url2! : `https://${vol.url2!}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={styles.linkButton}
                        >
                          <svg
                            width="14"
                            height="14"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <circle cx="12" cy="12" r="10" />
                            <line x1="2" y1="12" x2="22" y2="12" />
                            <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                          </svg>
                          <span>{vol.url2Label || formatUrlLabel(vol.url2!)}</span>
                          <svg
                            width="12"
                            height="12"
                            viewBox="0 0 12 12"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.5"
                          >
                            <path
                              d="M2.5 9.5L9.5 2.5M9.5 2.5H4M9.5 2.5V8"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </a>
                      )}
                    </div>
                  )}
                </article>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
