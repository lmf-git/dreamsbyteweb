'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useContact } from '../../../contexts/ContactContext';
import { useHeaderAnimation } from '../../../contexts/HeaderAnimationContext';
import CallToAction from '../../../components/layout/CallToAction/CallToAction';
import styles from '../post.module.scss';

export default function UnethicalBusinessPractices() {
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
                    <h1 className={styles.title}>Unethical Business Practices</h1>
                    <p className={styles.excerpt}>
                        In the software industry, adding fees onto fees or margins onto materials often hides behind technical jargon and service-level tiers.
                    </p>
                    <div className={styles.meta}>
                        <span className={styles.author}>By Liam Fielding</span>
                        <span className={styles.date}>2026-01-14</span>
                        <span className={styles.readTime}>12 min read</span>
                    </div>
                </header>

                <div className={styles.content}>
                                        <div className={styles.prose}>
                                            <h2 className={styles.heading2}>Understanding Opaque Cost Structures in Business</h2>
                                            <p className={styles.excerpt}>
                                                In various industries, particularly in professional services and contracting, cost structures can often appear complex due to the way different fees and margins are applied. Understanding these practices is crucial for businesses to ensure transparency and fair pricing in their engagements.
                                            </p>
                                            <h3 className={styles.heading3}>1. Markup</h3>
                                            <p className={styles.paragraph}>Markup refers to the amount added to the cost price of goods or services to cover overheads and generate profit. It is a standard practice where the client is charged a price higher than the direct cost incurred by the service provider.</p>
                    
                                            <h3 className={styles.heading3}>2. Burden (or Labor Burden)</h3>
                                            <p className={styles.paragraph}>Labor burden includes all additional costs associated with an employee beyond their base salary, such as payroll taxes, workers' compensation, health insurance, and other benefits. These costs are often factored into the hourly rates charged to clients, representing the true cost of labor for a project.</p>
                    
                                            <h3 className={styles.heading3}>3. <Link href="/blog/ethical-business-practices" className={styles.link}>Tiered Markup / Compounding Fees</Link></h3>
                                            <p className={styles.paragraph}>This practice involves applying successive layers of fees or margins on top of existing costs. For example, a subcontractor might mark up their materials, and then the general contractor might apply another markup on the subcontractor's total bill. This can lead to a significant increase in the final cost to the client.<sup><a href="#footnote-1" id="footnote-ref-1" className={styles.link}>1</a></sup></p>
                    
                                            <h3 className={styles.heading3}>4. Cost-Plus Pricing</h3>
                                            <p className={styles.paragraph}>Cost-plus pricing is a contract type where the client pays for all allowed expenses incurred by the service provider, plus an agreed-upon additional payment (a fixed percentage or amount) as profit. This model can lack transparency regarding cost efficiency if not managed carefully.</p>
                    
                                            <h3 className={styles.heading3}>5. Escalation Clauses</h3>
                                            <p className={styles.paragraph}>In long-term contracts, escalation clauses allow for adjustments to costs to account for factors like inflation or rising material prices over time. While sometimes necessary, these clauses should be clearly defined and understood to avoid unexpected cost increases.</p>
                    
                                            <h2 className={styles.heading2}>Specific Tactics in the Software Industry</h2>
                                            <p className={styles.paragraph}>In the software and IT industry, costs often revolve around intangible assets like licenses, cloud services, data, and skilled labor. Here, the application of margins and fees often takes on specific forms:</p>
                    
                                            <h3 className={styles.heading3}>1. "Material" Markups (SaaS & Cloud Services)</h3>
                                            <p className={styles.paragraph}>Instead of physical materials, software companies may apply markups on digital licenses and usage-based services:</p>
                                            <ul className={styles.list}>
                                                <li className={styles.listItem}><strong><Link href="/blog/beyond-shopify-custom-ecommerce" className={styles.link}>White-Labeling</Link>:</strong> A service provider licenses a software product from a vendor, rebrands it, and sells it to a client at a premium. The client may perceive this as a custom-built solution, leading to a significant margin on the "material" software.<sup><a href="#footnote-2" id="footnote-ref-2" className={styles.link}>2</a></sup></li>
                                                <li className={styles.listItem}><strong><Link href="/blog/cloud-infrastructure-illusion" className={styles.link}>Cloud Uplift</Link>:</strong> In cloud computing, Managed Service Providers (MSPs) often pay a base rate for cloud usage (e.g., AWS, Azure) but charge their clients an additional percentage on top, ostensibly for management and support.</li>
                                                <li className={styles.listItem}><strong>Value-Added Reselling (VAR):</strong> Companies purchase software or hardware and resell it to end-users at a markup, justifying the margin by adding a service layer like installation or configuration.</li>
                                                <li className={styles.listItem}><strong>Pass-Through with Admin Fee:</strong> An agency purchases third-party tools (e.g., stock images, fonts, hosting) for a client and then bills the client for the cost plus an administrative percentage (typically 10-20%).</li>
                                            </ul>
                    
                                            <h3 className={styles.heading3}>2. "Labor" Markups (Services & Development)</h3>
                                            <p className={styles.paragraph}>Given that software development is labor-intensive, various strategies can introduce additional fees on top of development costs:</p>
                                            <ul className={styles.list}>
                                                <li className={styles.listItem}><strong>The "Spread" (Labor Arbitrage):</strong> This refers to the difference between the actual cost of a developer (e.g., their hourly wage) and the hourly rate billed to the client. This can be significant in global software development where talent is sourced from lower-cost regions while billed at market rates in higher-cost regions.<sup><a href="#footnote-3" id="footnote-ref-3" className={styles.link}>3</a></sup></li>
                                                <li className={styles.listItem}><strong>Blended Rate:</strong> A single, flat hourly rate charged for all development personnel, regardless of their individual skill level or actual cost. This tactic can obscure higher margins if less experienced developers are utilized more frequently.</li>
                                                <li className={styles.listItem}><strong><Link href="/blog/vendor-lock-in-subscription-costs" className={styles.link}>Retainers (Availability Margins)</Link>:</strong> Charging a fixed monthly fee to reserve development capacity. If the client does not fully utilize the allotted hours, the unspent time often becomes pure profit margin for the service provider.</li>
                                            </ul>
                    
                                            <h3 className={styles.heading3}>3. "Fee Stacking" and Proprietary Tactics</h3>
                                            <p className={styles.paragraph}>Software companies often employ specific methods to layer fees:</p>
                                            <ul className={styles.list}>
                                                <li className={styles.listItem}><strong>Double Marginalization:</strong> Common in multi-tiered subcontracting, where each intermediary (e.g., freelancer, dev shop, agency) adds their own markup, leading to significantly inflated costs for the end client.</li>
                                                <li className={styles.listItem}><strong>Platform Fees ("Take Rate"):</strong> In marketplace models (e.g., app stores), the platform takes a percentage of each transaction. This platform fee is essentially an additional layer of cost on top of the seller's own pricing.</li>
                                                <li className={styles.listItem}><strong>Implementation Fees:</strong> A one-time setup fee charged in addition to recurring SaaS subscriptions. This fee often serves to quickly recover customer acquisition costs and boost initial profit margins.</li>
                                            </ul>
                    
                                            <h2 className={styles.heading2}>Beyond Direct Markups: Hidden Financial Tactics</h2>
                                            <p className={styles.paragraph}>Beyond explicit markups, the software industry utilizes other indirect financial tactics:</p>
                                            <h3 className={styles.heading3}>1. Service Level Agreement (SLA) Tiers</h3>
                                            <p className={styles.paragraph}>SLAs often involve charging a premium for guaranteed levels of service, reliability, or response times:</p>
                                            <ul className={styles.list}>
                                                <li className={styles.listItem}><strong>"Nines" Premium:</strong> Higher uptime guarantees (e.g., 99.99% versus 99.9%) in SaaS offerings come with significantly higher price tags, even if the underlying operational cost increase for the vendor is minimal due to automated redundancy.</li>
                                                <li className={styles.listItem}><strong>Response Time Arbitrage:</strong> Clients pay more for faster support response times. For example, a 15-minute response for critical issues might incur a 50% premium over a standard 24-hour response.</li>
                                                <li className={styles.listItem}><strong>Service Credits:</strong> If an SLA is breached, vendors may offer service credits (discounts on future services) instead of cash refunds. This encourages continued use of their services to utilize the credit.</li>
                                            </ul>
                    
                                            <h3 className={styles.heading3}>2. Ancillary Revenue Tactics</h3>
                                            <p className={styles.paragraph}>These are "side" fees that contribute to stacking costs:</p>
                                            <ul className={styles.list}>
                                                <li className={styles.listItem}><strong>"Integration Tax":</strong> SaaS platforms may charge additional fees to enable API access or specific connectors to other popular tools, even when the underlying API infrastructure costs the vendor little to maintain.</li>
                                                <li className={styles.listItem}><strong><Link href="/blog/vendor-lock-in-subscription-costs" className={styles.link}>Exit Fees (Egress)</Link>:</strong> In cloud storage, data ingestion (uploading data) is often free, but egress (downloading data) incurs a per-GB fee. This acts as a deterrent to switching providers, effectively locking in customer data.</li>
                                            </ul>
                                            <h3 className={styles.heading3}>3. Contractual & Financial Structures</h3>
                                            <p className={styles.paragraph}>Specific contractual and financial models can also drive up costs:</p>
                                            <ul className={styles.list}>
                                                <li className={styles.listItem}><strong>The "Vig" (Take Rate):</strong> Platforms that facilitate transactions (e.g., payment gateways, app stores) take a percentage of every dollar processed, effectively stacking a platform fee on top of the seller's own pricing.</li>
                                                <li className={styles.listItem}><strong>Revenue Under Management (RUM):</strong> Some software (e.g., Fintech) charges a percentage of the total money processed using the tool. As a client's business grows, the software fee automatically increases, even if the vendor's service costs remain static.</li>
                                                <li className={styles.listItem}><strong>Maintenance "Evergreen" Fees:</strong> For older, on-premise software, annual maintenance and support fees (often 20% of the original license cost) can lead to clients effectively paying for the software multiple times over several years, even without new features.</li>
                                            </ul>
                    
                    </div>
                </div>

                <div className={styles.footnotes}>
                    <h2 className={styles.heading2}>Sources</h2>
                    <ol className={styles.orderedList}>
                        <li id="footnote-1" className={styles.listItem}>
                            <p className={styles.paragraph}>
                                "Vendor Lock-in Strategies in the Software Industry", <a href="https://ris.utwente.nl/ws/portalfiles/portal/5162407/master_thesis_Nijhof.pdf" target="_blank" rel="noopener noreferrer" className={styles.link}>University of Twente</a>.
                                <a href="#footnote-ref-1" aria-label="Back to content" className={styles.link}> ↩</a>
                            </p>
                        </li>
                                                    <li id="footnote-2" className={styles.listItem}>
                                                        <p className={styles.paragraph}>
                                                            "What Is Cloud Vendor Lock-In (And How To Break Free)?", <a href="https://cast.ai/blog/what-is-cloud-vendor-lock-in/" target="_blank" rel="noopener noreferrer" className={styles.link}>Cast AI</a>.
                                                            <a href="#footnote-ref-2" aria-label="Back to content" className={styles.link}> ↩</a>
                                                        </p>
                                                    </li>                        <li id="footnote-3" className={styles.listItem}>
                            <p className={styles.paragraph}>
                                "Dark Patterns in UI: A Classification", <a href="https://arxiv.org/abs/1907.04505" target="_blank" rel="noopener noreferrer" className={styles.link}>ArXiv</a>.
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