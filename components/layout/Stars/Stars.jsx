'use client';

import { useEffect, useState } from 'react';
import styles from './stars.module.scss';

const Star = ({ id, delay, duration, startX, startY, endX, endY, size }) => (
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
    }}
    width="4"
    height="4"
    viewBox="0 0 4 4"
    fill="none"
  >
    <circle cx="2" cy="2" r="1" fill="white" opacity="0.8" />
    <path
      d="M2 0L2.5 1.5L4 2L2.5 2.5L2 4L1.5 2.5L0 2L1.5 1.5Z"
      fill="white"
      opacity="0.6"
    />
  </svg>
);

export default function Stars() {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    const generateStars = () => {
      const newStars = [];
      const numStars = 3; // Even fewer shooting stars

      for (let i = 0; i < numStars; i++) {
        const delay = Math.random() * 15; // Longer delay 0-15s (rarer)
        const duration = 0.3 + Math.random() * 0.4; // Much faster duration 0.3-0.7s
        const size = 0.5 + Math.random() * 1; // Size 0.5-1.5
        
        // Random start position (usually from edges)
        const side = Math.floor(Math.random() * 4);
        let startX, startY, endX, endY;
        
        switch (side) {
          case 0: // Top edge
            startX = Math.random() * 100;
            startY = -5;
            endX = startX + (Math.random() - 0.5) * 60;
            endY = 50 + Math.random() * 60;
            break;
          case 1: // Right edge
            startX = 105;
            startY = Math.random() * 100;
            endX = 20 + Math.random() * 60;
            endY = startY + (Math.random() - 0.5) * 60;
            break;
          case 2: // Bottom edge
            startX = Math.random() * 100;
            startY = 105;
            endX = startX + (Math.random() - 0.5) * 60;
            endY = 20 + Math.random() * 60;
            break;
          case 3: // Left edge
            startX = -5;
            startY = Math.random() * 100;
            endX = 50 + Math.random() * 60;
            endY = startY + (Math.random() - 0.5) * 60;
            break;
        }

        newStars.push({
          id: i,
          delay,
          duration,
          startX,
          startY,
          endX,
          endY,
          size,
        });
      }
      
      setStars(newStars);
    };

    generateStars();
    
    // Regenerate stars less frequently for rarity
    const interval = setInterval(generateStars, 25000);
    
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