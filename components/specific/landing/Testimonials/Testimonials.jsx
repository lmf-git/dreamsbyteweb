'use client';

import { useRef, useState, useEffect } from 'react';
import { testimonials } from '../../../../data.mjs';
import styles from './testimonials.module.scss';

export default function Testimonials() {
    const listRef = useRef(null);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);
    const [scrollDirection, setScrollDirection] = useState(1);
    const scrollSpeed = 1;

    useEffect(() => {
        const scroll = () => {
            const container = listRef.current;
            if (!container || isDragging) return;

            const maxScroll = container.scrollWidth - container.clientWidth;

            // Simple direction change based on exact boundaries
            if (container.scrollLeft >= maxScroll && scrollDirection > 0) {
                setScrollDirection(-1);
            } else if (container.scrollLeft <= 0 && scrollDirection < 0) {
                setScrollDirection(1);
            }

            container.scrollLeft += scrollSpeed * scrollDirection;
        };

        const interval = setInterval(scroll, 16);
        return () => clearInterval(interval);
    }, [isDragging, scrollDirection]);

    const handleMouseDown = ev => {
        setIsDragging(true);
        setStartX(ev.pageX - listRef.current.offsetLeft);
        setScrollLeft(listRef.current.scrollLeft);
    };

    const handleTouchStart = ev => {
        setIsDragging(true);
        setStartX(ev.touches[0].pageX - listRef.current.offsetLeft);
        setScrollLeft(listRef.current.scrollLeft);
    };

    const handleMouseMove = ev => {
        if (!isDragging) return;
        const x = ev.pageX - listRef.current.offsetLeft;
        const walk = x - startX;
        listRef.current.scrollLeft = scrollLeft - walk;
    };

    const handleTouchMove = ev => {
        if (!isDragging) return;
        
        const x = ev.touches[0].pageX - listRef.current.offsetLeft;
        const walk = x - startX;
        listRef.current.scrollLeft = scrollLeft - walk;
    };

    const stopDragging = () => {
        setIsDragging(false);
        // Auto-scrolling will resume automatically
    };

    return <div className={`section ${styles.testimonials}`} id="testimonials">
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
            onTouchEnd={stopDragging}>
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