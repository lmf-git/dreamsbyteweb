'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useContact } from '../../../contexts/ContactContext';
import { useHeaderAnimation } from '../../../contexts/HeaderAnimationContext';
import CallToAction from '../../../components/layout/CallToAction/CallToAction';
import styles from '../post.module.scss';

export default function WhyYourBusinessNeedsWebsite() {
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
                    <h1 className={styles.title}>Professional Website For Your Business</h1>
                    <div className={styles.meta}>
                        <span className={styles.author}>By Liam Fielding</span>
                        <span className={styles.date}>2024-01-20</span>
                        <span className={styles.readTime}>5 min read</span>
                    </div>
                </header>

                <div className={styles.content}>
                    <div className={styles.prose}>
                        <h2 className={styles.heading2}>The Digital Landscape in 2024</h2>
                        <p className={styles.paragraph}>In today's digital-first world, your website is often the first impression potential customers have of your business. A <Link href="/blog/seo-snake-oil-empty-promises" className={styles.link}>professional online presence</Link> isn't just nice to have—it's essential for growth, especially when 75% of consumers judge a business's credibility based on its website design alone.<sup><a href="#footnote-1" id="footnote-ref-1" className={styles.link}>1</a></sup></p>

                        <h2 className={styles.heading2}>Key Benefits of a Professional Website</h2>
                        <ul className={styles.list}>
                            <li className={styles.listItem}><strong>24/7 Accessibility:</strong> With 81% of consumers researching products online before buying, your website acts as your always-on storefront.<sup><a href="#footnote-2" id="footnote-ref-2" className={styles.link}>2</a></sup></li>
                            <li className={styles.listItem}><strong>Increased Credibility and Trust:</strong> A well-designed, professional site builds immediate trust with potential customers.</li>
                            <li className={styles.listItem}><strong>Cost-Effective Marketing:</strong> Content marketing can generate three times more leads while costing 62% less than traditional advertising, with your website as the central hub.<sup><a href="#footnote-3" id="footnote-ref-3" className={styles.link}>3</a></sup></li>
                            <li className={styles.listItem}><strong>Better Customer Service and Support:</strong> Offer FAQs, support articles, and easy contact options to improve customer satisfaction.</li>
                            <li className={styles.listItem}><strong>Competitive Advantage:</strong> A superior online experience can set you apart from competitors in a crowded market.</li>
                            <li className={styles.listItem}><strong>Data Insights:</strong> Analytics from your website provide invaluable data about customer behavior and preferences.</li>
                        </ul>

                        <h2 className={styles.heading2}>How DreamsByte Helps Your Business Grow</h2>
                        <p className={styles.paragraph}>We don't just build websites—<Link href="/blog/understanding-website-development" className={styles.link}>we create digital solutions that drive results</Link>. Our approach focuses on understanding your business goals and creating a website that actively contributes to your success.</p>

                        <h3 className={styles.heading3}>Strategic Planning</h3>
                        <p className={styles.paragraph}>Every website we build starts with a deep understanding of your business, target audience, and growth objectives.</p>

                        <h3 className={styles.heading3}>Modern Technology</h3>
                        <p className={styles.paragraph}>We use cutting-edge technologies to ensure your website is fast, secure, and scalable as your business grows.</p>

                        <h3 className={styles.heading3}>Ongoing Support</h3>
                        <p className={styles.paragraph}>Launch is just the beginning. We provide ongoing support to help your website continue driving results for your business.</p>

                        <h2 className={styles.heading2}>Ready to Transform Your Business Online?</h2>
                        <p className={styles.paragraph}>Don't let your competitors get ahead. A professional website is an investment in your business's future success and growth.</p>

                        <p className={styles.paragraph}><button
                            onClick={() => openContact()}
                            className={styles.contactButton}
                        >
                            Contact us today
                        </button> to discuss how we can help transform your business with a professional website that drives real results.</p>
                    </div>

                    <div className={styles.footnotes}>
                        <h2 className={styles.heading2}>Sources</h2>
                        <ol className={styles.orderedList}>
                            <li id="footnote-1" className={styles.listItem}>
                                <p className={styles.paragraph}>
                                    "How Website Design Influences 75% of Your Business Credibility," <a href="https://tenacity.io/blog/how-website-design-influences-75-of-your-business-credibility/" target="_blank" rel="noopener noreferrer" className={styles.link}>Tenacity</a>.
                                    <a href="#footnote-ref-1" aria-label="Back to content" className={styles.link}> ↩</a>
                                </p>
                            </li>
                            <li id="footnote-2" className={styles.listItem}>
                                <p className={styles.paragraph}>
                                    "Consumer Behaviour in Online Shopping: A Comprehensive Study," <a href="https://www.hmjournals.com/journal/ijaem/article/view/174" target="_blank" rel="noopener noreferrer" className={styles.link}>HM Journals</a>.
                                    <a href="#footnote-ref-2" aria-label="Back to content" className={styles.link}> ↩</a>
                                </p>
                            </li>
                            <li id="footnote-3" className={styles.listItem}>
                                <p className={styles.paragraph}>
                                    "Content Marketing vs. Traditional Advertising: What's the Difference?", <a href="https://copypress.com/blog/content-marketing-vs-traditional-advertising-whats-the-difference/" target="_blank" rel="noopener noreferrer" className={styles.link}>Copypress</a>.
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
