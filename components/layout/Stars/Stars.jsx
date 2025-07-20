'use client';

import { useState, useEffect, useRef } from 'react';
import { useHero } from '../../../contexts/HeroContext';
import { useTheme } from '../../../contexts/ThemeContext';

export default function Stars() {
    const [stars, setStars] = useState([]);
    const [explosions, setExplosions] = useState([]);
    const [fragments, setFragments] = useState([]);
    const svgRef = useRef(null);
    const animationRef = useRef(null);
    const { heroComplete } = useHero();
    const { theme } = useTheme();
    
    const isDarkMode = theme === 'dark';

    // Check for collisions between stars
    const checkCollisions = (stars) => {
        const explosions = [];
        const survivingStars = [];
        
        for (let i = 0; i < stars.length; i++) {
            let collided = false;
            
            for (let j = i + 1; j < stars.length; j++) {
                const star1 = stars[i];
                const star2 = stars[j];
                
                // Only check collision between stars going in opposite directions
                if (star1.fromLeft === star2.fromLeft) continue;
                
                const dx = star1.currentX - star2.currentX;
                const dy = star1.currentY - star2.currentY;
                const distance = Math.sqrt(dx * dx + dy * dy);
                const collisionDistance = (star1.size + star2.size) * 3; // Collision radius
                
                if (distance < collisionDistance) {
                    // Create explosion at collision point
                    const explosionX = (star1.currentX + star2.currentX) / 2;
                    const explosionY = (star1.currentY + star2.currentY) / 2;
                    const explosionSize = Math.max(star1.size, star2.size);
                    
                    explosions.push({
                        id: Date.now() + Math.random(),
                        x: explosionX,
                        y: explosionY,
                        size: explosionSize,
                        startTime: null,
                        duration: 800, // 800ms explosion
                        opacity: 0,
                        scale: 0
                    });

                    // Create fragments from collision
                    const numFragments = Math.floor(Math.random() * 4) + 2; // 2-5 fragments
                    const fragmentsToCreate = [];
                    
                    for (let k = 0; k < numFragments; k++) {
                        // Only 60% of fragments survive the collision
                        if (Math.random() > 0.6) continue;
                        
                        const angle = (Math.random() * 360) * (Math.PI / 180);
                        const speed = Math.random() * 2 + 1; // Random speed multiplier
                        const fragmentSize = (star1.size + star2.size) / 4 * (Math.random() * 0.8 + 0.4); // Smaller than original stars
                        
                        fragmentsToCreate.push({
                            id: Date.now() + Math.random() + k,
                            x: explosionX,
                            y: explosionY,
                            vx: Math.cos(angle) * speed, // Velocity in x direction
                            vy: Math.sin(angle) * speed + 0.5, // Velocity in y direction (slightly downward bias)
                            size: fragmentSize,
                            maxOpacity: Math.random() * 0.4 + 0.4, // 0.4-0.8 opacity
                            startTime: null,
                            duration: (Math.random() * 3 + 2) * 1000, // 2-5 seconds
                            gravity: 0.0001, // Gravity acceleration
                            opacity: 0,
                            rotation: Math.random() * 360,
                            rotationSpeed: (Math.random() - 0.5) * 5 // Random rotation speed
                        });
                    }
                    
                    // Add fragments to the collision return
                    explosions.fragments = fragmentsToCreate;
                    
                    collided = true;
                    stars[j].collided = true; // Mark second star as collided
                    break;
                }
            }
            
            if (!collided && !stars[i].collided) {
                survivingStars.push(stars[i]);
            }
        }
        
        return { survivingStars, explosions };
    };

    // Animation loop using requestAnimationFrame
    const animate = useRef((timestamp) => {
        setStars(currentStars => {
            const updatedStars = currentStars.map(star => {
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

            // Check for collisions and handle explosions
            const { survivingStars, explosions: newExplosions } = checkCollisions(updatedStars);
            
            if (newExplosions.length > 0) {
                setExplosions(prev => [...prev, ...newExplosions]);
                
                // Add fragments from explosions
                const allFragments = newExplosions.flatMap(explosion => explosion.fragments || []);
                if (allFragments.length > 0) {
                    setFragments(prev => [...prev, ...allFragments]);
                }
            }

            return survivingStars;
        });

        // Update explosions
        setExplosions(currentExplosions => {
            return currentExplosions.map(explosion => {
                if (!explosion.startTime) {
                    explosion.startTime = timestamp;
                }
                
                const elapsed = timestamp - explosion.startTime;
                const progress = Math.min(elapsed / explosion.duration, 1);
                
                if (progress >= 1) {
                    return { ...explosion, completed: true };
                }
                
                // Explosion animation: scale up and fade out
                const scale = progress * 3; // Scale from 0 to 3
                const opacity = 1 - progress; // Fade from 1 to 0
                
                return {
                    ...explosion,
                    scale,
                    opacity,
                    progress
                };
            }).filter(explosion => !explosion.completed);
        });

        // Update fragments with physics
        setFragments(currentFragments => {
            return currentFragments.map(fragment => {
                if (!fragment.startTime) {
                    fragment.startTime = timestamp;
                }
                
                const elapsed = timestamp - fragment.startTime;
                const progress = Math.min(elapsed / fragment.duration, 1);
                
                if (progress >= 1 || fragment.y > window.innerHeight + 50) {
                    return { ...fragment, completed: true };
                }
                
                // Apply physics: velocity + gravity
                const timeStep = 16; // Approximate frame time in ms
                fragment.vy += fragment.gravity * timeStep; // Apply gravity
                
                const newX = fragment.x + fragment.vx * timeStep;
                const newY = fragment.y + fragment.vy * timeStep;
                const newRotation = fragment.rotation + fragment.rotationSpeed * timeStep;
                
                // Fade out near the end or when falling off screen
                let opacity;
                if (newY > window.innerHeight * 0.8) {
                    // Fade out as fragments approach bottom of screen
                    const fadeProgress = (newY - window.innerHeight * 0.8) / (window.innerHeight * 0.2);
                    opacity = fragment.maxOpacity * (1 - fadeProgress);
                } else if (progress < 0.1) {
                    // Fade in at start
                    opacity = fragment.maxOpacity * (progress / 0.1);
                } else if (progress > 0.8) {
                    // Fade out at end of duration
                    opacity = fragment.maxOpacity * (1 - (progress - 0.8) / 0.2);
                } else {
                    opacity = fragment.maxOpacity;
                }
                
                return {
                    ...fragment,
                    x: newX,
                    y: newY,
                    rotation: newRotation,
                    opacity: Math.max(0, opacity),
                    progress
                };
            }).filter(fragment => !fragment.completed);
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
            setExplosions([]);
            setFragments([]);
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

                {/* Explosion effects */}
                {explosions.map(explosion => (
                    <g key={explosion.id}>
                        {/* Main explosion burst */}
                        <circle
                            cx={explosion.x}
                            cy={explosion.y}
                            r={explosion.size * explosion.scale * 2}
                            fill={isDarkMode ? 'rgba(255,255,255,0.8)' : 'rgba(0,0,0,0.6)'}
                            opacity={explosion.opacity * 0.6}
                        />
                        
                        {/* Outer explosion ring */}
                        <circle
                            cx={explosion.x}
                            cy={explosion.y}
                            r={explosion.size * explosion.scale * 4}
                            fill="none"
                            stroke={isDarkMode ? 'rgba(255,255,255,0.4)' : 'rgba(0,0,0,0.3)'}
                            strokeWidth={explosion.size * 0.5}
                            opacity={explosion.opacity * 0.3}
                        />
                        
                        {/* Sparkle particles */}
                        {[...Array(6)].map((_, i) => {
                            const angle = (i * 60) * (Math.PI / 180);
                            const distance = explosion.size * explosion.scale * 3;
                            const sparkleX = explosion.x + Math.cos(angle) * distance;
                            const sparkleY = explosion.y + Math.sin(angle) * distance;
                            
                            return (
                                <circle
                                    key={i}
                                    cx={sparkleX}
                                    cy={sparkleY}
                                    r={explosion.size * 0.5}
                                    fill={isDarkMode ? '#ffffff' : '#000000'}
                                    opacity={explosion.opacity * 0.8}
                                />
                            );
                        })}
                    </g>
                ))}

                {/* Fragment debris */}
                {fragments.map(fragment => (
                    <g key={fragment.id}>
                        {/* Fragment piece - irregular shape */}
                        <polygon
                            points={`${fragment.x - fragment.size},${fragment.y} ${fragment.x + fragment.size * 0.7},${fragment.y - fragment.size * 0.5} ${fragment.x + fragment.size * 0.3},${fragment.y + fragment.size * 0.8} ${fragment.x - fragment.size * 0.6},${fragment.y + fragment.size * 0.4}`}
                            fill={isDarkMode ? '#ffffff' : '#000000'}
                            opacity={fragment.opacity}
                            transform={`rotate(${fragment.rotation} ${fragment.x} ${fragment.y})`}
                        />
                        
                        {/* Small glow around fragment */}
                        <circle
                            cx={fragment.x}
                            cy={fragment.y}
                            r={fragment.size * 1.5}
                            fill={isDarkMode ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.05)'}
                            opacity={fragment.opacity * 0.3}
                        />
                    </g>
                ))}
            </svg>
        </div>
    );
}