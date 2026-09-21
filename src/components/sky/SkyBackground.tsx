"use client";

import { useTheme } from "@/hooks/useTheme";
import CloudsLayer from "./CloudsLayer";
import StarsLayer from "./StarsLayer";
import CelestialBody from "./CelestialBody";
import styles from "./SkyBackground.module.css";

export default function SkyBackground() {
  const { theme } = useTheme();

  return (
    <div className={styles.sky} aria-hidden="true">
      {/* Base sky gradient */}
      <div className={styles.gradient} />

      {/* Atmospheric haze near horizon */}
      <div className={styles.haze} />

      {/* Celestial bodies */}
      <CelestialBody type={theme === "night" ? "moon" : "sun"} />

      {/* Clouds layer */}
      <CloudsLayer />

      {/* Stars layer (night only) */}
      <StarsLayer />
    </div>
  );
}
