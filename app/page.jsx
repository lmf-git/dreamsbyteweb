'use client';

import { useEffect, useState } from "react";

import { HeroProvider, useHero } from '../contexts/HeroContext';
import { ThemeProvider, useTheme } from '../contexts/ThemeContext';
import Hero from '../components/specific/landing/Hero/Hero';
import Testimonials from "../components/specific/landing/Testimonials/Testimonials";
import Services from "../components/specific/landing/Services/Services";

import Footer from "../components/layout/Footer/Footer";
import Contact from "../components/layout/Contact/Contact";
import Stars from "../components/layout/Stars/Stars";

import MenuIcon from "../components/icons/social/Menu";
import Logo from "../components/icons/branding/Logo";
import Sun from "../components/icons/controls/Sun";
import Moon from "../components/icons/controls/Moon";

import EmailMethod from '../components/icons/social/EmailMethod';
import Whatsapp from '../components/icons/social/Whatsapp';
import Youtube from '../components/icons/social/Youtube';
import Github from '../components/icons/social/Github';
import CloseIcon from "../components/icons/social/Close";

import styles from "../components/specific/landing/landing.module.scss";
import AnimatedLogo from "../components/icons/branding/AnimatedLogo";
import Comparison from "../components/specific/landing/Comparison/Comparison";

function PageContent() {
    const { heroComplete } = useHero();
    const { theme, toggleTheme } = useTheme();
    const [menuOpen, setMenuOpen] = useState(false);
    const [message, setMessage] = useState('');
    const [contactOpen, setContactOpen] = useState(false);

    const getThemeIcon = () => {
        return theme === 'light' 
            ? <Moon className={styles.themeIcon} />
            : <Sun className={styles.themeIcon} />;
    };

    // Control body overflow based on Hero completion and mobile menu
    useEffect(() => {
        if (!heroComplete || menuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
        
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [heroComplete, menuOpen]);


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
        <>
        <Stars />
        <main className={styles.index}>
            <header className={styles.header}>
                <AnimatedLogo extraClass={styles.logo} />

                <div className={styles.headerctas}>
                    <button className={styles.themeToggle} onClick={toggleTheme} aria-label="Toggle theme">
                        {getThemeIcon()}
                    </button>
                    <a className={styles.headercta} href="#services">Services</a>
                    <a className={styles.headercta} href="#testimonials">Reviews</a>
                    <button className={`${styles.headercta} ${styles.headerctaprimary}`} onClick={() => setContactOpen(true)}>CONTACT</button>
                    <button className={styles.menutoggle} onClick={() => setMenuOpen(true)}>
                        <MenuIcon extraClass={styles.menutoggleicon} />
                    </button>
                </div>
            </header>

        {/* <AnimatedLogo extraClass={styles.test} /> */}

        {/* TODO: Refactor into MobileMenu. */}
        {menuOpen && (
        <div 
            className={`${styles.menu} ${menuOpen ? styles.visible : ''}`}
            onTransitionEnd={handleTransitionEnd}>
            <div className={styles.menuheader}>
                <Logo extraClass={styles.menulogo} />
                <div className={styles.menucontrols}>
                    <button className={styles.menuThemeToggle} onClick={toggleTheme} aria-label="Toggle theme">
                        {getThemeIcon()}
                    </button>
                    <button 
                        className={styles.menuclose} 
                        onClick={handleMenuClose}
                        aria-label="Close menu">
                        <CloseIcon extraClass={styles.menucloseicon} />
                    </button>
                </div>
            </div>

            <div className={styles.items}>
                <a className={styles.item} onClick={handleMenuClose} href="#services">Services</a>
                <a className={styles.item} onClick={handleMenuClose} href="#testimonials">Reviews</a>
                <button className={styles.item} onClick={() => { handleMenuClose(); setContactOpen(true); }}>Contact</button>
            </div>

            <div className={styles.socials}>
                <a href="mailto:contact@dreamsbyte.com" className={styles.social} rel="noopener noreferrer" target="_blank" aria-label="Send us an email">
                    <EmailMethod className={styles.socialicon} />
                </a>
                <a href="https://api.whatsapp.com/send?phone=447389805421" className={styles.social} rel="noopener noreferrer" target="_blank" aria-label="Contact us on WhatsApp">
                    <Whatsapp className={styles.socialicon} />
                </a>
                <a href="https://github.com/lmf-git" className={styles.social} rel="noopener noreferrer" target="_blank" aria-label="Visit our GitHub profile">
                    <Github className={styles.socialicon} />
                </a>
                <a href="https://www.youtube.com/@dreamsbyte" className={styles.social} rel="noopener noreferrer" target="_blank" aria-label="Subscribe to our YouTube channel">
                    <Youtube className={styles.socialicon} />
                </a>
            </div>
        </div>
        )}

        <Hero />
        
        <Testimonials />

        <Comparison setMessage={setMessage} setContactOpen={setContactOpen} />
        
        <Services setMessage={setMessage} setContactOpen={setContactOpen} />

        <Footer />
        
        <Contact 
            isOpen={contactOpen} 
            onClose={() => setContactOpen(false)} 
            initialMessage={message}
        />    
        </main>
        </>
    );
}

export default function Index() {
    return (
        <ThemeProvider>
            <HeroProvider>
                <PageContent />
            </HeroProvider>
        </ThemeProvider>
    );
};
