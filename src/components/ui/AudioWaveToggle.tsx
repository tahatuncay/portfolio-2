"use client";

import React from "react";
import { useAudio } from "@/context/AudioContext";
import styles from "./AudioWaveToggle.module.css";

export default function AudioWaveToggle() {
  const { isPlaying, togglePlay } = useAudio();

  return (
    <button
      id="nav-wave"
      className={`${styles.waveBtn} ${isPlaying ? styles.playing : styles.paused}`}
      onClick={togglePlay}
      aria-label={isPlaying ? "Müziği Duraklat" : "Müziği Başlat"}
      title={isPlaying ? "Müziği Duraklat" : "Müziği Başlat"}
    >
      <div className={styles.barsContainer}>
        <span className={styles.bar} />
        <span className={styles.bar} />
        <span className={styles.bar} />
        <span className={styles.bar} />
      </div>
    </button>
  );
}
