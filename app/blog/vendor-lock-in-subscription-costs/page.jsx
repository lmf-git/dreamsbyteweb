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
                        <h2>The Subscription Trap</h2>
                        <p>Website builders and SaaS platforms advertise low monthly fees and promise simplicity. But over the years, those "affordable" subscriptions add up to tens of thousands of pounds while you own nothing and control less with each platform update.</p>

                        <h2>The Math Doesn't Lie</h2>
                        <p>Let's run the numbers on a typical website builder subscription:</p>

                        <ul>
                            <li>Website builder: £25/month</li>
                            <li>E-commerce features: £20/month</li>
                            <li>Email marketing: £30/month</li>
                            <li>Advanced features: £15/month</li>
                            <li><strong>Total: £90/month or £1,080/year</strong></li>
                        </ul>

                        <p>After five years, you've paid £5,400. After ten years, £10,800. And what do you own? Nothing. Stop paying, and your entire online presence vanishes.</p>

                        <h2>What Vendor Lock-In Actually Means</h2>
                        <p>When you build on someone else's platform, you're accepting several critical limitations:</p>

                        <h3>You Don't Own Your Data</h3>
                        <p>Your customer data, content, and digital assets live on their servers under their terms. Many platforms make it deliberately difficult to export your data, and even when you can, it's often in formats that are useless without their proprietary tools.</p>

                        <h3>You Can't Leave Without Starting Over</h3>
                        <p>Switching platforms means rebuilding everything from scratch. Your URLs change, breaking all your search engine rankings and inbound links. Your custom work gets abandoned. Your integrated services need reconnecting.</p>

                        <h3>Features Appear and Disappear at Their Whim</h3>
                        <p>Platforms regularly remove features, change pricing tiers, or sunset entire products. You have no control and no recourse. Remember when they said that feature was included? Too bad, it's now a premium add-on.</p>

                        <h3>You're Competing With Your Platform</h3>
                        <p>Many platforms now compete directly with their customers. Shopify launched Shopify Balance and Shop Pay. Squarespace offers Squarespace Scheduling. They're not just your vendor, they're your competitor.</p>

                        <h2>The Hidden Costs Keep Growing</h2>
                        <p>Beyond the obvious monthly fees, vendor lock-in creates expenses most businesses don't anticipate:</p>

                        <ul>
                            <li><strong>Transaction Fees:</strong> Many platforms take a percentage of every sale on top of your subscription</li>
                            <li><strong>Forced Upgrades:</strong> Your traffic grew? Congratulations, you're now required to upgrade to a more expensive tier</li>
                            <li><strong>Integration Costs:</strong> Each third-party tool integration adds another subscription</li>
                            <li><strong>Premium Support:</strong> Real help costs extra, basic support is deliberately unhelpful</li>
                            <li><strong>Custom Features:</strong> Want something specific to your business? That'll be their enterprise plan at 10x the price</li>
                        </ul>

                        <h2>The Alternative: Ownership</h2>
                        <p>When you own your website and infrastructure, you control your destiny:</p>

                        <ul>
                            <li><strong>One-Time Investment:</strong> Pay once for development, own it forever</li>
                            <li><strong>Minimal Ongoing Costs:</strong> Just hosting and domain, often under £10/month</li>
                            <li><strong>Complete Control:</strong> Modify anything, integrate anything, customize everything</li>
                            <li><strong>Your Data, Your Terms:</strong> Everything lives in formats you can access and use</li>
                            <li><strong>Freedom to Move:</strong> Change hosts, add features, or redesign without starting over</li>
                        </ul>

                        <h2>But What About Ease of Use?</h2>
                        <p>Platform companies sell convenience, and there's truth to it—initially. Drag-and-drop builders are easy for basic sites. But that simplicity is superficial:</p>

                        <ul>
                            <li>Want something they didn't anticipate? You're stuck</li>
                            <li>Need to integrate with your existing systems? Probably impossible</li>
                            <li>Have specific workflow requirements? Use theirs or nothing</li>
                        </ul>

                        <p>Meanwhile, a properly built custom site with a modern CMS gives you the same ease of content management without the constraints. You get the simplicity where it matters—daily operations—while maintaining complete flexibility everywhere else.</p>

                        <h2>The DreamsByte Difference</h2>
                        <p>We build websites you own outright. No monthly fees beyond basic hosting. No proprietary systems. No vendor lock-in. Just clean, modern code that you can host anywhere, modify freely, and own forever.</p>

                        <p>Our upfront costs are transparent and competitive. Over any reasonable time horizon, ownership is dramatically cheaper than subscription platforms. And it's not just about money—it's about control, flexibility, and building a real asset for your business.</p>

                        <h2>Break Free</h2>
                        <p>If you're currently trapped in a subscription platform, it's not too late to escape. Yes, there's an upfront cost to migrate. But every month you wait is another month of payments toward something you'll never own.</p>

                        <p>Ready to own your digital infrastructure? <button
                            onClick={() => openContact('I want to break free from subscription platforms')}
                            className={styles.contactButton}
                        >
                            Let's talk
                        </button> about building something you actually own.</p>
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
