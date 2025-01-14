'use client';

import { useEffect, useState } from "react";

import Hero from '../components/specific/landing/Hero/Hero';
import Testimonials from "../components/specific/landing/Testimonials/Testimonials";
import Services from "../components/specific/landing/Services/Services";

import Footer from "../components/layout/Footer/Footer";

import MenuIcon from "../components/icons/social/Menu";
import Logo from "../components/icons/branding/Logo";

import EmailMethod from '../components/icons/social/EmailMethod';
import Whatsapp from '../components/icons/social/Whatsapp';
import X from '../components/icons/social/X';
import Youtube from '../components/icons/social/Youtube';
import Github from '../components/icons/social/Github';
import CloseIcon from "../components/icons/social/Close";

import styles from "../components/specific/landing/landing.module.scss";

export default function Index() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [message, setMessage] = useState('');

    // Add this new useEffect to clear URL fragments
    useEffect(() => {
        // Check if there's a hash in the URL
        if (window.location.hash) {
            // Remove the hash without triggering a page reload
            const cleanUrl = window.location.href.split('#')[0];
            window.history.replaceState({}, document.title, cleanUrl);
        }
    }, []);

    // Modified menu handling with transition end
    const handleMenuClose = () => {
        setMenuOpen(false);
    };

    const handleTransitionEnd = (e) => {
        // Only handle menu transition end
        if (e.target.classList.contains(styles.menu) && !menuOpen) {
            document.body.classList.remove(styles.clipped);
        }
    };

    // Only add clipped class when opening
    useEffect(() => {
        if (menuOpen) document.body.classList.add(styles.clipped);
    }, [menuOpen]);

    return (
        <main className={styles.index}>
            <header className={styles.header}>
                <Logo extraClass={styles.logo} />

                <div className={styles.headerctas}>
                    <a className={styles.headercta} href="#services">Services</a>
                    <a className={styles.headercta} href="#testimonials">Reviews</a>
                    <a className={`${styles.headercta} ${styles.headerctaprimary}`} href="#contact">CONTACT</a>
                    <button className={styles.menutoggle} onClick={() => setMenuOpen(true)}>
                        <MenuIcon extraClass={styles.menutoggleicon} />
                    </button>
                </div>
            </header>

            <div 
                className={`${styles.menu} ${menuOpen ? styles.visible : ''}`}
                onTransitionEnd={handleTransitionEnd}
            >
                <div className={styles.menuheader}>
                    <Logo extraClass={styles.menulogo} />
                    <button className={styles.menuclose} onClick={handleMenuClose}>
                        <CloseIcon extraClass={styles.menucloseicon} />
                    </button>
                </div>

                <div className={styles.items}>
                    <a className={styles.item} onClick={handleMenuClose} href="#services">Services</a>
                    <a className={styles.item} onClick={handleMenuClose} href="#testimonials">Reviews</a>
                    <a className={styles.item} onClick={handleMenuClose} href="#contact">Contact</a>
                </div>

                <div className={styles.socials}>
                    <a href="mailto:contact@dreamsbyte.com" className={styles.social} rel="noopener noreferrer" target="_blank">
                        <EmailMethod className={styles.socialicon} />
                    </a>
                    <a href="https://api.whatsapp.com/send?phone=447389805421" className={styles.social} rel="noopener noreferrer" target="_blank">
                        <Whatsapp className={styles.socialicon} />
                    </a>
                    <a href="https://x.com/dreamsbytex" className={styles.social} rel="noopener noreferrer" target="_blank">
                        <X className={styles.socialicon} />
                    </a>
                    <a href="https://github.com/lmf-git" className={styles.social} rel="noopener noreferrer" target="_blank">
                        <Github className={styles.socialicon} />
                    </a>
                    <a href="https://www.youtube.com/@dreamsbyte" className={styles.social} rel="noopener noreferrer" target="_blank">
                        <Youtube className={styles.socialicon} />
                    </a>
                </div>
            </div>

            <Hero />
            <Testimonials />
            <Services setMessage={setMessage} />
            <Footer message={message} setMessage={setMessage} />    
        </main>
    );
};
