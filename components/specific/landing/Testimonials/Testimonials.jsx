'use client';

import { useRef, useState } from 'react';
import LVolt from '../../../icons/branding/clients/LVolt';
import styles from './testimonials.module.scss';

const testimonials = [
    {
        logo: <LVolt />,
        name: 'Theodore',
        company: 'LVolt',
        testimonial: 'Working with DreamsByte has been an absolute game-changer for our business. Their creative team\'s ability to turn our ideas into stunning digital solutions is nothing short of remarkable. They helped us not only improve our online presence but also boost our brand recognition. DreamsByte is more than a digital agency; they are partners in our success.',
        reporturl: ''
    },
    {
        logo: <LVolt />,
        name: '',
        company: '',
        testimonial: 'Working with DreamsByte has been an absolute game-changer for our business. Their creative team\'s ability to turn our ideas into stunning digital solutions is nothing short of remarkable. They helped us not only improve our online presence but also boost our brand recognition. DreamsByte is more than a digital agency; they are partners in our success.',
        reporturl: ''
    },
    {
        logo: <LVolt />,
        name: '',
        company: '',
        testimonial: 'Working with DreamsByte has been an absolute game-changer for our business. Their creative team\'s ability to turn our ideas into stunning digital solutions is nothing short of remarkable. They helped us not only improve our online presence but also boost our brand recognition. DreamsByte is more than a digital agency; they are partners in our success.',
        reporturl: ''
    }
];

export default function Testimonials() {
    const listRef = useRef(null);
    const planeRef = useRef(null);

    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);

    const handleMouseDown = ev => {
        setIsDragging(true);
        setStartX(ev.pageX - listRef.current.offsetLeft);
        setScrollLeft(planeRef.current.offsetLeft);
    };

    const handleMouseMove = ev => {
        // Only drag when clicked/drag pressed.
        if (!isDragging) return;

        // Calculate move position from last (difference via state).
        const x = ev.pageX - listRef.current.offsetLeft;
        const walk = x - startX;
        const position = scrollLeft + walk;

        // Block scrolling past first item, left.
        if (position > 0) return;
        planeRef.current.style.left = `${position}px`;
    };

    return <div className={`section ${styles.testimonials}`}>
        <h2 className={styles.title}>Our client testimonials:</h2>
        
        <div className={styles.list} ref={listRef} 
            onMouseDown={handleMouseDown} 
            onMouseMove={handleMouseMove} 
            onMouseUp={() => setIsDragging(false)}>
            <div className={styles.plane} ref={planeRef}>
                { testimonials.map((t, i) => 
                    <div className={styles.testimonial} key={i}>
                        <div className={styles.brand}>
                            { t.logo }
                            <span className={styles.company}>
                                { t.company }
                            </span>
                            <span className={styles.name}>
                                { t.name }
                            </span>
                        </div>
                        <div className={styles.text}>
                            <p className={styles.quote}>
                                { t.testimonial }
                            </p>

                            <a href={t.reporturl} className={styles.report} target="_blank" rel="noopener noreferrer">
                                See results
                            </a>
                        </div>
                    </div>
                )}
                {/* <div className={styles.testimonial}>
                    <div className={styles.brandl}>
                        <LVolt />
                    </div>
                    <div className={styles.textl}>
                        Theodore Michaud
                        THE OWNER of LVOLT
                        Working with DreamsByte has been an absolute game-changer for our business. Their creative team's ability to turn our ideas into stunning digital solutions is nothing short of remarkable. They helped us not only improve our online presence but also boost our brand recognition. DreamsByte is more than a digital agency; they are partners in our success.
                        See results
                    </div>
                </div>

                <div className={styles.testimonial}>
                    <div className={styles.brandl}>
                        <LVolt />
                    </div>
                    <div className={styles.textl}>
                        Theodore Michaud
                        THE OWNER of LVOLT
                        
                        See results
                    </div>
                </div> */}
            </div>
        </div>
    </div>;
};