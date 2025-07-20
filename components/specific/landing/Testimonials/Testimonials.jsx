'use client';

import { useRef, useState, useEffect } from 'react';
import { testimonials } from '../../../../data.mjs';
import useIntersectionObserver from '../../../../hooks/useIntersectionObserver';
import { useHero } from '../../../../contexts/HeroContext';
import { useHeaderAnimation } from '../../../../contexts/HeaderAnimationContext';
import DragRight from '../../../icons/controls/DragRight';
import styles from './testimonials.module.scss';

export default function Testimonials() {
    const sectionRef = useRef(null);
    const { heroComplete } = useHero();
    const { headerAnimationComplete } = useHeaderAnimation();
    
    // Component should be visible when header animation is complete OR when heroComplete is true (for navigation)
    const animationReady = headerAnimationComplete || heroComplete;
    const isVisible = useIntersectionObserver(sectionRef, 0.1) && animationReady;
    const listRef = useRef(null);
    const planeRef = useRef(null);
    const animationRef = useRef(null);
    const positionRef = useRef(0);
    const lastX = useRef(null);
    const [isDragging, setIsDragging] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const [direction, setDirection] = useState(1);
    const speed = 0.025; // Reduced for slower scrolling
    
    useEffect(() => {
        let lastTime = performance.now();

        const animate = (currentTime) => {
            if (!planeRef.current || isDragging || isHovered) {
                animationRef.current = requestAnimationFrame(animate);
                return;
            }

            const deltaTime = currentTime - lastTime;
            lastTime = currentTime;
            
            // Better calculation of maximum scroll
            const containerWidth = listRef.current.clientWidth;
            const totalWidth = planeRef.current.scrollWidth;
            const maxScroll = Math.max(0, totalWidth - containerWidth);
            
            positionRef.current += speed * deltaTime * direction;

            if (positionRef.current >= maxScroll) {
                positionRef.current = maxScroll;
                setDirection(-1);
            } else if (positionRef.current <= 0) {
                positionRef.current = 0;
                setDirection(1);
            }

            planeRef.current.style.transform = `translate3d(${-positionRef.current}px, 0, 0)`;
            animationRef.current = requestAnimationFrame(animate);
        };

        animationRef.current = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(animationRef.current);
    }, [isDragging, direction, isHovered]);

    const handleDragStart = (clientX) => {
        setIsDragging(true);
        lastX.current = clientX;
    };

    const handleDragMove = (clientX) => {
        if (!isDragging || !planeRef.current) return;
        const delta = clientX - lastX.current;
        lastX.current = clientX;
        
        // Same improved calculation for drag movement
        const containerWidth = listRef.current.clientWidth;
        const totalWidth = planeRef.current.scrollWidth;
        const maxScroll = Math.max(0, totalWidth - containerWidth);
        
        positionRef.current = Math.max(0, Math.min(positionRef.current - delta, maxScroll));
        planeRef.current.style.transform = `translate3d(${-positionRef.current}px, 0, 0)`;
    };

    // Event handlers
    const handleMouseDown = (ev) => {
        ev.preventDefault();
        handleDragStart(ev.clientX);
    };

    const handleTouchStart = (ev) => handleDragStart(ev.touches[0].clientX);
    const handleTouchMove = (ev) => {
        if (isDragging) {
            ev.preventDefault();
            handleDragMove(ev.touches[0].clientX);
        }
    };

    const stopDragging = () => setIsDragging(false);

    return (
        <div ref={sectionRef} className={`section ${styles.testimonials} ${animationReady ? styles.heroComplete : ''} ${isVisible ? styles.visible : ''}`} id="testimonials">
            <h2 className={styles.title}>Our client testimonials:</h2>
            <div
                className={styles.list}
                ref={listRef}
                onMouseEnter={() => setIsHovered(true)}
                onMouseDown={handleMouseDown}
                onMouseMove={(ev) => handleDragMove(ev.clientX)}
                onMouseUp={stopDragging}
                onMouseLeave={() => {
                    stopDragging();
                    setIsHovered(false);
                }}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={stopDragging}
                onTouchCancel={stopDragging}
            >
                <div className={styles.plane} ref={planeRef}>
                    {testimonials.map((t, i) => (
                        <div 
                            className={`${styles.testimonial} ${isVisible ? styles.visible : ''}`} 
                            key={i}
                            style={{ transitionDelay: `${0.2 + i * 0.1}s` }}
                        >
                            <div className={styles.brand}>
                                {t?.logo ? t.logo : (
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
            <div className={styles.instruction}>
                <span>Drag to pause scrolling</span>
                <DragRight extraClass={styles.dragIcon} />
            </div>
        </div>
    );
}