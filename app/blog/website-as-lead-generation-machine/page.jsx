'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useContact } from '../../../contexts/ContactContext';
import { useHeaderAnimation } from '../../../contexts/HeaderAnimationContext';
import CallToAction from '../../../components/layout/CallToAction/CallToAction';
import styles from '../post.module.scss';

export default function WebsiteAsLeadGenMachine() {
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
                    <h1 className={styles.title}>Your Website, Your 24/7 Sales Machine: Engineering for Lead Generation and Conversion Funnels</h1>
                    <div className={styles.meta}>
                        <span className={styles.author}>By Liam Fielding</span>
                        <span className={styles.date}>2025-12-14</span>
                        <span className={styles.readTime}>9 min read</span>
                    </div>
                </header>

                <div className={styles.content}>
                    <div className={styles.prose}>
                        <h2 className={styles.heading2}>Beyond the Digital Brochure</h2>
                        <p className={styles.paragraph}>For many businesses, their website is simply an online brochure—a static collection of pages that exist primarily to provide information. While information is crucial, a truly effective website should be far more: it should be your hardest-working salesperson, operating 24 hours a day, 7 days a week, actively generating leads and <Link href="/blog/i-will-sell-to-everyone-is-a-lie" className={styles.link}>guiding potential customers</Link> through a conversion funnel.<sup><a href="#footnote-1" id="footnote-ref-1" className={styles.link}>1</a></sup></p>
                        <p className={styles.paragraph}>At DreamsByte, we engineer websites to be dynamic lead generation machines. We don't just build pretty pages; we build strategic digital assets designed to capture interest, nurture prospects, and drive measurable business growth.</p>

                        <h2 className={styles.heading2}>What is a Conversion Funnel?</h2>
                        <p className={styles.paragraph}>A conversion funnel illustrates the journey a potential customer takes from initial awareness to becoming a paying client. It typically involves several stages:<sup><a href="#footnote-2" id="footnote-ref-2" className={styles.link}>2</a></sup></p>
                        <ul className={styles.list}>
                            <li className={styles.listItem}><strong>Awareness:</strong> The prospect discovers your business (e.g., through <Link href="/blog/seo-snake-oil-empty-promises" className={styles.link}>search</Link>, social media, ads).</li>
                            <li className={styles.listItem}><strong>Interest:</strong> They explore your website, learning more about your offerings.</li>
                            <li className={styles.listItem}><strong>Consideration:</strong> They evaluate your solution against alternatives, often seeking more detailed information.</li>
                            <li className={styles.listItem}><strong>Intent:</strong> They show clear signs of wanting to engage (e.g., download a guide, start a free trial).</li>
                            <li className={styles.listItem}><strong>Conversion:</strong> They take the desired action (e.g., make a purchase, contact sales).</li>
                        </ul>
                        <p className={styles.paragraph}>Each stage requires specific website elements and content designed to move the user forward.</p>

                        <h2 className={styles.heading2}>Engineering Your Website for Maximum Lead Generation</h2>
                        <h3 className={styles.heading3}>1. The Captivating Entry Point: Homepage & Landing Pages</h3>
                        <p className={styles.paragraph}>Your homepage needs to immediately communicate your value proposition and guide visitors to relevant sections. Dedicated landing pages, stripped of distractions, are crucial for specific campaigns. Both must have:</p>
                        <ul className={styles.list}>
                            <li className={styles.listItem}><strong>Clear Value Proposition:</strong> What problem do you solve?</li>
                            <li className={styles.listItem}><strong>Compelling Headline:</strong> Grab attention instantly.</li>
                            <li className={styles.listItem}><strong>Strong Call-to-Action (CTA):</strong> Tell users exactly what to do next.</li>
                            <li className={styles.listItem}><Link href="/blog/from-problem-to-profit-case-studies" className={styles.link}><strong>Social Proof:</strong> Testimonials, client logos, case studies build trust.</Link></li>
                        </ul>

                        <h3 className={styles.heading3}>2. Content that Converts: Solving Problems and Building Authority</h3>
                        <p className={styles.paragraph}>Content is the fuel for your funnel. High-quality blog posts (like these!), whitepapers, guides, and videos address user questions, solve their problems, and establish your authority. Content should be easily shareable and optimized for search engines to attract organic traffic.</p>
                        <ul className={styles.list}>
                            <li className={styles.listItem}><strong>Blog Articles:</strong> Answer common questions, demonstrate expertise.</li>
                            <li className={styles.listItem}><strong>Lead Magnets:</strong> Offer valuable content (e.g., e-books, checklists) in exchange for contact information.</li>
                            <li className={styles.listItem}><strong>Case Studies:</strong> Show, don't just tell, how you've helped others achieve success.</li>
                        </ul>

                        <h3 className={styles.heading3}>3. Frictionless Forms and Inquiry Tools</h3>
                        <p className={styles.paragraph}>Once a user is ready to engage, the process must be as smooth as possible. Long, confusing forms kill conversion rates.<sup><a href="#footnote-3" id="footnote-ref-3" className={styles.link}>3</a></sup> We design:</p>
                        <ul className={styles.list}>
                            <li className={styles.listItem}><strong>Optimized Forms:</strong> Only ask for essential information. Use clear labels, validation, and progress indicators.</li>
                            <li className={styles.listItem}><strong>Clear CTAs:</strong> Buttons that say "Submit" are far less effective than "Get Your Free Quote" or "Schedule a Demo."</li>
                            <li className={styles.listItem}><strong>Live Chat & Chatbots:</strong> Provide immediate answers and capture contact information for follow-up.</li>
                            <li className={styles.listItem}><strong>Direct Contact Options:</strong> Prominently display phone numbers and email addresses.</li>
                        </ul>

                        <h3 className={styles.heading3}>4. Analytics and A/B Testing: Continuous Optimization</h3>
                        <p className={styles.paragraph}>Building a lead generation machine isn't a one-time task; it's an ongoing process of refinement. We integrate robust analytics to track user behavior, identify bottlenecks in the funnel, and conduct A/B tests to continuously improve performance. What headline performs best? Which CTA color gets more clicks? Data-driven decisions are key to maximizing your conversion rates.</p>

                        <h2 className={styles.heading2}>The DreamsByte Difference: Integrating Marketing & Engineering</h2>
                        <p className={styles.paragraph}>Many web developers focus only on the code. Many marketers focus only on the message. At DreamsByte, we bridge this gap. We combine deep understanding of conversion psychology and lead generation strategies with cutting-edge engineering practices to build websites that are not only technically excellent but also highly effective at driving business results.</p>
                        <p className={styles.paragraph}>From strategic information architecture and compelling copy to lightning-fast load times and seamless integrations, every element of your website is crafted with your conversion goals in mind.</p>

                        <h2 className={styles.heading2}>Turn Your Website into Your Best Salesperson</h2>
                        <p className={styles.paragraph}>Stop thinking of your website as an expense and start seeing it as an investment—a powerful, always-on sales and marketing asset. By engineering a clear and efficient conversion funnel, you can consistently generate high-quality leads and drive sustainable growth for your business.</p>
                        <p className={styles.paragraph}>Is your website working as hard as it could be? Are you capturing every potential lead? <button
                            onClick={() => openContact("I want my website to generate more leads")}
                            className={styles.contactButton}
                        >
                            Let's map out your perfect lead generation machine.
                        </button></p>
                    </div>
                </div>

                    <div className={styles.footnotes}>
                        <h2 className={styles.heading2}>Sources</h2>
                        <ol className={styles.orderedList}>
                            <li id="footnote-1" className={styles.listItem}>
                                <p className={styles.paragraph}>
                                    "How to Generate Leads: 43 Strategies, Tips, & Ideas," <a href="https://blog.hubspot.com/sales/how-to-generate-leads" target="_blank" rel="noopener noreferrer" className={styles.link}>HubSpot</a>.
                                    <a href="#footnote-ref-1" aria-label="Back to content" className={styles.link}> ↩</a>
                                </p>
                            </li>
                            <li id="footnote-2" className={styles.listItem}>
                                <p className={styles.paragraph}>
                                    "A STUDY ON MARKETING FUNNEL AND ITS UTILITY WITH REFERENCE TO CERTAIN IDENTIFIED PRODUCTS," <a href="https://eprajournals.com/index.php/IJMR/article/view/528" target="_blank" rel="noopener noreferrer" className={styles.link}>EPRA Journals</a>.
                                    <a href="#footnote-ref-2" aria-label="Back to content" className={styles.link}> ↩</a>
                                </p>
                            </li>
                            <li id="footnote-3" className={styles.listItem}>
                                <p className={styles.paragraph}>
                                    "How to Improve your Form Conversion Rates - 12 Effective Ways," <a href="https://zuko.io/blog/how-to-improve-form-conversion-rates" target="_blank" rel="noopener noreferrer" className={styles.link}>Zuko</a>.
                                    <a href="#footnote-ref-3" aria-label="Back to content" className={styles.link}> ↩</a>
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
