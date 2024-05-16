import LVolt from '../../../icons/branding/clients/LVolt';
import styles from './testimonials.module.scss';

export default function Testimonials() {
    return <div className={`section ${styles.testimonials}`}>
        <h2 className={styles.title}>Our client testimonials:</h2>
        
        <div className={styles.list}>
            <div className={styles.testimonial}>
                <div className={styles.brandl}>
                    <LVolt />
                </div>
                <div className={styles.textl}>
                    Theodore Michaud
                    THE OWNER of LVOLT
                    Working with DreamsByte has been an absolute game-changer for our business. Their creative team's ability to turn our ideas into stunning digital solutions is nothing short of remarkable. They helped us not only improve our online presence but also boost our brand recognition. DreamsByte is more than a digital agency; they are partners in our success.
                    See results
                </div>
            </div>
            <div className={styles.testimonial}>
                <div className={styles.brandl}>
                    <LVolt />
                </div>
                <div className={styles.textl}>
                    Theodore Michaud
                    THE OWNER of LVOLT
                    Working with DreamsByte has been an absolute game-changer for our business. Their creative team's ability to turn our ideas into stunning digital solutions is nothing short of remarkable. They helped us not only improve our online presence but also boost our brand recognition. DreamsByte is more than a digital agency; they are partners in our success.
                    See results
                </div>
            </div>
        </div>

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
    </div>;
};