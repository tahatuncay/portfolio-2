"use client";

import { useLanguage } from "@/hooks/useLanguage";
import { motion } from "framer-motion";
import styles from "./LanguageToggle.module.css";

export default function LanguageToggle() {
  const { language, toggleLanguage, t } = useLanguage();

  return (
    <button
      className={styles.toggle}
      onClick={toggleLanguage}
      aria-label={t("lang.switch")}
      title={t("lang.switch")}
      data-cursor="pointer"
    >
      <div className={styles.inner}>
        <motion.span
          className={`${styles.label} ${language === "tr" ? styles.active : ""}`}
          animate={{ opacity: language === "tr" ? 1 : 0.4 }}
          transition={{ duration: 0.25 }}
        >
          TR
        </motion.span>
        <span className={styles.divider}>/</span>
        <motion.span
          className={`${styles.label} ${language === "en" ? styles.active : ""}`}
          animate={{ opacity: language === "en" ? 1 : 0.4 }}
          transition={{ duration: 0.25 }}
        >
          EN
        </motion.span>
      </div>
    </button>
  );
}
