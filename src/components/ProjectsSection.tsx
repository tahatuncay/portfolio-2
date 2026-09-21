"use client";

import { useState } from "react";
import { projects } from "@/data/portfolio";
import ScrollReveal from "./ui/ScrollReveal";
import styles from "./ProjectsSection.module.css";

function ProjectImage({ project }: { project: (typeof projects)[0] }) {
  const [hasError, setHasError] = useState(false);

  if (project.image && !hasError) {
    return (
      <img
        src={project.image}
        alt={project.name}
        className={styles.projectImage}
        onError={() => setHasError(true)}
      />
    );
  }

  return (
    <>
      <span className={styles.imageNum}>{project.number}</span>
      <span className={styles.imageName}>{project.name}</span>
    </>
  );
}

export default function ProjectsSection() {
  const featured = projects.filter((p) => p.featured);

  return (
    <section id="projeler" className={styles.section}>
      <div className={styles.container}>
        <ScrollReveal>
          <span className={styles.eyebrow}>Seçili Çalışmalar</span>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <h2 className={styles.heading}>Projelerim</h2>
        </ScrollReveal>

        <div className={styles.grid}>
          {featured.map((project, index) => (
            <ScrollReveal
              key={project.id}
              delay={0.15 * index}
              className={styles.cardWrap}
            >
              <article className={styles.card}>
                {/* Image area */}
                <div className={styles.imageWrap}>
                  <div className={styles.imagePlaceholder}>
                    <ProjectImage project={project} />
                  </div>

                  {/* Hover overlay */}
                  <div className={styles.overlay}>
                    <div className={styles.overlayContent}>
                      <span className={styles.overlayTitle}>
                        {project.name}
                      </span>
                      <span className={styles.overlayRole}>{project.role}</span>
                    </div>
                  </div>
                </div>

                {/* Project info */}
                <div className={styles.info}>
                  <div className={styles.infoTop}>
                    <span className={styles.number}>{project.number}</span>
                    <span className={styles.year}>{project.year}</span>
                  </div>

                  <h3 className={styles.name}>{project.name}</h3>
                  <p className={styles.description}>{project.description}</p>

                  <div className={styles.techRow}>
                    {project.technologies.map((tech) => (
                      <span key={tech} className={styles.tech}>
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className={styles.statusRow}>
                    <span className={styles.status}>
                      <span
                        className={`${styles.statusDot} ${
                          project.status === "Geliştiriliyor"
                            ? styles.statusActive
                            : ""
                        }`}
                      />
                      {project.status}
                    </span>

                    <div className={styles.links}>
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={styles.link}
                          aria-label={`${project.name} GitHub`}
                        >
                          GitHub
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
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={styles.link}
                          aria-label={`${project.name} canlı site`}
                        >
                          Canlı Site
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
                  </div>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
