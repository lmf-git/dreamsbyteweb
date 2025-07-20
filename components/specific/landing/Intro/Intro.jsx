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
        const timer = setTimeout(() => {
            setIntroComplete(true);
            setHeroComplete(true); // This controls the scroll lock in Layout
        }, 2500); // Extended from 2000ms to 2500ms (500ms longer)

        return () => clearTimeout(timer);
    }, [setHeroComplete]);

    return (
        <div className={`section ${styles.intro} ${introComplete ? styles.introComplete : ''} ${headerAnimationComplete ? styles.navigated : ''}`}>
            <div className={styles.content}>
                <div className={styles.heading}>
                    <h1 className={styles.title}>Dreams into solutions</h1>
                </div>

                <div className={styles.description}>
                    <p className={styles.text}>
                        We specialize in full-stack development, e-commerce solutions, captivating design, 
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