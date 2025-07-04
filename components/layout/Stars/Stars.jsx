'use client';

import { useEffect, useState } from 'react';
import styles from './stars.module.scss';

const Star = ({ id, delay, duration, startX, startY, endX, endY, size, angle, startScale, endScale }) => (
  <svg
    className={styles.star}
    style={{
      '--delay': `${delay}s`,
      '--duration': `${duration}s`,
      '--start-x': `${startX}vw`,
      '--start-y': `${startY}vh`,
      '--end-x': `${endX}vw`,
      '--end-y': `${endY}vh`,
      '--size': size,
      '--angle': `${angle}deg`,
      '--start-scale': startScale,
      '--end-scale': endScale,
    }}
    width="8"
    height="8"
    viewBox="0 0 8 8"
    fill="none"
  >
    {/* Outer glow layer */}
    <circle cx="4" cy="4" r="3" fill="var(--star-glow)" opacity="0.3" />
    <circle cx="4" cy="4" r="2" fill="var(--star-glow)" opacity="0.5" />
    
    {/* Main star core */}
    <circle cx="4" cy="4" r="1.2" fill="var(--star-color)" opacity="0.9" />
    
    {/* Star shape overlay */}
    <path
      d="M4 0.5L4.8 2.8L7.5 4L4.8 5.2L4 7.5L3.2 5.2L0.5 4L3.2 2.8Z"
      fill="var(--star-color)"
      opacity="0.8"
    />
    
    {/* Bright center */}
    <circle cx="4" cy="4" r="0.6" fill="var(--star-color)" opacity="1" />
  </svg>
);

export default function Stars() {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    const generateStars = () => {
      const newStars = [];
      const numStars = Math.random() < 0.1 ? 1 : 0; // Only 10% chance of even generating a star

      for (let i = 0; i < numStars; i++) {
        // Generate completely new random values for each star
        const now = Date.now();
        const randomSeed = now + i * 1000 + Math.random() * 10000;
        
        const delay = Math.random() * 200 + 60; // Much longer delay 60-260s
        const duration = 1.5 + Math.random() * 3.0; // 1.5-4.5s
        const size = 0.3 + Math.random() * 0.7; // 0.3-1.0
        
        // Generate truly random positions using current timestamp as seed
        const rand1 = (Math.sin(randomSeed * 0.001) + 1) / 2;
        const rand2 = (Math.sin(randomSeed * 0.002) + 1) / 2;
        const rand3 = (Math.sin(randomSeed * 0.003) + 1) / 2;
        const rand4 = (Math.sin(randomSeed * 0.004) + 1) / 2;
        const rand5 = (Math.sin(randomSeed * 0.005) + 1) / 2;
        const rand6 = (Math.sin(randomSeed * 0.006) + 1) / 2;
        
        // Start position - completely random anywhere on screen edge
        const startX = rand1 * 120 - 10; // -10 to 110
        const startY = rand2 * 120 - 10; // -10 to 110
        
        // End position - completely random anywhere on screen
        const endX = rand3 * 120 - 10; // -10 to 110
        const endY = rand4 * 120 - 10; // -10 to 110

        // Calculate angle for tail direction
        const deltaX = endX - startX;
        const deltaY = endY - startY;
        const angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
        
        // Add scale animation values
        const startScale = 0.1 + rand5 * 0.3; // 0.1-0.4
        const endScale = 2.0 + rand6 * 3.0; // 2.0-5.0

        newStars.push({
          id: `star-${randomSeed}-${i}`, // Unique ID based on timestamp
          delay,
          duration,
          startX,
          startY,
          endX,
          endY,
          size,
          angle,
          startScale,
          endScale,
        });
      }
      
      setStars(newStars);
    };

    generateStars();
    
    // Regenerate stars very rarely - 8-15 minutes
    const interval = setInterval(generateStars, 480000 + Math.random() * 420000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.starsContainer}>
      {stars.map((star) => (
        <Star key={star.id} {...star} />
      ))}
    </div>
  );
}