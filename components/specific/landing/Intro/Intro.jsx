'use client';

import { useEffect } from 'react';

import Logo from '../../../icons/branding/Logo';
import styles from './intro.module.scss';


export default function Intro() {
    useEffect(() => {
        window.scrollTo(0, 0); 
        document.body.style.overflow = 'hidden';
        setTimeout(() => document.body.style.overflow = '', 4995);
    }, []);

    return <div className={styles.intro}>
        <Logo extraClass={styles.logo} />
        
        <h1 className={styles.introtitle}>
            We create world-class software.
        </h1>
        <p className={styles.introblurb}>
            See our results and let&apos;s achieve the same for your business!
        </p>
        
    </div>;
};