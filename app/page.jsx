// import { useRef } from "react";

import ContactNowFab from "../components/icons/cta/ContactNowFab";
import Logo from "../components/icons/branding/Logo";
import ScrollIcon from "../components/icons/controls/Scroll";

import Hero from "../components/Hero";
import Testimonials from "../components/Testimonials";
import Services from "../components/Services";
import Contact from "../components/Contact";
import EmailMethod from "../components/icons/social/EmailMethod";
import Socials from "../components/Socials";
import Footer from "../components/Footer";

import exportStyle from "../styles/_export.module.scss";
import styles from "../styles/landing/landing.module.scss";

export default function Index() {
    // const contentRef = useRef();
    // const footerRef = useRef();
    
    // useEffect(() => {
    //     const delay = parseFloat(exportStyle.introduration) - 0.1;
    //     const children = contentRef.current.querySelectorAll('.section');
        
    //     setTimeout(() => {
    //         footerRef.current.style.height = `auto`;
    //         contentRef.current.style.height = `${100 * children.length}vh`;
    //     }, delay * 1000);
    // });

    return <main className={styles.index}>
        <div className={styles.header}>
            <Logo extraClass={styles.logo} />
            <a className={styles.headercta} href="#contact">CONTACT</a>
        </div>

        <div className={styles.intro}>
            <h1 className={styles.introtitle}>
                We make the best software in the world.
            </h1>
            <p className={styles.introblurb}>
                See the results we&apos;ve delivered, and let&apos;s start doing the same for your business.
            </p>
        </div>

        {/* By including items in .content elem, they're hidden until intro finished. */}
        <div className="content">
            {/* <ScrollIcon /> */}

            {/* <ContactNowFab /> */}

            <Hero />

            {/* <Testimonials />

            <Services /> */}
        </div>

        {/* <Footer /> */}
    </main>;
};
