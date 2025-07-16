'use client';

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { HeroProvider, useHero } from '../../../contexts/HeroContext';
import { ThemeProvider, useTheme } from '../../../contexts/ThemeContext';
import { ContactProvider, useContact } from '../../../contexts/ContactContext';
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";
import Stars from "../Stars/Stars";

import MenuIcon from "../../icons/social/Menu";
import Logo from "../../icons/branding/Logo";
import Sun from "../../icons/controls/Sun";
import Moon from "../../icons/controls/Moon";
import EmailMethod from '../../icons/social/EmailMethod';
import Whatsapp from '../../icons/social/Whatsapp';
import Youtube from '../../icons/social/Youtube';
import Github from '../../icons/social/Github';
import CloseIcon from "../../icons/social/Close";
import AnimatedLogo from "../../icons/branding/AnimatedLogo";

import styles from "./layout.module.scss";

function LayoutContent({ children }) {
    const { heroComplete } = useHero();
    const { theme, toggleTheme } = useTheme();
    const { contactOpen, message, openContact, closeContact } = useContact();
    const pathname = usePathname();
    const [menuOpen, setMenuOpen] = useState(false);
    
    // Check if we're on the landing page (home page)
    const isLandingPage = pathname === '/';

    const getThemeIcon = () => {
        return theme === 'light' 
            ? <Moon className={styles.themeIcon} />
            : <Sun className={styles.themeIcon} />;
    };

    // Control body overflow based on Hero completion and mobile menu
    // Only apply hero-related overflow control on landing page
    useEffect(() => {
        if (isLandingPage && !heroComplete) {
            document.body.style.overflow = 'hidden';
        } else if (menuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
        
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [heroComplete, menuOpen, isLandingPage]);

    // Clear URL fragments - only needed on landing page
    useEffect(() => {
        if (isLandingPage && window.location.hash) {
            // Remove the hash without triggering a page reload
            const cleanUrl = window.location.href.split('#')[0];
            window.history.replaceState({}, document.title, cleanUrl);
        }
    }, [isLandingPage]);

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
                    <Link href="/">
                        <AnimatedLogo extraClass={styles.logo} />
                    </Link>

                    <div className={styles.headerctas}>
                        <button className={styles.themeToggle} onClick={toggleTheme} aria-label="Toggle theme">
                            {getThemeIcon()}
                        </button>
                        <a className={styles.headercta} href="/#services">Services</a>
                        <a className={styles.headercta} href="/#testimonials">Reviews</a>
                        <Link href="/education" className={styles.headercta}>Education</Link>
                        <button className={`${styles.headercta} ${styles.headerctaprimary}`} onClick={() => openContact()}>CONTACT</button>
                        <button className={styles.menutoggle} onClick={() => setMenuOpen(true)}>
                            <MenuIcon extraClass={styles.menutoggleicon} />
                        </button>
                    </div>
                </header>

                {/* Mobile Menu */}
                {menuOpen && (
                    <div 
                        className={`${styles.menu} ${menuOpen ? styles.visible : ''}`}
                        onTransitionEnd={handleTransitionEnd}>
                        <div className={styles.menuheader}>
                            <Link href="/" onClick={handleMenuClose}>
                                <Logo extraClass={styles.menulogo} />
                            </Link>
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
                            <a className={styles.item} onClick={handleMenuClose} href="/#services">Services</a>
                            <a className={styles.item} onClick={handleMenuClose} href="/#testimonials">Reviews</a>
                            <Link href="/education" className={styles.item} onClick={handleMenuClose}>Education</Link>
                            <button className={styles.item} onClick={() => { handleMenuClose(); openContact(); }}>Contact</button>
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

                {children}
                
                <Footer />
                
                <Contact 
                    isOpen={contactOpen} 
                    onClose={closeContact} 
                    initialMessage={message}
                />    
            </main>
        </>
    );
}

export default function Layout({ children }) {
    return (
        <ThemeProvider>
            <HeroProvider>
                <ContactProvider>
                    <LayoutContent>
                        {children}
                    </LayoutContent>
                </ContactProvider>
            </HeroProvider>
        </ThemeProvider>
    );
}