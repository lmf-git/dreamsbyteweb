'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useContact } from '../../../contexts/ContactContext';
import { useHeaderAnimation } from '../../../contexts/HeaderAnimationContext';
import CallToAction from '../../../components/layout/CallToAction/CallToAction';
import styles from '../post.module.scss';

export default function UnderstandingWebsiteDevelopment() {
    const { openContact } = useContact();
    const { headerAnimationComplete } = useHeaderAnimation();
    const [contentVisible, setContentVisible] = useState(false);

    useEffect(() => {
        if (headerAnimationComplete) {
            const timer = setTimeout(() => {
                setContentVisible(true);
            }, 200);
            return () => clearTimeout(timer);
        } else {
            setContentVisible(false);
        }
    }, [headerAnimationComplete]);

    return (
        <article
            className={`${styles.post} ${contentVisible ? styles.visible : ''}`}
            style={{ opacity: contentVisible ? 1 : 0 }}
        >
            <div className={styles.container}>
                <header className={styles.header}>
                    <h1 className={styles.title}>Website Development: Digital Presence</h1>
                    <div className={styles.meta}>
                        <span className={styles.author}>By DreamsByte Team</span>
                        <span className={styles.date}>2024-01-15</span>
                        <span className={styles.readTime}>6 min read</span>
                    </div>
                </header>

                <div className={styles.content}>
                    <div className={styles.prose}>
                        <h2>Introduction</h2>
                        <p>Building a professional website is more than just putting together some pages and images. At DreamsByte, we follow a comprehensive process to ensure your website not only looks great but also drives results for your business.</p>

                        <h2>What Goes Into Website Development</h2>
                        <ul>
                            <li>Business analysis and goal setting</li>
                            <li>User experience (UX) design and planning</li>
                            <li>Visual design and branding integration</li>
                            <li>Technical development and programming</li>
                            <li>Content management system setup</li>
                            <li>Testing, optimization, and launch</li>
                        </ul>

                        <h2>Our Development Process</h2>
                        <p>We start every project with a thorough understanding of your business goals. This helps us create a website that not only represents your brand but also converts visitors into customers.</p>

                        <h3>Discovery & Planning</h3>
                        <p>We begin by understanding your business, target audience, and objectives. This foundation ensures every decision we make serves your business goals.</p>

                        <h3>Design & User Experience</h3>
                        <p>Our design process focuses on creating an intuitive, engaging experience for your visitors while maintaining your brand identity and professional appearance.</p>

                        <h3>Development & Implementation</h3>
                        <p>Using modern, secure technologies, we build your website to be fast, reliable, and easy to manage. We ensure your site works perfectly on all devices and browsers.</p>

                        <h2>What Makes DreamsByte Different</h2>
                        <ul>
                            <li><strong>Complete Ownership:</strong> You own all the code and content</li>
                            <li><strong>No Hidden Fees:</strong> Transparent pricing with no surprise costs</li>
                            <li><strong>Free Hosting:</strong> We include hosting for the first year</li>
                            <li><strong>Ongoing Support:</strong> We're here to help even after launch</li>
                        </ul>

                        <h2>Ready to Get Started?</h2>
                        <p>Every business deserves a professional online presence. Whether you're starting from scratch or need to modernize an existing site, we're here to help you succeed online.</p>

                        <p>Ready to discuss your project? <button
                            onClick={() => openContact()}
                            className={styles.contactButton}
                        >
                            Contact us today
                        </button> for a free consultation and see how we can help grow your business online.</p>
                    </div>
                </div>

                <CallToAction />

                <footer className={styles.footer}>
                    <div className={styles.navigation}>
                        <Link href="/blog" className={styles.backLink}>
                            ← Back to Blog
                        </Link>
                    </div>
                </footer>
            </div>
        </article>
    );
}
