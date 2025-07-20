'use client';

import { useState, useEffect, useRef } from 'react';
import { useHero } from '../../../contexts/HeroContext';

export default function Stars({ frequency = 'normal' }) {
    const [stars, setStars] = useState([]);
    const containerRef = useRef(null);
    const [isDarkMode, setIsDarkMode] = useState(true);
    const { heroComplete } = useHero();

    // Check theme on mount and listen for changes
    useEffect(() => {
        const checkTheme = () => {
            setIsDarkMode(!document.documentElement.classList.contains('light-theme'));
        };
        
        checkTheme();
        
        // Listen for theme changes
        const observer = new MutationObserver(checkTheme);
        observer.observe(document.documentElement, { 
            attributes: true, 
            attributeFilter: ['class'] 
        });
        
        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        // Don't start creating stars until hero intro is complete
        if (!heroComplete) return;

        const createStarGroup = () => {
            const groupSize = Math.floor(Math.random() * 3) + 1; // 1-3 stars
            const fromLeft = Math.random() > 0.5;
            const baseY = Math.random() * 50 + 15; // 15%-65% of screen height
            const baseDuration = Math.random() * 0.8 + 0.8; // 0.8-1.6 seconds
            const baseSize = Math.random() * 8 + 8; // 8-16px
            
            for (let i = 0; i < groupSize; i++) {
                const id = Date.now() + Math.random() + i;
                const yOffset = (Math.random() - 0.5) * 15; // ±7.5% vertical offset
                const delayOffset = i * (Math.random() * 200 + 100); // 100-300ms stagger
                const durationVariation = (Math.random() - 0.5) * 0.2; // ±0.1s variation
                const sizeVariation = (Math.random() - 0.5) * 4; // ±2px variation
                
                const star = {
                    id,
                    fromLeft,
                    startY: Math.max(5, Math.min(75, baseY + yOffset)), // Keep within bounds
                    duration: Math.max(0.3, baseDuration + durationVariation),
                    size: Math.max(6, Math.min(20, baseSize + sizeVariation)),
                    delay: delayOffset
                };

                // Add star with delay
                setTimeout(() => {
                    setStars(prev => [...prev, star]);

                    // Remove star after animation completes
                    setTimeout(() => {
                        setStars(prev => prev.filter(s => s.id !== id));
                    }, star.duration * 1000 + 100);
                }, delayOffset);
            }
        };

        // Determine frequency settings based on prop
        const getFrequencySettings = () => {
            switch (frequency) {
                case 'high':
                    return {
                        initialDelay: 2000, // 2 seconds
                        minInterval: 8000, // 8 seconds
                        maxInterval: 15000 // 15 seconds
                    };
                case 'medium':
                    return {
                        initialDelay: 5000, // 5 seconds
                        minInterval: 30000, // 30 seconds
                        maxInterval: 60000 // 1 minute
                    };
                default: // normal
                    return {
                        initialDelay: 10000, // 10 seconds
                        minInterval: 300000, // 5 minutes
                        maxInterval: 600000 // 10 minutes
                    };
            }
        };

        const settings = getFrequencySettings();

        // Wait before starting star creation
        const initialDelay = setTimeout(() => {
            // Create initial star group immediately
            createStarGroup();
            
            // Then create star groups at intervals
            const interval = setInterval(() => {
                createStarGroup();
            }, Math.random() * (settings.maxInterval - settings.minInterval) + settings.minInterval);

            return () => clearInterval(interval);
        }, settings.initialDelay);

        return () => clearTimeout(initialDelay);
    }, [heroComplete]);

    const animateStar = (containerElement, star) => {
        if (!containerElement) return;

        const screenWidth = window.innerWidth;
        const screenHeight = window.innerHeight;
        const startX = star.fromLeft ? -50 : screenWidth + 50;
        const endX = star.fromLeft ? screenWidth + 50 : -50;
        const startYPos = (star.startY / 100) * screenHeight;
        const arcHeight = screenHeight * 0.1; // 10% of screen height for arc
        
        // Create arc path - quadratic curve
        const midX = screenWidth / 2;
        const midY = startYPos - arcHeight;
        
        // Trail tracking
        const tailHistory = [];
        const maxTailLength = 8; // Number of trail points
        
        // Find the star and tail elements
        const starElement = containerElement.querySelector('.star-shape');
        const tailElement = containerElement.querySelector('.star-tail');
        
        // Set initial position
        containerElement.style.left = startX + 'px';
        containerElement.style.top = startYPos + 'px';
        
        const startTime = Date.now();
        
        const animate = () => {
            const elapsed = Date.now() - startTime;
            const progress = Math.min(elapsed / (star.duration * 1000), 1);
            
            if (progress >= 1) return;
            
            // Acceleration easing function - starts slow, speeds up
            const easeProgress = progress * progress;
            
            // Calculate position along quadratic curve
            const t = easeProgress;
            const x = (1 - t) * (1 - t) * startX + 2 * (1 - t) * t * midX + t * t * endX;
            const y = (1 - t) * (1 - t) * startYPos + 2 * (1 - t) * t * midY + t * t * startYPos;
            
            // Apply position
            containerElement.style.left = x + 'px';
            containerElement.style.top = y + 'px';
            
            // Update tail history
            tailHistory.push({ x: x, y: y });
            if (tailHistory.length > maxTailLength) {
                tailHistory.shift();
            }
            
            // Update tail path
            if (tailHistory.length > 1 && tailElement) {
                let pathData = `M ${tailHistory[0].x - x} ${tailHistory[0].y - y}`;
                for (let i = 1; i < tailHistory.length; i++) {
                    pathData += ` L ${tailHistory[i].x - x} ${tailHistory[i].y - y}`;
                }
                tailElement.setAttribute('d', pathData);
            }
            
            // Fade in/out
            let opacity;
            if (progress < 0.1) {
                opacity = progress * 10;
            } else if (progress > 0.9) {
                opacity = (1 - progress) * 10;
            } else {
                opacity = 1;
            }
            
            containerElement.style.opacity = opacity;
            
            requestAnimationFrame(animate);
        };
        
        requestAnimationFrame(animate);
    };

    return (
        <div 
            ref={containerRef}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100vw',
                height: '100vh',
                pointerEvents: 'none',
                zIndex: 0,
                overflow: 'hidden'
            }}
        >
            {stars.map(star => (
                <div
                    key={star.id}
                    ref={el => el && animateStar(el, star)}
                    style={{
                        position: 'absolute',
                        opacity: 0
                    }}
                >
                    <svg
                        width={star.size * 4}
                        height={star.size * 4}
                        viewBox={`-${star.size * 2} -${star.size * 2} ${star.size * 4} ${star.size * 4}`}
                        fill="none"
                        style={{
                            position: 'absolute',
                            left: -star.size * 2,
                            top: -star.size * 2,
                            pointerEvents: 'none'
                        }}
                    >
                        {/* Tail */}
                        <path
                            className="star-tail"
                            d=""
                            stroke={isDarkMode ? 'white' : 'black'}
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            fill="none"
                            opacity="0.7"
                        />
                        
                        {/* Star */}
                        <g transform={`translate(0, 0)`}>
                            <path
                                className="star-shape"
                                d="M0 -8L2.4 -2.4L8 -2.4L3.2 1.2L4.8 7.2L0 4L-4.8 7.2L-3.2 1.2L-8 -2.4L-2.4 -2.4L0 -8Z"
                                fill={isDarkMode ? 'white' : 'black'}
                                style={{
                                    filter: isDarkMode 
                                        ? 'drop-shadow(0 0 3px rgba(255, 255, 255, 0.5))'
                                        : 'drop-shadow(0 0 3px rgba(0, 0, 0, 0.3))'
                                }}
                            />
                        </g>
                    </svg>
                </div>
            ))}
        </div>
    );
}