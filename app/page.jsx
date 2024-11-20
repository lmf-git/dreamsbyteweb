'use client';

import { useEffect, useState } from "react";


// import Hero from "../components/specific/landing/Hero/Hero";
import HeroSimple from '../components/specific/landing/HeroSimple/HeroSimple';
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

import styles from "../components/specific/landing/landing.module.scss";


export default function Index() {
    const [menuOpen, setMenuOpen] = useState(false);

    // Clip the page when menu is open.
    useEffect(() => {
        if (menuOpen) document.body.classList.add(styles.clipped);
        else document.body.classList.remove(styles.clipped);
    }, [menuOpen]);

    return <main className={styles.index}>
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

        { menuOpen && 
            <div className={styles.menu}>
                <div className={styles.menuheader}>
                    <Logo extraClass={styles.menulogo} />
                    <button className={styles.menuclose} onClick={() => setMenuOpen(false)}>
                        <MenuIcon extraClass={styles.menucloseicon} />
                    </button>
                </div>

                <div className={styles.items}>
                    <a className={styles.item} onClick={() => setMenuOpen(false)} href="#services">Services</a>
                    <a className={styles.item} onClick={() => setMenuOpen(false)} href="#testimonials">Reviews</a>
                    <a className={styles.item} onClick={() => setMenuOpen(false)} href="#contact">Contact</a>
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
        }

        <HeroSimple />
        <Services />
        <Testimonials />

        <Footer />
    </main>;
};
