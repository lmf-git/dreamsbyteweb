'use client';

import { useRef, useState } from 'react';
import { testimonials } from '../../../../data.mjs';
import styles from './testimonials.module.scss';



export default function Testimonials() {
    const listRef = useRef(null);
    const planeRef = useRef(null);

    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);

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

    const stopDragging = () => setIsDragging(false);

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
            <div className={styles.plane} ref={planeRef}>
                { testimonials.map((t, i) => (
                    <div className={styles.testimonial} key={i}>
                        <div className={styles.brand}>
                            {t?.logo}
                            <span className={styles.company}>{t.company}</span>
                            <span className={styles.name}>{t.name}</span>
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