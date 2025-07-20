'use client';

import { useEffect, useState } from "react";
import Link from 'next/link';
import { useContact } from '../../../../contexts/ContactContext';
import { useHero } from '../../../../contexts/HeroContext';
import { useHeaderAnimation } from '../../../../contexts/HeaderAnimationContext';
import styles from './intro.module.scss';

export default function Intro() {
    const [introComplete, setIntroComplete] = useState(false);
    const { openContact } = useContact();
    const { setHeroComplete } = useHero();
    const { headerAnimationComplete } = useHeaderAnimation();

    useEffect(() => {
        if (introComplete && headerAnimationComplete) {
            // Don't reset if already complete and header is done
            return;
        }
        
        // Reset intro state only when headerAnimationComplete changes
        setIntroComplete(false);
        
        // If header animation is already complete (navigation), show immediately
        // Otherwise wait for header animation to complete
        const delay = headerAnimationComplete ? 100 : 2500; // Wait longer for header to finish
        
        const timer = setTimeout(() => {
            setIntroComplete(true);
            setHeroComplete(true); // This controls the scroll lock in Layout
        }, delay);

        return () => clearTimeout(timer);
    }, [headerAnimationComplete, setHeroComplete]);

    return (
        <div className={`section ${styles.intro} ${introComplete ? styles.introComplete : ''} ${headerAnimationComplete ? styles.navigated : ''}`}>
            <div className={styles.content}>
                <div className={styles.heading}>
                    <h1 className={styles.title}>Dreams into solutions</h1>
                </div>

                <div className={styles.description}>
                    <p className={styles.text}>
                        We specialise in full-stack development, e-commerce solutions, captivating design, 
                        and cutting-edge technology implementations. Whether you're a startup with a vision 
                        or an established business looking to innovate, we're here to bring your ideas to life.
                    </p>
                </div>

                <div className={styles.actions}>
                    <button 
                        className={styles.primaryAction} 
                        onClick={() => openContact()}>
                        Start Your Project
                    </button>
                    <Link 
                        href="/portfolio" 
                        className={styles.secondaryAction}>
                        View Our Work
                    </Link>
                </div>
            </div>
        </div>
    );
}