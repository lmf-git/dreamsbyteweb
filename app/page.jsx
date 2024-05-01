// import { useRef } from "react";

import Logo from "../components/icons/branding/Logo";

import Intro from "../components/specific/landing/Intro/Intro";
import Hero from "../components/specific/landing/Hero/Hero";
// import Testimonials from "../components/Testimonials";
// import Services from "../components/Services";
// import Contact from "../components/Contact";
// import EmailMethod from "../components/icons/social/EmailMethod";
// import Socials from "../components/Socials";
// import Footer from "../components/Footer";

// import ContactNowFab from "../components/icons/cta/ContactNowFab";
// import Scroll from "../components/icons/controls/Scroll";

import exportStyles from '../components/layout/_export.module.scss';
import styles from "../components/specific/Landing/Landing/landing.module.scss";

export default function Index() {
    return <main className={styles.index}>
        <div className={styles.header}>
            <Logo extraClass={styles.logo} />
            <a className={styles.headercta} href="#contact">CONTACT</a>
        </div>

        {/* <Intro /> */}

        {/* By including items in .content elem, they're hidden until intro finished. */}
        <div className="content">
            {/* <Scroll /> */}

            {/* <ContactNowFab /> */}

            <Hero />

            {/* <Testimonials />

            <Services /> */}
        </div>

        {/* <Footer /> */}
    </main>;
};
