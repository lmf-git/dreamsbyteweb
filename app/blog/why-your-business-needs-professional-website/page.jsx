'use client';

import Link from 'next/link';
import { useContact } from '../../../contexts/ContactContext';
import styles from '../post.module.scss';

export default function WhyYourBusinessNeedsWebsite() {
    const { openContact } = useContact();

    return (
        <article className={styles.post}>
            <div className={styles.container}>
                <header className={styles.header}>
                    <h1 className={styles.title}>Why Your Business Needs a Professional Website in 2024</h1>
                    <div className={styles.meta}>
                        <span className={styles.author}>By DreamsByte Team</span>
                        <span className={styles.date}>2024-01-20</span>
                        <span className={styles.readTime}>5 min read</span>
                    </div>
                </header>

                <div className={styles.content}>
                    <div className={styles.prose}>
                        <h2>The Digital Landscape in 2024</h2>
                        <p>In today's digital-first world, your website is often the first impression potential customers have of your business. A professional online presence isn't just nice to have—it's essential for growth and credibility.</p>

                        <h2>Key Benefits of a Professional Website</h2>
                        <ul>
                            <li>24/7 accessibility for your customers</li>
                            <li>Increased credibility and trust</li>
                            <li>Cost-effective marketing and advertising</li>
                            <li>Better customer service and support</li>
                            <li>Competitive advantage in your market</li>
                            <li>Data insights about your customers</li>
                        </ul>

                        <h2>How DreamsByte Helps Your Business Grow</h2>
                        <p>We don't just build websites—we create digital solutions that drive results. Our approach focuses on understanding your business goals and creating a website that actively contributes to your success.</p>

                        <h3>Strategic Planning</h3>
                        <p>Every website we build starts with a deep understanding of your business, target audience, and growth objectives.</p>

                        <h3>Modern Technology</h3>
                        <p>We use cutting-edge technologies to ensure your website is fast, secure, and scalable as your business grows.</p>

                        <h3>Ongoing Support</h3>
                        <p>Launch is just the beginning. We provide ongoing support to help your website continue driving results for your business.</p>

                        <h2>Ready to Transform Your Business Online?</h2>
                        <p>Don't let your competitors get ahead. A professional website is an investment in your business's future success and growth.</p>

                        <p><button
                            onClick={() => openContact()}
                            className={styles.contactButton}
                        >
                            Contact us today
                        </button> to discuss how we can help transform your business with a professional website that drives real results.</p>
                    </div>
                </div>

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
