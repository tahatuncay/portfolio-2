"use client";

import { skills } from "@/data/portfolio";
import ScrollReveal from "./ui/ScrollReveal";
import styles from "./SkillsSection.module.css";

export default function SkillsSection() {
  return (
    <section id="yetenekler" className={styles.section}>
      <div className={styles.container}>
        <ScrollReveal>
          <span className={styles.eyebrow}>Teknik Yetkinlikler</span>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <h2 className={styles.heading}>Yeteneklerim</h2>
        </ScrollReveal>

        <div className={styles.grid}>
          {skills.map((group, gIndex) => (
            <ScrollReveal key={group.category} delay={0.1 * gIndex}>
              <div className={styles.group}>
                <h3 className={styles.groupTitle}>{group.category}</h3>
                <div className={styles.tags}>
                  {group.skills.map((skill) => (
                    <span key={skill} className={styles.tag}>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
