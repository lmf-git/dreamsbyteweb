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
            const baseStartY = Math.random() * 60 + 20; // 20%-80% of screen height
            const groupFromLeft = Math.random() > 0.5;
            
            for (let i = 0; i < groupSize; i++) {
                const id = Date.now() + Math.random() + i;
                const star = {
                    id,
                    fromLeft: groupFromLeft,
                    startY: baseStartY + (Math.random() - 0.5) * 15, // Slight variation within group
                    duration: Math.random() * 2 + 4, // 4-6 seconds
                    size: Math.random() * 6 + 6, // 6-12px
                    delay: i * (Math.random() * 300 + 200) // Stagger stars in group by 200-500ms
                };

                setTimeout(() => {
                    setStars(prev => [...prev, star]);
                    
                    // Remove star after animation completes with buffer time
                    setTimeout(() => {
                        setStars(prev => prev.filter(s => s.id !== id));
                    }, star.duration * 1000 + 2000); // Increased buffer from 500ms to 2000ms
                }, star.delay);
            }
        };

        // Determine frequency settings based on prop
        const getFrequencySettings = () => {
            switch (frequency) {
                case 'high': // Home page - frequent shooting stars
                    return {
                        initialDelay: 3000, // 3 seconds
                        minInterval: 4000, // 4 seconds
                        maxInterval: 8000 // 8 seconds
                    };
                case 'medium':
                    return {
                        initialDelay: 8000, // 8 seconds
                        minInterval: 15000, // 15 seconds
                        maxInterval: 30000 // 30 seconds
                    };
                default: // normal - other pages, slower and fewer
                    return {
                        initialDelay: 10000, // 10 seconds
                        minInterval: 45000, // 45 seconds
                        maxInterval: 90000 // 1.5 minutes
                    };
            }
        };

        const settings = getFrequencySettings();

        // Wait before starting star creation
        const initialDelay = setTimeout(() => {
            // Create initial star group immediately
            createStarGroup();
            
            // Then create star groups at intervals
            const createNextGroup = () => {
                const nextDelay = Math.random() * (settings.maxInterval - settings.minInterval) + settings.minInterval;
                setTimeout(() => {
                    createStarGroup();
                    createNextGroup(); // Schedule next group
                }, nextDelay);
            };
            
            createNextGroup();
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
        
        // Arc calculation for curved motion
        const midX = (startX + endX) / 2;
        const arcHeight = screenHeight * 0.15; // 15% of screen height for arc
        const controlY = startYPos - arcHeight;
        
        // Trail tracking
        const trail = [];
        const maxTrailLength = 15; // Increased from 8 to 15 for longer trail
        
        const startTime = performance.now();
        let isComplete = false;
        
        const animate = (currentTime) => {
            if (isComplete || !containerElement?.parentNode) return;
            
            const elapsed = currentTime - startTime;
            const baseProgress = Math.min(elapsed / (star.duration * 1000), 1);
            
            // Continue animation slightly beyond screen to ensure complete trajectory
            if (baseProgress >= 1.2) { // Allow 20% overshoot
                isComplete = true;
                return;
            }
            
            // Add acceleration curve - starts slow, gets faster
            const progress = Math.min(baseProgress * baseProgress * (3 - 2 * baseProgress), 1); // Smoothstep for acceleration
            
            // Quadratic bezier curve for arc motion
            const t = Math.min(baseProgress, 1); // Clamp t to 1 for trajectory calculation
            const x = (1 - t) * (1 - t) * startX + 2 * (1 - t) * t * midX + t * t * endX;
            const y = (1 - t) * (1 - t) * startYPos + 2 * (1 - t) * t * controlY + t * t * startYPos;
            
            // Update position
            containerElement.style.left = x + 'px';
            containerElement.style.top = y + 'px';
            containerElement.style.opacity = baseProgress < 0.1 ? baseProgress * 10 : baseProgress > 0.9 ? (1 - baseProgress) * 10 : 1;
            
            // Update trail with arc trajectory - always add points even during overshoot
            trail.push({ x, y });
            if (trail.length > maxTrailLength) {
                trail.shift();
            }
            
            // Draw trail following the arc with fade effect
            const trailElement = containerElement.querySelector('.star-trail');
            if (trailElement && trail.length > 1) {
                let pathData = '';
                trail.forEach((point, i) => {
                    const relativeX = point.x - x;
                    const relativeY = point.y - y;
                    if (i === 0) {
                        pathData = `M ${relativeX} ${relativeY}`;
                    } else {
                        pathData += ` L ${relativeX} ${relativeY}`;
                    }
                });
                trailElement.setAttribute('d', pathData);
                
                // Fade trail opacity based on star position
                const trailOpacity = Math.max(0.3, 1 - (baseProgress * 0.7));
                trailElement.style.opacity = trailOpacity;
            }
            
            if (!isComplete) {
                requestAnimationFrame(animate);
            }
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
                        width={star.size * 6}
                        height={star.size * 6}
                        viewBox={`-${star.size * 3} -${star.size * 3} ${star.size * 6} ${star.size * 6}`}
                        style={{
                            position: 'absolute',
                            left: -star.size * 3,
                            top: -star.size * 3,
                            pointerEvents: 'none',
                            overflow: 'visible'
                        }}
                    >
                        {/* Trail */}
                        <path
                            className="star-trail"
                            d=""
                            stroke={isDarkMode ? 'rgba(255, 255, 255, 0.6)' : 'rgba(0, 0, 0, 0.6)'}
                            strokeWidth="2"
                            strokeLinecap="round"
                            fill="none"
                        />
                        
                        {/* Star */}
                        <path
                            d={`M 0 -${star.size} L ${star.size * 0.25} -${star.size * 0.25} L ${star.size * 0.95} -${star.size * 0.31} L ${star.size * 0.39} ${star.size * 0.18} L ${star.size * 0.59} ${star.size * 0.81} L 0 ${star.size * 0.5} L -${star.size * 0.59} ${star.size * 0.81} L -${star.size * 0.39} ${star.size * 0.18} L -${star.size * 0.95} -${star.size * 0.31} L -${star.size * 0.25} -${star.size * 0.25} Z`}
                            fill={isDarkMode ? 'white' : 'black'}
                            style={{
                                filter: isDarkMode 
                                    ? 'drop-shadow(0 0 3px rgba(255, 255, 255, 0.8))'
                                    : 'drop-shadow(0 0 3px rgba(0, 0, 0, 0.5))'
                            }}
                        />
                    </svg>
                </div>
            ))}
        </div>
    );
}