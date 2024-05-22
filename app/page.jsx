import Logo from "../components/icons/branding/Logo";

import Intro from "../components/specific/landing/Intro/Intro";
import Hero from "../components/specific/landing/Hero/Hero";

import Testimonials from "../components/specific/landing/Testimonials/Testimonials";
import Services from "../components/specific/landing/Services/Services";
import Footer from "../components/layout/Footer/Footer";

import styles from "../components/specific/landing/landing.module.scss";

export default function Index() {
    return <main className={styles.index}>
        <div className={styles.header}>
            <Logo extraClass={styles.logo} />

            <div className={styles.headerctas}>
                <a className={styles.headercta} href="#contact">Work</a>
                <a className={styles.headercta} href="#contact">Services</a>
                <a className={styles.headercta} href="#contact">Reviews</a>
                <a className={`${styles.headercta} ${styles.headerctaprimary}`} href="#contact">CONTACT</a>
            </div>
        </div>

        <Intro />

        {/* By including items in .content elem, they're hidden until intro finished. */}
        <div className="content">
            <Hero />
            <Services />
            <Testimonials />

            {/* <Footer /> */}
        </div>
    </main>;
};
