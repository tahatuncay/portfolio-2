"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ThemeToggle from "./ui/ThemeToggle";
import AudioWaveToggle from "./ui/AudioWaveToggle";
import styles from "./Navbar.module.css";

const navItems = [
  { id: "hero", label: "Ana Sayfa" },
  { id: "hakkimda", label: "Hakkımda" },
  { id: "deneyim", label: "Deneyim" },
  { id: "projeler", label: "Projeler" },
  { id: "sertifikalar", label: "Sertifikalar" },
  { id: "gonulluluk", label: "Gönüllülük" },
  { id: "yetenekler", label: "Yetenekler" },
  { id: "iletisim", label: "İletişim" },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("hero");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 50);

    const sections = navItems.map((item) => item.id);
    for (let i = sections.length - 1; i >= 0; i--) {
      const el = document.getElementById(sections[i]);
      if (el) {
        const rect = el.getBoundingClientRect();
        if (rect.top <= 150) {
          setActiveSection(sections[i]);
          break;
        }
      }
    }
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <motion.nav
        className={`${styles.nav} ${isScrolled ? styles.scrolled : ""}`}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className={styles.inner}>
          {/* Logo / Name */}
          <button
            className={styles.logo}
            onClick={() => scrollTo("hero")}
            aria-label="Ana sayfaya git"
          >
            <img
              src="/portfolio-logo.png"
              alt="Taha Tuncay Logo"
              className={styles.logoImage}
            />
          </button>

          {/* Desktop nav */}
          <div className={styles.desktopNav}>
            {navItems.slice(1).map((item) => (
              <button
                key={item.id}
                className={`${styles.navLink} ${activeSection === item.id ? styles.active : ""
                  }`}
                onClick={() => scrollTo(item.id)}
              >
                {item.label}
                {activeSection === item.id && (
                  <motion.span
                    className={styles.activeDot}
                    layoutId="activeDot"
                    transition={{
                      type: "spring",
                      stiffness: 350,
                      damping: 30,
                    }}
                  />
                )}
              </button>
            ))}
          </div>

          {/* Actions: Sound wave toggle + Theme toggle + Hamburger */}
          <div className={styles.navActions}>
            <AudioWaveToggle />
            <ThemeToggle />
            <button
              className={`${styles.hamburger} ${isMobileMenuOpen ? styles.open : ""
                }`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? "Menüyü kapat" : "Menüyü aç"}
              aria-expanded={isMobileMenuOpen}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className={styles.mobileOverlay}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className={styles.mobileMenu}
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className={styles.mobileMenuInner}>
                {navItems.map((item, i) => (
                  <motion.button
                    key={item.id}
                    className={`${styles.mobileLink} ${activeSection === item.id ? styles.active : ""
                      }`}
                    onClick={() => scrollTo(item.id)}
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + i * 0.05, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <span className={styles.mobileNum}>
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {item.label}
                  </motion.button>
                ))}

                {/* Theme & sound toggle in mobile menu */}
                <div className={styles.mobileThemeToggle}>
                  <AudioWaveToggle />
                  <ThemeToggle />
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
