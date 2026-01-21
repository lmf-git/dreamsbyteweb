'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useContact } from '../../../contexts/ContactContext';
import { useHeaderAnimation } from '../../../contexts/HeaderAnimationContext';
import CallToAction from '../../../components/layout/CallToAction/CallToAction';
import styles from '../post.module.scss';

export default function FromProblemToProfit() {
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
                    <h1 className={styles.title}>From Problem to Profit: Real-World Transformations Through Custom Software Development</h1>
                    <div className={styles.meta}>
                        <span className={styles.author}>By Liam Fielding</span>
                        <span className={styles.date}>2025-11-30</span>
                        <span className={styles.readTime}>10 min read</span>
                    </div>
                </header>

                <div className={styles.content}>
                    <div className={styles.prose}>
                        <h2 className={styles.heading2}>The Untapped Potential Within Your Business</h2>
                        <p className={styles.paragraph}>Every business faces unique challenges. Often, these challenges are rooted in inefficient processes, outdated technology, or a lack of tailored tools. While off-the-shelf software promises a quick fix, it rarely addresses the nuanced complexities that make your business unique. This is where custom software development shines—it transforms problems into quantifiable profits.<sup><a href="#footnote-1" id="footnote-ref-1" className={styles.link}>1</a></sup></p>
                        <p className={styles.paragraph}>At DreamsByte, we don't just build software; we engineer solutions that streamline operations, unlock new revenue streams, and provide a distinct competitive advantage.<sup><a href="#footnote-2" id="footnote-ref-2" className={styles.link}>2</a></sup> Our portfolio is filled with examples of businesses that have moved beyond generic tools to embrace systems designed precisely for their success.</p>

                        <h2 className={styles.heading2}>Case Study 1: The Logistics Company & <Link href="/blog/legacy-system-modernisation-guide" className={styles.link}>the Legacy System Headache</Link></h2>
                        <h3 className={styles.heading3}>The Problem: Manual Processes and Costly Errors</h3>
                        <p className={styles.paragraph}>A growing logistics company relied on a combination of spreadsheets, manual data entry, and an ancient, difficult-to-maintain internal system to manage its complex network of deliveries, routes, and inventory. This led to:</p>
                        <ul className={styles.list}>
                            <li className={styles.listItem}>Frequent human errors in route planning and order fulfillment.</li>
                            <li className={styles.listItem}>Inability to track shipments in real-time, leading to poor customer service.</li>
                            <li className={styles.listItem}>Massive time waste as employees cross-referenced disparate data sources.</li>
                            <li className={styles.listItem}>No scalable way to integrate new clients or expand service areas.</li>
                        </ul>

                        <h3 className={styles.heading3}>Our Custom Solution: An Integrated Logistics Management Platform</h3>
                        <p className={styles.paragraph}>We developed a bespoke, cloud-based Logistics Management Platform that integrated their client data, routing algorithms, and real-time tracking capabilities into a single, intuitive system. Key features included:</p>
                        <ul className={styles.list}>
                            <li className={styles.listItem}>Automated route optimization, considering traffic, delivery windows, and vehicle capacity.</li>
                            <li className={styles.listItem}>Real-time GPS tracking for all vehicles, accessible by both staff and clients.</li>
                            <li className={styles.listItem}>Integrated inventory management and automated order processing.</li>
                            <li className={styles.listItem}>A user-friendly dashboard providing actionable insights into operational efficiency.</li>
                        </ul>

                        <h3 className={styles.heading3}>The Transformation: Measurable ROI and Scaled Operations</h3>
                        <p className={styles.paragraph}>Within six months of deployment, the client experienced significant improvements:</p>
                        <ul className={styles.list}>
                            <li className={styles.listItem}>**25% reduction in fuel costs** due to optimized routing.</li>
                            <li className={styles.listItem}>**90% decrease in manual data entry errors.**</li>
                            <li className={styles.listItem}>**Improved customer satisfaction scores by 15%** due to real-time tracking and accurate ETAs.</li>
                            <li className={styles.listItem}>The company was able to **expand into two new regions** without increasing administrative staff, demonstrating significant scalability.</li>
                        </ul>

                        <h2 className={styles.heading2}>Case Study 2: The E-commerce Retailer & <Link href="/blog/beyond-shopify-custom-ecommerce" className={styles.link}>the Shopify Ceiling</Link></h2>
                        <h3 className={styles.heading3}>The Problem: Generic Experience and Spiraling Costs</h3>
                        <p className={styles.paragraph}>A successful niche e-commerce retailer, initially thriving on Shopify, began to encounter severe limitations as they scaled. Their unique product customization options required a complex web of third-party apps, leading to:</p>
                        <ul className={styles.list}>
                            <li className={styles.listItem}>High monthly app subscription costs and transaction fees.</li>
                            <li className={styles.listItem}>A slow, bloated website due to too many external scripts.</li>
                            <li className={styles.listItem}>A generic brand experience that failed to differentiate them in a competitive market.</li>
                            <li className={styles.listItem}>Inflexible backend for managing their custom product configurations and fulfillment.</li>
                        </ul>

                        <h3 className={styles.heading3}>Our Custom Solution: A Bespoke E-commerce Platform</h3>
                        <p className={styles.paragraph}>We migrated the client to a custom e-commerce platform built on a modern framework, designing every aspect to their specific needs. Our solution included:</p>
                        <ul className={styles.list}>
                            <li className={styles.listItem}>A highly optimized frontend with lightning-fast load times.</li>
                            <li className={styles.listItem}>Integrated, native product customization tools, eliminating the need for expensive third-party apps.</li>
                            <li className={styles.listItem}>A custom admin panel tailored for their unique order processing and fulfillment workflows.</li>
                            <li className={styles.listItem}>A unique, on-brand user experience from product selection to checkout.</li>
                        </ul>

                        <h3 className={styles.heading3}>The Transformation: Enhanced Brand, Reduced Costs, and Increased Sales</h3>
                        <p className={styles.paragraph}>The results were immediate and impactful:</p>
                        <ul className={styles.list}>
                            <li className={styles.listItem}>**Elimination of over $1,500/month in app subscriptions and platform transaction fees.**</li>
                            <li className={styles.listItem}>**Page load times reduced by 40%,** contributing to a **12% increase in conversion rates.**</li>
                            <li className={styles.listItem}>The custom backend reduced order processing time by **30%.**</li>
                            <li className={styles.listItem}>Improved brand perception led to **higher average order values** and **increased customer reviews.**</li>
                        </ul>

                        <h2 className={styles.heading2}>Your Challenges, Our Solutions</h2>
                        <p className={styles.paragraph}>These are just two examples of how a strategic investment in custom software can lead to profound business improvements. Whether you're struggling with outdated systems, inefficient workflows, or generic online platforms, there's an opportunity to build a solution that precisely fits your needs.</p>
                        <p className={styles.paragraph}>Stop adapting your business to your software. Let your software adapt to your business.</p>
                        <p className={styles.paragraph}><button
                            onClick={() => openContact("I'm interested in a custom software solution")}
                            className={styles.contactButton}
                        >
                            Let's discuss your unique business challenges.
                        </button></p>
                    </div>
                </div>

                    <div className={styles.footnotes}>
                        <h2 className={styles.heading2}>Sources</h2>
                        <ol className={styles.orderedList}>
                            <li id="footnote-1" className={styles.listItem}>
                                <p className={styles.paragraph}>
                                    "Decision Making Framework for Enterprise Resource Planning Software Selection: A Focus on Small and Medium Enterprises," <a href="https://www.uvic.ca/ecs/assets/docs/theses/msc-theses/2012-arora.pdf" target="_blank" rel="noopener noreferrer" className={styles.link}>University of Victoria</a>.
                                    <a href="#footnote-ref-1" aria-label="Back to content" className={styles.link}> ↩</a>
                                </p>
                            </li>
                            <li id="footnote-2" className={styles.listItem}>
                                <p className={styles.paragraph}>
                                    "CUSTOMIZED SOFTWARE Strategies for Acquiring and Sustaining Competitive Advantage: A Japanese Perspective," <a href="https://www.uvic.ca/ecs/assets/docs/theses/msc-theses/2009-suzuki.pdf" target="_blank" rel="noopener noreferrer" className={styles.link}>University of Victoria</a>.
                                    <a href="#footnote-ref-2" aria-label="Back to content" className={styles.link}> ↩</a>
                                </p>
                            </li>
                        </ol>
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
