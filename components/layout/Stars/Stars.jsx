'use client';

import { useState, useEffect, useRef } from 'react';
import { useHero } from '../../../contexts/HeroContext';
import { useTheme } from '../../../contexts/ThemeContext';
import { useStars } from '../../../contexts/StarsContext';
import styles from './Stars.module.scss';

export default function Stars() {
    const [stars, setStars] = useState([]);
    const [explosions, setExplosions] = useState([]);
    const [fragments, setFragments] = useState([]);
    const [fadingTrails, setFadingTrails] = useState([]);
    const svgRef = useRef(null);
    const animationRef = useRef(null);
    const { heroComplete } = useHero();
    const { theme } = useTheme();
    const { dangerMode } = useStars();
    
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

                    // Create fragments from collision AND new stars
                    const collisionFragments = [];
                    const newStars = [];
                    
                    // 30% chance to produce 2 new stars with trails instead of just debris
                    if (Math.random() < 0.3) {
                        // Create 2 new stars from collision
                        for (let k = 0; k < 2; k++) {
                            const deflectionAngle = k === 0 ? 
                                Math.random() * 60 + 30 : // First star: 30-90 degrees
                                Math.random() * 60 - 90;  // Second star: -30 to -90 degrees
                            
                            const angle = deflectionAngle * (Math.PI / 180);
                            const newSize = Math.min(star1.size, star2.size) * (Math.random() * 0.4 + 0.6); // 60-100% of smaller star
                            const speed = Math.random() * 1.5 + 0.8; // Reduced speed from collision
                            
                            newStars.push({
                                id: Date.now() + Math.random() + k + 100,
                                fromLeft: Math.cos(angle) > 0 ? false : true, // Direction based on deflection
                                y: explosionY,
                                arc: Math.random() * -40 - 10, // Upward arc but less dramatic
                                duration: (Math.random() * 2 + 3) * 1000, // 3-5 seconds
                                size: newSize,
                                maxOpacity: Math.random() * 0.3 + 0.5, // 0.5-0.8 opacity (dimmer)
                                startTime: null,
                                currentX: explosionX,
                                currentY: explosionY,
                                // Override normal motion with collision deflection
                                isDeflected: true,
                                deflectionVX: Math.cos(angle) * speed * 2, // Horizontal velocity
                                deflectionVY: Math.sin(angle) * speed, // Vertical velocity
                                trailPath: '',
                                opacity: 0,
                                trailOpacity: 0,
                                progress: 0
                            });
                        }
                    }
                    
                    // Always create some debris fragments too
                    const numFragments = Math.floor(Math.random() * 3) + 1; // 1-3 fragments
                    
                    for (let k = 0; k < numFragments; k++) {
                        // Only 50% of fragments survive the collision
                        if (Math.random() > 0.5) continue;
                        
                        const angle = (Math.random() * 360) * (Math.PI / 180);
                        const speed = Math.random() * 2 + 1; // Random speed multiplier
                        const fragmentSize = (star1.size + star2.size) / 4 * (Math.random() * 0.8 + 0.4); // Smaller than original stars
                        
                        collisionFragments.push({
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
                    
                    // Add fragments and new stars to the collision return
                    explosions.fragments = collisionFragments;
                    explosions.newStars = newStars;
                    
                    // Create fading trails for collided stars with better data capture
                    const createFadingTrail = (star) => {
                        if (star.trailPath && star.trailOpacity > 0.1) {
                            // Capture the full trail state at collision
                            const trail = {
                                id: `fading_${Date.now()}_${Math.random()}_${star.id}`,
                                originalPath: star.trailPath, // Store original full path
                                currentPath: star.trailPath,  // Working path for retraction
                                fromLeft: star.fromLeft,
                                size: star.size,
                                startTime: null,
                                duration: 4000, // 4 second retraction
                                maxOpacity: Math.max(star.trailOpacity, 0.7),
                                opacity: Math.max(star.trailOpacity, 0.7),
                                collisionX: explosionX,
                                collisionY: explosionY,
                                isRetracting: true
                            };
                            console.log('Created fading trail:', trail.id, 'opacity:', trail.opacity, 'path:', trail.originalPath.substring(0, 50));
                            return trail;
                        }
                        return null;
                    };

                    const trail1 = createFadingTrail(star1);
                    const trail2 = createFadingTrail(star2);
                    
                    // Store trails separately to add to state later
                    const collisionTrails = [];
                    if (trail1) collisionTrails.push(trail1);
                    if (trail2) collisionTrails.push(trail2);
                    
                    // Attach trails to explosion for processing, but manage them independently
                    explosions.collisionTrails = collisionTrails;
                    
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
                
                let currentX, currentY;
                
                // Handle deflected stars from collisions differently
                if (star.isDeflected) {
                    // Apply simple physics for deflected stars
                    const timeStep = elapsed / 1000; // Convert to seconds
                    currentX = star.currentX + star.deflectionVX * timeStep * 60; // Scale for screen coordinates
                    currentY = star.currentY + star.deflectionVY * timeStep * 60 + 
                              0.5 * 0.1 * timeStep * timeStep * 60; // Add slight gravity
                } else {
                    // Normal star motion
                    // Calculate position along arc
                    const startX = star.fromLeft ? -50 : window.innerWidth + 50;
                    const endX = star.fromLeft ? window.innerWidth + 50 : -50;
                    const startY = star.y;
                    const endY = star.y + star.arc;
                    
                    // Acceleration curve - slow start, accelerate in middle, zip at end
                    const accelProgress = progress < 0.5 
                        ? 2 * progress * progress  // accelerate in first half
                        : 1 - 2 * (1 - progress) * (1 - progress); // continue accelerating to end
                    
                    currentX = startX + (endX - startX) * accelProgress;
                    
                    // Create arc using quadratic curve formula with acceleration
                    const midX = (startX + endX) / 2;
                    const arcHeight = star.arc;
                    currentY = startY + (endY - startY) * accelProgress + 
                                      arcHeight * Math.sin(Math.PI * accelProgress);
                }
                
                // Calculate trail path based on star type
                let trailPath = '';
                
                if (star.isDeflected) {
                    // Simple straight trail for deflected stars
                    const trailLength = 30; // Shorter trail for deflected stars
                    const trailStartX = currentX - star.deflectionVX * 0.5;
                    const trailStartY = currentY - star.deflectionVY * 0.5;
                    trailPath = `M ${trailStartX},${trailStartY} L ${currentX},${currentY}`;
                } else {
                    // Normal curved trail for regular stars
                    const startX = star.fromLeft ? -50 : window.innerWidth + 50;
                    const endX = star.fromLeft ? window.innerWidth + 50 : -50;
                    const startY = star.y;
                    const endY = star.y + star.arc;
                    const arcHeight = star.arc;
                    
                    const trailProgress = Math.max(0, progress - 0.15);
                    const trailAccelProgress = trailProgress < 0.5 
                        ? 2 * trailProgress * trailProgress
                        : 1 - 2 * (1 - trailProgress) * (1 - trailProgress);
                    
                    const accelProgress = progress < 0.5 
                        ? 2 * progress * progress
                        : 1 - 2 * (1 - progress) * (1 - progress);
                    
                    const trailStartX = startX + (endX - startX) * trailAccelProgress;
                    const trailStartY = startY + (endY - startY) * trailAccelProgress + 
                                       arcHeight * Math.sin(Math.PI * trailAccelProgress);
                    
                    // Create curved trail using quadratic Bézier curve that follows the arc
                    const trailMidProgress = (trailAccelProgress + accelProgress) / 2;
                    const trailMidX = startX + (endX - startX) * trailMidProgress;
                    const trailMidY = startY + (endY - startY) * trailMidProgress + 
                                     arcHeight * Math.sin(Math.PI * trailMidProgress);
                    
                    trailPath = `M ${trailStartX},${trailStartY} Q ${trailMidX},${trailMidY} ${currentX},${currentY}`;
                }
                
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
                
                // Add new deflected stars from collisions
                const allNewStars = newExplosions.flatMap(explosion => explosion.newStars || []);
                if (allNewStars.length > 0) {
                    return [...survivingStars, ...allNewStars];
                }

                // Add fading trails from collisions - completely independent of explosions
                const allCollisionTrails = newExplosions.flatMap(explosion => explosion.collisionTrails || []);
                if (allCollisionTrails.length > 0) {
                    setFadingTrails(prev => [...prev, ...allCollisionTrails]);
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

        // Update fading trails with improved retraction logic
        setFadingTrails(currentTrails => {
            if (currentTrails.length > 0) {
                console.log('Updating', currentTrails.length, 'fading trails');
            }
            return currentTrails.map(trail => {
                if (!trail.startTime) {
                    trail.startTime = timestamp;
                }
                
                const elapsed = timestamp - trail.startTime;
                const progress = Math.min(elapsed / trail.duration, 1);
                
                if (progress >= 1) {
                    return { ...trail, completed: true };
                }
                
                // Improved retraction effect
                let newPath = trail.originalPath;
                let opacity = trail.maxOpacity;
                
                // Create a retraction that moves from collision point backward along the trail
                if (progress > 0) {
                    try {
                        // Parse the original path more robustly
                        let pathData = trail.originalPath;
                        
                        // Extract coordinates from the path
                        if (pathData.includes('Q')) {
                            // Curved path: M startX,startY Q controlX,controlY endX,endY
                            const match = pathData.match(/M\s*([\d.-]+),([\d.-]+)\s*Q\s*([\d.-]+),([\d.-]+)\s*([\d.-]+),([\d.-]+)/);
                            if (match) {
                                const [, startX, startY, controlX, controlY, endX, endY] = match.map(Number);
                                
                                // CORRECT: Retract from the far end (endX, endY) back toward collision point (startX, startY)
                                // The trail should shrink from the far end back toward where the collision happened
                                const retractAmount = progress; // 0 = full trail, 1 = trail fully retracted to collision point
                                const remainingProgress = 1 - retractAmount; // How much of the trail from collision point is still visible
                                
                                // Calculate new start point - trail retracts from the far end
                                const t = remainingProgress; // Parameter for how much trail remains
                                const newStartX = (1-t)*(1-t)*startX + 2*(1-t)*t*controlX + t*t*endX;
                                const newStartY = (1-t)*(1-t)*startY + 2*(1-t)*t*controlY + t*t*endY;
                                
                                // Adjust control point to maintain curve shape as trail shortens
                                const newControlX = newStartX + (controlX - startX) * remainingProgress;
                                const newControlY = newStartY + (controlY - startY) * remainingProgress;
                                
                                // Trail now goes from the new retracted start point to the original end
                                newPath = `M ${newStartX},${newStartY} Q ${newControlX},${newControlY} ${endX},${endY}`;
                                
                                // Keep strong opacity during retraction
                                opacity = trail.maxOpacity * Math.max(0.6, remainingProgress);
                            }
                        } else if (pathData.includes('L')) {
                            // Straight path: M startX,startY L endX,endY
                            const match = pathData.match(/M\s*([\d.-]+),([\d.-]+)\s*L\s*([\d.-]+),([\d.-]+)/);
                            if (match) {
                                const [, startX, startY, endX, endY] = match.map(Number);
                                
                                // CORRECT: Retract from the far end back toward collision point
                                const retractAmount = progress;
                                const remainingProgress = 1 - retractAmount;
                                
                                // Calculate new start point as trail retracts from far end
                                const newStartX = startX + (endX - startX) * retractAmount;
                                const newStartY = startY + (endY - startY) * retractAmount;
                                
                                // Trail now goes from the new retracted start to the original end
                                newPath = `M ${newStartX},${newStartY} L ${endX},${endY}`;
                                
                                // Keep strong opacity during retraction
                                opacity = trail.maxOpacity * Math.max(0.6, remainingProgress);
                            }
                        }
                    } catch (error) {
                        // Fallback to simple opacity fade if path parsing fails
                        opacity = trail.maxOpacity * (1 - progress);
                    }
                }
                
                return {
                    ...trail,
                    currentPath: newPath,
                    opacity: Math.max(0, opacity),
                    progress
                };
            }).filter(trail => !trail.completed);
        });
        
        animationRef.current = requestAnimationFrame(animate.current);
    });

    // Track the star creation intervals separately
    const intervalRef = useRef(null);
    const isVisibleRef = useRef(true);

    // Define createStarGroup function outside useEffects so it can be shared
    const createStarGroup = () => {
            const groupSize = dangerMode 
                ? Math.floor(Math.random() * 4) + 2  // 2-5 stars per group (danger mode)
                : Math.floor(Math.random() * 3) + 1; // 1-3 stars per group (normal)
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

    // Handle visibility changes to prevent star buildup when tabbed out
    useEffect(() => {
        const handleVisibilityChange = () => {
            if (document.hidden) {
                isVisibleRef.current = false;
                // Stop animation when hidden
                if (animationRef.current) {
                    cancelAnimationFrame(animationRef.current);
                    animationRef.current = null;
                }
                // Clear star creation interval
                if (intervalRef.current) {
                    clearTimeout(intervalRef.current);
                    intervalRef.current = null;
                }
            } else {
                isVisibleRef.current = true;
                // Reset all star timestamps so they don't jump forward
                setStars(currentStars =>
                    currentStars.map(star => ({ ...star, startTime: null }))
                );
                setExplosions(currentExplosions =>
                    currentExplosions.map(exp => ({ ...exp, startTime: null }))
                );
                setFragments(currentFragments =>
                    currentFragments.map(frag => ({ ...frag, startTime: null }))
                );
                setFadingTrails(currentTrails =>
                    currentTrails.map(trail => ({ ...trail, startTime: null }))
                );
                // Restart animation loop if heroComplete
                if (heroComplete && !animationRef.current) {
                    animationRef.current = requestAnimationFrame(animate.current);
                }
            }
        };

        document.addEventListener('visibilitychange', handleVisibilityChange);
        return () => {
            document.removeEventListener('visibilitychange', handleVisibilityChange);
        };
    }, [heroComplete]);

    useEffect(() => {
        if (!heroComplete) return;

        // Start animation loop
        animationRef.current = requestAnimationFrame(animate.current);

        return () => {
            if (animationRef.current) {
                cancelAnimationFrame(animationRef.current);
            }
            setStars([]);
            setExplosions([]);
            setFragments([]);
            setFadingTrails([]);
        };
    }, [heroComplete]);

    // Separate effect for star creation timing that responds to dangerMode changes
    useEffect(() => {
        if (!heroComplete) return;

        const settings = dangerMode
            ? { initialDelay: 500, minInterval: 800, maxInterval: 2000 }     // High frequency (danger mode)
            : { initialDelay: 5000, minInterval: 12000, maxInterval: 25000 }; // Calm frequency

        const scheduleNextGroup = () => {
            if (!isVisibleRef.current) return; // Don't schedule if hidden
            const delay = Math.random() * (settings.maxInterval - settings.minInterval) + settings.minInterval;
            intervalRef.current = setTimeout(() => {
                if (isVisibleRef.current) {
                    createStarGroup();
                }
                scheduleNextGroup();
            }, delay);
        };

        const startStarCreation = () => {
            // Clear any existing interval
            if (intervalRef.current) {
                clearTimeout(intervalRef.current);
            }
            if (!isVisibleRef.current) return;

            // Start the initial group
            intervalRef.current = setTimeout(() => {
                if (isVisibleRef.current) {
                    createStarGroup();
                }
                scheduleNextGroup();
            }, settings.initialDelay);
        };

        // Handle visibility restore for star creation
        const handleVisibilityForStars = () => {
            if (!document.hidden && isVisibleRef.current) {
                startStarCreation();
            }
        };

        document.addEventListener('visibilitychange', handleVisibilityForStars);
        startStarCreation();

        return () => {
            document.removeEventListener('visibilitychange', handleVisibilityForStars);
            if (intervalRef.current) {
                clearTimeout(intervalRef.current);
            }
        };
    }, [dangerMode, heroComplete]);

    return (
        <div className={`${styles.starsContainer} ${isDarkMode ? styles.darkTheme : styles.lightTheme}`}>
            <svg
                ref={svgRef}
                className={styles.starsSvg}
                width="100%"
                height="100%"
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

{/* Active star trails */}
                {stars.map(star => (
                    <g key={star.id}>
                        {/* Trail path */}
                        {star.trailPath && (
                            <path
                                className={styles.starTrail}
                                d={star.trailPath}
                                stroke={`url(#trailGradient${star.fromLeft ? 'LTR' : 'RTL'})`}
                                strokeWidth={star.size * 1.5}
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
                            className={styles.starHalo}
                            cx={star.currentX}
                            cy={star.currentY}
                            r={star.size * 3.5}
                            fill={isDarkMode ? 'rgba(255,255,255,0.15)' : 'rgba(0,0,0,0.08)'}
                            opacity={star.opacity * 0.4}
                        />
                    </g>
                ))}

                {/* Fading trails from collisions */}
                {fadingTrails.map(trail => (
                    <path
                        key={trail.id}
                        className={styles.starTrail}
                        d={trail.currentPath}
                        stroke={`url(#trailGradient${trail.fromLeft ? 'LTR' : 'RTL'})`}
                        strokeWidth={trail.size * 1.5}
                        opacity={trail.opacity}
                    />
                ))}

                {/* Explosion effects */}
                {explosions.map(explosion => (
                    <g key={explosion.id}>
                        {/* Main explosion burst */}
                        <circle
                            className={styles.explosionBurst}
                            cx={explosion.x}
                            cy={explosion.y}
                            r={explosion.size * explosion.scale * 2}
                            fill={isDarkMode ? 'rgba(255,255,255,0.8)' : 'rgba(0,0,0,0.6)'}
                            opacity={explosion.opacity * 0.6}
                        />
                        
                        {/* Outer explosion ring */}
                        <circle
                            className={styles.explosionRing}
                            cx={explosion.x}
                            cy={explosion.y}
                            r={explosion.size * explosion.scale * 4}
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
                                    className={styles.explosionSparkle}
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
                            className={styles.fragmentPiece}
                            points={`${fragment.x - fragment.size},${fragment.y} ${fragment.x + fragment.size * 0.7},${fragment.y - fragment.size * 0.5} ${fragment.x + fragment.size * 0.3},${fragment.y + fragment.size * 0.8} ${fragment.x - fragment.size * 0.6},${fragment.y + fragment.size * 0.4}`}
                            fill={isDarkMode ? '#ffffff' : '#000000'}
                            opacity={fragment.opacity}
                            transform={`rotate(${fragment.rotation} ${fragment.x} ${fragment.y})`}
                        />
                        
                        {/* Small glow around fragment */}
                        <circle
                            className={styles.fragmentGlow}
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