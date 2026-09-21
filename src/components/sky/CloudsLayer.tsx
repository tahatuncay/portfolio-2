"use client";

import styles from "./CloudsLayer.module.css";

/**
 * CSS-generated clouds with varying sizes, opacity, and drift speeds.
 * Uses box-shadow technique for organic cloud shapes.
 * Reduced on mobile; disabled with prefers-reduced-motion.
 */
export default function CloudsLayer() {
  return (
    <div className={styles.layer}>
      <div className={`${styles.cloud} ${styles.c1}`} />
      <div className={`${styles.cloud} ${styles.c2}`} />
      <div className={`${styles.cloud} ${styles.c3}`} />
      <div className={`${styles.cloud} ${styles.c4}`} />
      <div className={`${styles.cloud} ${styles.c5}`} />
      <div className={`${styles.cloud} ${styles.c6}`} />
    </div>
  );
}
