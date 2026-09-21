"use client";

import { useTheme } from "@/hooks/useTheme";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./ThemeToggle.module.css";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isNight = theme === "night";

  return (
    <button
      className={styles.toggle}
      onClick={toggleTheme}
      aria-label={isNight ? "Gündüz temasına geç" : "Gece temasına geç"}
      role="switch"
      aria-checked={isNight}
      title={isNight ? "Gündüz" : "Gece"}
      data-cursor="pointer"
    >
      <div className={styles.iconWrapper}>
        <AnimatePresence mode="wait" initial={false}>
          {isNight ? (
            <motion.svg
              key="moon"
              className={styles.icon}
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              initial={{ rotate: -90, opacity: 0, scale: 0.5 }}
              animate={{ rotate: 0, opacity: 1, scale: 1 }}
              exit={{ rotate: 90, opacity: 0, scale: 0.5 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] as const }}
            >
              {/* Crescent moon */}
              <path
                d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"
                fill="currentColor"
                opacity="0.9"
              />
              {/* Small stars near moon */}
              <circle cx="17" cy="5" r="1" fill="currentColor" opacity="0.5" />
              <circle cx="20" cy="8" r="0.6" fill="currentColor" opacity="0.4" />
            </motion.svg>
          ) : (
            <motion.svg
              key="sun"
              className={styles.icon}
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              initial={{ rotate: 90, opacity: 0, scale: 0.5 }}
              animate={{ rotate: 0, opacity: 1, scale: 1 }}
              exit={{ rotate: -90, opacity: 0, scale: 0.5 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] as const }}
            >
              {/* Sun disc */}
              <circle cx="12" cy="12" r="5" fill="currentColor" />
              {/* Rays */}
              <line x1="12" y1="1" x2="12" y2="3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              <line x1="12" y1="21" x2="12" y2="23" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              <line x1="1" y1="12" x2="3" y2="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              <line x1="21" y1="12" x2="23" y2="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </motion.svg>
          )}
        </AnimatePresence>
      </div>
    </button>
  );
}
