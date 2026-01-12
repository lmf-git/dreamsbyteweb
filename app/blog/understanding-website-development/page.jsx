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
                        <h2 className={styles.heading2}>Introduction</h2>
                        <p className={styles.paragraph}><Link href="/blog/why-your-business-needs-professional-website" className={styles.link}>Building a professional website</Link> is more than just putting together some pages and images. The user's experience on your site has a direct and measurable impact on your business's success. In fact, studies show that 88% of online consumers are less likely to return to a site after a bad experience.<sup><a href="#footnote-1" id="footnote-ref-1" className={styles.link}>1</a></sup></p>
                        <p className={styles.paragraph}>At DreamsByte, we follow a comprehensive development process to ensure your website not only looks great and avoids user frustration, but also actively drives results for your business.</p>

                        <h2 className={styles.heading2}>What Goes Into Website Development</h2>
                        <ul className={styles.list}>
                            <li className={styles.listItem}>Business analysis and goal setting</li>
                            <li className={styles.listItem}>User experience (UX) design and planning</li>
                            <li className={styles.listItem}>Visual design and branding integration</li>
                            <li className={styles.listItem}>Technical development and programming</li>
                            <li className={styles.listItem}>Content management system setup</li>
                            <li className={styles.listItem}>Testing, optimization, and launch</li>
                        </ul>

                        <h2 className={styles.heading2}>Our Development Process</h2>
                        <p className={styles.paragraph}>We start every project with a thorough understanding of your business goals. This helps us create a website that not only represents your brand but also <Link href="/blog/website-as-lead-generation-machine" className={styles.link}>converts visitors into customers</Link>.</p>

                        <h3 className={styles.heading3}>Discovery & Planning</h3>
                        <p className={styles.paragraph}>We begin by understanding your business, target audience, and objectives. This foundation ensures every decision we make serves your business goals.</p>

                        <h3 className={styles.heading3}>Design & User Experience</h3>
                        <p className={styles.paragraph}>Our design process focuses on creating an intuitive, engaging experience for your visitors while maintaining your brand identity and professional appearance. With 75% of consumers judging a business's credibility by its website design, this is not just an aesthetic choice, but a crucial business investment.<sup><a href="#footnote-2" id="footnote-ref-2" className={styles.link}>2</a></sup></p>

                        <h3 className={styles.heading3}>Development & Implementation</h3>
                        <p className={styles.paragraph}>Using modern, secure technologies, we build your website to be <Link href="/blog/performance-first-website-lighthouse" className={styles.link}>fast, reliable, and easy to manage</Link>. We ensure your site works perfectly on all devices and browsers.</p>

                        <h2 className={styles.heading2}>What Makes DreamsByte Different</h2>
                        <ul className={styles.list}>
                            <li className={styles.listItem}><strong>Complete Ownership:</strong> You own all the code and content</li>
                            <li className={styles.listItem}><strong>Cost-Effective Marketing:</strong> Your website is the core of your digital marketing. Content marketing, centered around your site, can generate three times more leads while costing 62% less than traditional advertising.<sup><a href="#footnote-3" id="footnote-ref-3" className={styles.link}>3</a></sup></li>
                            <li className={styles.listItem}><strong>Free Hosting:</strong> We include hosting for the first year</li>
                            <li className={styles.listItem}><strong>Ongoing Support:</strong> We're here to help even after launch</li>
                        </ul>

                        <h2 className={styles.heading2}>Ready to Get Started?</h2>
                        <p className={styles.paragraph}>Every business deserves a professional online presence. Whether you're starting from scratch or need to modernize an existing site, we're here to help you succeed online.</p>

                        <p className={styles.paragraph}>Ready to discuss your project? <button
                            onClick={() => openContact()}
                            className={styles.contactButton}
                        >
                            Contact us today
                        </button> for a free consultation and see how we can help grow your business online.</p>
                    </div>

                    <div className={styles.footnotes}>
                        <h2 className={styles.heading2}>Sources</h2>
                        <ol className={styles.orderedList}>
                            <li id="footnote-1" className={styles.listItem}>
                                <p className={styles.paragraph}>
                                    "27 UX Statistics You Should Not Ignore in 2024", UserGuiding Blog.
                                    <a href="https://userguiding.com/blog/ux-statistics/" target="_blank" rel="noopener noreferrer" className={styles.link}>
                                        https://userguiding.com/blog/ux-statistics/
                                    </a>
                                    <a href="#footnote-ref-1" aria-label="Back to content" className={styles.link}> ↩</a>
                                </p>
                            </li>
                            <li id="footnote-2" className={styles.listItem}>
                                <p className={styles.paragraph}>
                                    "28+ Web Design Statistics You Need to Know in 2024", Rare Form New Media.
                                    <a href="https://www.rareformnewmedia.com/blog/28-web-design-statistics-you-need-to-know-in-2022/" target="_blank" rel="noopener noreferrer" className={styles.link}>
                                        https://www.rareformnewmedia.com/blog/28-web-design-statistics-you-need-to-know-in-2022/
                                    </a>
                                    <a href="#footnote-ref-2" aria-label="Back to content" className={styles.link}> ↩</a>
                                </p>
                            </li>
                            <li id="footnote-3" className={styles.listItem}>
                                <p className={styles.paragraph}>
                                    "Content Marketing vs Traditional Marketing: Which is Better?", Bluetone Media.
                                    <a href="https://www.bluetonemedia.com/blog/content-marketing-vs-traditional-marketing" target="_blank" rel="noopener noreferrer" className={styles.link}>
                                        https://www.bluetonemedia.com/blog/content-marketing-vs-traditional-marketing
                                    </a>
                                    <a href="#footnote-ref-3" aria-label="Back to content" className={styles.link}> ↩</a>
                                </p>
                            </li>
                        </ol>
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
