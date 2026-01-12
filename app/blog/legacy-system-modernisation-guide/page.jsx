'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useContact } from '../../../contexts/ContactContext';
import { useHeaderAnimation } from '../../../contexts/HeaderAnimationContext';
import CallToAction from '../../../components/layout/CallToAction/CallToAction';
import styles from '../post.module.scss';

export default function LegacySystemModernisation() {
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
                    <h1 className={styles.title}>Don't Polish a Turd: A Guide to Legacy System Modernisation</h1>
                    <div className={styles.meta}>
                        <span className={styles.author}>By DreamsByte Team</span>
                        <span className={styles.date}>2025-10-19</span>
                        <span className={styles.readTime}>9 min read</span>
                    </div>
                </header>

                <div className={styles.content}>
                    <div className={styles.prose}>
                        <h2 className={styles.heading2}>The Software That Runs Your Business is Holding it Hostage</h2>
                        <p className={styles.paragraph}>Every established business has one: that critical piece of internal software. Maybe it’s an old Access database, a clunky Java application from 2005, or a PHP script that a long-gone freelancer hacked together. It’s ugly, it’s slow, and everyone hates using it. But it runs your business, so you’re stuck with it. You keep applying patches, paying for expensive maintenance, and trying to ignore the inevitable. In other words, you are polishing a turd.</p>
                        <p className={styles.paragraph}>This isn't just a technical problem; it's a business problem. That legacy system is actively costing you money, stifling growth, and exposing you to catastrophic risk.<sup><a href="#footnote-1" id="footnote-ref-1" className={styles.link}>1</a></sup></p>

                        <h2 className={styles.heading2}>The True Cost of "Just Keeping it Running"</h2>
                        <p className={styles.paragraph}>The cost of a legacy system isn't just the maintenance contract. It's a cascade of hidden expenses and opportunity costs:</p>
                        <ul className={styles.list}>
                            <li className={styles.listItem}><strong>Massive Inefficiency:</strong> Your team wastes hours every day on manual data entry, awkward workarounds, and waiting for slow screens to load.<sup><a href="#footnote-2" id="footnote-ref-2" className={styles.link}>2</a></sup> Multiply that wasted time by their salaries. The number will shock you.</li>
                            <li className={styles.listItem}><strong>Security Roulette:</strong> Old software is a hacker's playground. It runs on unpatched frameworks, uses outdated security protocols, and is likely riddled with vulnerabilities that no one knows how to fix. It's not a matter of *if* you'll have a data breach, but *when*.<sup><a href="#footnote-3" id="footnote-ref-3" className={styles.link}>3</a></sup></li>
                            <li className={styles.listItem}><strong>Inability to Innovate:</strong> Want to launch a new product line? Integrate with a modern service? Offer a better customer experience? You can't. Your legacy system is a ball and chain, preventing you from adapting to the market.</li>
                            <li className={styles.listItem}><strong>The Talent Repellent:</strong> No talented developer wants to work on a 15-year-old codebase. Your inability to attract and retain talent means you're stuck with expensive, specialized consultants who are the only ones who understand the arcane system.</li>
                        </ul>

                        <h2 className={styles.heading2}>When is it Time to Stop Polishing?</h2>
                        <p className={styles.paragraph}>How do you know when a system is beyond saving? A rewrite is a big decision, but you've likely crossed the point of no return if you recognize these signs:</p>
                        <ul className={styles.list}>
                            <li className={styles.listItem}>The original developer is gone, and there is zero documentation.</li>
                            <li className={styles.listItem}>Fixing one bug consistently creates two new ones.</li>
                            <li className={styles.listItem}>You can't even run it on a modern operating system.</li>
                            <li className={styles.listItem}>Your team openly talks about how much they hate using "the system."</li>
                            <li className={styles.listItem}>The cost of a single new feature is astronomical, because developers have to spend weeks just understanding the existing code.</li>
                        </ul>

                        <h2 className={styles.heading2}>The Modernisation Process: It's Not as Scary as You Think</h2>
                        <p className={styles.paragraph}>A full "rip and replace" sounds terrifying, but a modern approach to system modernisation is incremental, strategic, and focused on de-risking the entire process.</p>
                        
                        <h3 className={styles.heading3}>Step 1: Discover and Document</h3>
                        <p className={styles.paragraph}>The first step isn't to write code. It's to talk to the people who actually use the system. We map out the real-world business processes, not just what the old software does. We identify the core functions that provide 80% of the value and the "features" that no one has used in a decade.</p>

                        <h3 className={styles.heading3}>Step 2: Build the New Core</h3>
                        <p className={styles.paragraph}>We start by building a clean, modern, and stable core for the new system using modern technologies. We focus on getting the most critical piece of functionality up and running first. This becomes the new foundation.</p>

                        <h3 className={styles.heading3}>Step 3: The Incremental Changeover (The Strangler Fig Pattern)</h3>
                        <p className={styles.paragraph}>We don't switch everything at once. We use a method called the "Strangler Fig Pattern."<sup><a href="#footnote-4" id="footnote-ref-4" className={styles.link}>4</a></sup> <Link href="/blog/our-approach-to-software" className={styles.link}>The new system is put in place *around* the old one</Link>. We start by redirecting one small piece of functionality to the new application. For example, all new customer entries might go into the new system, while the old system still handles invoicing. Over time, more and more functionality is "strangled" from the old system and replaced by the new one, until the legacy application has no responsibilities left and can be safely turned off.</p>
                        <p className={styles.paragraph}>This approach minimizes disruption, allows your team to learn the new system gradually, and provides immediate value at each stage.</p>

                        <h2 className={styles.heading2}>The Payoff: A System That Accelerates Your Business</h2>
                        <p className={styles.paragraph}>Modernizing your legacy system is one of the highest-ROI investments a business can make. The results are transformative:</p>
                        <ul className={styles.list}>
                            <li className={styles.listItem}><Link href="/blog/stop-buying-software-custom-crm-fsm" className={styles.link}><strong>A Happier, More Productive Team:</strong> When you replace a tool your team hates with one they love, their efficiency and morale skyrockets.</Link></li>
                            <li className={styles.listItem}><strong>Actionable Business Intelligence:</strong> Modern systems have proper dashboards and reporting. You can finally get a clear, real-time view of your business operations.</li>
                            <li className={styles.listItem}><strong>The Ability to Say "Yes":</strong> When your team has a great idea for a new feature or integration, your answer can finally be "Yes, let's do it," instead of "The system can't handle that."</li>
                            <li className={styles.listItem}><Link href="/blog/devops-for-small-business" className={styles.link}><strong>Peace of Mind:</strong> Knowing your critical business data is secure, backed up, and running on a stable, modern platform is invaluable.</Link></li>
                        </ul>

                        <h2 className={styles.heading2}>Stop Paying the Legacy Tax</h2>
                        <p className={styles.paragraph}>Every day you keep that old system running, you are paying a tax on your business's future. It's time to stop polishing and start replacing.</p>
                        <p className={styles.paragraph}>Is your business being held hostage by old software? Are you ready to invest in a tool that will empower your team and grow with your business? <button
                            onClick={() => openContact("I'm stuck with a legacy system")}
                            className={styles.contactButton}
                        >
                            Let's schedule a call to discuss a modernisation strategy.
                        </button></p>
                    </div>
                </div>

                    <div className={styles.footnotes}>
                        <h2 className={styles.heading2}>Sources</h2>
                        <ol className={styles.orderedList}>
                            <li id="footnote-1" className={styles.listItem}>
                                <p className={styles.paragraph}>
                                    "The True Cost of Legacy Systems", ServiceNow.com.
                                    <a href="https://www.servicenow.com/workflow/cost-of-legacy-systems/" target="_blank" rel="noopener noreferrer" className={styles.link}>
                                        https://www.servicenow.com/workflow/cost-of-legacy-systems/
                                    </a>
                                    <a href="#footnote-ref-1" aria-label="Back to content" className={styles.link}> ↩</a>
                                </p>
                            </li>
                            <li id="footnote-2" className={styles.listItem}>
                                <p className={styles.paragraph}>
                                    "Outdated Software: A Real Business Risk", Fellow.app.
                                    <a href="https://fellow.app/blog/2023/outdated-software-business-risk/" target="_blank" rel="noopener noreferrer" className={styles.link}>
                                        https://fellow.app/blog/2023/outdated-software-business-risk/
                                    </a>
                                    <a href="#footnote-ref-2" aria-label="Back to content" className={styles.link}> ↩</a>
                                </p>
                            </li>
                            <li id="footnote-3" className={styles.listItem}>
                                <p className={styles.paragraph}>
                                    "Legacy System Risks: 5 Ways Outdated Technology Threatens Your Business", Splendid Projects.
                                    <a href="https://splendidprojects.com/blog/legacy-system-risks/" target="_blank" rel="noopener noreferrer" className={styles.link}>
                                        https://splendidprojects.com/blog/legacy-system-risks/\n
                                    </a>
                                    <a href="#footnote-ref-3" aria-label="Back to content" className={styles.link}> ↩</a>
                                </p>
                            </li>
                            <li id="footnote-4" className={styles.listItem}>
                                <p className={styles.paragraph}>
                                    "What is the Strangler Fig Pattern?", Microsoft Learn.
                                    <a href="https://learn.microsoft.com/en-us/azure/architecture/patterns/strangler-fig" target="_blank" rel="noopener noreferrer" className={styles.link}>
                                        https://learn.microsoft.com/en-us/azure/architecture/patterns/strangler-fig
                                    </a>
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
