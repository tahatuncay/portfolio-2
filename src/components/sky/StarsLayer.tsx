"use client";

import { useMemo } from "react";
import styles from "./StarsLayer.module.css";

/**
 * Deterministic star positioning using a seeded pseudo-random generator.
 * Three layers: tiny, small, glow — with different densities and effects.
 */

function seededRandom(seed: number) {
  let s = seed;
  return () => {
    s = (s * 16807) % 2147483647;
    return (s - 1) / 2147483646;
  };
}

interface StarData {
  x: number;
  y: number;
  size: number;
  opacity: number;
  delay: number;
}

function generateStars(count: number, seed: number, sizeRange: [number, number]): StarData[] {
  const rng = seededRandom(seed);
  return Array.from({ length: count }, () => ({
    x: rng() * 100,
    y: rng() * 100,
    size: sizeRange[0] + rng() * (sizeRange[1] - sizeRange[0]),
    opacity: 0.3 + rng() * 0.7,
    delay: rng() * 8,
  }));
}

export default function StarsLayer() {
  const tinyStars = useMemo(() => generateStars(80, 42, [0.5, 1.2]), []);
  const smallStars = useMemo(() => generateStars(30, 137, [1.2, 2]), []);
  const glowStars = useMemo(() => generateStars(8, 256, [2, 3.5]), []);

  return (
    <div className={styles.layer}>
      {/* Tiny stars — background texture */}
      <div className={styles.tinyLayer}>
        {tinyStars.map((star, i) => (
          <span
            key={`t${i}`}
            className={styles.star}
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
              opacity: star.opacity * 0.6,
              animationDelay: `${star.delay}s`,
            }}
          />
        ))}
      </div>

      {/* Small stars — slightly larger */}
      <div className={styles.smallLayer}>
        {smallStars.map((star, i) => (
          <span
            key={`s${i}`}
            className={`${styles.star} ${styles.twinkle}`}
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
              opacity: star.opacity * 0.8,
              animationDelay: `${star.delay}s`,
            }}
          />
        ))}
      </div>

      {/* Glow stars — few, soft glow */}
      <div className={styles.glowLayer}>
        {glowStars.map((star, i) => (
          <span
            key={`g${i}`}
            className={`${styles.star} ${styles.glow} ${styles.twinkle}`}
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
              opacity: star.opacity,
              animationDelay: `${star.delay}s`,
            }}
          />
        ))}
      </div>
    </div>
  );
}
