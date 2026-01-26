'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useContact } from '../../../contexts/ContactContext';
import { useHeaderAnimation } from '../../../contexts/HeaderAnimationContext';
import CallToAction from '../../../components/layout/CallToAction/CallToAction';
import styles from '../post.module.scss';
import { posts } from '../posts';

export default function CloudInfrastructureIllusion() {
    const { openContact } = useContact();
    const { headerAnimationComplete } = useHeaderAnimation();
    const [contentVisible, setContentVisible] = useState(false);

    const post = posts.find(p => p.slug === 'cloud-infrastructure-illusion');

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
                    <h1 className={styles.title}>{post?.title || 'Cloud Illusion: Beyond AWS for Enterprise'}</h1>
                    {post?.excerpt && <p className={styles.excerpt}>{post.excerpt}</p>}
                    <div className={styles.meta}>
                        <span className={styles.author}>By Liam Fielding</span>
                        <span className={styles.date}>{post?.date || '2024-02-20'}</span>
                        <span className={styles.readTime}>{post?.readTime || '9 min read'}</span>
                    </div>
                </header>

                <div className={styles.content}>
                    <div className={styles.prose}>
                        <h2 className={styles.heading2}>The Day AWS Went Down</h2>
                        <p className={styles.paragraph}>December 7, 2021. Amazon Web Services experienced a major outage in their US-EAST-1 region. For hours, thousands of businesses were completely offline. Netflix, Disney+, Robinhood, and countless enterprise applications simply stopped working.<sup><a href="#footnote-1" id="footnote-ref-1" className={styles.link}>1</a></sup> Their customers couldn't access services. Their employees couldn't work. Their revenue stopped flowing.</p>

                        <p className={styles.paragraph}>And there was nothing they could do but wait for Amazon to fix it.</p>

                        <h2 className={styles.heading2}>The False Promise of Cloud Reliability</h2>
                        <p className={styles.paragraph}>Cloud providers sell reliability through buzzwords: "99.99% uptime," "globally distributed," "enterprise-grade infrastructure." But these promises come with an asterisk the size of a data center.</p>

                        <p className={styles.paragraph}>When AWS goes down—and it does, regularly—everyone on AWS goes down together. Your redundancy doesn't matter. Your backup plans don't matter. Your multi-region architecture doesn't help when the control plane itself fails.</p>

                        <h2 className={styles.heading2}>For Enterprise: The Math Changes Completely</h2>
                        <p className={styles.paragraph}>Cloud infrastructure makes sense for startups and small businesses. The flexibility, low entry cost, and reduced operational complexity are genuine advantages when you're small and growing unpredictably.</p>

                        <p className={styles.paragraph}>But for established enterprise businesses serving customers across multiple countries, the equation flips entirely:</p>

                        <h3 className={styles.heading3}>You Have Predictable Scale</h3>
                        <p className={styles.paragraph}>Startups need cloud elasticity because they might 10x overnight or shrink by half. Enterprise businesses have years of traffic data. You know your capacity requirements. You don't need to pay premium prices for flexibility you won't use.</p>

                        <h3 className={styles.heading3}>You Can Afford Infrastructure</h3>
                        <p className={styles.paragraph}>A dedicated server in a quality data center costs £50-200/month. To match the compute power of a single £200/month dedicated server, you'll pay AWS £500-1000/month. For enterprise scale, the savings are massive.</p>

                        <h3 className={styles.heading3}>You Need Geographic Distribution Anyway</h3>
                        <p className={styles.paragraph}>If you serve customers in the UK, EU, US, and Asia, you need infrastructure in those regions regardless. But cloud "global deployment" just means paying premium prices in multiple regions. Own servers in each region and you control everything.</p>

                        <h2 className={styles.heading2}>The Real Costs of Cloud Dependency</h2>
                        <p className={styles.paragraph}>Beyond the obvious price premium, <Link href="/blog/vendor-lock-in-subscription-costs" className={styles.link}>cloud lock-in</Link> creates costs most businesses don't calculate:</p>

                        <h3 className={styles.heading3}>Egress Fees</h3>
                        <p className={styles.paragraph}>AWS charges you to move your own data out of their network. Serving files to customers? That's egress. Backing up your data? Egress. Moving between their own services in different regions? Believe it or not, egress. These fees compound at scale.<sup><a href="#footnote-2" id="footnote-ref-2" className={styles.link}>2</a></sup></p>

                        <h3 className={styles.heading3}>Service Multiplication</h3>
                        <p className={styles.paragraph}>Need a database? That's RDS. Want caching? ElastiCache. File storage? S3. CDN? CloudFront. Load balancing? ALB. Each service has its own pricing structure, its own scaling rules, its own surprise bills.</p>

                        <h3 className={styles.heading3}>Architectural Complexity</h3>
                        <p className={styles.paragraph}>Cloud-native architecture requires constant optimization to avoid bill shock. You employ engineers specifically to manage cloud costs. You architect around pricing quirks rather than technical merit.</p>

                        <h3 className={styles.heading3}>Vendor Lock-In</h3>
                        <p className={styles.paragraph}>Once you're deep into AWS-specific services—Lambda, DynamoDB, Kinesis—<Link href="/blog/vendor-lock-in-subscription-costs" className={styles.link}>migrating away becomes prohibitively expensive</Link>. They know this. Prices creep up over time because switching costs are enormous.</p>

                        <h2 className={styles.heading2}>The Alternative: Own Your Infrastructure</h2>
                        <p className={styles.paragraph}>For enterprise businesses, owned infrastructure in each served region provides:</p>

                        <h3 className={styles.heading3}>True Redundancy</h3>
                        <p className={styles.paragraph}>Server in London goes down? Your Paris, Frankfurt, and Dublin servers keep running. When you own infrastructure across multiple providers and locations, you're truly distributed. No single point of failure can take down your entire business.</p>

                        <h3 className={styles.heading3}>Predictable Costs</h3>
                        <p className={styles.paragraph}>You know exactly what infrastructure costs each month. No surprise bills. No mysterious charges. No pricing changes at AWS's whim.</p>

                        <h3 className={styles.heading3}>Better Performance</h3>
                        <p className={styles.paragraph}>Dedicated hardware in the regions you serve delivers lower latency than cloud VMs sharing resources. Your UK customers hit your UK server directly. Your Singapore customers hit your Singapore server directly.</p>

                        <h3 className={styles.heading3}>Data Sovereignty</h3>
                        <p className={styles.paragraph}>When regulations require data to stay in specific jurisdictions, owning servers in those regions gives you complete control. No questions about where data transits or which AWS region actually hosts it.</p>

                        <h3 className={styles.heading3}>Independence from Vendor Failures</h3>
                        <p className={styles.paragraph}>AWS outage? Your infrastructure keeps running. AWS price increases? Irrelevant. AWS deprecates a service you depend on? Not your problem.</p>

                        <h2 className={styles.heading2}>But What About Management Complexity?</h2>
                        <p className={styles.paragraph}>Cloud providers sell the myth that <Link href="/blog/devops-for-small-business" className={styles.link}>managing your own infrastructure is impossibly complex</Link>. It's not—it's just different from their abstracted services.</p>

                        <p className={styles.paragraph}>Modern tools make infrastructure management straightforward:</p>
                        <ul className={styles.list}>
                            <li className={styles.listItem}>Automated deployment with Docker and Kubernetes</li>
                            <li className={styles.listItem}>Infrastructure as code with Terraform</li>
                            <li className={styles.listItem}>Monitoring with open-source tools like Prometheus and Grafana</li>
                            <li className={styles.listItem}>Automated backups and disaster recovery</li>
                        </ul>

                        <p className={styles.paragraph}>Yes, you need competent systems administrators. But you're an enterprise business—you should have those anyway. Relying entirely on cloud abstractions means you're one AWS outage away from having no one who understands how your infrastructure actually works.</p>

                        <h2 className={styles.heading2}>Hybrid Approaches That Actually Work</h2>
                        <p className={styles.paragraph}>You don't have to choose all-cloud or all-owned. Smart enterprise infrastructure often combines both:</p>

                        <ul className={styles.list}>
                            <li className={styles.listItem}><strong>Core Services on Owned Infrastructure:</strong> Your main application runs on your servers in each region</li>
                            <li className={styles.listItem}><strong>Cloud for Specific Services:</strong> Use S3 for backup storage, CloudFront for CDN, but don't build your entire stack there</li>
                            <li className={styles.listItem}><strong>Multi-Cloud Strategy:</strong> Use different providers for different services to avoid single-vendor dependency</li>
                        </ul>

                        <h2 className={styles.heading2}>The Question of Scale</h2>
                        <p className={styles.paragraph}>At what point does owning infrastructure make sense? While every case is different, the cost-benefit analysis often starts to shift when monthly cloud bills exceed £5,000. For prominent companies like 37signals (creators of Basecamp and HEY), leaving the cloud resulted in projected savings of millions annually, demonstrating that for established businesses, owned infrastructure almost always wins financially.<sup><a href="#footnote-3" id="footnote-ref-3" className={styles.link}>3</a></sup></p>

                        <p className={styles.paragraph}>Beyond pure costs, consider the strategic value of infrastructure independence. If your business depends on reliable uptime, can you afford to have no control when your provider fails?</p>

                        <h2 className={styles.heading2}>Breaking Free</h2>
                        <p className={styles.paragraph}>Migrating from cloud to owned infrastructure isn't trivial, but it's not as complex as cloud providers want you to believe. The process:</p>

                        <ul className={styles.list}>
                            <li className={styles.listItem}>Audit your actual resource usage (not what you're paying for)</li>
                            <li className={styles.listItem}>Design owned infrastructure to match real needs</li>
                            <li className={styles.listItem}>Set up parallel infrastructure in key regions</li>
                            <li className={styles.listItem}>Migrate services incrementally</li>
                            <li className={styles.listItem}>Phase out cloud dependencies</li>
                        </ul>

                        <p className={styles.paragraph}>Most enterprise migrations recoup their investment within 12-18 months purely from reduced operating costs.</p>

                        <h2 className={styles.heading2}>The DreamsByte Perspective</h2>
                        <p className={styles.paragraph}>We build systems that can run anywhere—cloud, owned infrastructure, or hybrid. We don't have a vendor to push or a cloud services contract to upsell. We design architecture based on what actually makes sense for your business.</p>

                        <p className={styles.paragraph}>For enterprise clients, that usually means owned infrastructure in key regions, selective use of cloud services where they genuinely add value, and complete independence from any single vendor.</p>

                        <h2 className={styles.heading2}>Take Control</h2>
                        <p className={styles.paragraph}>Cloud infrastructure is a tool, not a religion. For many enterprise businesses, it's an expensive tool that creates dependency without delivering corresponding value.</p>

                        <p className={styles.paragraph}>Your business is mature enough to own its infrastructure. The question is whether you want to keep paying rent on computing power or invest in assets you control.</p>


                    </div>

                    <div className={styles.footnotes}>
                        <h2 className={styles.heading2}>Sources</h2>
                        <ol className={styles.orderedList}>
                            <li id="footnote-1" className={styles.listItem}>
                                <p className={styles.paragraph}>
                                    "Annual Outage Analysis 2023," <a href="https://uptimeinstitute.com/resources/assets/reports/Annual-Outage-Analysis-2023.pdf" target="_blank" rel="noopener noreferrer" className={styles.link}>Uptime Institute</a>.
                                    <a href="#footnote-ref-1" aria-label="Back to content" className={styles.link}> ↩</a>
                                </p>
                            </li>
                            <li id="footnote-2" className={styles.listItem}>
                                <p className={styles.paragraph}>
                                    "Cloud Pricing Models," <a href="https://www.semanticscholar.org/paper/Cloud-Pricing-Models-Wu-Buyya-Ramamohanarao/31201d4a04d5d278b0e8b1b519b168a7b0a7c4a1" target="_blank" rel="noopener noreferrer" className={styles.link}>ACM Computing Surveys</a>.
                                    <a href="#footnote-ref-2" aria-label="Back to content" className={styles.link}> ↩</a>
                                </p>
                            </li>
                            <li id="footnote-3" className={styles.listItem}>
                                <p className={styles.paragraph}>
                                    "Financial Impact of Moving to Cloud Computing," <a href="https://www.na-businesspress.com/JSCR/JSCR20n1_44-51.pdf" target="_blank" rel="noopener noreferrer" className={styles.link}>North American Business Press</a>.
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
