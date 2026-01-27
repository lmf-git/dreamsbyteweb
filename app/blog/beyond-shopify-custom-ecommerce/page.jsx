'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useContact } from '../../../contexts/ContactContext';
import { useHeaderAnimation } from '../../../contexts/HeaderAnimationContext';
import CallToAction from '../../../components/layout/CallToAction/CallToAction';
import styles from '../post.module.scss';
import { posts } from '../posts';

export default function BeyondShopify() {
    const { openContact } = useContact();
    const { headerAnimationComplete } = useHeaderAnimation();
    const [contentVisible, setContentVisible] = useState(false);

    const post = posts.find(p => p.slug === 'beyond-shopify-custom-ecommerce');

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
                    <h1 className={styles.title}>{post?.title || 'Beyond Shopify: When to Build Custom E-commerce'}</h1>
                    {post?.excerpt && <p className={styles.excerpt}>{post.excerpt}</p>}
                    <div className={styles.meta}>
                        <span className={styles.author}>By Liam Fielding</span>
                        <span className={styles.date}>{post?.date || '2025-10-05'}</span>
                        <span className={styles.readTime}>{post?.readTime || '10 min read'}</span>
                    </div>
                </header>

                <div className={styles.content}>
                    <div className={styles.prose}>
                        <h2 className={styles.heading2}>The Shopify Ceiling</h2>
                        <p className={styles.paragraph}>Shopify is a phenomenal tool. It has empowered millions of entrepreneurs to launch online stores quickly and affordably. For a straightforward business that sells standard products, it's often the perfect place to start. You can get a store up and running in a weekend, and that's a powerful thing.</p>
                        <p className={styles.paragraph}>But as your business grows, you may start to feel the constraints. The one-size-fits-all model begins to chafe. <Link href="/blog/vendor-lock-in-subscription-costs" className={styles.link}>The transaction fees, the app subscription costs</Link>, and the creative limitations start to add up. You hit the Shopify ceiling—the point where the platform that helped you grow is now holding you back.</p>

                        <h2 className={styles.heading2}>Signs You're Outgrowing Shopify</h2>
                        <p className={styles.paragraph}>How do you know you've hit the ceiling? Look for these common pain points:</p>
                        
                        <h3 className={styles.heading3}>1. Your App Stack is a Jenga Tower</h3>
                        <p className={styles.paragraph}>Your store relies on a dozen different third-party apps for subscriptions, loyalty programs, wholesale pricing, and custom product options. Each app has its own monthly fee, <Link href="/blog/performance-first-website-lighthouse" className={styles.link}>adds bloat to your site</Link>, and creates potential conflicts. Your cost of goods sold is being eaten alive by a Frankenstein's monster of app subscriptions.<sup><a href="#footnote-1" id="footnote-ref-1" className={styles.link}>1</a></sup></p>

                        <h3 className={styles.heading3}>2. You Have Unique Business Logic</h3>
                        <p className={styles.paragraph}>Your business isn't standard, so why should your software be? Maybe you sell customizable products, offer complex bundled deals, or have a unique fulfillment process. Trying to shoehorn this complexity into Shopify's rigid structure requires awkward workarounds that frustrate both your team and your customers.</p>

                        <h3 className={styles.heading3}>3. You're Drowning in Transaction Fees</h3>
                        <p className={styles.paragraph}>You're paying your Shopify subscription, credit card processing fees, and on top of that, Shopify takes an additional cut (up to 2%) of every sale if you don't use Shopify Payments. As your revenue grows, this becomes a significant and unnecessary tax on your success.<sup><a href="#footnote-2" id="footnote-ref-2" className={styles.link}>2</a></sup></p>

                        <h3 className={styles.heading3}>4. Your Brand Experience Feels Generic</h3>
                        <p className={styles.paragraph}>You're using a premium theme, but your store still looks like a thousand other Shopify stores. You want a truly unique, immersive brand experience, but the template system forces you into a box. The checkout process, in particular, is notoriously difficult to customize, breaking the seamless brand journey at the most critical moment.<sup><a href="#footnote-3" id="footnote-ref-3" className={styles.link}>3</a></sup></p>
                        
                        <h2 className={styles.heading2}>The Power of Ownership: The Custom E-commerce Solution</h2>
                        <p className={styles.paragraph}>A custom e-commerce application is not about reinventing the wheel. It's about building a wheel that is perfectly suited to your vehicle. It integrates your specific business logic, brand identity, and operational workflows into a single, cohesive system <Link href="/blog/from-problem-to-profit-case-studies" className={styles.link}>that you own completely</Link>.<sup><a href="#footnote-4" id="footnote-ref-4" className={styles.link}>4</a></sup></p>
                        
                        <h3 className={styles.heading3}>What a Custom Solution Unlocks:</h3>
                        <ul className={styles.list}>
                            <li className={styles.listItem}><strong>Perfectly Tailored Workflows:</strong> Your admin dashboard is built for *your* process. Manage complex orders, unique fulfillment logic, and specific customer needs with an interface designed for your team.</li>
                            <li className={styles.listItem}><strong>Zero Transaction Fees (Beyond Processing):</strong> The 0.5% to 2% platform tax vanishes overnight. That money goes directly to your bottom line, often paying for the custom development within a year or two.</li>
                            <li className={styles.listItem}><strong>Complete Brand Control:</strong> From the landing page to the final thank you, every pixel is on-brand. Create a checkout experience that builds trust and maximizes conversions, without being constrained by a template.</li>
                            <li className={styles.listItem}><strong>Deeper Integrations:</strong> Connect your store directly to your accounting software, warehouse management system (WMS), or customer relationship manager (CRM) in a deep, robust way that off-the-shelf apps can't match.</li>
                            <li className={styles.listItem}><strong>Superior Performance:</strong> A custom build is lean and optimized. No app bloat, no unnecessary scripts. Just a fast, responsive experience that delights customers and boosts search rankings.</li>
                        </ul>

                        <h2 className={styles.heading2}>Case Study: From Clunky Apps to Custom Logic</h2>
                        <p className={styles.paragraph}>Consider a business that sells subscription boxes with customizable options each month. On Shopify, this is a nightmare. It requires multiple apps: one for the subscription, one for the product options, and another to handle the custom fulfillment logic. The apps barely work together, the monthly cost is over $300, and the customer experience is confusing.</p>
                        <p className={styles.paragraph}>With a custom application, this entire flow is built into the core system. Customers manage their subscriptions and choices from a single, intuitive dashboard. The fulfillment team gets a clear, automated report of what to pack for each customer. The cost is a one-time development investment, and the result is a seamless experience that increases customer retention and operational efficiency.</p>

                        <h2 className={styles.heading2}>Is It Time to Go Custom?</h2>
                        <p className={styles.paragraph}>Making the leap from Shopify to a custom solution is a significant decision. It's not for businesses just starting out. But if you are an established, growing business feeling constrained by your platform, the question isn't *if* you'll need to move, but *when*.</p>
                        <p className={styles.paragraph}>Calculate the true cost of your current platform: subscription fees + app fees + transaction fees + the cost of manual workarounds. Then consider the opportunity cost of a generic brand experience and stunted growth. The ROI on owning your e-commerce infrastructure is often clearer and faster than you think.</p>


                    </div>
                </div>

                    <div className={styles.footnotes}>
                        <h2 className={styles.heading2}>Sources</h2>
                        <ol className={styles.orderedList}>
                            <li id="footnote-1" className={styles.listItem}>
                                <p className={styles.paragraph}>
                                    "Critical Factors Affecting E-Commerce Platform Selection," <a href="https://www.semanticscholar.org/paper/Critical-Factors-Affecting-E-Commerce-Platform-Hossain-Al-Shaikh/b9c02d1d0526017b2b0051e70e30906296c09819" target="_blank" rel="noopener noreferrer" className={styles.link}>Semantic Scholar</a>.
                                    <a href="#footnote-ref-1" aria-label="Back to content" className={styles.link}> ↩</a>
                                </p>
                            </li>
                            <li id="footnote-2" className={styles.listItem}>
                                <p className={styles.paragraph}>
                                    "Critical Factors Affecting E-Commerce Platform Selection," <a href="https://www.semanticscholar.org/paper/Critical-Factors-Affecting-E-Commerce-Platform-Hossain-Al-Shaikh/b9c02d1d0526017b2b0051e70e30906296c09819" target="_blank" rel="noopener noreferrer" className={styles.link}>Semantic Scholar</a>.
                                    <a href="#footnote-ref-2" aria-label="Back to content" className={styles.link}> ↩</a>
                                </p>
                            </li>
                            <li id="footnote-3" className={styles.listItem}>
                                <p className={styles.paragraph}>
                                    "E-commerce Made Easy: Key Factors to Consider When Choosing Your Platform," <a href="https://www.sunzinet.com/en/magazine/e-commerce-made-easy-key-factors-to-consider-when-choosing-your-platform/" target="_blank" rel="noopener noreferrer" className={styles.link}>Sunzinet</a>.
                                    <a href="#footnote-ref-3" aria-label="Back to content" className={styles.link}> ↩</a>
                                </p>
                            </li>
                            <li id="footnote-4" className={styles.listItem}>
                                <p className={styles.paragraph}>
                                    "Critical Factors Affecting E-Commerce Platform Selection," <a href="https://www.semanticscholar.org/paper/Critical-Factors-Affecting-E-Commerce-Platform-Hossain-Al-Shaikh/b9c02d1d0526017b2b0051e70e30906296c09819" target="_blank" rel="noopener noreferrer" className={styles.link}>Semantic Scholar</a>.
                                    <a href="#footnote-ref-4" aria-label="Back to content" className={styles.link}> ↩</a>
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
