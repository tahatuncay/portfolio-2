"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { profile } from "@/data/portfolio";
import MagneticButton from "./ui/MagneticButton";
import MusicPlayer from "./ui/MusicPlayer";
import styles from "./Hero.module.css";

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 0.92]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const heroY = useTransform(scrollYProgress, [0, 1], [0, -60]);

  // Stagger animation variants
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 80 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: 0.5 + i * 0.03,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    }),
  };

  const fullName = `${profile.firstName} ${profile.lastName}`;

  return (
    <section ref={heroRef} id="hero" className={styles.hero}>
      <motion.div
        className={styles.content}
        style={{ scale: heroScale, opacity: heroOpacity, y: heroY }}
      >
        {/* Decorative elements */}
        <div className={styles.decoContainer}>
          <motion.div
            className={styles.decoCircle}
            animate={{
              scale: [1, 1.1, 1],
              rotate: [0, 5, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className={styles.decoLine}
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.5, delay: 1, ease: [0.16, 1, 0.3, 1] }}
          />
          <motion.div
            className={styles.decoGrid}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.8 }}
          />
        </div>

        <motion.div
          className={styles.textContainer}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Main heading — name as individual letters */}
          <h1 className={styles.heading}>
            <span className={styles.nameRow}>
              {fullName.split("").map((letter, i) => (
                <motion.span
                  key={i}
                  className={styles.letter}
                  custom={i}
                  variants={letterVariants}
                  initial="hidden"
                  animate="visible"
                  whileHover={{
                    y: -8,
                    rotate: -5,
                    color: "#c4704b",
                    transition: { duration: 0.3, ease: [0.34, 1.56, 0.64, 1] },
                  }}
                >
                  {letter === " " ? "\u00A0" : letter}
                </motion.span>
              ))}
            </span>
          </h1>

          {/* Title */}
          <motion.p className={styles.title} variants={itemVariants}>
            {profile.title}
          </motion.p>

          {/* Retro Dual-Vinyl Music Player (Zainab Kabira style) */}
          <motion.div variants={itemVariants} className={styles.playerSection}>
            <MusicPlayer />
          </motion.div>

          {/* CTAs */}
          <motion.div className={styles.ctas} variants={itemVariants}>
            <MagneticButton
              className="btn-primary"
              onClick={() => {
                document
                  .getElementById("projeler")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Projelerimi İncele
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                style={{ marginLeft: 4 }}
              >
                <path
                  d="M3 8h10m0 0L9 4m4 4L9 12"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </MagneticButton>

            <MagneticButton
              as="a"
              href={profile.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              CV&apos;mi Görüntüle
            </MagneticButton>
          </motion.div>

          {/* Metadata row */}
          <motion.div className={styles.metadata} variants={itemVariants}>
            <div className={styles.metaItem}>
              <span className={styles.metaLabel}>Konum</span>
              <span className={styles.metaValue}>{profile.location}</span>
            </div>
            <div className={styles.metaDivider} />
            <div className={styles.metaItem}>
              <span className={styles.metaLabel}>Uzmanlık</span>
              <span className={styles.metaValue}>
                {profile.specialization}
              </span>
            </div>
            <div className={styles.metaDivider} />
            <div className={styles.metaItem}>
              <span className={styles.metaLabel}>Durum</span>
              <span className={styles.metaValue}>
                {profile.availability}
              </span>
            </div>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className={styles.scrollIndicator}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
        >
          <motion.div
            className={styles.scrollLine}
            animate={{ scaleY: [0, 1, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
