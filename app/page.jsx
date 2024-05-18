// import { useRef } from "react";
// import EmailMethod from "../components/icons/social/EmailMethod";
// import Socials from "../components/Socials";

import Logo from "../components/icons/branding/Logo";

import Intro from "../components/specific/landing/Intro/Intro";
import Hero from "../components/specific/landing/Hero/Hero";
// import AlternativeHero from "../components/specific/landing/AlternativeHero/AlternativeHero";
import Testimonials from "../components/specific/landing/Testimonials/Testimonials";
import Services from "../components/specific/landing/Services/Services";
import Footer from "../components/layout/Footer/Footer";

import ContactNowFab from "../components/layout/ContactNowFab/ContactNowFab";
import Scroll from "../components/icons/controls/Scroll";

import styles from "../components/specific/landing/landing.module.scss";


export default function Index() {
    return <main className={styles.index}>
        <div className={styles.header}>
            <Logo extraClass={styles.logo} />
            <a className={styles.headercta} href="#contact">CONTACT</a>
        </div>

        <Intro />

        {/* By including items in .content elem, they're hidden until intro finished. */}
        <div className="content">
            <Scroll />
            <ContactNowFab />

            <Hero />
            
            <Testimonials />

            <Services />

            <Footer />
        </div>
    </main>;
};
