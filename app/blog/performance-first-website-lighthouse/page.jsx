'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useContact } from '../../../contexts/ContactContext';
import { useHeaderAnimation } from '../../../contexts/HeaderAnimationContext';
import CallToAction from '../../../components/layout/CallToAction/CallToAction';
import styles from '../post.module.scss';

export default function PerformanceFirstWebsite() {
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
                    <h1 className={styles.title}>The Performance-First Website: How We Guarantee 90+ Lighthouse Scores</h1>
                    <div className={styles.meta}>
                        <span className={styles.author}>By DreamsByte Team</span>
                        <span className={styles.date}>2026-01-11</span>
                        <span className={styles.readTime}>10 min read</span>
                    </div>
                </header>

                <div className={styles.content}>
                    <div className={styles.prose}>
                        <h2 className={styles.heading2}>Speed is Not a Feature, It's The Feature</h2>
                        <p className={styles.paragraph}>In the world of web development, we often talk about features, design, and content. But there's one crucial element that underpins all of them: performance. A slow website is a broken website. It doesn't matter how beautiful your design is or how compelling your copy is if your users get frustrated and leave before they even see it. The data is unequivocal: a 1-second delay in page load time can result in a 7% reduction in conversions.<sup><a href="#footnote-1" id="footnote-ref-1" className={styles.link}>1</a></sup></p>
                        <p className={styles.paragraph}>At DreamsByte, we don't treat performance as an afterthought or something to "fix" later. We build it into the core of our process. It's a non-negotiable metric of quality, which is why we can confidently guarantee a Google Lighthouse performance score of 90+ for the sites we build.</p>

                        <h2 className={styles.heading2}>What is Google Lighthouse?</h2>
                        <p className={styles.paragraph}>Google Lighthouse is an open-source, automated tool for improving the quality of web pages.<sup><a href="#footnote-2" id="footnote-ref-2" className={styles.link}>2</a></sup> It runs a series of audits against a page and generates a report on how well it did. The "Performance" score is a weighted average of several key metrics, including:</p>
                        <ul className={styles.list}>
                            <li className={styles.listItem}><strong>First Contentful Paint (FCP):</strong> How long it takes for the first piece of content to appear on the screen.</li>
                            <li className={styles.listItem}><strong>Speed Index:</strong> How quickly the contents of a page are visibly populated.</li>
                            <li className={styles.listItem}><strong>Largest Contentful Paint (LCP):</strong> How long it takes for the largest image or text block to become visible. This is a crucial measure of perceived load speed.</li>
                            <li className={styles.listItem}><strong>Time to Interactive (TTI):</strong> How long it takes for the page to become fully interactive.</li>
                            <li className={styles.listItem}><strong>Total Blocking Time (TBT):</strong> The total time that the page was blocked from responding to user input.</li>
                        </ul>
                        <p className={styles.paragraph}>A score of 90 or above places a site in the "green," indicating a fast, high-quality user experience that Google's own tools recognize as excellent.</p>
                        
                        <h2 className={styles.heading2}>How We Guarantee a 90+ Score</h2>
                        <p className={styles.paragraph}>Achieving a high performance score isn't about a single secret trick. It's about a disciplined, multi-faceted approach to development from start to finish.</p>

                        <h3 className={styles.heading3}>1. A Modern, Optimized Framework</h3>
                        <p className={styles.paragraph}>We build our web applications with Next.js, a React framework that is built for performance. It provides powerful, out-of-the-box optimizations like code-splitting (only loading the JavaScript needed for the current page), server-side rendering (SSR), and static site generation (SSG). This gives us a massive head start over older technologies or generic website builders.</p>

                        <h3 className={styles.heading3}>2. Aggressive Image Optimization</h3>
                        <p className={styles.paragraph}>Images are often the biggest performance bottleneck on a website. We have a multi-step process for ensuring they are as small and efficient as possible:</p>
                        <ul className={styles.list}>
                            <li className={styles.listItem}><strong>Next-Gen Formats:</strong> We serve all images in modern, highly-compressed formats like WebP.</li>
                            <li className={styles.listItem}><strong>Responsive Sizing:</strong> We generate multiple sizes of each image and use the `<picture>` element or `srcset` attribute to ensure that a mobile device downloads a small, mobile-sized image, not a huge desktop-sized one.</li>
                            <li className={styles.listItem}><strong>Lazy Loading:</strong> Images that are below the fold (not visible on the screen) are not loaded until the user scrolls down to them. This dramatically speeds up the initial page load.</li>
                        </ul>

                        <h3 className={styles.heading3}>3. A "Less is More" Approach to JavaScript</h3>
                        <p className={styles.paragraph}>JavaScript is powerful, but it's also "expensive" in performance terms. Every script has to be downloaded, parsed, and executed by the browser. We are ruthless about minimizing our use of third-party scripts and libraries. Every package we add is scrutinized for its performance impact. This "JavaScript budget" is a core part of our development philosophy.</p>

                        <h3 className={styles.heading3}>4. Smart Caching and Server-Side Rendering</h3>
                        <p className={styles.paragraph}>With server-side rendering (SSR), the server sends a fully-rendered HTML page to the browser. This means the user sees content almost instantly, resulting in a very low First Contentful Paint (FCP). We then use smart caching strategies to serve these pre-rendered pages from a CDN (Content Delivery Network), making subsequent loads almost instantaneous.</p>

                        <h3 className={styles.heading3}>5. Efficient Code and Database Queries</h3>
                        <p className={styles.paragraph}>This is where craftsmanship comes in. We write clean, efficient code that avoids unnecessary re-renders. When we fetch data from a database, we write lean, optimized queries that only retrieve the exact data needed, and nothing more. We avoid the "N+1" query problem that plagues many applications and slows them to a crawl.</p>
                        
                        <h2 className={styles.heading2}>Why Most Websites are Slow</h2>
                        <p className={styles.paragraph}>If this is all possible, why are so many websites slow? It usually comes down to a few common culprits that we consciously avoid:</p>
                        <ul className={styles.list}>
                            <li className={styles.listItem}><strong>Website Builders (Wix, Squarespace):</strong> They are loaded with bloated, one-size-fits-all code to support thousands of templates and features you're not even using.</li>
                            <li className={styles.listItem}><strong>Clunky WordPress Themes and Plugins:</strong> Many popular themes and plugins are notoriously inefficient, loading dozens of scripts and stylesheets on every page, whether they are needed or not.</li>
                            <li className={styles.listItem}><strong>Excessive Third-Party Scripts:</strong> Unnecessary tracking scripts, chatbot widgets, and social media embeds can kill performance.</li>
                        </ul>

                        <h2 className={styles.heading2}>Performance is a Business Metric</h2>
                        <p className={styles.paragraph}>A fast website isn't just a technical vanity metric. It has a direct impact on your bottom line. It improves user engagement, increases conversion rates, and is a confirmed ranking factor for Google SEO.<sup><a href="#footnote-3" id="footnote-ref-3" className={styles.link}>3</a></sup> A faster site will literally make you more money.</p>
                        <p className={styles.paragraph}>Investing in a performance-first website is one of the most direct investments you can make in the growth and success of your online presence.</p>

                        <p className={styles.paragraph}>Is your current website slow, clunky, and failing its Lighthouse audit? Are you losing customers to a frustrating user experience? <button
                            onClick={() => openContact("I need a faster website")}
                            className={styles.contactButton}
                        >
                            Let's talk about what a 90+ performance score could do for your business.
                        </button></p>
                    </div>
                </div>

                    <div className={styles.footnotes}>
                        <h2 className={styles.heading2}>Sources</h2>
                        <ol className={styles.orderedList}>
                            <li id="footnote-1" className={styles.listItem}>
                                <p className={styles.paragraph}>
                                    "Website Speed & Conversion Rate: Case Studies & Stats", Huckabuy.
                                    <a href="https://huckabuy.com/blog/website-speed-conversion-rate/" target="_blank" rel="noopener noreferrer" className={styles.link}>
                                        https://huckabuy.com/blog/website-speed-conversion-rate/
                                    </a>
                                    <a href="#footnote-ref-1" aria-label="Back to content" className={styles.link}> ↩</a>
                                </p>
                            </li>
                            <li id="footnote-2" className={styles.listItem}>
                                <p className={styles.paragraph}>
                                    "Google Lighthouse", Chrome for Developers.
                                    <a href="https://developer.chrome.com/docs/lighthouse/" target="_blank" rel="noopener noreferrer" className={styles.link}>
                                        https://developer.chrome.com/docs/lighthouse/
                                    </a>
                                    <a href="#footnote-ref-2" aria-label="Back to content" className={styles.link}> ↩</a>
                                </p>
                            </li>
                            <li id="footnote-3" className={styles.listItem}>
                                <p className={styles.paragraph}>
                                    "Core Web Vitals and Page Experience: What They Are & How to Optimize", SearchXPRO.
                                    <a href="https://searchxpro.com/blog/core-web-vitals/" target="_blank" rel="noopener noreferrer" className={styles.link}>
                                        https://searchxpro.com/blog/core-web-vitals/
                                    </a>
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
