"use client";

import React, { useRef, useCallback } from "react";
import { motion } from "framer-motion";
import { useAudio } from "@/context/AudioContext";
import { musicTrack } from "@/data/portfolio";
import styles from "./MusicPlayer.module.css";

const TRACK_NAME = musicTrack.title;

function formatTime(seconds: number): string {
  if (!isFinite(seconds) || seconds < 0) return "0:00";
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60);
  return `${m}:${s.toString().padStart(2, "0")}`;
}

export default function MusicPlayer() {
  const { isPlaying, currentTime, duration, togglePlay, seek, skip } = useAudio();
  const trackRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  const progressPercent = duration > 0 ? Math.min(100, Math.max(0, (currentTime / duration) * 100)) : 0;

  const updateSeekFromEvent = useCallback(
    (clientX: number) => {
      const track = trackRef.current;
      if (!track || !duration) return;
      const rect = track.getBoundingClientRect();
      const ratio = Math.max(0, Math.min(1, (clientX - rect.left) / rect.width));
      seek(ratio * duration);
    },
    [duration, seek]
  );

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    isDragging.current = true;
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
    updateSeekFromEvent(e.clientX);
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (isDragging.current) {
      updateSeekFromEvent(e.clientX);
    }
  };

  const handlePointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    if (isDragging.current) {
      isDragging.current = false;
      try {
        (e.target as HTMLElement).releasePointerCapture(e.pointerId);
      } catch {
        // Safe fallback
      }
    }
  };

  return (
    <motion.div
      className={styles.playerWrapper}
      initial={{ opacity: 0, y: 30, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.7, ease: [0.16, 1, 0.3, 1] as const }}
    >
      <div className={styles.chassis}>
        {/* Left Vinyl Turntable */}
        <div className={styles.turntableWell}>
          <div className={`${styles.vinylDisc} ${isPlaying ? styles.playing : ""}`}>
            <div className={styles.vinylSheen} />
            <div className={styles.vinylLabel}>
              <div className={styles.spindleHole} />
            </div>
          </div>
        </div>

        {/* Center Control Panel */}
        <div className={styles.centerConsole}>
          <span className={styles.trackTitle}>{TRACK_NAME}</span>

          {/* Interactive Progress Slider */}
          <div
            ref={trackRef}
            className={styles.progressContainer}
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
            role="slider"
            aria-label="Müzik ilerleme çubuğu"
            aria-valuemin={0}
            aria-valuemax={duration}
            aria-valuenow={currentTime}
            tabIndex={0}
          >
            <div className={styles.progressTrack}>
              <div
                className={styles.progressFill}
                style={{ width: `${progressPercent}%` }}
              />
              <div
                className={styles.progressThumb}
                style={{ left: `${progressPercent}%` }}
              />
            </div>
          </div>

          {/* Timestamps */}
          <div className={styles.timeRow}>
            <span>{formatTime(currentTime)}</span>
            <span>{formatTime(duration)}</span>
          </div>

          {/* Controls */}
          <div className={styles.controlsRow}>
            {/* Rewind 10s */}
            <button
              className={styles.skipBtn}
              onClick={() => skip(-10)}
              aria-label="10 saniye geri sar"
              title="10s Geri"
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M11 19l-9-7 9-7v14z" />
                <path d="M22 19l-9-7 9-7v14z" />
              </svg>
            </button>

            {/* Play / Pause Toggle */}
            <button
              className={styles.playBtn}
              onClick={togglePlay}
              aria-label={isPlaying ? "Müziği Duraklat" : "Müziği Başlat"}
              title={isPlaying ? "Duraklat" : "Oynat"}
            >
              {isPlaying ? (
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <rect x="6" y="4" width="4" height="16" rx="1" />
                  <rect x="14" y="4" width="4" height="16" rx="1" />
                </svg>
              ) : (
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" style={{ marginLeft: 2 }}>
                  <polygon points="5 3 19 12 5 21 5 3" />
                </svg>
              )}
            </button>

            {/* Forward 10s */}
            <button
              className={styles.skipBtn}
              onClick={() => skip(10)}
              aria-label="10 saniye ileri sar"
              title="10s İleri"
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M13 19l9-7-9-7v14z" />
                <path d="M2 19l9-7-9-7v14z" />
              </svg>
            </button>
          </div>
        </div>

        {/* Right Vinyl Turntable */}
        <div className={styles.turntableWell}>
          <div className={`${styles.vinylDisc} ${isPlaying ? styles.playing : ""}`}>
            <div className={styles.vinylSheen} />
            <div className={styles.vinylLabel}>
              <div className={styles.spindleHole} />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
