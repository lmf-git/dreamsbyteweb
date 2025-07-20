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

        // Clear any existing stars when effect runs
        setStars([]);

        const createStarGroup = () => {
            const groupSize = Math.floor(Math.random() * 3) + 1; // 1-3 stars
            const fromLeft = Math.random() > 0.5;
            const baseY = Math.random() * 50 + 15; // 15%-65% of screen height
            const baseDuration = Math.random() * 1.5 + 2.0; // 2.0-3.5 seconds (slower)
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

                    // Remove star after animation completes (duration + buffer time)
                    setTimeout(() => {
                        setStars(prev => prev.filter(s => s.id !== id));
                    }, star.duration * 1000 + 500); // Increased buffer from 100ms to 500ms
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

            // Store interval reference for cleanup
            return () => clearInterval(interval);
        }, settings.initialDelay);

        // Cleanup function
        return () => {
            clearTimeout(initialDelay);
            setStars([]); // Clear all stars on cleanup
        };
    }, [heroComplete, frequency]);

    const animateStar = (containerElement, star) => {
        if (!containerElement) return;

        const screenWidth = window.innerWidth;
        const screenHeight = window.innerHeight;
        const startX = star.fromLeft ? -50 : screenWidth + 50;
        const endX = star.fromLeft ? screenWidth + 50 : -50;
        const startYPos = (star.startY / 100) * screenHeight;
        const arcHeight = screenHeight * 0.08; // Reduced arc for smoother motion
        
        // Create arc path - quadratic curve
        const midX = screenWidth / 2;
        const midY = startYPos - arcHeight;
        
        // Trail tracking
        const tailHistory = [];
        const maxTailLength = 12; // Balanced trail length
        
        // Find the star and tail elements
        const starElement = containerElement.querySelector('.star-shape');
        const tailElement = containerElement.querySelector('.star-tail');
        
        // Set initial position
        containerElement.style.left = startX + 'px';
        containerElement.style.top = startYPos + 'px';
        
        const startTime = performance.now();
        let animationId = null;
        let isComplete = false;
        
        const animate = (currentTime) => {
            if (isComplete) return;
            
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / (star.duration * 1000), 1);
            
            if (progress >= 1) {
                isComplete = true;
                return;
            }
            
            // Smoother easing - less aggressive acceleration
            const easeProgress = 1 - Math.pow(1 - progress, 1.5);
            
            // Calculate position along quadratic curve
            const t = easeProgress;
            const x = (1 - t) * (1 - t) * startX + 2 * (1 - t) * t * midX + t * t * endX;
            const y = (1 - t) * (1 - t) * startYPos + 2 * (1 - t) * t * midY + t * t * startYPos;
            
            // Apply position to container
            containerElement.style.left = x + 'px';
            containerElement.style.top = y + 'px';
            
            // Add current position to tail history every few frames for smoother trail
            if (tailHistory.length === 0 || tailHistory.length % 2 === 0) {
                tailHistory.push({ x, y });
                if (tailHistory.length > maxTailLength) {
                    tailHistory.shift();
                }
            }
            
            // Update tail path with smoother curves
            if (tailHistory.length > 2 && tailElement) {
                let pathData = `M 0 0`; // Start at star center
                
                // Create smoother curves using quadratic bezier
                for (let i = tailHistory.length - 2; i >= 0; i--) {
                    const point = tailHistory[i];
                    const relativeX = point.x - x;
                    const relativeY = point.y - y;
                    
                    if (i === tailHistory.length - 2) {
                        pathData += ` L ${relativeX} ${relativeY}`;
                    } else {
                        // Use previous point as control point for smoother curves
                        const prevPoint = tailHistory[i + 1];
                        const controlX = (prevPoint.x - x + relativeX) / 2;
                        const controlY = (prevPoint.y - y + relativeY) / 2;
                        pathData += ` Q ${controlX} ${controlY} ${relativeX} ${relativeY}`;
                    }
                }
                
                tailElement.setAttribute('d', pathData);
            }
            
            // Smoother fade in/out
            let opacity;
            if (progress < 0.15) {
                opacity = progress / 0.15;
            } else if (progress > 0.85) {
                opacity = (1 - progress) / 0.15;
            } else {
                opacity = 1;
            }
            
            containerElement.style.opacity = Math.max(0, Math.min(1, opacity));
            
            if (!isComplete) {
                animationId = requestAnimationFrame(animate);
            }
        };
        
        animationId = requestAnimationFrame(animate);
        
        // Return cleanup function
        return () => {
            isComplete = true;
            if (animationId) {
                cancelAnimationFrame(animationId);
            }
        };
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