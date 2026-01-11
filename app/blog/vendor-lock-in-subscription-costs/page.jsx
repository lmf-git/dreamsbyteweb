'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useContact } from '../../../contexts/ContactContext';
import { useHeaderAnimation } from '../../../contexts/HeaderAnimationContext';
import CallToAction from '../../../components/layout/CallToAction/CallToAction';
import styles from '../post.module.scss';

export default function VendorLockIn() {
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
                    <h1 className={styles.title}>Vendor Lock-In: Subscription Costs</h1>
                    <div className={styles.meta}>
                        <span className={styles.author}>By DreamsByte Team</span>
                        <span className={styles.date}>2024-02-10</span>
                        <span className={styles.readTime}>8 min read</span>
                    </div>
                </header>

                <div className={styles.content}>
                    <div className={styles.prose}>
                        <h2 className={styles.heading2}>The Subscription Trap</h2>
                        <p className={styles.paragraph}>Website builders and SaaS platforms advertise low monthly fees and promise simplicity. But over the years, those "affordable" subscriptions add up to tens of thousands of pounds while you own nothing and control less with each platform update.</p>

                        <h2 className={styles.heading2}>The Math Doesn't Lie</h2>
                        <p className={styles.paragraph}>Let's run the numbers on a typical website builder subscription:</p>

                        <ul className={styles.list}>
                            <li className={styles.listItem}>Website builder: £25/month</li>
                            <li className={styles.listItem}>E-commerce features: £20/month</li>
                            <li className={styles.listItem}>Email marketing: £30/month</li>
                            <li className={styles.listItem}>Advanced features: £15/month</li>
                            <li className={styles.listItem}><strong>Total: £90/month or £1,080/year</strong></li>
                        </ul>

                        <p className={styles.paragraph}>After five years, you've paid £5,400. After ten years, £10,800. And what do you own? Nothing. Stop paying, and your entire online presence vanishes.</p>

                        <h2 className={styles.heading2}>What Vendor Lock-In Actually Means</h2>
                        <p className={styles.paragraph}>When you build on someone else's platform, you're accepting several critical limitations:</p>

                        <h3 className={styles.heading3}>You Don't Own Your Data</h3>
                        <p className={styles.paragraph}>Your customer data, content, and digital assets live on their servers under their terms. Many platforms make it deliberately difficult to export your data, and even when you can, it's often in formats that are useless without their proprietary tools.<sup><a href="#footnote-1" id="footnote-ref-1" className={styles.link}>1</a></sup></p>

                        <h3 className={styles.heading3}>You Can't Leave Without Starting Over</h3>
                        <p className={styles.paragraph}>Switching platforms means rebuilding everything from scratch. Your URLs change, breaking all your search engine rankings and inbound links. Your custom work gets abandoned. Your integrated services need reconnecting.</p>

                        <h3 className={styles.heading3}>Features Appear and Disappear at Their Whim</h3>
                        <p className={styles.paragraph}>Platforms regularly remove features, change pricing tiers, or sunset entire products. You have no control and no recourse. Remember when they said that feature was included? Too bad, it's now a premium add-on.</p>

                        <h3 className={styles.heading3}>You're Competing With Your Platform</h3>
                        <p className={styles.paragraph}>Many platforms now compete directly with their customers. Shopify launched Shopify Balance and Shop Pay. Squarespace offers Squarespace Scheduling.<sup><a href="#footnote-2" id="footnote-ref-2" className={styles.link}>2</a></sup> They're not just your vendor, they're your competitor.</p>

                        <h2 className={styles.heading2}>The Hidden Costs Keep Growing</h2>
                        <p className={styles.paragraph}>Beyond the obvious monthly fees, vendor lock-in creates expenses most businesses don't anticipate:</p>

                        <ul className={styles.list}>
                            <li className={styles.listItem}><strong>Transaction Fees:</strong> Many platforms take a percentage of every sale on top of your subscription if you don't use their in-house payment processor.<sup><a href="#footnote-3" id="footnote-ref-3" className={styles.link}>3</a></sup></li>
                            <li className={styles.listItem}><strong>Forced Upgrades:</strong> Your traffic grew? Congratulations, you're now required to upgrade to a more expensive tier</li>
                            <li className={styles.listItem}><strong>Integration Costs:</strong> Each third-party tool integration adds another subscription</li>
                            <li className={styles.listItem}><strong>Premium Support:</strong> Real help costs extra, basic support is deliberately unhelpful</li>
                            <li className={styles.listItem}><strong>Custom Features:</strong> Want something specific to your business? That'll be their enterprise plan at 10x the price</li>
                        </ul>

                        <h2 className={styles.heading2}>The Alternative: Ownership</h2>
                        <p className={styles.paragraph}>When you own your website and infrastructure, you control your destiny:</p>

                        <ul className={styles.list}>
                            <li className={styles.listItem}><strong>One-Time Investment:</strong> Pay once for development, own it forever</li>
                            <li className={styles.listItem}><strong>Minimal Ongoing Costs:</strong> Just hosting and domain, often under £10/month</li>
                            <li className={styles.listItem}><strong>Complete Control:</strong> Modify anything, integrate anything, customize everything</li>
                            <li className={styles.listItem}><strong>Your Data, Your Terms:</strong> Everything lives in formats you can access and use</li>
                            <li className={styles.listItem}><strong>Freedom to Move:</strong> Change hosts, add features, or redesign without starting over</li>
                        </ul>

                        <h2 className={styles.heading2}>But What About Ease of Use?</h2>
                        <p className={styles.paragraph}>Platform companies sell convenience, and there's truth to it—initially. Drag-and-drop builders are easy for basic sites. But that simplicity is superficial:</p>

                        <ul className={styles.list}>
                            <li className={styles.listItem}>Want something they didn't anticipate? You're stuck</li>
                            <li className={styles.listItem}>Need to integrate with your existing systems? Probably impossible</li>
                            <li className={styles.listItem}>Have specific workflow requirements? Use theirs or nothing</li>
                        </ul>

                        <p className={styles.paragraph}>Meanwhile, a properly built custom site with a modern CMS gives you the same ease of content management without the constraints. You get the simplicity where it matters—daily operations—while maintaining complete flexibility everywhere else.</p>

                        <h2 className={styles.heading2}>The DreamsByte Difference</h2>
                        <p className={styles.paragraph}>We build websites you own outright. No monthly fees beyond basic hosting. No proprietary systems. No vendor lock-in. Just clean, modern code that you can host anywhere, modify freely, and own forever.</p>

                        <p className={styles.paragraph}>Our upfront costs are transparent and competitive. Over any reasonable time horizon, ownership is dramatically cheaper than subscription platforms. And it's not just about money—it's about control, flexibility, and building a real asset for your business.</p>

                        <h2 className={styles.heading2}>Break Free</h2>
                        <p className={styles.paragraph}>If you're currently trapped in a subscription platform, it's not too late to escape. Yes, there's an upfront cost to migrate. But every month you wait is another month of payments toward something you'll never own.</p>

                        <p className={styles.paragraph}>Ready to own your digital infrastructure? <button
                            onClick={() => openContact('I want to break free from subscription platforms')}
                            className={styles.contactButton}
                        >
                            Let's talk
                        </button> about building something you actually own.</p>
                    </div>

                    <div className={styles.footnotes}>
                        <h2 className={styles.heading2}>Sources</h2>
                        <ol className={styles.orderedList}>
                            <li id="footnote-1" className={styles.listItem}>
                                <p className={styles.paragraph}>
                                    "How to Migrate From Shopify to WooCommerce: A Complete Guide", LitExtension, May 20, 2024.
                                    <a href="https://litextension.com/blog/migrate-from-shopify-to-woocommerce/" target="_blank" rel="noopener noreferrer" className={styles.link}>
                                        https://litextension.com/blog/migrate-from-shopify-to-woocommerce/
                                    </a>
                                    <a href="#footnote-ref-1" aria-label="Back to content" className={styles.link}> ↩</a>
                                </p>
                            </li>
                            <li id="footnote-2" className={styles.listItem}>
                                <p className={styles.paragraph}>
                                    Dan Ennis, "Shopify launches bank account for SMBs", Banking Dive, May 20, 2020.
                                    <a href="https://www.bankingdive.com/news/shopify-launches-bank-account-for-smbs/578275/" target="_blank" rel="noopener noreferrer" className={styles.link}>
                                        https://www.bankingdive.com/news/shopify-launches-bank-account-for-smbs/578275/
                                    </a>
                                    <a href="#footnote-ref-2" aria-label="Back to content" className={styles.link}> ↩</a>
                                </p>
                            </li>
                            <li id="footnote-3" className={styles.listItem}>
                                <p className={styles.paragraph}>
                                    "Third-party transaction fees", Shopify Help Center.
                                    <a href="https://help.shopify.com/en/manual/payments/third-party-providers" target="_blank" rel="noopener noreferrer" className={styles.link}>
                                        https://help.shopify.com/en/manual/payments/third-party-providers
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
