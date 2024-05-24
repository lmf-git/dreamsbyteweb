'use client';

import { useRef, useState } from 'react';
import LVolt from '../../../icons/branding/clients/LVolt';
import styles from './testimonials.module.scss';

const testimonials = [
    {
        logo: <LVolt />,
        name: 'Theodore M',
        company: 'LVolt',
        testimonial: 'Working with DreamsByte has been an absolute game-changer for our business. Their creative team\'s ability to turn our ideas into stunning digital solutions is nothing short of remarkable. They helped us not only improve our online presence but also boost our brand recognition. DreamsByte is more than a digital agency; they are partners in our success.',
        reporturl: 'link'
    },
    {
        logo: null,
        name: 'Christopher K',
        company: 'IMAA',
        testimonial: 'Project turned out to be more complicated and include more features than we thought of at the start. Liam was very patient, helpful and flexible in incorporating many of these.',
        reporturl: null
    },
    {
        logo: null,
        name: 'Val A',
        company: 'TRD',
        testimonial: '',
        reporturl: null
    },
    {
        logo: null,
        name: '',
        company: 'Allied',
        testimonial: '',
        reporturl: null
    },
    {
        logo: null,
        name: 'Frankie B',
        company: '',
        testimonial: 'Great person to work with very helpful and a great teacher',
        reporturl: null
    },
    {
        logo: null,
        name: 'Elliott C',
        company: 'Relativity Labs',
        testimonial: 'Delivered the site on a quick turnaround meeting all my requirements. When asked to make some revisions to did not hesitate to get them done. A pleasure to work with and helped me stay on schedule for my project. Very experienced with Wordpres',
        reporturl: null
    },
    {
        logo: null,
        name: 'Beth O',
        company: 'Agency Project',
        testimonial: 'Delivered the site on a quick turnaround meeting all my requirements. When asked to make some revisions to did not hesitate to get them done. A pleasure to work with and helped me stay on schedule for my project. Very experienced with Wordpres',
        reporturl: null
    },
    {
        logo: null,
        name: 'Dele Aden',
        company: 'Delta3',
        testimonial: 'Delivered the site on a quick turnaround meeting all my requirements. When asked to make some revisions to did not hesitate to get them done. A pleasure to work with and helped me stay on schedule for my project. Very experienced with Wordpres',
        reporturl: null
    },
    {
        logo: null,
        name: 'Andrea H',
        company: 'Helping Hand',
        testimonial: 'Working with Liam was excellent! He understood what I wanted and he quickly presented me with a product. He is friendly, understanding and helpful. I am so pleased I chose Liam for my web page.',
        reporturl: null
    },
    {
        logo: null,
        name: 'Amogh G',
        company: 'Helping Hand',
        testimonial: 'Really good javascript coder, and teacher. Also charges less than most. Can finish the project quickly.',
        reporturl: null
    },
    {
        logo: null,
        name: 'Mila E',
        company: null,
        testimonial: 'Working with dreamsbyte was a real pleasure. They built a gorgeous website for my small business from scratch, listened to my comments, everything works perfectly and fast, I\'m very happy (and so are my customers :)).',
        reporturl: null
    },
    {
        logo: null,
        name: 'Doc',
        company: 'Electric Doctors',
        testimonial: 'Great communication skills. They were excellent in helping us define our goals, explore available options, designing & implementing solutions. Security conscientious & driven. Superb follow up and continued services. This company has earned a client for life with us.',
        reporturl: null
    },
    {
        logo: null,
        name: 'Leo Lukas',
        company: '',
        testimonial: 'Cleanest code ever. The loading speed is amazing on each site developed. Great.',
        reporturl: null
    },
    {
        logo: null,
        name: 'Siddharth P',
        company: '',
        testimonial: '5/5',
        reporturl: null
    },
    {
        logo: null,
        name: 'Lewis A',
        company: '',
        testimonial: '5/5',
        reporturl: null
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
                            { t?.logo }
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

                            { t?.reporturl &&
                                <a href={t.reporturl} className={styles.report} target="_blank" rel="noopener noreferrer">
                                    See results
                                </a>
                            }
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