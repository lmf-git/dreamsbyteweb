'use client';

import { useEffect, useState } from "react";
import Link from 'next/link';
import { useContact } from '../contexts/ContactContext';
import { useHero } from '../contexts/HeroContext';
import { useHeaderAnimation } from '../contexts/HeaderAnimationContext';
import { useLanguage } from '../contexts/LanguageContext';
import styles from './intro.module.scss';

export default function Index() {
    const [introComplete, setIntroComplete] = useState(false);
    const [currentWordIndex, setCurrentWordIndex] = useState(0);
    const [introVisible, setIntroVisible] = useState(false);
    const { openContact } = useContact();
    const { setHeroComplete } = useHero();
    const { headerAnimationComplete } = useHeaderAnimation();
    const { t } = useLanguage();

    const changingWords = t.home.changingWords;

    useEffect(() => {
        if (introComplete && headerAnimationComplete) {
            return;
        }

        setIntroComplete(false);

        const delay = headerAnimationComplete ? 100 : 2500;

        const timer = setTimeout(() => {
            setIntroComplete(true);
            setHeroComplete(true);
        }, delay);

        return () => clearTimeout(timer);
    }, [headerAnimationComplete, setHeroComplete]);

    useEffect(() => {
        if (headerAnimationComplete) {
            const timer = setTimeout(() => {
                setIntroVisible(true);
            }, 200);
            return () => clearTimeout(timer);
        } else {
            setIntroVisible(false);
        }
    }, [headerAnimationComplete]);

    useEffect(() => {
        setCurrentWordIndex(0);
    }, [t]);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentWordIndex((prev) => (prev + 1) % changingWords.length);
        }, 3000);

        return () => clearInterval(interval);
    }, [changingWords.length]);

    return (
        <>
        <h1 className={`${styles.title} ${introVisible ? styles.visible : ''}`}>
            {changingWords.map((word, index) => (
                <span
                    key={word}
                    className={`${styles.word} ${index === currentWordIndex ? styles.entering : ''} ${index === (currentWordIndex - 1 + changingWords.length) % changingWords.length ? styles.leaving : ''}`}
                >
                    {word.split('').map((letter, letterIndex) => (
                        <span
                            key={letterIndex}
                            className={styles.letter}
                            style={{ '--delay': `${letterIndex * 0.04}s` }}
                        >
                            {letter}
                        </span>
                    ))}
                </span>
            ))}
        </h1>

        <div className={`section ${styles.intro} ${introVisible ? styles.visible : ''}`}>
            <div className={styles.description}>
                <p className={styles.text} style={{ opacity: introVisible ? 1 : 0 }}>
                    {t.home.description}
                </p>
            </div>

            <div className={styles.actions} style={{ opacity: introVisible ? 1 : 0 }}>
                <button
                    className={styles.primaryAction}
                    onClick={() => openContact(t.home.contactMessage)}>
                    <span className={styles.desktopText}>{t.home.startProject}</span>
                    <span className={styles.mobileText}>{t.home.startProjectMobile}</span>
                </button>
                <Link
                    href="/portfolio"
                    className={styles.secondaryAction}>
                    <span className={styles.desktopText}>{t.home.viewWork}</span>
                    <span className={styles.mobileText}>{t.home.viewWorkMobile}</span>
                </Link>
            </div>
        </div>
        </>
    );
};
