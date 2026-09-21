"use client";

import styles from "./CelestialBody.module.css";

interface CelestialBodyProps {
  type: "sun" | "moon";
}

/**
 * Atmospheric celestial body — sun glow for day, moon disc for night.
 * These are subtle environmental elements, not focal points.
 */
export default function CelestialBody({ type }: CelestialBodyProps) {
  return (
    <div className={styles.container}>
      {/* Sun — warm radial glow */}
      <div
        className={styles.sun}
        style={{ opacity: `var(--sun-opacity)` }}
      >
        <div className={styles.sunCore} />
        <div className={styles.sunGlow} />
        <div className={styles.sunHalo} />
      </div>

      {/* Moon — subtle crescent with glow */}
      <div
        className={styles.moon}
        style={{ opacity: `var(--moon-opacity)` }}
      >
        <div className={styles.moonDisc} />
        <div className={styles.moonGlow} />
      </div>
    </div>
  );
}
