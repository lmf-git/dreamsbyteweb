'use client';

import { useState, useEffect, useRef } from 'react';
import { useHero } from '../../../contexts/HeroContext';
import { useTheme } from '../../../contexts/ThemeContext';

export default function Stars({ frequency = 'normal' }) {
    const [starGroups, setStarGroups] = useState([]);
    const containerRef = useRef(null);
    const { heroComplete } = useHero();
    const { theme } = useTheme();
    
    const isDarkMode = theme === 'dark';

    useEffect(() => {
        if (!heroComplete) return;

        setStarGroups([]);

        const createStarGroup = () => {
            const groupId = Date.now() + Math.random();
            const groupSize = Math.floor(Math.random() * 3) + 1; // 1-3 stars
            const fromLeft = Math.random() > 0.5;
            const baseY = Math.random() * 70 + 15; // 15-85% vertical position
            const arcDirection = (Math.random() - 0.5) * 60; // Arc curve variation
            
            const stars = [];
            for (let i = 0; i < groupSize; i++) {
                const staggerDelay = i * (Math.random() * 400 + 300); // 300-700ms stagger
                stars.push({
                    id: groupId + i,
                    delay: staggerDelay,
                    fromLeft,
                    y: baseY + (Math.random() - 0.5) * 20, // Slight variation within group
                    arc: arcDirection + (Math.random() - 0.5) * 30,
                    duration: Math.random() * 2 + 4, // 4-6 seconds
                    size: Math.random() * 0.8 + 0.8, // 0.8-1.6 scale
                    opacity: Math.random() * 0.3 + 0.7 // 0.7-1.0 opacity
                });
            }

            const newGroup = { id: groupId, stars };
            setStarGroups(prev => [...prev, newGroup]);
            
            // Remove group after all animations complete
            setTimeout(() => {
                setStarGroups(prev => prev.filter(g => g.id !== groupId));
            }, Math.max(...stars.map(s => s.duration * 1000 + s.delay)) + 1000);
        };

        const getFrequencySettings = () => {
            switch (frequency) {
                case 'high':
                    return { initialDelay: 3000, minInterval: 4000, maxInterval: 8000 };
                case 'medium':
                    return { initialDelay: 6000, minInterval: 12000, maxInterval: 20000 };
                default:
                    return { initialDelay: 10000, minInterval: 25000, maxInterval: 45000 };
            }
        };

        const settings = getFrequencySettings();

        const initialDelay = setTimeout(() => {
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
            clearTimeout(initialDelay);
            setStarGroups([]);
        };
    }, [heroComplete, frequency]);

    // Generate SVG path for shooting star with arc
    const generateStarPath = (star) => {
        const startX = star.fromLeft ? -50 : window.innerWidth + 50;
        const endX = star.fromLeft ? window.innerWidth + 50 : -50;
        const startY = (star.y / 100) * window.innerHeight;
        const endY = startY + star.arc;
        
        // Control points for smooth arc
        const midX = (startX + endX) / 2;
        const midY = (startY + endY) / 2 + star.arc * 0.3;
        
        return `M ${startX},${startY} Q ${midX},${midY} ${endX},${endY}`;
    };

    // Generate trail path (slightly behind the star)
    const generateTrailPath = (star, progress = 0.3) => {
        const startX = star.fromLeft ? -50 : window.innerWidth + 50;
        const endX = star.fromLeft ? window.innerWidth + 50 : -50;
        const startY = (star.y / 100) * window.innerHeight;
        const endY = startY + star.arc;
        
        const trailStartX = startX + (endX - startX) * progress;
        const trailStartY = startY + (endY - startY) * progress;
        
        const midX = (trailStartX + endX) / 2;
        const midY = (trailStartY + endY) / 2 + star.arc * 0.2;
        
        return `M ${trailStartX},${trailStartY} Q ${midX},${midY} ${endX},${endY}`;
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
                zIndex: 1,
                overflow: 'hidden'
            }}
        >
            <svg
                width="100%"
                height="100%"
                style={{ position: 'absolute', top: 0, left: 0 }}
            >
                <defs>
                    {/* Glow filter for stars */}
                    <filter id="starGlow" x="-50%" y="-50%" width="200%" height="200%">
                        <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                        <feMerge>
                            <feMergeNode in="coloredBlur"/>
                            <feMergeNode in="SourceGraphic"/>
                        </feMerge>
                    </filter>
                    
                    {/* Gradient for trail */}
                    <linearGradient id="trailGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" style={{
                            stopColor: isDarkMode ? '#ffffff' : '#000000',
                            stopOpacity: 0
                        }} />
                        <stop offset="70%" style={{
                            stopColor: isDarkMode ? '#ffffff' : '#000000',
                            stopOpacity: 0.3
                        }} />
                        <stop offset="100%" style={{
                            stopColor: isDarkMode ? '#ffffff' : '#000000',
                            stopOpacity: 0.8
                        }} />
                    </linearGradient>
                </defs>

                {starGroups.map(group => 
                    group.stars.map(star => (
                        <g key={star.id}>
                            {/* Trail path */}
                            <path
                                d={generateTrailPath(star)}
                                stroke="url(#trailGradient)"
                                strokeWidth={star.size * 1.5}
                                fill="none"
                                strokeLinecap="round"
                                style={{
                                    opacity: 0,
                                    animation: `trail-${star.id} ${star.duration}s ease-out ${star.delay}ms forwards`
                                }}
                            />
                            
                            {/* Main star */}
                            <circle
                                r={star.size * 2}
                                fill={isDarkMode ? '#ffffff' : '#000000'}
                                filter="url(#starGlow)"
                                style={{
                                    opacity: 0,
                                    animation: `star-${star.id} ${star.duration}s ease-out ${star.delay}ms forwards`
                                }}
                            >
                                <animateMotion
                                    dur={`${star.duration}s`}
                                    begin={`${star.delay}ms`}
                                    repeatCount="1"
                                    path={generateStarPath(star)}
                                />
                            </circle>
                            
                            {/* Subtle glow behind star */}
                            <circle
                                r={star.size * 4}
                                fill={isDarkMode ? 'rgba(255,255,255,0.2)' : 'rgba(0,0,0,0.1)'}
                                style={{
                                    opacity: 0,
                                    animation: `glow-${star.id} ${star.duration}s ease-out ${star.delay}ms forwards`
                                }}
                            >
                                <animateMotion
                                    dur={`${star.duration}s`}
                                    begin={`${star.delay}ms`}
                                    repeatCount="1"
                                    path={generateStarPath(star)}
                                />
                            </circle>
                        </g>
                    ))
                )}
            </svg>
            
            <style jsx>{`
                ${starGroups.map(group => 
                    group.stars.map(star => `
                        @keyframes star-${star.id} {
                            0% { opacity: 0; }
                            20% { opacity: ${star.opacity}; }
                            80% { opacity: ${star.opacity}; }
                            100% { opacity: 0; }
                        }
                        
                        @keyframes trail-${star.id} {
                            0% { 
                                opacity: 0;
                                stroke-dasharray: 0 200;
                            }
                            30% { 
                                opacity: 0.6;
                                stroke-dasharray: 50 200;
                            }
                            70% { 
                                opacity: 0.6;
                                stroke-dasharray: 50 200;
                            }
                            100% { 
                                opacity: 0;
                                stroke-dasharray: 0 200;
                            }
                        }
                        
                        @keyframes glow-${star.id} {
                            0% { opacity: 0; }
                            30% { opacity: 0.4; }
                            70% { opacity: 0.4; }
                            100% { opacity: 0; }
                        }
                    `).join('')
                ).join('')}
            `}</style>
        </div>
    );
}