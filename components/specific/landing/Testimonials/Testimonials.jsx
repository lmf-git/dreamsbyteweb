'use client';

import { useRef, useState, useEffect } from 'react';
import { testimonials } from '../../../../data.mjs';
import styles from './testimonials.module.scss';

export default function Testimonials({ visible }) {
    const listRef = useRef(null);
    const animationRef = useRef(null);
    const positionRef = useRef(0); // Track position across renders
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);
    const [direction, setDirection] = useState(1);
    const [touchMoved, setTouchMoved] = useState(false);
    const speed = 0.5;
    const dragThreshold = 5; // pixels to consider as drag vs tap

    useEffect(() => {
        const animate = () => {
            if (!listRef.current || isDragging) {
                animationRef.current = requestAnimationFrame(animate);
                return;
            }

            const container = listRef.current;
            const maxScroll = container.scrollWidth - container.clientWidth;
            
            positionRef.current += speed * direction;

            // Keep position within bounds
            if (positionRef.current >= maxScroll) {
                positionRef.current = maxScroll;
                setDirection(-1);
            } else if (positionRef.current <= 0) {
                positionRef.current = 0;
                setDirection(1);
            }

            container.scrollLeft = positionRef.current;
            animationRef.current = requestAnimationFrame(animate);
        };

        animationRef.current = requestAnimationFrame(animate);

        return () => {
            if (animationRef.current) {
                cancelAnimationFrame(animationRef.current);
            }
        };
    }, [isDragging, direction]);

    const handleMouseDown = ev => {
        setIsDragging(true);
        setStartX(ev.pageX - listRef.current.offsetLeft);
        setScrollLeft(listRef.current.scrollLeft);
        positionRef.current = listRef.current.scrollLeft; // Sync position
    };

    const handleTouchStart = ev => {
        ev.preventDefault();
        setTouchMoved(false);
        setIsDragging(true);
        setStartX(ev.touches[0].pageX - listRef.current.offsetLeft);
        setScrollLeft(listRef.current.scrollLeft);
        positionRef.current = listRef.current.scrollLeft; // Sync position
    };

    const handleMouseMove = ev => {
        if (!isDragging) return;
        const x = ev.pageX - listRef.current.offsetLeft;
        const walk = x - startX;
        const newPosition = scrollLeft - walk;
        listRef.current.scrollLeft = newPosition;
        positionRef.current = newPosition; // Update position while dragging
    };

    const handleTouchMove = ev => {
        if (!isDragging) return;
        ev.preventDefault();
        
        const x = ev.touches[0].pageX - listRef.current.offsetLeft;
        const walk = x - startX;
        
        if (Math.abs(walk) > dragThreshold) {
            setTouchMoved(true);
        }
        
        const newPosition = scrollLeft - walk;
        listRef.current.scrollLeft = newPosition;
        positionRef.current = newPosition; // Update position while dragging
    };

    const stopDragging = () => {
        setIsDragging(false);
        // Auto-scrolling will resume automatically
    };

    const handleTouchEnd = ev => {
        if (!touchMoved) {
            // Was a tap, not a drag - don't interfere with normal touch behavior
            setIsDragging(false);
            return;
        }
        stopDragging();
        setTouchMoved(false);
    };

    return <div className={`section ${styles.testimonials} ${visible ? styles.visible : ''}`} id="testimonials">
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
            <div className={styles.plane}>
                { testimonials.map((t, i) => (
                    <div className={styles.testimonial} key={i}>
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