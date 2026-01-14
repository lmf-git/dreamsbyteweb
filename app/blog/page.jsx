'use client';

import { useRef, useState, useEffect } from 'react';
import Link from 'next/link';
import { useHeaderAnimation } from '../../contexts/HeaderAnimationContext';
import styles from './blog.module.scss';

export default function Blog() {
    const sectionRef = useRef(null);
    const { headerAnimationComplete } = useHeaderAnimation();
    const [blogVisible, setBlogVisible] = useState(false);

    // Handle blog visibility timing like other animated pages
    useEffect(() => {
        // Only show blog content after header animation completes
        if (headerAnimationComplete) {
            const timer = setTimeout(() => {
                setBlogVisible(true);
            }, 200); // Brief delay after header completes
            return () => clearTimeout(timer);
        } else {
            setBlogVisible(false);
        }
    }, [headerAnimationComplete]);
    
    const posts = [
        {
            id: 1,
            title: "A Business Philosophy Rooted in People",
            excerpt: "We believe that technology should serve humanity, not the other way around. Our business is built on a foundation of respect, transparency, and a commitment to creating real value.",
            date: "2026-01-15",
            slug: "ethical-business-practices",
            readTime: "6 min read"
        },
        {
            id: 2,
            title: "Unethical Business Practices",
            excerpt: "In the software industry, adding fees onto fees or margins onto materials often hides behind technical jargon and service-level tiers.",
            date: "2026-01-14",
            slug: "unethical-business-practices",
            readTime: "12 min read"
        },
        {
            id: 3,
            title: "Our Approach to Software: The Orchestrated Singleton",
            excerpt: "Discover our unique methodology prioritizing explicit control over framework autonomy, building digital instruments with precision and intent.",
            date: "2026-01-11",
            slug: "our-approach-to-software",
            readTime: "15 min read"
        },
        {
            id: 4,
            title: "Stop Buying Software: Custom CRM & Business Systems",
            excerpt: "Generic CRM/FSM software forces compromises. Custom systems perfectly match workflows, streamline operations, and provide a competitive edge.",
            date: "2025-12-28",
            slug: "stop-buying-software-custom-crm-fsm",
            readTime: "9 min read"
        },
        {
            id: 5,
            title: "Your Website: A 24/7 Lead Generation Machine",
            excerpt: "Turn your website into an active lead generation engine. Strategic design and content capture interest and drive conversions around the clock.",
            date: "2025-12-14",
            slug: "website-as-lead-generation-machine",
            readTime: "9 min read"
        },
        {
            id: 6,
            title: "Problem to Profit: Custom Software Case Studies",
            excerpt: "Explore real-world case studies: custom software development solves unique challenges and delivers measurable ROI for businesses.",
            date: "2025-11-30",
            slug: "from-problem-to-profit-case-studies",
            readTime: "10 min read"
        },
        {
            id: 7,
            title: "DevOps Isn't Just for Startups",
            excerpt: "Discover why robust infrastructure, automated backups, and proactive security are critical for small businesses to thrive.",
            date: "2025-11-16",
            slug: "devops-for-small-business",
            readTime: "8 min read"
        },
        {
            id: 8,
            title: "Performance-First Websites: 90+ Lighthouse Scores",
            excerpt: "Speed is paramount. Our disciplined approach to engineering achieves top Google Lighthouse scores, boosting conversions and SEO.",
            date: "2025-11-02",
            slug: "performance-first-website-lighthouse",
            readTime: "10 min read"
        },
        {
            id: 9,
            title: "Don't Polish a Turd: Legacy System Modernisation",
            excerpt: "Stop wasting money on outdated software. Strategic modernization transforms your operations and drives innovation, not just patches.",
            date: "2025-10-19",
            slug: "legacy-system-modernisation-guide",
            readTime: "9 min read"
        },
        {
            id: 10,
            title: "Beyond Shopify: When to Build Custom E-commerce",
            excerpt: "Outgrowing Shopify? Discover the signs it's time for a custom e-commerce app that eliminates fees and reflects your brand.",
            date: "2025-10-05",
            slug: "beyond-shopify-custom-ecommerce",
            readTime: "10 min read"
        },
        {
            id: 11,
            title: "The Hidden Cost of 'No-Code'",
            excerpt: "No-code tools promise simplicity, but building core business logic on them can lead to fragility, insecurity, and high costs.",
            date: "2025-09-21",
            slug: "hidden-cost-of-no-code",
            readTime: "8 min read"
        },
        {
            id: 12,
            title: "\"I'll Sell to Everyone\": The Most Expensive Lie",
            excerpt: "Why trying to appeal to everyone dilutes your message and wastes budget. Discover how to find your true target audience.",
            date: "2025-09-07",
            slug: "i-will-sell-to-everyone-is-a-lie",
            readTime: "8 min read"
        },
        {
            id: 13,
            title: "Take Back Control: Digital Distraction",
            excerpt: "Learn to use user scripts and your hosts file to block distracting websites and regain control of your digital life.",
            date: "2024-03-15",
            slug: "take-back-control-from-distraction"
        },
        {
            id: 14,
            title: "Cloud Illusion: Beyond AWS for Enterprise",
            excerpt: "When AWS goes down, your business stops. Learn why owning infrastructure across multiple regions beats cloud dependency.",
            date: "2024-02-20",
            slug: "cloud-infrastructure-illusion"
        },
        {
            id: 15,
            title: "AI Won't Build Your Business",
            excerpt: "AI tools promise instant solutions, but they can't replace the strategic thinking, architectural integrity, and risk mitigation that a professional developer provides.",
            date: "2024-02-15",
            slug: "ai-wont-build-your-business",
            readTime: "9 min read"
        },
        {
            id: 16,
            title: "Vendor Lock-In: Subscription Costs",
            excerpt: "Break free from monthly fees and platform dependencies. Discover why owning your infrastructure makes financial sense.",
            date: "2024-02-10",
            slug: "vendor-lock-in-subscription-costs"
        },
        {
            id: 17,
            title: "SEO Snake Oil: Empty Promises",
            excerpt: "Cut through the noise and learn what actually matters for search visibility without falling for expensive gimmicks.",
            date: "2024-02-01",
            slug: "seo-snake-oil-empty-promises"
        },
        {
            id: 18,
            title: "Professional Website For Your Business",
            excerpt: "Learn how a well-designed website transforms your business and drives real growth in today's competitive market.",
            date: "2024-01-20",
            slug: "why-your-business-needs-professional-website"
        },
        {
            id: 19,
            title: "Website Development: Digital Presence",
            excerpt: "Discover the complete process behind creating a professional website and what to expect when working with DreamsByte.",
            date: "2024-01-15",
            slug: "understanding-website-development"
        }
    ];

    return (
        <div
            ref={sectionRef}
            className={`${styles.blog} ${blogVisible ? styles.visible : ''}`}
            style={{ opacity: blogVisible ? 1 : 0 }}
        >
            <div
                className={`${styles.hero} ${blogVisible ? styles.visible : ''}`}
                style={{ opacity: blogVisible ? 1 : 0 }}
            >
                <h1 className={styles.title}>Blog</h1>
                <p className={styles.subtitle}>
                    Understanding web development, digital solutions, and how DreamsByte can help grow your business online.
                </p>
            </div>

            <div
                className={`${styles.posts} ${blogVisible ? styles.visible : ''}`}
                style={{ opacity: blogVisible ? 1 : 0 }}
            >
                {posts.map((post, index) => (
                    <Link
                        key={post.id}
                        href={`/blog/${post.slug}`}
                        className={`${styles.post} ${blogVisible ? styles.visible : ''}`}
                        style={{
                            transitionDelay: `${index * 0.1}s`,
                            opacity: blogVisible ? 1 : 0
                        }}
                    >
                        <article>
                            <h2 className={styles.postTitle}>{post.title}</h2>
                            <p className={styles.postExcerpt}>{post.excerpt}</p>
                            <div className={styles.postMeta}>
                                <time className={styles.postDate}>{post.date}</time>
                                <span className={styles.readMore}>Read More →</span>
                            </div>
                        </article>
                    </Link>
                ))}
            </div>
        </div>
    );
}