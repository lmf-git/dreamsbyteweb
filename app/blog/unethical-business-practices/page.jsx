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
                    <div className={styles.meta}>
                        <span className={styles.author}>By L M Farnsworth</span>
                        <span className={styles.date}>2026-01-14</span>
                        <span className={styles.readTime}>12 min read</span>
                    </div>
                </header>

                <div className={styles.content}>
                    <div className={styles.prose}>
                        <h2 className={styles.heading2}>Conversation with Gemini</h2>
                        <p className={styles.paragraph}>
                            <strong>
                                what is the name for adding costs/fees onto fees in business or
                                adding margin onto materials for a job?
                            </strong>
                        </p>
                        <p className={styles.paragraph}>
                            In business and construction, there isn&apos;t just one name for this;
                            the term depends on whether you are talking about accounting, project
                            management, or a specific (and sometimes controversial) pricing
                            strategy.
                        </p>
                        <p className={styles.paragraph}>
                            Here are the most common terms used to describe adding costs or margins
                            onto existing expenses:
                        </p>
                        <h3 className={styles.heading3}>1. Markup</h3>
                        <p className={styles.paragraph}>
                            This is the most general term. It refers to the amount added to the
                            cost price of goods or services to cover overhead and profit.
                        </p>
                        <p className={styles.paragraph}>
                            In Practice: If a contractor buys $1,000 worth of lumber and charges
                            the client $1,200, the $200 is the markup.
                        </p>
                        <h3 className={styles.heading3}>2. Burden (or Labor Burden)</h3>
                        <p className={styles.paragraph}>
                            When you add costs like insurance, taxes, and benefits on top of a base
                            salary, it is called &quot;burdening&quot; the rate.
                        </p>
                        <p className={styles.paragraph}>
                            In Practice: A worker might earn $30/hr, but after adding payroll
                            taxes and workers&apos; comp, the company’s burdened cost is $45/hr.
                        </p>
                        <h3 className={styles.heading3}>3. Tiered Markup / Compounding Fees</h3>
                        <p className={styles.paragraph}>
                            This describes the specific act of adding fees on top of other fees.
                            In some industries, this is called &quot;pyramiding&quot; or
                            &quot;stacking.&quot;
                        </p>
                        <p className={styles.paragraph}>
                            In Practice: If a subcontractor marks up their materials by 10%, and
                            then the general contractor marks up the subcontractor&apos;s total bill
                            by another 10%, you are experiencing fee stacking.
                        </p>
                        <h3 className={styles.heading3}>4. Cost-Plus Pricing</h3>
                        <p className={styles.paragraph}>
                            This is a specific contract type where a business is paid for all
                            allowed expenses plus an additional payment (the margin) to allow for
                            a profit.
                        </p>
                        <p className={styles.paragraph}>
                            In Practice: A &quot;Cost-Plus 15%&quot; contract means the client pays
                            exactly what the materials cost, plus a 15% fee on top of everything.
                        </p>
                        <h3 className={styles.heading3}>5. Escalation</h3>
                        <p className={styles.paragraph}>
                            In long-term contracts, &quot;escalation&quot; refers to adding costs
                            to account for inflation or the rising price of materials over time.
                        </p>
                        <hr />
                        <p className={styles.paragraph}>
                            <strong>any related concepts/tactics and focus specifically on software industry?</strong>
                        </p>
                        <p className={styles.paragraph}>
                            In the software and IT industry, &quot;materials&quot; are often
                            intangible (licenses, cloud credits, data, or APIs), and
                            &quot;labor&quot; is the primary cost driver. Because of this, the
                            terminology shifts from construction/manufacturing terms to concepts
                            focused on intellectual property, licensing, and service layers.
                        </p>
                        <h3 className={styles.heading3}>1. The &quot;Material&quot; Markups (SaaS & Cloud)</h3>
                        <p className={styles.paragraph}>
                            In software, you don&apos;t mark up lumber; you mark up licenses and
                            usage.
                        </p>
                        <ul className={styles.list}>
                            <li className={styles.listItem}>
                                <strong>White-Labeling:</strong> This is the ultimate &quot;margin
                                on materials.&quot; You license a software product from a vendor,
                                rebrand it (remove their logo, add yours), and sell it to your
                                client at a premium. The client believes you built the
                                &quot;material.&quot;
                            </li>
                            <li className={styles.listItem}>
                                <strong>Uplift (or Cloud Uplift):</strong> Specific to cloud
                                computing (AWS, Azure, Google Cloud). Managed Service Providers
                                (MSPs) often pay the base rate for cloud usage but charge the client
                                a percentage on top (e.g., &quot;Cost + 10%&quot;). This
                                &quot;uplift&quot; covers the management of that billing and basic
                                support.
                            </li>
                            <li className={styles.listItem}>
                                <strong>VAR (Value-Added Reselling):</strong> Companies that buy
                                software/hardware from manufacturers and sell it to end-users at a
                                markup. The &quot;tactic&quot; here is adding a service layer
                                (installation, config) to justify the margin on the
                                &quot;material.&quot;
                            </li>
                            <li className={styles.listItem}>
                                <strong>Pass-Through with Admin Fee:</strong> When an agency buys
                                third-party tools for a client (like stock photos, fonts, or server
                                hosting) and bills the client for the cost plus a percentage
                                (usually 10-20%) for the administrative effort of managing the
                                purchase.
                            </li>
                        </ul>
                        <h3 className={styles.heading3}>2. The &quot;Labor&quot; Markups (Services & Development)</h3>
                        <p className={styles.paragraph}>
                            Since code is written by people, the &quot;fee on top of fee&quot;
                            concepts here usually involve Labor Arbitrage.
                        </p>
                        <ul className={styles.list}>
                            <li className={styles.listItem}>
                                <strong>The &quot;Spread&quot; (Labor Arbitrage):</strong> The
                                difference between what an agency pays a developer (e.g., $50/hr)
                                and what they bill the client (e.g., $150/hr). In global software
                                development, this is often Geo-Arbitrage—hiring in low-cost regions
                                (LATAM, Eastern Europe, Asia) while billing at US/EU market rates.
                            </li>
                            <li className={styles.listItem}>
                                <strong>Blended Rate:</strong> A tactic to hide margins. Instead of
                                revealing that a Senior Architect costs $200/hr and a Junior Dev
                                costs $80/hr, an agency charges a flat &quot;Blended Rate&quot; of
                                $150/hr. If the agency uses mostly Junior Devs on the project, their
                                margin increases significantly.
                            </li>
                            <li className={styles.listItem}>
                                <strong>Retainers (The &quot;Availability&quot; Margin):</strong>{" "}
                                Charging a flat monthly fee to &quot;reserve&quot; capacity. If the
                                client doesn&apos;t use the full hours, the unused time becomes pure
                                profit margin for the agency.
                            </li>
                        </ul>
                        <h3 className={styles.heading3}>3. The &quot;Fee Stacking&quot; Tactics</h3>
                        <p className={styles.paragraph}>These are specific ways software companies add fees on top of fees.</p>
                        <ul className={styles.list}>
                            <li className={styles.listItem}>
                                <strong>Double Marginalization (Stacking):</strong> Common in
                                subcontracting.
                                <ul className={styles.list}>
                                    <li className={styles.listItem}>Freelancer charges Dev Shop $50/hr.</li>
                                    <li className={styles.listItem}>Dev Shop marks it up to $100/hr and bills the Agency.</li>
                                    <li className={styles.listItem}>Agency marks it up to $150/hr and bills the Client.</li>
                                </ul>
                                Result: The client pays 3x the cost due to tiered margins.
                            </li>
                            <li className={styles.listItem}>
                                <strong>Platform Fees (The &quot;Take Rate&quot;):</strong> In
                                marketplaces (like the App Store or Upwork), the platform takes a
                                cut (e.g., 30%) of the transaction. If a developer charges a user,
                                the platform adds its fee on top, or deducts it from the payout.
                            </li>
                            <li className={styles.listItem}>
                                <strong>Implementation Fees:</strong> A one-time &quot;setup fee&quot;
                                charged on top of a recurring SaaS subscription. This is often pure
                                margin used to recover customer acquisition costs (CAC)
                                immediately, rather than waiting for monthly payments to pile up.
                            </li>
                        </ul>
                        <hr />
                        <p className={styles.paragraph}>
                            <strong>
                                Yes, and is there anything else we haven&apos;t covered?
                            </strong>
                        </p>
                        <p className={styles.paragraph}>
                            In the software industry, &quot;adding fees onto fees&quot; or
                            &quot;margins onto materials&quot; often hides behind technical jargon
                            and service-level tiers.
                        </p>
                        <p className={styles.paragraph}>
                            Here is an analysis of SLA Tiers and several &quot;hidden&quot; tactics
                            we haven&apos;t covered yet.
                        </p>
                        <h3 className={styles.heading3}>1. SLA Tiers (Service Level Agreements)</h3>
                        <p className={styles.paragraph}>
                            This is the practice of charging a premium not for the software
                            itself, but for the guarantee of its reliability. It is one of the
                            most effective ways to add margin to a standard product.
                        </p>
                        <ul className={styles.list}>
                            <li className={styles.listItem}>
                                <strong>The &quot;Nines&quot; Premium:</strong> In SaaS, uptime is
                                measured in &quot;nines&quot; (e.g., 99.9% vs. 99.99%). The cost to
                                provide that extra 0.09% of uptime is often just automated server
                                redundancy, but the price markup for an &quot;Enterprise Tier&quot;
                                can be 2x to 5x higher than the base price.
                            </li>
                            <li className={styles.listItem}>
                                <strong>Response Time Arbitrage:</strong> You aren&apos;t paying for
                                the fix; you&apos;re paying for the speed of the answer.
                                <ul className={styles.list}>
                                    <li className={styles.listItem}>Standard: 24-hour response (Included).</li>
                                    <li className={styles.listItem}>Priority: 4-hour response (+20% fee).</li>
                                    <li className={styles.listItem}>Critical: 15-minute response (+50% fee).</li>
                                </ul>
                            </li>
                            <li className={styles.listItem}>
                                <strong>Service Credits (The Hedge):</strong> If a vendor fails
                                their SLA, they give you a &quot;service credit&quot; (e.g., 10% off
                                next month). Because this is a discount on future services rather
                                than a cash refund, the vendor effectively keeps the cash and
                                ensures you stay a customer to use the credit.
                            </li>
                        </ul>
                        <h3 className={styles.heading3}>2. &quot;Ancillary&quot; Revenue Tactics</h3>
                        <p className={styles.paragraph}>
                            Outside of direct markups, software companies use these &quot;side&quot;
                            fees to stack costs:
                        </p>
                        <ul className={styles.list}>
                            <li className={styles.listItem}>
                                <strong>The &quot;Integration Tax&quot;:</strong> Many SaaS
                                platforms charge a fee just to turn on an API or a
                                &quot;connector&quot; to another tool (like Salesforce or Slack).
                                The &quot;material&quot; (the API) already exists and costs the
                                vendor almost nothing to maintain, so the fee is nearly 100%
                                margin.
                            </li>
                            <li className={styles.listItem}>
                                <strong>Success Fees / Implementation Fees:</strong> Often, a
                                company will charge a &quot;setup fee&quot; that is 2-3x the actual
                                cost of the labor required to set up the account. This acts as a
                                &quot;front-loaded margin&quot; to ensure the customer is profitable
                                from day one.
                            </li>
                            <li className={styles.listItem}>
                                <strong>Exit Fees (Egress):</strong> Specifically in Cloud/Storage.
                                It’s free to put your data in (ingestion), but you are charged a fee
                                per GB to take your data out (egress). This is a &quot;fee on a
                                material&quot; (your own data) that acts as a deterrent to
                                switching competitors.
                            </li>
                        </ul>
                        <h3 className={styles.heading3}>3. Contractual & Financial Tactics</h3>
                        <ul className={styles.list}>
                            <li className={styles.listItem}>
                                <strong>The &quot;Vig&quot; (Take Rate):</strong> If you build a
                                platform where people sell things (like Shopify or an App Store),
                                you take a percentage of every dollar that moves through it. This is
                                &quot;stacking&quot; a platform fee on top of the seller&apos;s own
                                markup.
                            </li>
                            <li className={styles.listItem}>
                                <strong>Revenue Under Management (RUM):</strong> Some software
                                (like Fintech or AdTech) doesn&apos;t charge a flat fee. They charge
                                a percentage of the total money you process using the tool. As you
                                grow, their fee grows automatically, even if their costs stay
                                exactly the same.
                            </li>
                            <li className={styles.listItem}>
                                <strong>Maintenance &quot;Evergreen&quot; Fees:</strong> For
                                old-school on-premise software, companies charge a yearly
                                &quot;Maintenance & Support&quot; fee (usually 20% of the original
                                license). Over five years, the client has paid for the software
                                twice, even if no new features were added.
                            </li>
                        </ul>
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