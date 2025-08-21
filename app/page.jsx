'use client';

import { useEffect, useState } from "react";
import Link from 'next/link';
import { useContact } from '../contexts/ContactContext';
import { useHero } from '../contexts/HeroContext';
import { useHeaderAnimation } from '../contexts/HeaderAnimationContext';
import styles from './intro.module.scss';

export default function Index() {
    const [introComplete, setIntroComplete] = useState(false);
    const [currentWordIndex, setCurrentWordIndex] = useState(0);
    const { openContact } = useContact();
    const { setHeroComplete } = useHero();
    const { headerAnimationComplete } = useHeaderAnimation();
    
    const changingWords = ["Solutions", "Applications", "Websites", "Platforms", "Software", "Systems", "Experiences", "Products"];

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

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentWordIndex((prev) => (prev + 1) % changingWords.length);
        }, 3500);
        
        return () => clearInterval(interval);
    }, [changingWords.length]);

    return (
        <div className={`section ${styles.intro} ${introComplete ? styles.introComplete : ''} ${headerAnimationComplete ? styles.navigated : ''}`}>
            <h1 className={styles.title}>
                {changingWords.map((word, index) => (
                    <span
                        key={word}
                        className={`${styles.word} ${index === currentWordIndex ? styles.entering : ''} ${index === (currentWordIndex - 1 + changingWords.length) % changingWords.length ? styles.leaving : ''}`}
                    >
                        {word.split('').map((letter, letterIndex) => (
                            <span
                                key={letterIndex}
                                className={styles.letter}
                                style={{ '--delay': `${letterIndex * 0.06}s` }}
                            >
                                {letter}
                            </span>
                        ))}
                    </span>
                ))}
            </h1>

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
                    onClick={() => openContact('I would like to start a new project')}>
                    <span className={styles.desktopText}>Start Your Project</span>
                    <span className={styles.mobileText}>Start Project</span>
                </button>
                <Link 
                    href="/portfolio" 
                    className={styles.secondaryAction}>
                    <span className={styles.desktopText}>View Our Work</span>
                    <span className={styles.mobileText}>Our Work</span>
                </Link>
            </div>
        </div>
    );
};