import { useEffect, useRef } from "react";
import ContactNowFab from "../components/ContactNowFab";
import Logo from "../components/icons/Logo";
import ScrollIcon from "../components/icons/Scroll";
import Hero from "../components/Hero";
import exportStyle from "../styles/_export.module.scss";
import style from "../styles/landing/landing.module.scss";

export default function Index() {
    const contentRef = useRef();
    
    useEffect(() => {
        const delay = parseFloat(exportStyle.introduration) - 0.1;
        const children = contentRef.current.querySelectorAll('.section');
        
        setTimeout(() => {
            contentRef.current.style.height = `${100 * children.length}vh`;
        }, delay * 1000);
    });
    return <main className={style.index}>
        <div className={style.header}>
            <Logo extraClass={style.logo} />
            <a className={style.headercta} href="#contact">CONTACT</a>
        </div>

        <div className={style.intro}>
            <h1 className={style.introtitle}>
                We make the best software in the world.
            </h1>
            <p className={style.introblurb}>
                See the results we&apos;ve delivered, and let&apos;s start doing the same for your business.
            </p>
        </div>

        
        
        <div className="content" ref={contentRef}>
            {/* By including these in content, they're hidden until intro finished. */}
            <ScrollIcon />
            <ContactNowFab />

            <Hero />
            
            {/* <div className="section">test 2</div>
            <Hero />
            <Hero />
            <Hero /> */}

            <div className="section">
                Our client testimonials:
                Theodore Michaud
                THE OWNER of LVOLT
                Working with DreamsByte has been an absolute game-changer for our business. Their creative team's ability to turn our ideas into stunning digital solutions is nothing short of remarkable. They helped us not only improve our online presence but also boost our brand recognition. DreamsByte is more than a digital agency; they are partners in our success.
                See results
                Our Services
                From Concept to Reality
                Development 
                Full Stack Development
                Website/App/DB Maintenance
                UI Development
                WordPress/Ghost/CMS Development
                API Integrations/Custom API development
                Design
                Captivating Logos
                Landing pages
                Branding
                Distinctive Typography
                Compelling Colour Schemes
                E-commerce
                Shopify/Magento/Woocommerce/Custom Store Creation
                Multichannel/ERP and more integrations.
                Miscellaneous
                Figma to Website Conversion
                PSD to HTML Conversion
                Translation Services
                Troubleshooting and Error Fixing
                Tutoring in Web Development
                Stripe/Paypal/Square Payments Integration
                We&apos;ll contact you.
                To start realising your digital dreams, email us today.
                newclient@business.com
                Add message
                Submit
                Copyright Information: © 2023 Dreamsbyte. All rights reserved. Privacy Policy
            </div>
        </div>
    </main>;
};
