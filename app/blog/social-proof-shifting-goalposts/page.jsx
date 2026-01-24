'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useContact } from '../../../contexts/ContactContext';
import { useHeaderAnimation } from '../../../contexts/HeaderAnimationContext';
import CallToAction from '../../../components/layout/CallToAction/CallToAction';
import styles from '../post.module.scss';

export default function SocialProofShiftingGoalposts() {
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
                    <h1 className={styles.title}>Social Proof: The Shifting Goalposts of Value</h1>
                    <div className={styles.meta}>
                        <span className={styles.author}>By Liam Fielding</span>
                        <span className={styles.date}>2026-01-22</span>
                        <span className={styles.readTime}>15 min read</span>
                    </div>
                </header>

                <div className={styles.content}>
                    <div className={styles.prose}>
                        <h2 className={styles.heading2}>The "Social Proof" Gaslight</h2>
                        <p className={styles.paragraph}>
                            "Social proof" – testimonials, follower counts, glowing reviews – is often touted as the bedrock of modern marketing. But as we head into 2026, it's increasingly used as a linguistic sleight of hand. Platforms like Meta and Google claim the "benefit" they provide is an invisible layer of trust or authority, when in reality, they are just charging you for the privilege of accessing the network you built or the customers who were already looking for you.
                        </p>
                        <p className={styles.paragraph}>
                            The platform’s argument usually goes like this: "Even if you don't see a direct sale from this ad, the 'Social Proof' (likes, views, presence) builds a 'hidden' brand value that will pay off later." This is often a cover for declining performance.
                        </p>

                        <h3 className={styles.heading3}>You Bring the Network, They Charge the Rent</h3>
                        <p className={styles.paragraph}>
                            You spend years building a following or a reputation. Then, the algorithm throttles your reach so that only 2% of your "network" sees your posts. To reach the other 98%, you have to pay. They aren't "providing" social proof; they are holding your own social proof hostage and selling it back to you.
                        </p>

                        <h3 className={styles.heading3}>The "Contextual Mirage"</h3>
                        <p className={styles.paragraph}>
                            Google often claims that being at the top of a Search Result provides "authority." But as "SGE" (Search Generative Experience) and AI overviews take over in 2026, Google is scraping your content to answer the question directly. They take your "proof" (your expertise) and present it as their own, often without even sending the user to your site.
                        </p>

                        <h3 className={styles.heading3}>The Zero-Sum Engagement</h3>
                        <p className={styles.paragraph}>
                            On Instagram and Facebook, "Social Proof" is now heavily manufactured. Bots and engagement pods have made "likes" and "follows" almost meaningless. The platforms know this, yet they still use these "vanity metrics" to justify ad spend when actual conversion rates (ROAS) are cratering.
                        </p>
                        
                        <h2 className={styles.heading2}>The "Hidden Benefit" Trap</h2>
                        <p className={styles.paragraph}>
                            By claiming the benefit is "hidden," these companies move the goalposts. If you can't measure it, you can't prove it's failing. This allows them to continue extraction even as the organic value of the platform declines. It’s the digital equivalent of a landlord claiming that the "benefit" of a 20% rent hike is the "prestige" of living in the building, while the elevator is broken and the roof is leaking.
                        </p>
                        <p className={styles.paragraph}>
                            <strong>The "Social Proof" Paradox:</strong> If you have to pay $5,000 in ads to show your 50,000 followers a product, you don't own a "social network"—you are a tenant in a digital feudal system where the "social proof" is just the paint on the walls.
                        </p>

                        <h2 className={styles.heading2}>The "Anti-Enshittification" Stack</h2>
                        <p className={styles.paragraph}>
                            To fight this, a new "Direct-to-Community" stack has emerged. These tools focus on sovereignty—meaning you own the data, the list, and the reach, and no algorithm can "hide" your benefit behind a paywall.
                        </p>

                        <h3 className={styles.heading3}>1. The "Sovereign Social" Protocols (Web3)</h3>
                        <p className={styles.paragraph}>
                            Instead of a "platform" owning your data, these are protocols where you own your "Social Graph." If you don't like the app you're using, you can move your entire audience to a different app instantly.
                        </p>
                        <ul className={styles.list}>
                            <li className={styles.listItem}><strong>Farcaster (Warpcast):</strong> This is the current leader in decentralized social. It feels like Twitter but operates on a "hub" system. You pay a small storage fee (around $5/year) to host your own data. In exchange, there is no algorithm throttling your reach. "Frames" allow you to turn a social post into a mini-app (a shop, a poll, or a mint) where the transaction happens inside the feed, cutting out the "link in bio" friction.</li>
                            <li className={styles.listItem}><strong>Lens Protocol:</strong> Built by the Aave team, this turns every "follow" into an NFT. This means your relationship with your audience is a digital asset that you own, not Meta.</li>
                        </ul>

                        <h4 className={styles.heading4}>3. Google’s E-E-A-T and "User Signals"</h4>
                        <p className={styles.paragraph}>
                            In 2024 and 2025, leaked Google documents confirmed that "user signals" (like Click-Through Rate and "pogo-sticking") are used for rankings.
                        </p>
                        <ul className={styles.list}>
                            <li className={styles.listItem}><strong>The Indirect Admission:</strong> Google officially tells creators to focus on E-E-A-T (Experience, Expertise, Authoritativeness, and Trustworthiness).</li>
                            <li className={styles.listItem}><strong>The Paradox:</strong> They admit that they can’t actually read your mind to know if you are an expert. Instead, they look for signals of social proof (like other people linking to you). By shifting the goalposts to AI-generated overviews (SGE), they are effectively saying: "We trust your social proof enough to use your answer, but not enough to give you the click."</li>
                        </ul>

                        <h3 className={styles.heading3}>More Smoking Guns: Technical Features and Hidden Realities</h3>
                        <p className={styles.paragraph}>
                            There are a few "smoking guns" in the current 2026 landscape that the platforms acknowledge as "technical features," but which are actually the mechanics of the "Social Proof Gaslight" the blog mentioned. Beyond what we’ve discussed, here are three critical, lesser-known pieces of the puzzle:
                        </p>

                        <h4 className={styles.heading4}>1. The "Meta Verified" Tier System (The Pay-for-Proof Model)</h4>
                        <p className={styles.paragraph}>
                            As of late 2025/early 2026, Meta has fully transitioned verification from a "badge of honor" to a multi-tiered subscription service.
                        </p>
                        <ul className={styles.list}>
                            <li className={styles.listItem}><strong>The Indirect Admission:</strong> By creating Tiers 1 through 5 (with prices ranging from $11.99 to over $100+ per month for businesses), Meta has officially decoupled "Authority" from "Achievement."</li>
                            <li className={styles.listItem}><strong>The Catch:</strong> They openly admit in their terms that Meta Verified doesn't guarantee viral growth, but they do mention "increased visibility in search and comments." This is a quiet acknowledgment that the algorithm is now "weighted" in favor of those who pay for the proof of their own identity.</li>
                        </ul>

                        <h4 className={styles.heading4}>2. Google’s "Citation Share" vs. Clicks</h4>
                        <p className={styles.paragraph}>
                            With the full rollout of AI Overviews (SGE), Google has introduced a new internal metric they discuss with large advertisers: Citation Share.
                        </p>
                        <ul className={styles.list}>
                            <li className={styles.listItem}><strong>The Reality:</strong> Google acknowledges that clicks are dropping—in some categories, "Zero-Click" searches now account for 65% to 70% of all queries.</li>
                            <li className={styles.listItem}><strong>The Gaslight:</strong> Instead of apologizing for the loss of traffic, Google is framing this as a benefit. They argue that being "cited" by the AI is a form of "Implicit Social Proof" that builds brand trust. However, they provide no way to track if a user who read your expert advice in an AI snippet actually remembered your brand or just thanked Google for the answer.</li>
                        </ul>

                        <h4 className={styles.heading4}>3. The "Creative-as-Targeting" Shift</h4>
                        <p className={styles.paragraph}>
                            In 2026, Meta’s Advantage+ and Lattice AI architectures have almost entirely removed the ability for advertisers to pick their own audience (e.g., "People who like Yoga").
                        </p>
                        <ul className={styles.list}>
                            <li className={styles.listItem}><strong>The Indirect Admission:</strong> Meta now tells advertisers that "The Creative is the Targeting."</li>
                            <li className={styles.listItem}><strong>The Trap:</strong> They acknowledge that because they’ve limited tracking (due to privacy laws), you must now use "Social Proof" (UGC, testimonials, reviews) within the ad itself to "signal" to the AI who should see it.</li>
                            <li className={styles.listItem}><strong>The Result:</strong> You are essentially doing the work of the algorithm. You provide the "social proof" to train their AI, and then pay them to show that training data to the audience you already helped them identify.</li>
                        </ul>

                        <h2 className={styles.heading2}>The "Micro-Community" Shift</h2>
                        <p className={styles.paragraph}>
                            The most successful people in 2026 are stopping the "numbers game." They realize that 1,000 "True Fans" in a Discord or a private newsletter are worth more than 100,000 "Followers" on Instagram that they have to pay $2,000 a month to reach.
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