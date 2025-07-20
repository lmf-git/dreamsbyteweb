'use client';

import { useState, useEffect, useRef } from 'react';
import { useHero } from '../../../contexts/HeroContext';
import { useTheme } from '../../../contexts/ThemeContext';

export default function Stars() {
    const [stars, setStars] = useState([]);
    const svgRef = useRef(null);
    const animationRef = useRef(null);
    const { heroComplete } = useHero();
    const { theme } = useTheme();
    
    const isDarkMode = theme === 'dark';

    // Animation loop using requestAnimationFrame
    const animate = useRef((timestamp) => {
        setStars(currentStars => {
            return currentStars.map(star => {
                if (!star.startTime) {
                    star.startTime = timestamp;
                }
                
                const elapsed = timestamp - star.startTime;
                const progress = Math.min(elapsed / star.duration, 1);
                
                if (progress >= 1) {
                    return { ...star, completed: true };
                }
                
                // Calculate position along arc
                const startX = star.fromLeft ? -50 : window.innerWidth + 50;
                const endX = star.fromLeft ? window.innerWidth + 50 : -50;
                const startY = star.y;
                const endY = star.y + star.arc;
                
                // Acceleration curve - slow start, accelerate in middle, zip at end
                const accelProgress = progress < 0.5 
                    ? 2 * progress * progress  // accelerate in first half
                    : 1 - 2 * (1 - progress) * (1 - progress); // continue accelerating to end
                
                const currentX = startX + (endX - startX) * accelProgress;
                
                // Create arc using quadratic curve formula with acceleration
                const midX = (startX + endX) / 2;
                const arcHeight = star.arc;
                const currentY = startY + (endY - startY) * accelProgress + 
                                arcHeight * Math.sin(Math.PI * accelProgress);
                
                // Calculate trail path with proper arc using acceleration
                const trailProgress = Math.max(0, progress - 0.15);
                const trailAccelProgress = trailProgress < 0.5 
                    ? 2 * trailProgress * trailProgress
                    : 1 - 2 * (1 - trailProgress) * (1 - trailProgress);
                
                const trailStartX = startX + (endX - startX) * trailAccelProgress;
                const trailStartY = startY + (endY - startY) * trailAccelProgress + 
                                   arcHeight * Math.sin(Math.PI * trailAccelProgress);
                
                // Create curved trail using quadratic Bézier curve that follows the arc
                const trailMidProgress = (trailAccelProgress + accelProgress) / 2;
                const trailMidX = startX + (endX - startX) * trailMidProgress;
                const trailMidY = startY + (endY - startY) * trailMidProgress + 
                                 arcHeight * Math.sin(Math.PI * trailMidProgress);
                
                const trailPath = `M ${trailStartX},${trailStartY} Q ${trailMidX},${trailMidY} ${currentX},${currentY}`;
                
                // Opacity calculations
                let opacity = 0;
                let trailOpacity = 0;
                
                if (progress < 0.2) {
                    opacity = (progress / 0.2) * star.maxOpacity;
                    trailOpacity = (progress / 0.2) * 0.6;
                } else if (progress < 0.8) {
                    opacity = star.maxOpacity;
                    trailOpacity = 0.6;
                } else {
                    opacity = star.maxOpacity * (1 - (progress - 0.8) / 0.2);
                    trailOpacity = 0.6 * (1 - (progress - 0.8) / 0.2);
                }
                
                return {
                    ...star,
                    currentX,
                    currentY,
                    trailPath,
                    opacity,
                    trailOpacity,
                    progress
                };
            }).filter(star => !star.completed);
        });
        
        animationRef.current = requestAnimationFrame(animate.current);
    });

    useEffect(() => {
        if (!heroComplete) return;

        const createStarGroup = () => {
            const groupSize = Math.floor(Math.random() * 3) + 1; // 1-3 stars
            const fromLeft = Math.random() > 0.5;
            const baseY = Math.random() * 70 + 15; // 15-85% vertical position
            const arcDirection = Math.random() * -60 - 20; // Always upward arc (-20 to -80)
            
            const newStars = [];
            for (let i = 0; i < groupSize; i++) {
                const staggerDelay = i * (Math.random() * 400 + 300); // 300-700ms stagger
                
                setTimeout(() => {
                    const star = {
                        id: Date.now() + Math.random() + i,
                        fromLeft,
                        y: (baseY + (Math.random() - 0.5) * 20) / 100 * window.innerHeight,
                        arc: arcDirection + (Math.random() - 0.5) * 20, // Smaller variation to keep upward
                        duration: (Math.random() * 2 + 4) * 1000, // 4-6 seconds in ms
                        size: Math.random() * 1.5 + 0.8, // 0.8-2.3 scale for more variety
                        maxOpacity: Math.random() * 0.5 + 0.4, // 0.4-0.9 opacity for more variety
                        startTime: null,
                        currentX: 0,
                        currentY: 0,
                        trailPath: '',
                        opacity: 0,
                        trailOpacity: 0,
                        progress: 0
                    };

                    setStars(prev => [...prev, star]);
                }, staggerDelay);
            }
        };

        // Start animation loop
        animationRef.current = requestAnimationFrame(animate.current);

        // Create star groups
        const settings = { initialDelay: 2000, minInterval: 3000, maxInterval: 8000 };

        const initialTimer = setTimeout(() => {
            createStarGroup();
            
            const createNextStarGroup = () => {
                const nextDelay = Math.random() * (settings.maxInterval - settings.minInterval) + settings.minInterval;
                setTimeout(() => {
                    createStarGroup();
                    createNextStarGroup();
                }, nextDelay);
            };
            
            createNextStarGroup();
        }, settings.initialDelay);

        return () => {
            clearTimeout(initialTimer);
            if (animationRef.current) {
                cancelAnimationFrame(animationRef.current);
            }
            setStars([]);
        };
    }, [heroComplete]);

    return (
        <div 
            style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100vh',
                pointerEvents: 'none',
                zIndex: 1,
                overflow: 'hidden'
            }}
        >
            <svg
                ref={svgRef}
                width="100%"
                height="100%"
                style={{ position: 'absolute', top: 0, left: 0 }}
            >
                <defs>
                    {/* Glow filter for stars */}
                    <filter id="starGlow" x="-100%" y="-100%" width="300%" height="300%">
                        <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                        <feMerge>
                            <feMergeNode in="coloredBlur"/>
                            <feMergeNode in="SourceGraphic"/>
                        </feMerge>
                    </filter>
                    
                    {/* Linear gradient for trail - left to right */}
                    <linearGradient id="trailGradientLTR" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor={isDarkMode ? '#ffffff' : '#000000'} stopOpacity="0" />
                        <stop offset="50%" stopColor={isDarkMode ? '#ffffff' : '#000000'} stopOpacity="0.3" />
                        <stop offset="100%" stopColor={isDarkMode ? '#ffffff' : '#000000'} stopOpacity="0.8" />
                    </linearGradient>
                    
                    {/* Linear gradient for trail - right to left */}
                    <linearGradient id="trailGradientRTL" x1="100%" y1="0%" x2="0%" y2="0%">
                        <stop offset="0%" stopColor={isDarkMode ? '#ffffff' : '#000000'} stopOpacity="0" />
                        <stop offset="50%" stopColor={isDarkMode ? '#ffffff' : '#000000'} stopOpacity="0.3" />
                        <stop offset="100%" stopColor={isDarkMode ? '#ffffff' : '#000000'} stopOpacity="0.8" />
                    </linearGradient>
                </defs>

                {stars.map(star => (
                    <g key={star.id}>
                        {/* Trail path */}
                        {star.trailPath && (
                            <path
                                d={star.trailPath}
                                stroke={`url(#trailGradient${star.fromLeft ? 'LTR' : 'RTL'})`}
                                strokeWidth={star.size * 1.5}
                                fill="none"
                                strokeLinecap="round"
                                opacity={star.trailOpacity}
                            />
                        )}
                        
                        {/* Main star with variable size */}
                        <circle
                            cx={star.currentX}
                            cy={star.currentY}
                            r={star.size * 1.5}
                            fill={isDarkMode ? '#ffffff' : '#000000'}
                            filter="url(#starGlow)"
                            opacity={star.opacity}
                        />
                        
                        {/* Subtle glow behind star - scales with star size */}
                        <circle
                            cx={star.currentX}
                            cy={star.currentY}
                            r={star.size * 3.5}
                            fill={isDarkMode ? 'rgba(255,255,255,0.15)' : 'rgba(0,0,0,0.08)'}
                            opacity={star.opacity * 0.4}
                        />
                    </g>
                ))}
            </svg>
        </div>
    );
}