'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useContact } from '../../../contexts/ContactContext';
import { useHeaderAnimation } from '../../../contexts/HeaderAnimationContext';
import CallToAction from '../../../components/layout/CallToAction/CallToAction';
import styles from '../post.module.scss';

export default function EthicalBusinessPractices() {
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
                    <h1 className={styles.title}>A Business Philosophy Rooted in People</h1>
                    <div className={styles.meta}>
                        <span className={styles.author}>By L M Farnsworth</span>
                        <span className={styles.date}>2026-01-15</span>
                        <span className={styles.readTime}>6 min read</span>
                    </div>
                </header>

                <div className={styles.content}>
                    <div className={styles.prose}>
                        <p className={styles.paragraph}>
                            In an industry often defined by opaque practices and profit-at-all-costs mentalities, we choose to operate differently. Our work is not just about building software; it’s about forging partnerships and creating tools that empower people and build stronger communities.
                        </p>
                        <p className={styles.paragraph}>
                            We believe that the best business relationships are built on a foundation of mutual respect and shared success. This philosophy guides every decision we make, from the clients we partner with to the way we price our services.
                        </p>

                        <h2 className={styles.heading2}>Fair, Transparent, and Simple</h2>
                        <p className={styles.paragraph}>
                            We reject the idea of "fee stacking," "value-added" markups, and other tactics designed to obscure the true cost of a service. Our pricing is straightforward and honest. You pay for the work we do. There are no hidden administrative fees, no inflated costs for third-party licenses, and no complex retainers where you pay for time you don't use. 
                        </p>
                        <p className={styles.paragraph}>
                            Our goal is to create a partnership where our incentives are aligned with yours: to build the best possible product, efficiently and effectively.
                        </p>

                        <h2 className={styles.heading2}>Building for Independence, Not Dependence</h2>
                        <p className={styles.paragraph}>
                            Many software companies build systems designed to create dependency, locking clients into their platforms with proprietary code and "exit fees." We believe this is a fundamentally flawed approach.
                        </p>
                        <p className={styles.paragraph}>
                            We build technology that you own and control. Our solutions are built on open standards and well-documented code, ensuring you are never held hostage by your own systems. We want you to work with us because you value our expertise and our partnership, not because you are trapped.
                        </p>

                        <h2 className={styles.heading2}>Technology in Service of Humanity</h2>
                        <p className={styles.paragraph}>
                            Software is not neutral. It can be used to enrich lives, foster connection, and solve meaningful problems. It can also be used to exploit, divide, and distract. We are committed to working on projects that have a positive impact.
                        </p>
                        <p className={styles.paragraph}>
                            For this reason, <strong>we do not take on clients in certain industries</strong>. We will not build software for:
                        </p>
                        <ul className={styles.list}>
                            <li className={styles.listItem}>Gambling or betting platforms</li>
                            <li className={styles.listItem}>Predatory lending or high-interest finance</li>
                            <li className={styles.listItem}>Industries that rely on user surveillance for profit</li>
                            <li className={styles.listItem}>Social media designed to be addictive</li>
                            <li className={styles.listItem}>Anything that contributes to environmental degradation</li>
                        </ul>
                        <p className={styles.paragraph}>
                            This is not a judgment; it is a choice. We choose to dedicate our skills to projects that align with our vision for a more equitable and humane world. We believe that by focusing our efforts on building tools for businesses that create real value, we all succeed together.
                        </p>

                        <h2 className={styles.heading2}>A Partnership, Not a Transaction</h2>
                        <p className={styles.paragraph}>
                            When you work with us, you are not just another line item on a spreadsheet. You are a partner. We take the time to understand your goals, your challenges, and your vision. We succeed when you succeed, and we are deeply committed to the long-term health of your business and the products we build together.
                        </p>
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