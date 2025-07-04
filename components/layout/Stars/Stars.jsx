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
      const numStars = 1; // Much fewer shooting stars - more rare and special

      for (let i = 0; i < numStars; i++) {
        const delay = Math.random() * 45; // Extremely long delay 0-45s (very rare)
        const duration = 1.5 + Math.random() * 2.0; // Slower duration 1.5-3.5s
        const size = 0.5 + Math.random() * 1; // Size 0.5-1.5
        
        // Stars always start from screen edges and travel across
        const edge = Math.floor(Math.random() * 4);
        let startX, startY, endX, endY;
        
        switch (edge) {
          case 0: // Top edge
            startX = Math.random() * 130 - 15;  // Random position along top edge
            startY = -20;
            // Travel to random position in lower area
            endX = Math.random() * 130 - 15;
            endY = 80 + Math.random() * 40;
            break;
            
          case 1: // Right edge
            startX = 120;
            startY = Math.random() * 130 - 15;  // Random position along right edge
            // Travel to random position in left area
            endX = -40 + Math.random() * 50;
            endY = Math.random() * 130 - 15;
            break;
            
          case 2: // Bottom edge
            startX = Math.random() * 130 - 15;  // Random position along bottom edge
            startY = 120;
            // Travel to random position in upper area
            endX = Math.random() * 130 - 15;
            endY = -40 + Math.random() * 50;
            break;
            
          case 3: // Left edge
            startX = -20;
            startY = Math.random() * 130 - 15;  // Random position along left edge
            // Travel to random position in right area
            endX = 80 + Math.random() * 40;
            endY = Math.random() * 130 - 15;
            break;
        }

        // Calculate angle for tail direction
        const deltaX = endX - startX;
        const deltaY = endY - startY;
        const angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
        
        // Add scale animation values
        const startScale = 0.3 + Math.random() * 0.4; // Start smaller (0.3-0.7)
        const endScale = 1.2 + Math.random() * 0.8; // End larger (1.2-2.0)

        newStars.push({
          id: i,
          delay,
          duration,
          startX,
          startY,
          endX,
          endY,
          size,
          angle, // Add angle for tail direction
          startScale,
          endScale,
        });
      }
      
      setStars(newStars);
    };

    generateStars();
    
    // Regenerate stars extremely rarely for true rarity
    const interval = setInterval(generateStars, 90000);
    
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