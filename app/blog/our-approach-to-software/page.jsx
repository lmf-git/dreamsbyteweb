'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useContact } from '../../../contexts/ContactContext';
import { useHeaderAnimation } from '../../../contexts/HeaderAnimationContext';
import CallToAction from '../../../components/layout/CallToAction/CallToAction';
import NextIcon from '../../../components/icons/brands/Next';
import NuxtIcon from '../../../components/icons/brands/Nuxt';
import SvelteIcon from '../../../components/icons/brands/Svelte';
import ReactIcon from '../../../components/icons/brands/React';
import styles from '../post.module.scss';

export default function OurApproachToSoftware() {
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
                    <h1 className={styles.title}>The Orchestrated Singleton: A Full-Stack Manifesto on Control</h1>
                    <div className={styles.meta}>
                        <span className={styles.author}>By Liam Fielding</span>
                        <span className={styles.date}>2026-01-11</span>
                        <span className={styles.readTime}>15 min read</span>
                    </div>
                </header>

                <div className={styles.content}>
                    <div className={styles.prose}>
                        <h2 className={styles.heading2}>Beyond Functional Purity: Reclaiming the Boot Sequence</h2>
                        <p className={styles.paragraph}>Modern web development often champions "Functional Purity"—stateless functions, hooks for everything, and declarative "magic." While these paradigms offer undeniable benefits, the pursuit of simplicity can inadvertently lead to a loss of explicit control. We can lose sight of the crucial "Boot Sequence," the ability to treat our software like a physical machine that hums to life in a specific, orchestrated order.<sup><a href="#footnote-1" id="footnote-ref-1" className={styles.link}>1</a></sup></p>
                        <p className={styles.paragraph}>Based on our full-stack methodology—ranging from static-heavy Node.js backends to kinetically orchestrated React frontends—we've forged an approach that prioritizes <strong>Explicit Control over Framework Autonomy</strong>. This philosophy culminates in what we call <strong>The Orchestrated Singleton</strong>: a comprehensive strategy for building digital instruments with intent.</p>

                        <h2 className={styles.heading2}>1. The Backend as a Mechanical Boot Sequence</h2>
                        <p className={styles.paragraph}>Most Node.js backends are often perceived as collections of loosely coupled routes and handlers. Our approach fundamentally redefines this by treating the server as a <strong>Static Singleton</strong>. It's a single, resilient entity whose initialization is a precisely choreographed mechanical boot sequence.<sup><a href="#footnote-2" id="footnote-ref-2" className={styles.link}>2</a></sup></p>
                        <ul className={styles.list}>
                            <li className={styles.listItem}><strong>The Registry Pattern:</strong> By encapsulating the entire service within a static class, we establish a single source of truth that is never instantiated, nor does it need to be. Instead, a <code>PROVIDERS</code> registry is utilized as a "Dependency Check-list." When the service starts, it doesn't just run; it orchestrates. Each external integration (Slack, Databases, third-party APIs) must fulfill a predefined <code>setup()</code> contract. This guarantees:
                                <ul className={styles.list}>
                                    <li className={styles.listItem}><strong>Sequential Reliability:</strong> We can guarantee, for instance, that a sensitive Secrets module is fully loaded and initialized before the Database attempts to connect using those credentials.</li>
                                    <li className={styles.listItem}><strong>Visual Diagnostics:</strong> High-fidelity terminal logging isn't merely aesthetic; it creates a "Command Center" feel. This provides a developer-facing UI that reports on the health and progress of the boot sequence in real-time, offering immediate insight into any issues.</li>
                                </ul>
                            </li>
                            <li className={styles.listItem}><strong>The Self-Healing Loop:</strong> Rather than building complex, event-driven listeners for transient states like token expiration, we embrace a brute-force approach to long-term stability: a 30-minute "Global Re-init" loop. This forces the system to periodically "re-verify" its external connections and state, leveraging idempotency to ensure everything remains evergreen and operational without constant manual intervention.</li>
                        </ul>

                        <h2 className={styles.heading2}>2. The API as a Managed Proxy: The "SDK-as-a-Service" Layer</h2>
                        <p className={styles.paragraph}>Our API communication strategy is a deliberate rejection of the fragmented "hook-soup" often found in modern applications. We treat our API layer as a <strong>Private SDK</strong>, acting as a managed proxy for all external interactions.<sup><a href="#footnote-3" id="footnote-ref-3" className={styles.link}>3</a></sup></p>
                        <ul className={styles.list}>
                            <li className={styles.listItem}><strong>Global Singleton as a Proxy:</strong> By centralizing all external communication into a static API class or global singleton, we implement a robust <a href="https://refactoring.guru/design-patterns/proxy" target="_blank" rel="noopener noreferrer" className={styles.link}>Proxy Pattern</a>. The rest of your application never speaks directly to the internet; it only speaks to our dedicated API object. This "Choke Point" provides a single, powerful location to inject authentication headers, manage caching, and handle global error states (such as a 401 Unauthorized response) in precisely one line of code, rather than scattering logic across dozens of UI components or hooks.</li>
                            <li className={styles.listItem}><strong>Environment Abstraction:</strong> This centralized proxy effectively decouples the "Where" (e.g., local development server, Heroku instance, AWS Lambda) from the "How" (the underlying communication protocol, e.g., Fetch API, Axios, GraphQL). Your frontend code becomes <q>Environment Blind,</q> a hallmark of clean architecture. This empowers us to swap out your entire communication protocol (e.g., migrating from Fetch to a new GraphQL client) by changing a single file, without touching any UI components.</li>
                        </ul>

                        <h2 className={styles.heading2}>3. High-Fidelity Frontend Orchestration</h2>
                        <p className={styles.paragraph}>This is where <strong>Control meets Choreography</strong>. In our frontend development, exemplified by projects built with React and Next.js, we consciously shift focus from merely "state-as-data" towards "state-as-timing," orchestrating user interactions with cinematic precision.</p>
                        <ul className={styles.list}>
                            <li className={styles.listItem}><strong>Temporal Guards and Transition Locking:</strong> In a standard React application, clicking a button primarily triggers a data change. In our architecture, it initiates a precise <strong>State Sequence</strong>. We implement a "Transition Lock" (managed via an <code>isTransitioning</code> state or similar guard) combined with manual image preloading. This guarantees the user never experiences a jarring, partial UI. The software intelligently refuses to display the next screen until it has verified—via a Promise-based cache check—that every essential asset is fully prepared. This is <strong>Mechanical Sympathy</strong>: a deep respect for the browser’s bandwidth and the user’s cognitive load, preventing the dreaded "flicker" of loading images.</li>
                            <li className={styles.listItem}><strong>Bypassing the Reconciler (The "Fast Path"):</strong> React's Virtual DOM is excellent for managing structural changes, but it can become a bottleneck for high-frequency motion. In our layout logic, particularly for elements demanding constant, fluid animation (like complex header effects), we utilize a "Fast Path" approach with React's <code>useRef</code>. Instead of triggering a global re-render on every scroll event, we manipulate the DOM directly where appropriate. By injecting styles directly into <code>ref.current</code>, we maintain a <Link href="/blog/performance-first-website-lighthouse" className={styles.link}>rock-solid 60 frames per second (fps) performance</Link> for complex animations, allowing React to efficiently handle "Big" state changes while the browser's native rendering engine handles the "Fast" ones.</li>
                        </ul>

                        <h2 className={styles.heading2}>4. Kinetic CSS: The Physics of the UI</h2>
                        <p className={styles.paragraph}>Finally, our visual layer transcends static styling and is treated as a dynamic, 3D space. This is where our meticulous attention to animation and responsiveness brings the UI to life.</p>
                        <ul className={styles.list}>
                            <li className={styles.listItem}><strong>Atomic Animation:</strong> We don't animate entire paragraphs; we animate atoms—individual characters. By leveraging CSS variables to dynamically stagger delays at the character level, we create a kinetic energy that feels inherently physical and engaging. This bridges the gap between JavaScript logic and SCSS presentation seamlessly.</li>
                            <li className={styles.listItem}><strong>Cubic-Bezier Over-engineering:</strong> We consciously avoid standard easing functions. Instead, we employ bespoke <code>cubic-bezier</code> curves that incorporate "Overshoot." When a word or element enters the screen, it doesn't just stop abruptly; it "lands" with a subtle weight and elasticity. This creates a tactile, organic experience that makes the software feel like a high-end instrument.</li>
                            <li className={styles.listItem}><strong>Fluidity over Breakpoints:</strong> Our philosophy embraces Elastic Design through the strategic use of <code>clamp()</code> and <code>em</code> units. Rather than the UI "snapping" at rigid breakpoints, it "flows" like a liquid, maintaining proportional relationships mathematically across all screen sizes. This ensures a consistently refined user experience without the need for extensive, often brittle, media query overrides.</li>
                        </ul>

                        <h2 className={styles.heading2}>Technology Agnosticism: Empowering Client Solutions</h2>
                        <p className={styles.paragraph}>Our commitment to explicit control and engineering excellence allows us to remain largely technology-agnostic when it comes to specific frameworks for client projects. While the underlying "Orchestrated Singleton" methodology remains constant, we choose the right tools for the job based on project requirements, team familiarity, and long-term maintainability. This flexibility is showcased by our proficiency across various modern frontend frameworks:</p>
                        <ul className={styles.list}>
                            <li className={styles.listItem}> <NextIcon extraClass={styles.icon} /> Next.js</li>
                            <li className={styles.listItem}> <NuxtIcon extraClass={styles.icon} /> Nuxt.js</li>
                            <li className={styles.listItem}> <SvelteIcon extraClass={styles.icon} /> SvelteKit</li>
                            <li className={styles.listItem}> <ReactIcon extraClass={styles.icon} /> React</li>
                        </ul>
                        <p className={styles.paragraph}>This ensures that every client solution is built with the most appropriate and powerful technologies available, all while adhering to our stringent standards of quality and control.</p>

                        <h2 className={styles.heading2}>Balancing Pragmatism and Vision: The "Takeover" Project</h2>
                        <p className={styles.paragraph}>While we leverage powerful, modern frameworks to deliver robust and performant solutions for our clients today, our commitment to true ownership, maximum efficiency, and leveraging web standards extends into our long-term research. This vision is best embodied by the "Takeover" project – a "no-framework," pure HTML/CSS/JS boilerplate approach to web development.</p>
                        <p className={styles.paragraph}>The "Takeover" project is built on the belief that as modern web features become standardized into HTML, CSS, and JavaScript, the need for heavy frameworks diminishes. It's a testament to the core principles discussed above, demonstrating how high-fidelity interaction, efficient bootstrapping, and clean communication layers can be achieved with a minimal footprint, offering:</p>
                        <ul className={styles.list}>
                            <li className={styles.listItem}><strong>True Ownership:</strong> Complete control over every line of code, reducing third-party dependencies and vendor lock-in.</li>
                            <li className={styles.listItem}><strong>Ultimate Longevity:</strong> Built directly on web standards, ensuring the codebase remains functional and relevant far longer than framework-dependent applications.</li>
                            <li className={styles.listItem}><strong>Lean Footprint:</strong> Minimal overhead for maximum performance, loading only what's absolutely necessary.</li>
                        </ul>
                        <p className={styles.paragraph}>This research allows us to continually refine our understanding of <Link href="/blog/legacy-system-modernisation-guide" className={styles.link}>core web technologies</Link>, bringing those insights and efficiencies back into our client projects, regardless of the specific framework chosen.</p>

                        <h2 className={styles.heading2}>From Philosophical to Financial: An Asset That Pays For Itself</h2>
                        <p className={styles.paragraph}>This philosophy of explicit control and building enduring digital instruments has a direct and significant financial benefit. It is the ultimate antidote to the most common source of long-term financial drain and strategic risk in modern technology: vendor lock-in. Our approach ensures that your investment creates a permanent asset, not a recurring operational cost.</p>
                        <p className={styles.paragraph}>Most businesses are sold on subscription platforms that promise low initial costs but create a state of digital dependence. The platform dictates your features, takes a cut of your revenue, and can change the rules at any time. This is the opposite of control. For a more detailed breakdown of this financial trap, we recommend reading our post on <Link href="/blog/vendor-lock-in-subscription-costs" className={styles.link}>the hidden costs of subscriptions</Link>.</p>
                        <p className={styles.paragraph}>Let's quantify the financial outcome of our approach. Consider a custom e-commerce application. A typical agency or premium platform might charge <strong>$450/month</strong> for a comparable managed service. Over three years, that's <strong>$16,200</strong> spent on a service you will never own.</p>
                        <p className={styles.paragraph}>In contrast, a one-time investment in a custom-built solution from us—for a hypothetical project cost of <strong>$8,000</strong>—reaches its break-even point in under 18 months. By the end of three years, you have not only saved over <strong>$8,200</strong>, but you also possess a fully independent, scalable asset. The initial investment has paid for itself and is now generating pure upside. This is the tangible financial result of choosing ownership over rental and control over convenience.</p>

                        <h2 className={styles.heading2}>Conclusion: The Case for Explicit Control</h2>
                        <p className={styles.paragraph}>Our methodology is a direct rebuttal to the idea that software is merely a functional tool. By meticulously engineering the backend boot sequence, abstracting API communication, orchestrating high-fidelity frontend interactions, and atomizing animation manifests, we transform mere code into a digital instrument. This approach ensures not only that your software works flawlessly, but that it provides an intuitive, reliable, and delightful experience that stands the test of time and truly serves your business goals.</p>
                        <p className={styles.paragraph}>Ready to build software with a philosophy of explicit control and enduring value? <button
                            onClick={() => openContact("I'm interested in building digital instruments")}
                            className={styles.contactButton}
                        >
                            Let's talk about your project.
                        </button></p>
                    </div>
                </div>

                <div className={styles.footnotes}>
                    <h2 className={styles.heading2}>Sources</h2>
                    <ol className={styles.orderedList}>
                        <li id="footnote-1" className={styles.listItem}>
                            <p className={styles.paragraph}>
                                "Software Architecture for UAV Swarms Based on ROS Framework", MDPI.
                                <a href="https://www.mdpi.com/2078-2849/12/3/47" target="_blank" rel="noopener noreferrer" className={styles.link}>
                                    https://www.mdpi.com/2078-2849/12/3/47
                                </a>
                                <a href="#footnote-ref-1" aria-label="Back to content" className={styles.link}> ↩</a>
                            </p>
                        </li>
                        <li id="footnote-2" className={styles.listItem}>
                            <p className={styles.paragraph}>
                                "Robust Compositional Architectures for Autonomous Systems", Carnegie Mellon University.
                                <a href="https://www.cs.cmu.edu/~damon/papers/icaps-2004-clara.pdf" target="_blank" rel="noopener noreferrer" className={styles.link}>
                                    https://www.cs.cmu.edu/~damon/papers/icaps-2004-clara.pdf
                                </a>
                                <a href="#footnote-ref-2" aria-label="Back to content" className={styles.link}> ↩</a>
                            </p>
                        </li>
                        <li id="footnote-3" className={styles.listItem}>
                            <p className={styles.paragraph}>
                                "GLOC3: A General Software Control Architecture for Unmanned Vehicles", ResearchGate.
                                <a href="https://www.researchgate.net/publication/224209594_GLOC3_A_General_Software_Control_Architecture_for_Unmanned_Vehicles" target="_blank" rel="noopener noreferrer" className={styles.link}>
                                    https://www.researchgate.net/publication/224209594_GLOC3_A_General_Software_Control_Architecture_for_Unmanned_Vehicles
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
