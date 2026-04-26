'use client';

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { HeroProvider, useHero } from '../../../contexts/HeroContext';
import { ThemeProvider, useTheme } from '../../../contexts/ThemeContext';
import { ContactProvider, useContact } from '../../../contexts/ContactContext';
import { HeaderAnimationProvider, useHeaderAnimation } from '../../../contexts/HeaderAnimationContext';
import { StarsProvider } from '../../../contexts/StarsContext';
import { LanguageProvider, useLanguage } from '../../../contexts/LanguageContext';
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
import AnimatedLogo from "../../icons/branding/AnimatedLogo";
import Instagram from "../../icons/social/Instagram";

import styles from "./layout.module.scss";

function LayoutContent({ children }) {
    const { heroComplete } = useHero();
    const { theme, toggleTheme } = useTheme();
    const { contactOpen, message, openContact, closeContact } = useContact();
    const { setHeaderAnimationComplete } = useHeaderAnimation();
    const { language, setLanguage, t } = useLanguage();
    const pathname = usePathname();
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrollPosition, setScrollPosition] = useState(0);

    const isLandingPage = pathname === '/';

    const [isInitialLoad, setIsInitialLoad] = useState(true);
    const [hasNavigated, setHasNavigated] = useState(false);

    useEffect(() => {
        console.log('Header animation effect:', { pathname, isInitialLoad });

        if (isInitialLoad) {
            console.log('Initial load - waiting 2s for header animation');
            setHeaderAnimationComplete(false);
            const timer = setTimeout(() => {
                console.log('Header animation completing after 2s');
                setHeaderAnimationComplete(true);
                setIsInitialLoad(false);
                setHasNavigated(true);
            }, 2000);
            return () => clearTimeout(timer);
        } else {
            const animatedPages = ['/', '/services', '/testimonials', '/blog'];
            const isAnimatedPage = animatedPages.includes(pathname);

            if (isAnimatedPage) {
                console.log('Navigation to animated page - triggering re-animation');
                setHeaderAnimationComplete(false);
                const timer = setTimeout(() => {
                    setHeaderAnimationComplete(true);
                }, 100);
                return () => clearTimeout(timer);
            } else {
                console.log('Navigation - ensuring header stays complete');
                setHeaderAnimationComplete(true);
            }

            if (!hasNavigated) {
                setHasNavigated(true);
            }
        }
    }, [pathname, setHeaderAnimationComplete, isLandingPage, isInitialLoad]);

    const getThemeIcon = () => {
        return (
            <>
                <Sun className={`${styles.themeIcon} ${styles.sunIcon} ${styles[theme]}`} />
                <Moon className={`${styles.themeIcon} ${styles.moonIcon} ${styles[theme]}`} />
            </>
        );
    };

    const getMobileThemeIcon = () => {
        return (
            <div className={styles.mobileThemeIconContainer}>
                <div className={`${styles.mobileThemeIconWrapper} ${styles.mobileSunIcon} ${styles[theme]}`}>
                    <Sun className={styles.themeIcon} />
                </div>
                <div className={`${styles.mobileThemeIconWrapper} ${styles.mobileMoonIcon} ${styles[theme]}`}>
                    <Moon className={styles.themeIcon} />
                </div>
            </div>
        );
    };

    const toggleLanguage = () => setLanguage(language === 'en' ? 'es' : 'en');

    const getLangSwitcher = (isMobile = false) => (
        <button
            className={isMobile ? styles.mobileLangSwitcher : styles.langSwitcher}
            onClick={toggleLanguage}
            aria-label={language === 'en' ? 'Switch to Spanish' : 'Switch to English'}
        >
            <span className={language === 'en' ? styles.langActive : styles.langInactive}>EN</span>
            <span className={styles.langDivider}>|</span>
            <span className={language === 'es' ? styles.langActive : styles.langInactive}>ES</span>
        </button>
    );

    useEffect(() => {
        if (isLandingPage && !heroComplete) {
            document.body.style.overflow = 'hidden';
            document.body.classList.remove(styles.clipped);
        } else if (menuOpen) {
            const scrollY = window.scrollY;
            setScrollPosition(scrollY);

            document.body.style.overflow = '';
            document.body.style.top = `-${scrollY}px`;
            document.body.classList.add(styles.clipped);
        } else {
            document.body.classList.remove(styles.clipped);
            document.body.style.overflow = 'auto';
            document.body.style.top = '';
            window.scrollTo(0, scrollPosition);
        }

        return () => {
            document.body.style.overflow = 'auto';
            document.body.style.top = '';
            document.body.classList.remove(styles.clipped);
        };
    }, [heroComplete, menuOpen, isLandingPage, scrollPosition]);

    useEffect(() => {
        if (isLandingPage && window.location.hash) {
            const cleanUrl = window.location.href.split('#')[0];
            window.history.replaceState({}, document.title, cleanUrl);
        }
    }, [isLandingPage]);

    const handleMenuClose = () => {
        setMenuOpen(false);
    };

    return (
        <>
            <div
                className={styles.darkGradient}
                style={{
                    opacity: theme === 'dark' ? 1 : 0,
                    transition: 'opacity 0.8s ease-in-out'
                }}
            />
            <div
                className={styles.lightGradient}
                style={{
                    opacity: theme === 'light' ? 1 : 0,
                    transition: 'opacity 0.8s ease-in-out'
                }}
            />

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
                        <Link href="/portfolio" className={`${styles.headercta} ${pathname === '/portfolio' ? styles.active : ''}`}>{t.nav.portfolio}</Link>
                        <Link href="/services" className={`${styles.headercta} ${pathname === '/services' ? styles.active : ''}`}>{t.nav.services}</Link>
                        <Link href="/testimonials" className={`${styles.headercta} ${pathname === '/testimonials' ? styles.active : ''}`}>{t.nav.reviews}</Link>
                        <Link href="/blog" className={`${styles.headercta} ${pathname.startsWith('/blog') ? styles.active : ''}`}>{t.nav.blog}</Link>
                        <button className={`${styles.headercta} ${styles.headerctaprimary}`} onClick={() => openContact()}>{t.nav.contact}</button>
                        {getLangSwitcher(false)}
                        <button className={styles.menutoggle} onClick={() => setMenuOpen(true)}>
                            <MenuIcon extraClass={styles.menutoggleicon} />
                        </button>
                    </div>
                </header>

                {menuOpen && (
                    <div className={`${styles.menu} ${menuOpen ? styles.visible : ''}`}>
                        <div className={styles.menuheader}>
                            <Link href="/" onClick={handleMenuClose}>
                                <Logo extraClass={styles.menulogo} />
                            </Link>
                            <div className={styles.menucontrols}>
                                {getLangSwitcher(true)}
                                <button className={styles.menuThemeToggle} onClick={toggleTheme} aria-label="Toggle theme">
                                    {getMobileThemeIcon()}
                                </button>
                            </div>
                        </div>

                        <div className={styles.items}>
                            <Link href="/portfolio" className={`${styles.item} ${pathname === '/portfolio' ? styles.activeItem : ''}`} onClick={handleMenuClose}>{t.nav.portfolio}</Link>
                            <Link href="/services" className={`${styles.item} ${pathname === '/services' ? styles.activeItem : ''}`} onClick={handleMenuClose}>{t.nav.services}</Link>
                            <Link href="/testimonials" className={`${styles.item} ${pathname === '/testimonials' ? styles.activeItem : ''}`} onClick={handleMenuClose}>{t.nav.reviews}</Link>
                            <Link href="/blog" className={`${styles.item} ${pathname.startsWith('/blog') ? styles.activeItem : ''}`} onClick={handleMenuClose}>{t.nav.blog}</Link>
                            <button className={styles.item} onClick={() => { handleMenuClose(); openContact(); }}>{t.nav.contact.charAt(0) + t.nav.contact.slice(1).toLowerCase()}</button>

                            <div className={styles.mobileCtas}>
                                <button className={styles.mobileCta} onClick={() => { handleMenuClose(); openContact(t.home.contactMessage); }}>{t.nav.startProject}</button>
                                <Link href="/portfolio" className={styles.mobileCta} onClick={handleMenuClose}>{t.nav.ourWork}</Link>
                            </div>
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
                                <Youtube className={styles.socialicon} secondaryClassName={styles.socialiconContrast} />
                            </a>
                            <a href="https://www.instagram.com/dreamsbyte_ig/" className={styles.social} rel="noopener noreferrer" target="_blank" aria-label="Follow us on Instagram">
                                <Instagram className={styles.socialicon} />
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

export default function Layout({ children, initialLanguage = 'en' }) {
    return (
        <LanguageProvider initialLanguage={initialLanguage}>
            <ThemeProvider>
                <HeroProvider>
                    <ContactProvider>
                        <HeaderAnimationProvider>
                            <StarsProvider>
                                <LayoutContent>
                                    {children}
                                </LayoutContent>
                            </StarsProvider>
                        </HeaderAnimationProvider>
                    </ContactProvider>
                </HeroProvider>
            </ThemeProvider>
        </LanguageProvider>
    );
}
