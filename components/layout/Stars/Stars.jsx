'use client';

import { useState, useEffect, useRef } from 'react';
import { useHero } from '../../../contexts/HeroContext';
import { useTheme } from '../../../contexts/ThemeContext';

export default function Stars({ frequency = 'normal' }) {
    const [stars, setStars] = useState([]);
    const containerRef = useRef(null);
    const { heroComplete } = useHero();
    const { theme } = useTheme();
    
    const isDarkMode = theme === 'dark';

    useEffect(() => {
        if (!heroComplete) return;

        setStars([]);

        const createStarGroup = () => {
            const groupSize = Math.floor(Math.random() * 3) + 1; // 1-3 stars
            const baseFromLeft = Math.random() > 0.5;
            const baseStartY = Math.random() * 60 + 20;
            const baseEndY = baseStartY + (Math.random() - 0.5) * 30;
            
            for (let i = 0; i < groupSize; i++) {
                const id = Date.now() + Math.random() + i;
                const staggerDelay = i * (Math.random() * 300 + 200); // 200-500ms between stars
                
                setTimeout(() => {
                    const star = {
                        id,
                        fromLeft: baseFromLeft,
                        startY: baseStartY + (Math.random() - 0.5) * 15, // Slight variation within group
                        endY: baseEndY + (Math.random() - 0.5) * 20,
                        duration: Math.random() * 2 + 3,
                        size: Math.random() * 2 + 1,
                        opacity: Math.random() * 0.4 + 0.6
                    };

                    setStars(prev => [...prev, star]);
                    
                    setTimeout(() => {
                        setStars(prev => prev.filter(s => s.id !== id));
                    }, star.duration * 1000 + 1000);
                }, staggerDelay);
            }
        };

        const getFrequencySettings = () => {
            switch (frequency) {
                case 'high':
                    return { initialDelay: 2000, minInterval: 3000, maxInterval: 6000 };
                case 'medium':
                    return { initialDelay: 5000, minInterval: 8000, maxInterval: 15000 };
                default:
                    return { initialDelay: 8000, minInterval: 20000, maxInterval: 40000 };
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
            setStars([]);
        };
    }, [heroComplete, frequency]);

    return (
        <div 
            ref={containerRef}
            className="fixed inset-0 w-full h-full pointer-events-none z-0 overflow-hidden"
        >
            {stars.map(star => (
                <div
                    key={star.id}
                    className="absolute"
                    style={{
                        left: star.fromLeft ? '-100px' : 'calc(100% + 100px)',
                        top: `${star.startY}%`,
                        opacity: 0
                    }}
                >
                    <svg
                        width="200"
                        height="100"
                        viewBox="0 0 200 100"
                        className="absolute"
                        style={{
                            left: star.fromLeft ? '0' : '-200px',
                            top: '-50px'
                        }}
                    >
                        <defs>
                            <linearGradient 
                                id={`trail-${star.id}`} 
                                x1="0%" 
                                y1="0%" 
                                x2="100%" 
                                y2="0%"
                            >
                                <stop 
                                    offset="0%" 
                                    stopColor={isDarkMode ? 'white' : 'black'} 
                                    stopOpacity="0"
                                />
                                <stop 
                                    offset="70%" 
                                    stopColor={isDarkMode ? 'white' : 'black'} 
                                    stopOpacity={star.opacity * 0.3}
                                />
                                <stop 
                                    offset="100%" 
                                    stopColor={isDarkMode ? 'white' : 'black'} 
                                    stopOpacity={star.opacity}
                                />
                            </linearGradient>
                        </defs>
                        
                        <path
                            d={`M 0 50 Q 100 ${50 + (star.endY - star.startY)} 200 50`}
                            stroke={`url(#trail-${star.id})`}
                            strokeWidth={star.size}
                            strokeLinecap="round"
                            fill="none"
                            className="animate-[shootingStar_var(--duration)_ease-out_forwards]"
                            style={{
                                '--duration': `${star.duration}s`,
                                transform: star.fromLeft ? 'none' : 'scaleX(-1)',
                                transformOrigin: 'center',
                                strokeDasharray: '0 200',
                                animation: `shootingStar ${star.duration}s ease-out forwards`
                            }}
                        />
                        
                        <circle
                            cx={star.fromLeft ? "190" : "10"}
                            cy="50"
                            r={star.size * 1.5}
                            fill={isDarkMode ? 'white' : 'black'}
                            opacity={star.opacity}
                            className="animate-[starMove_var(--duration)_ease-out_forwards]"
                            style={{
                                '--duration': `${star.duration}s`,
                                filter: `blur(${star.size * 0.5}px)`,
                                animation: `starMove ${star.duration}s ease-out forwards`
                            }}
                        />
                    </svg>
                    
                    <style jsx>{`
                        @keyframes shootingStar {
                            0% {
                                stroke-dasharray: 0 200;
                                opacity: 0;
                            }
                            10% {
                                opacity: 1;
                            }
                            50% {
                                stroke-dasharray: 100 200;
                            }
                            90% {
                                stroke-dasharray: 200 200;
                                opacity: 1;
                            }
                            100% {
                                stroke-dasharray: 200 200;
                                opacity: 0;
                            }
                        }
                        
                        @keyframes starMove {
                            0% {
                                transform: translateX(${star.fromLeft ? '-200px' : '200px'}) translateY(0);
                                opacity: 0;
                            }
                            10% {
                                opacity: 1;
                            }
                            90% {
                                opacity: 1;
                            }
                            100% {
                                transform: translateX(${star.fromLeft ? 'calc(100vw + 200px)' : 'calc(-100vw - 200px)'}) translateY(${(star.endY - star.startY) * 2}px);
                                opacity: 0;
                            }
                        }
                    `}</style>
                </div>
            ))}
        </div>
    );
}