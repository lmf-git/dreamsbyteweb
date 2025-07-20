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
                        size: Math.random() * 3 + 2,
                        opacity: Math.random() * 0.3 + 0.8
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
            {stars.map(star => (
                <div
                    key={star.id}
                    style={{
                        position: 'absolute',
                        left: 0,
                        top: `${star.startY}%`,
                        width: '100%',
                        height: '2px',
                        pointerEvents: 'none'
                    }}
                >
                    <div
                        style={{
                            position: 'absolute',
                            left: star.fromLeft ? '-100px' : 'calc(100% + 50px)',
                            top: 0,
                            width: '80px',
                            height: '2px',
                            background: `linear-gradient(${star.fromLeft ? '90deg' : '270deg'}, transparent 0%, ${isDarkMode ? 'rgba(255,255,255,0.4)' : 'rgba(0,0,0,0.4)'} 70%, ${isDarkMode ? 'rgba(255,255,255,0.9)' : 'rgba(0,0,0,0.9)'} 100%)`,
                            borderRadius: '1px',
                            transformOrigin: star.fromLeft ? 'left center' : 'right center',
                            animation: `trail-${star.id} ${star.duration}s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards`
                        }}
                    />
                    
                    <div
                        style={{
                            position: 'absolute',
                            left: star.fromLeft ? '-6px' : 'calc(100% + 6px)',
                            top: '-1px',
                            width: '4px',
                            height: '4px',
                            background: isDarkMode ? '#ffffff' : '#000000',
                            borderRadius: '50%',
                            boxShadow: isDarkMode 
                                ? `0 0 8px rgba(255,255,255,0.8), 0 0 16px rgba(255,255,255,0.4)` 
                                : `0 0 8px rgba(0,0,0,0.6), 0 0 16px rgba(0,0,0,0.3)`,
                            animation: `star-${star.id} ${star.duration}s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards`
                        }}
                    />
                    
                    <style jsx>{`
                        @keyframes trail-${star.id} {
                            0% {
                                opacity: 0;
                                transform: translateX(0) translateY(0) scaleX(0);
                            }
                            15% {
                                opacity: 1;
                                transform: translateX(0) translateY(0) scaleX(1);
                            }
                            85% {
                                opacity: 1;
                            }
                            100% {
                                opacity: 0;
                                transform: translateX(${star.fromLeft ? 'calc(100vw + 100px)' : 'calc(-100vw - 100px)'}) translateY(${(star.endY - star.startY) * 3}px) scaleX(1);
                            }
                        }
                        
                        @keyframes star-${star.id} {
                            0% {
                                opacity: 0;
                                transform: translateX(0) translateY(0);
                            }
                            10% {
                                opacity: 1;
                            }
                            90% {
                                opacity: 1;
                            }
                            100% {
                                opacity: 0;
                                transform: translateX(${star.fromLeft ? 'calc(100vw + 12px)' : 'calc(-100vw - 12px)'}) translateY(${(star.endY - star.startY) * 3}px);
                            }
                        }
                    `}</style>
                </div>
            ))}
        </div>
    );
}