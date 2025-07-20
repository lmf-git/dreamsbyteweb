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

        const createStar = () => {
            const id = Date.now() + Math.random();
            const star = {
                id,
                fromLeft: Math.random() > 0.5,
                startY: Math.random() * 60 + 20, // 20%-80% of screen height
                duration: Math.random() * 2 + 4, // 4-6 seconds
                size: Math.random() * 6 + 6 // 6-12px
            };

            setStars(prev => [...prev, star]);

            // Remove star after animation completes
            setTimeout(() => {
                setStars(prev => prev.filter(s => s.id !== id));
            }, star.duration * 1000 + 500);
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
            // Create initial star immediately
            createStar();
            
            // Then create stars at intervals
            const interval = setInterval(() => {
                createStar();
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
        
        // Arc calculation for curved motion
        const midX = (startX + endX) / 2;
        const arcHeight = screenHeight * 0.15; // 15% of screen height for arc
        const controlY = startYPos - arcHeight;
        
        // Trail tracking
        const trail = [];
        const maxTrailLength = 8;
        
        const startTime = performance.now();
        let isComplete = false;
        
        const animate = (currentTime) => {
            if (isComplete || !containerElement?.parentNode) return;
            
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / (star.duration * 1000), 1);
            
            if (progress >= 1) {
                isComplete = true;
                return;
            }
            
            // Quadratic bezier curve for arc motion
            const t = progress;
            const x = (1 - t) * (1 - t) * startX + 2 * (1 - t) * t * midX + t * t * endX;
            const y = (1 - t) * (1 - t) * startYPos + 2 * (1 - t) * t * controlY + t * t * startYPos;
            
            // Update position
            containerElement.style.left = x + 'px';
            containerElement.style.top = y + 'px';
            containerElement.style.opacity = progress < 0.1 ? progress * 10 : progress > 0.9 ? (1 - progress) * 10 : 1;
            
            // Update trail
            trail.push({ x, y });
            if (trail.length > maxTrailLength) {
                trail.shift();
            }
            
            // Draw trail
            const trailElement = containerElement.querySelector('.star-trail');
            if (trailElement && trail.length > 1) {
                let pathData = `M 0 0`; // Start at star center
                for (let i = trail.length - 2; i >= 0; i--) {
                    const point = trail[i];
                    const relativeX = point.x - x;
                    const relativeY = point.y - y;
                    pathData += ` L ${relativeX} ${relativeY}`;
                }
                trailElement.setAttribute('d', pathData);
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
                            d={`M 0 -${star.size} L ${star.size * 0.3} -${star.size * 0.3} L ${star.size} 0 L ${star.size * 0.3} ${star.size * 0.3} L 0 ${star.size} L -${star.size * 0.3} ${star.size * 0.3} L -${star.size} 0 L -${star.size * 0.3} -${star.size * 0.3} Z`}
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