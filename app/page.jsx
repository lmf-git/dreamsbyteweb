'use client';

import { useState } from "react";

import Intro from "../components/specific/landing/Intro/Intro";
import Hero from "../components/specific/landing/Hero/Hero";
import Testimonials from "../components/specific/landing/Testimonials/Testimonials";
import Services from "../components/specific/landing/Services/Services";

import Footer from "../components/layout/Footer/Footer";

import MenuIcon from "../components/icons/social/Menu";
import Logo from "../components/icons/branding/Logo";

import styles from "../components/specific/landing/landing.module.scss";


export default function Index() {
    const [menuOpen, setMenuOpen] = useState(false);

    return <main className={styles.index}>
        <div className={styles.header}>
            <Logo extraClass={styles.logo} />

            <div className={styles.headerctas}>
                <a className={styles.headercta} href="#services">Services</a>
                <a className={styles.headercta} href="#testimonials">Reviews</a>
                <a className={`${styles.headercta} ${styles.headerctaprimary}`} href="#contact">CONTACT</a>
                <button className={styles.menutoggle} onClick={() => setMenuOpen(true)}>
                    <MenuIcon extraClass={styles.menutoggleicon} />
                </button>
            </div>
        </div>

        { menuOpen && 
            <div className={styles.menu}>
                <div className={styles.menuheader}>
                    <span className={styles.menutitle}>MENU</span>
                    <button className={styles.menuclose} onClick={() => setMenuOpen(false)}>
                        <MenuIcon extraClass={styles.menucloseicon} />
                    </button>
                </div>
                <a className={styles.menuitem} href="#services">Services</a>
                <a className={styles.menuitem} href="#testimonials">Reviews</a>
                <a className={styles.menuitem} href="#contact">Contact</a>
            </div>
        }

        <Intro />

        {/* By including items in .content elem, they're hidden until intro finished. */}
        <div className="content">
            <Hero />
            <Services />
            <Testimonials />

            <Footer />
        </div>
        
    </main>;
};
