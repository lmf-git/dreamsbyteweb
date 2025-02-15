'use client';

import { useRef, useState, useEffect } from 'react';
import { testimonials } from '../../../../data.mjs';
import styles from './testimonials.module.scss';
import useIntersectionObserver from '../../../../hooks/useIntersectionObserver';

export default function Testimonials() {
    const sectionRef = useRef(null);
    const isVisible = useIntersectionObserver(sectionRef, 0.3);
    const listRef = useRef(null);
    const planeRef = useRef(null);
    const animationRef = useRef(null);
    const positionRef = useRef(0); // Track position across renders
    const lastTimeRef = useRef(null);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);
    const [direction, setDirection] = useState(1);
    const [touchMoved, setTouchMoved] = useState(false);
    const speed = 40; // pixels per second
    const dragThreshold = 5; // pixels to consider as drag vs tap
    const lastX = useRef(null);
    const dragStartTime = useRef(null);
    const lastScrollPosition = useRef(0); // Add this ref

    useEffect(() => {
        const animate = (timestamp) => {
            if (!planeRef.current || isDragging) {
                animationRef.current = requestAnimationFrame(animate);
                return;
            }

            if (!lastTimeRef.current) lastTimeRef.current = timestamp;
            const deltaTime = timestamp - lastTimeRef.current;
            lastTimeRef.current = timestamp;

            // Wait longer after drag ends before resuming auto-scroll
            if (Date.now() - (dragStartTime.current || 0) < 500) {
                animationRef.current = requestAnimationFrame(animate);
                return;
            }

            const container = listRef.current;
            const maxScroll = container.scrollWidth - container.clientWidth;
            
            // Use the last manual position as the starting point
            if (lastScrollPosition.current !== positionRef.current) {
                positionRef.current = lastScrollPosition.current;
            }

            positionRef.current += (speed * direction * deltaTime) / 1000;

            // Keep position within bounds
            if (positionRef.current >= maxScroll) {
                positionRef.current = maxScroll;
                setDirection(-1);
            } else if (positionRef.current <= 0) {
                positionRef.current = 0;
                setDirection(1);
            }

            lastScrollPosition.current = positionRef.current;
            planeRef.current.style.transform = `translateX(${-positionRef.current}px)`;
            animationRef.current = requestAnimationFrame(animate);
        };

        animationRef.current = requestAnimationFrame(animate);

        return () => {
            if (animationRef.current) {
                cancelAnimationFrame(animationRef.current);
            }
        };
    }, [isDragging, direction]);

    const handleDragStart = (clientX) => {
        if (!listRef.current) return;
        setIsDragging(true);
        dragStartTime.current = Date.now();
        lastX.current = clientX;
        // Use the current transform position instead of scrollLeft
        const currentTransform = positionRef.current;
        setScrollLeft(currentTransform);
        lastScrollPosition.current = currentTransform;
    };

    const handleDragMove = (clientX) => {
        if (!isDragging || !planeRef.current) return;
        const delta = clientX - lastX.current;
        lastX.current = clientX;
        const newPosition = positionRef.current - delta;
        
        // Bound the scroll position
        const maxScroll = listRef.current.scrollWidth - listRef.current.clientWidth;
        positionRef.current = Math.max(0, Math.min(newPosition, maxScroll));
        lastScrollPosition.current = positionRef.current;
        planeRef.current.style.transform = `translateX(${-positionRef.current}px)`;
    };

    const handleMouseDown = (ev) => {
        ev.preventDefault();
        handleDragStart(ev.clientX);
    };

    const handleMouseMove = (ev) => {
        handleDragMove(ev.clientX);
    };

    const handleTouchStart = (ev) => {
        // Don't prevent default here to allow scrolling if needed
        handleDragStart(ev.touches[0].clientX);
    };

    const handleTouchMove = (ev) => {
        if (isDragging) {
            ev.preventDefault(); // Only prevent default if we're actually dragging
            handleDragMove(ev.touches[0].clientX);
        }
    };

    const stopDragging = () => {
        setIsDragging(false);
        // Auto-scrolling will resume automatically
    };

    const handleTouchEnd = () => {
        if (touchMoved) {
            stopDragging();
        }
        setIsDragging(false);
        setTouchMoved(false);
    };

    return <div 
        ref={sectionRef}
        className={`section ${styles.testimonials} ${isVisible ? styles.visible : ''}`} 
        id="testimonials"
    >
        <h2 className={styles.title}>Our client testimonials:</h2>
        <div
            className={styles.list}
            ref={listRef}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={stopDragging}
            onMouseLeave={stopDragging}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            onTouchCancel={handleTouchEnd}>
            <div className={styles.plane} ref={planeRef}>
                { testimonials.map((t, i) => (
                    <div 
                        className={`${styles.testimonial} ${isVisible ? styles.visible : ''}`} 
                        key={i}
                        style={{ transitionDelay: `${0.2 + i * 0.1}s` }}
                    >
                        <div className={styles.brand}>
                            {t?.logo ? (
                                t.logo
                            ) : (
                                <>
                                    {t.company && <span className={styles.company}>{t.company}</span>}
                                    <span className={styles.name}>{t.name}</span>
                                </>
                            )}
                        </div>
                        <div className={styles.text}>
                            <p className={styles.quote}>{t.testimonial}</p>
                            {t?.reporturl && (
                                <a href={t.reporturl} className={styles.report} target="_blank" rel="noopener noreferrer">
                                    See results
                                </a>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>;
};