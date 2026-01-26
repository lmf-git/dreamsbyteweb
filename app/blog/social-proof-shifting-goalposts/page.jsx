'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useContact } from '../../../contexts/ContactContext';
import { useHeaderAnimation } from '../../../contexts/HeaderAnimationContext';
import CallToAction from '../../../components/layout/CallToAction/CallToAction';
import styles from '../post.module.scss';
import { posts } from '../posts';

export default function SocialProofShiftingGoalposts() {
    const { openContact } = useContact();
    const { headerAnimationComplete } = useHeaderAnimation();
    const [contentVisible, setContentVisible] = useState(false);

    // Find the current post's data from the imported array
    const post = posts.find(p => p.slug === 'social-proof-shifting-goalposts');

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
                    <h1 className={styles.title}>{post?.title || 'Social Proof: The Shifting Goalposts of Value'}</h1>
                    {post?.excerpt && <p className={styles.excerpt}>{post.excerpt}</p>}
                    <div className={styles.meta}>
                        <span className={styles.author}>By Liam Fielding</span>
                        <span className={styles.date}>{post?.date || '2026-01-22'}</span>
                        <span className={styles.readTime}>{post?.readTime || '15 min read'}</span>
                    </div>
                </header>

                <div className={styles.content}>
                    <div className={styles.prose}>
                        <h2 className={styles.heading2}>The Social Proof Gaslight</h2>
                        <p className={styles.paragraph}>
                            Social proof – testimonials, follower counts, glowing reviews – is often touted as the bedrock of modern marketing. But as we head into 2026, it's increasingly used as a linguistic sleight of hand. Platforms like Meta and Google claim the benefit they provide is an invisible layer of trust or authority, when in reality, they are just charging you for the privilege of accessing the network you built or the customers who were already looking for you.
                        </p>
                        <p className={styles.paragraph}>
                            The platform’s argument usually goes like this: "Even if you don't see a direct sale from this ad, the Social Proof (likes, views, presence) builds a hidden brand value that will pay off later." This is often a cover for declining performance.
                        </p>

                        <h3 className={styles.heading3}>You Bring the Network, They Charge the Rent</h3>
                        <p className={styles.paragraph}>
                            You spend years building a following or a reputation. Then, the algorithm throttles your reach so that only 2% of your network sees your posts. To reach the other 98%, you have to pay. They aren't providing social proof; they are holding your own social proof hostage and selling it back to you.
                        </p>

                        <h3 className={styles.heading3}>The Contextual Mirage</h3>
                        <p className={styles.paragraph}>
                            Google often claims that being at the top of a Search Result provides authority. But as <Link href="/blog/seo-snake-oil-empty-promises" className={styles.link}>SGE (Search Generative Experience)</Link> and AI overviews take over in 2026, Google is scraping your content to answer the question directly. They take your proof (your expertise) and present it as their own, often without even sending the user to your site.
                        </p>

                        <h3 className={styles.heading3}>The Zero-Sum Engagement</h3>
                        <p className={styles.paragraph}>
                            The platforms know this, yet they still use these vanity metrics to justify ad spend when <Link href="/blog/website-as-lead-generation-machine" className={styles.link}>actual conversion rates (ROAS) are cratering</Link>.
                        </p>
                        
                        <h2 className={styles.heading2}>The Hidden Benefit Trap</h2>
                        <p className={styles.paragraph}>
                            By claiming the benefit is hidden, these companies move the goalposts. If you can't measure it, you can't prove it's failing. This allows them to continue extraction even as the organic value of the platform declines. It’s the digital equivalent of a landlord claiming that the prestige of a 20% rent hike is the benefit of living in the building, while the elevator is broken and the roof is leaking.
                        </p>
                        <p className={styles.paragraph}>
                            <strong>The Social Proof Paradox:</strong> If you have to pay $5,000 in ads to show your 50,000 followers a product, you don't own a social network—you are a tenant in a digital feudal system where the social proof is just the paint on the walls.
                        </p>

                        <h2 className={styles.heading2}>The Anti-Enshittification Stack</h2>
                        <p className={styles.paragraph}>
                            To fight this, a new Direct-to-Community stack has emerged. These tools focus on sovereignty—meaning you own the data, the list, and the reach, and no algorithm can hide your benefit behind a paywall.
                        </p>

                        <h3 className={styles.heading3}>1. The Sovereign Social Protocols (Web3)</h3>
                        <p className={styles.paragraph}>
                            Instead of a platform owning your data, these are protocols where you own your Social Graph. If you don't like the app you're using, you can move your entire audience to a different app instantly.
                        </p>
                        <ul className={styles.list}>
                            <li className={styles.listItem}><strong>Farcaster (Warpcast):</strong> A leader in sovereign social, Farcaster offers a decentralized alternative that feels like early Twitter. While it promises freedom from algorithmic suppression, it's not without its own complexities.
                                <ul style={{marginTop: '10px'}}>
                                    <li><strong>Dynamic Costs:</strong> The initial $5/year storage fee is misleading. By 2026, Farcaster's growth has led to a more dynamic unit system where high-volume creators pay more for storage.</li>
                                    <li><strong>The Web3 Hurdle:</strong> The article glosses over the significant friction of Web3. For the average user, managing a seed phrase or a crypto wallet is still a massive barrier to entry, making it less of a seamless utopia than it appears.</li>
                                    <li><strong>Frictionless Commerce:</strong> Its Frames feature remains revolutionary, allowing users to build mini-apps directly into a post. This cuts out the link in bio step and enables commerce to happen natively within the feed.</li>
                                </ul>
                            </li>
                            <li className={styles.listItem}><strong>Lens Protocol:</strong> Built by the Aave team, this turns every follow into an NFT. This means your relationship with your audience is a digital asset that you own, not Meta.</li>
                        </ul>

                        <h3 className={styles.heading3}>2. Google’s E-E-A-T and User Signals</h3>
                        <p className={styles.paragraph}>
                            In 2024 and 2025, leaked Google documents confirmed that user signals (like Click-Through Rate and pogo-sticking) are used for rankings.
                        </p>
                        <ul className={styles.list}>
                            <li className={styles.listItem}><strong>The Indirect Admission:</strong> Google officially tells creators to focus on E-E-A-T (Experience, Expertise, Authoritativeness, and Trustworthiness).</li>
                            <li className={styles.listItem}><strong>The Paradox:</strong> They admit that they can’t actually read your mind to know if you are an expert. Instead, they look for signals of social proof (like other people linking to you). By shifting the goalposts to AI-generated overviews (SGE), they are effectively saying: "We trust your social proof enough to use your answer, but not enough to give you the click."</li>
                        </ul>

                        <h2 className={styles.heading2}>More Smoking Guns: Technical Features and Hidden Realities</h2>
                        <p className={styles.paragraph}>
                            There are a few smoking guns in the current 2026 landscape that the platforms acknowledge as technical features, but which are actually the mechanics of the Social Proof Gaslight the blog mentioned. Beyond what we’ve discussed, here are three critical, lesser-known pieces of the puzzle:
                        </p>

                        <h3 className={styles.heading3}>1. The "Meta Verified" Tier System: Pay-for-Support, Not Just Status</h3>
                        <p className={styles.paragraph}>
                            As of 2026, Meta has expanded its verification system into a multi-tiered subscription. While it's easy to see this as simply paying for status, the reality is more nuanced.
                        </p>
                        <ul className={styles.list}>
                            <li className={styles.listItem}><strong>The Reality of Tiers:</strong> For high-end business tiers, costs can reach as high as <strong>$349.99/month</strong>. However, this price isn't just for a blue checkmark. It's primarily for a VIP pass to Meta’s business support, which was notoriously non-existent for years. It's less about buying authority and more about buying insurance for account security and access to technical assistance.</li>
                            <li className={styles.listItem}><strong>The Algorithmic Edge:</strong> While Meta's terms state that verification doesn't guarantee viral growth, it does offer increased visibility. This suggests a subtle algorithmic preference for paying customers, blending the lines between authentic reach and paid priority.</li>
                        </ul>

                        <h3 className={styles.heading3}>2. Google’s "Citation Share": The New SEO</h3>
                        <p className={styles.paragraph}>
                            The rise of AI Overviews (formerly SGE) has created a zero-click environment where Google answers user queries directly. In response, Google is shifting the goalposts from clicks to a new metric: Citation Share.
                        </p>
                        <ul className={styles.list}>
                            <li className={styles.listItem}><strong>A Half-Truth:</strong> Calling this metric a complete gaslight is a half-truth. While it reduces direct traffic, Citation Share is becoming the new frontier of SEO. Being the cited source in an AI overview is often the only way to appear above the fold.</li>
                            <li className={styles.listItem}><strong>From Traffic to Attribution:</strong> The game is no longer about winning the click; it's about winning the Expertise battle. If the AI says, "According to [Your Brand]...", you are building top-of-mind awareness and brand authority, even if the user never visits your site. It's a shift from measuring traffic to measuring brand attribution.</li>
                        </ul>

                        <h3 className={styles.heading3}>3. The "Creative-as-Targeting" Shift: An Algorithmic Reality</h3>
                        <p className={styles.paragraph}>
                            In 2026, Meta's ad platform has largely automated audience targeting, leading to the mantra: "The creative is the targeting." This isn't just a trap to get advertisers to train the AI for free, but a technical evolution.
                        </p>
                        <ul className={styles.list}>
                            <li className={styles.listItem}><strong>Meet Andromeda:</strong> Meta's 2026 retrieval algorithm, known as Andromeda, is now so fast that it can't rely on slow, manual interest-targeting. It needs signals from the creative itself.</li>
                            <li className={styles.listItem}><strong>Speaking to the User:</strong> By embedding social proof (like user-generated content and reviews) directly into your ads, you're not just training an AI; you are speaking directly to user psychology. The algorithm is simply the delivery mechanism. You provide the "Who" (your brand voice and proof), and the AI handles the "How" (the targeting).</li>
                        </ul>

                        <h2 className={styles.heading2}>The Verdict: A Shift in Perspective</h2>
                        <p className={styles.paragraph}>
                            This article began as a sharp critique of platforms as purely predatory entities. While the frustration with <Link href="/blog/unethical-business-practices" className={styles.link}>enshittification</Link> is real, the Social Proof Gaslight is often a side effect of hyper-automation, not just malice. The landscape of 2026 requires a more balanced view.
                        </p>

                        <div className={styles.table_container}>
                            <table className={styles.table}>
                                <thead>
                                    <tr>
                                        <th>Feature</th>
                                        <th>The Article's Original View</th>
                                        <th>The 2026 Industry Reality</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td data-label="Feature">Social Proof</td>
                                        <td data-label="Original View">A linguistic sleight of hand</td>
                                        <td data-label="2026 Reality">Still the #1 driver of conversion, just harder to earn.</td>
                                    </tr>
                                    <tr>
                                        <td data-label="Feature">Reach</td>
                                        <td data-label="Original View">Held hostage by algorithms</td>
                                        <td data-label="2026 Reality">Reach is abundant; attention is what's scarce.</td>
                                    </tr>
                                    <tr>
                                        <td data-label="Feature">SGE/AI Overviews</td>
                                        <td data-label="Original View">Content scraping</td>
                                        <td data-label="2026 Reality">A shift from Traffic to Brand Attribution.</td>
                                    </tr>
                                    <tr>
                                        <td data-label="Feature">Verification</td>
                                        <td data-label="Original View">Pay-to-play identity</td>
                                        <td data-label="2026 Reality">An insurance policy for account security and support.</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <p className={styles.paragraph}>
                            The platforms are moving toward a world where businesses provide the <strong>"Who"</strong> (a strong brand voice and authentic social proof) and they handle the <strong>"How"</strong> (the automated targeting and delivery). The call for <Link href="/blog/hidden-cost-of-no-code" className={styles.link}><strong>digital sovereignty</strong></Link> is more relevant than ever, but winning in this environment means understanding these new rules, not just fighting them. The most successful businesses in 2026 are not just building micro-communities; they are learning to leverage their sovereign assets (their expertise, their customer stories) within the automated systems of the giants.
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