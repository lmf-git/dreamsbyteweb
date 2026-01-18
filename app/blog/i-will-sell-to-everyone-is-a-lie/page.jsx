'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useContact } from '../../../contexts/ContactContext';
import { useHeaderAnimation } from '../../../contexts/HeaderAnimationContext';
import CallToAction from '../../../components/layout/CallToAction/CallToAction';
import styles from '../post.module.scss';

export default function TargetAudienceIsEverything() {
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
                    <h1 className={styles.title}>"I'll Sell to Everyone": The Most Expensive Lie in Business</h1>
                    <div className={styles.meta}>
                        <span className={styles.author}>By Liam Fielding</span>
                        <span className={styles.date}>2025-09-07</span>
                        <span className={styles.readTime}>8 min read</span>
                    </div>
                </header>

                <div className={styles.content}>
                    <div className={styles.prose}>
                        <h2 className={styles.heading2}>The Allure of the Biggest Pond</h2>
                        <p className={styles.paragraph}>It’s a tempting thought, one that almost every new business owner has: "My product is so great, everyone will want it." The logic seems sound. Why limit your potential customer base? Why fish in a small pond when you can have the whole ocean? This desire to "sell to everyone" is the single most common—and costly—mistake in marketing.<sup><a href="#footnote-1" id="footnote-ref-1" className={styles.link}>1</a></sup></p>
                        <p className={styles.paragraph}>Trying to be everything to everyone results in being nothing to anyone. It’s the business equivalent of shouting into a hurricane and expecting a clear response.</p>

                        <h2 className={styles.heading2}>Why "Everyone" is the Worst Target Audience</h2>
                        <p className={styles.paragraph}>When your target is "everyone," your marketing efforts become diluted, ineffective, and incredibly expensive. Here’s why:</p>
                        <ul className={styles.list}>
                            <li className={styles.listItem}><strong>Generic Messaging:</strong> You can't speak to specific pain points or desires. Your copy becomes bland, corporate-speak that resonates with no one because it’s trying to offend no one.</li>
                            <li className={styles.listItem}><strong>Wasted Resources:</strong> You burn money on advertising to people who will never need, want, or afford your product.<sup><a href="#footnote-2" id="footnote-ref-2" className={styles.link}>2</a></sup> It’s like putting up billboards for a steakhouse in a town of vegetarians.</li>
                            <li className={styles.listItem}><strong>Lack of Brand Identity:</strong> Brands are built on specificity and connection.<sup><a href="#footnote-3" id="footnote-ref-3" className={styles.link}>3</a></sup> Apple isn't for everyone; it's for people who value design and simplicity. Your brand's power comes from what it stands *for*, which also defines who it’s *not* for.</li>
                            <li className={styles.listItem}><strong>Impossible to Differentiate:</strong> If you're for everyone, you're just like every other generic competitor. You have no unique angle to stand out in a crowded market.</li>
                        </ul>

                        <h2 className={styles.heading2}>Finding Your Who: A Tale of Two Businesses</h2>
                        <p className={styles.paragraph}>Let's see this in action. Imagine two new businesses that build custom websites.</p>

                        <h3 className={styles.heading3}>Business A: "We Build Websites for Everyone"</h3>
                        <p className={styles.paragraph}>Their website says, "We offer affordable, high-quality websites for any business." Their marketing is scattered across Facebook ads, Google search ads for "website builder," and maybe a local newspaper ad. Their message is generic. Their results are dismal. They compete with Wix, Squarespace, and every other developer on price alone. It’s a race to the bottom.<sup><a href="#footnote-4" id="footnote-ref-4" className={styles.link}>4</a></sup></p>

                        <h3 className={styles.heading3}>Business B: "We Build Websites for Independent Financial Advisors"</h3>
                        <p className={styles.paragraph}>This is a niche. Business B has done their homework. They know that independent financial advisors struggle with outdated websites, need to build trust with high-net-worth clients, and have specific compliance requirements.
                        </p>
                        <p className={styles.paragraph}>
                        Their entire strategy is focused:
                        </p>
                        <ul className={styles.list}>
                           <li className={styles.listItem}><strong>Website Copy:</strong> Their homepage reads, "The Professional Website Your High-Net-Worth Clients Expect." It talks about SEC compliance, secure client portals, and building digital trust.</li>
                           <li className={styles.listItem}><strong>Content:</strong> They write blog posts like, "5 Ways Your Website Can Help You Retain More AUM" and "Is Your Website SEC-Compliant?".</li>
                           <li className={styles.listItem}><strong>Marketing Channels:</strong> They ignore Facebook and run targeted ads on LinkedIn, sponsor a newsletter for financial planners, and attend industry conferences.</li>
                        </ul>
                        <p className={styles.paragraph}>Business B gets fewer leads, but they are high-quality leads. They can charge premium prices because they are specialists, not generalists. They have become the big fish in a small, profitable pond.</p>

                        <h2 className={styles.heading2}>How to Define Your Target Audience</h2>
                        <p className={styles.paragraph}>Defining your audience isn't about stereotypes; it's about focus. Go beyond basic demographics and dive into what makes your ideal customers tick.</p>
                        <ul className={styles.list}>
                            <li className={styles.listItem}><strong>Demographics (The What):</strong> Age, gender, income, location, occupation. This is the surface level.</li>
                            <li className={styles.listItem}><strong>Psychographics (The Why):</strong> This is the goldmine. What are their values, goals, fears, and frustrations? What do they read? Where do they hang out online? What is the core problem they are trying to solve?</li>
                            <li className={styles.listItem}><strong>Pain Points:</strong> What specific problem does your product or service solve for them? If you don't know the pain, you can't be the solution.</li>
                        </ul>

                        <h2 className={styles.heading2}>Your Website is Your #1 Salesperson—If It Knows Who It's Talking To</h2>
                        <p className={styles.paragraph}>Once you know your audience, it <Link href="/blog/website-as-lead-generation-machine" className={styles.link}>transforms your website from a passive brochure into an active salesperson</Link>. Every element should be crafted for them:</p>
                        <ul className={styles.list}>
                            <li className={styles.listItem}>The **visual design** should match their aesthetic.</li>
                            <li className={styles.listItem}>The **language** should mirror how they speak.</li>
                            <li className={styles.listItem}>The **testimonials** should feature people they identify with.</li>
                            <li className={styles.listItem}>The **call to action** should address their specific needs.</li>
                        </ul>

                        <h2 className={styles.heading2}>Stop Shouting and Start Connecting</h2>
                        <p className={styles.paragraph}>Defining a target audience isn't about excluding people. It's about focusing your finite resources—time, money, and energy—on creating a powerful, magnetic brand that attracts the *right* people. The ones who need you, value you, and are happy to pay for your expertise.</p>
                        <p className={styles.paragraph}>It's time to stop trying to sell to everyone. Who is the one person you can help the most? Start there.</p>

                        <p className={styles.paragraph}>Ready to build a website that speaks directly to your ideal customer? <button
                            onClick={() => openContact("I'm ready to focus on my target audience")}
                            className={styles.contactButton}
                        >
                            Let's talk about it.
                        </button></p>
                    </div>

                    <div className={styles.footnotes}>
                        <h2 className={styles.heading2}>Sources</h2>
                        <ol className={styles.orderedList}>
                            <li id="footnote-1" className={styles.listItem}>
                                <p className={styles.paragraph}>
                                    "Niche Marketing as a Strategy for Small Businesses," ResearchGate.
                                    <a href="https://www.researchgate.net/publication/327730107_Niche_Marketing_as_a_Strategy_for_Small_Businesses" target="_blank" rel="noopener noreferrer" className={styles.link}>
                                        https://www.researchgate.net/publication/327730107_Niche_Marketing_as_a_Strategy_for_Small_Businesses
                                    </a>
                                    <a href="#footnote-ref-1" aria-label="Back to content" className={styles.link}> ↩</a>
                                </p>
                            </li>
                            <li id="footnote-2" className={styles.listItem}>
                                <p className={styles.paragraph}>
                                    "The Role of Niche Marketing in Achieving Competitive Advantage," ResearchGate.
                                    <a href="https://www.researchgate.net/publication/262243509_The_Role_of_Niche_Marketing_in_Achieving_Competitive_Advantage" target="_blank" rel="noopener noreferrer" className={styles.link}>
                                        https://www.researchgate.net/publication/262243509_The_Role_of_Niche_Marketing_in_Achieving_Competitive_Advantage
                                    </a>
                                    <a href="#footnote-ref-2" aria-label="Back to content" className={styles.link}> ↩</a>
                                </p>
                            </li>
                            <li id="footnote-3" className={styles.listItem}>
                                <p className={styles.paragraph}>
                                    "Brand Identity: A Key to Marketing Success," ResearchGate.
                                    <a href="https://www.researchgate.net/publication/259169498_Brand_Identity_A_Key_to_Marketing_Success" target="_blank" rel="noopener noreferrer" className={styles.link}>
                                        https://www.researchgate.net/publication/259169498_Brand_Identity_A_Key_to_Marketing_Success
                                    </a>
                                    <a href="#footnote-ref-3" aria-label="Back to content" className={styles.link}> ↩</a>
                                </p>
                            </li>
                            <li id="footnote-4" className={styles.listItem}>
                                <p className={styles.paragraph}>
                                    "The Role of Specialization in Firm Competitive Advantage," ResearchGate.
                                    <a href="https://www.researchgate.net/publication/262243509_The_Role_of_Specialization_in_Firm_Competitive_Advantage" target="_blank" rel="noopener noreferrer" className={styles.link}>
                                        https://www.researchgate.net/publication/262243509_The_Role_of_Specialization_in_Firm_Competitive_Advantage
                                    </a>
                                    <a href="#footnote-ref-4" aria-label="Back to content" className={styles.link}> ↩</a>
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
