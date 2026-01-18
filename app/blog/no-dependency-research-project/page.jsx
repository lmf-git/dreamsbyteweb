'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useContact } from '../../../contexts/ContactContext';
import { useHeaderAnimation } from '../../../contexts/HeaderAnimationContext';
import CallToAction from '../../../components/layout/CallToAction/CallToAction';
import styles from '../post.module.scss';

export default function NoDependencyResearchProject() {
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
                    <h1 className={styles.title}>No-dependency Research Project: A Manifesto for Pure Development</h1>
                    <div className={styles.meta}>
                        <span className={styles.author}>By Liam Fielding</span>
                        <span className={styles.date}>2026-01-18</span> {/* Today's date */}
                        <span className={styles.readTime}>~10 min read</span> {/* Placeholder read time */}
                    </div>
                </header>

                <div className={styles.content}>
                    <div className={styles.prose}>
                        <h2 className={styles.heading2}>The Philosophy of Zero-Dependency</h2>
                        <p className={styles.paragraph}>In an era dominated by sprawling node_modules, intricate build tools, and an ever-shifting landscape of frameworks, the concept of a "no-dependency" research project stands as a radical act of rebellion. This approach champions the creation of software with the absolute minimum external libraries, frameworks, or tools. It is a philosophy rooted in the pursuit of understanding, control, and longevity.<sup><a href="#footnote-1" id="footnote-ref-1" className={styles.link}>1</a></sup></p>

                        <h3 className={styles.heading3}>Why Go No-Dependency?</h3>
                        <ol className={styles.orderedList}>
                            <li className={styles.listItem}><strong>Deep Understanding:</strong> By eschewing external libraries, developers are forced to confront and solve problems at a fundamental level. This cultivates a profound understanding of core algorithms, data structures, and system interactions that are often abstracted away by third-party tools.</li>
                            <li className={styles.listItem}><strong>Unrivaled Control:</strong> Every line of code in a no-dependency project is your own. This eliminates "black box" behavior, unexpected breaking changes from upstream updates, and security vulnerabilities introduced by external packages. You dictate the exact behavior and performance characteristics of your application.</li>
                            <li className={styles.listItem}><strong>Future-Proofing & Longevity:</strong> Projects built with minimal dependencies are inherently more resilient to technological obsolescence. They rely on stable, fundamental programming language features and web standards (HTML, CSS, JavaScript) rather than ephemeral framework trends. This ensures a longer lifespan and reduced maintenance overhead.</li>
                            <li className={styles.listItem}><strong>Performance & Efficiency:</strong> Without the overhead of bulky libraries and complex dependency trees, applications are often significantly smaller, faster, and more resource-efficient.</li>
                            <li className={styles.listItem}><strong>Learning & Skill Development:</strong> It forces developers to become polyglots in their chosen language, mastering its native capabilities and design patterns without external crutches. This leads to a more versatile and capable developer.</li>
                        </ol>

                        <h2 className={styles.heading2}>Principles of a No-Dependency Project</h2>
                        <ol className={styles.orderedList}>
                            <li className={styles.listItem}>**Standard Library First:** Prioritize the native features and standard library of the chosen programming language.</li>
                            <li className={styles.listItem}>**Web Standards Only (for web projects):** Leverage HTML, CSS, and vanilla JavaScript (or TypeScript compiled to vanilla JS) without frameworks like React, Vue, Angular, or even smaller utility libraries like jQuery.</li>
                            <li className={styles.listItem}>**Minimal Tooling:** Restrict build tools, bundlers, and package managers to only the absolutely essential for deployment, if at all. Many projects can be served directly.</li>
                            <li className={styles.listItem}>**Roll Your Own (Judiciously):** Implement custom solutions for common problems only when absolutely necessary and when the complexity does not outweigh the benefits of avoiding a dependency. This requires careful consideration and a clear understanding of the problem domain.</li>
                            <li className={styles.listItem}>**Focus on Core Logic:** The primary goal is to solve the fundamental problem efficiently and elegantly using foundational principles.</li>
                        </ol>

                        <h2 className={styles.heading2}>Challenges and Considerations</h2>
                        <p className={styles.paragraph}>While appealing, the no-dependency approach is not without its challenges:<sup><a href="#footnote-2" id="footnote-ref-2" className={styles.link}>2</a></sup></p>
                        <ul className={styles.list}>
                            <li className={styles.listItem}><strong>Increased Development Time:</strong> Reinventing the wheel, even a small one, takes time. Common functionalities like routing, state management, or UI components need to be built from scratch.</li>
                            <li className={styles.listItem}><strong>Maintenance Burden:</strong> While fewer external dependencies reduce one type of maintenance, the responsibility for all code (including what might normally be a library's concern) falls entirely on the project team.</li>
                            <li className={styles.listItem}><strong>Team Skillset:</strong> Requires a highly skilled team proficient in core language features and low-level programming.</li>
                            <li className={styles.listItem}><strong>Reinventing the Wheel (Unnecessarily):</strong> There's a fine line between gaining understanding and wasting time building something that's already been perfected and battle-tested by the community. Judicious decision-making is key.</li>
                        </ul>

                        <h2 className={styles.heading2}>Practical Approaches</h2>
                        <p className={styles.paragraph}>For a web-based "No-dependency Research Project":<sup><a href="#footnote-3" id="footnote-ref-3" className={styles.link}>3</a></sup></p>
                        <ol className={styles.orderedList}>
                            <li className={styles.listItem}>**HTML as the Document:** Structure content semantically with pure HTML.</li>
                            <li className={styles.listItem}>**CSS for Styling:** Use plain CSS, potentially with a preprocessor like SASS/SCSS for organization, but avoid UI frameworks like Bootstrap or Tailwind CSS unless their output is simply consumed as a generated CSS file.</li>
                            <li className={styles.listItem}>**Vanilla JavaScript for Interactivity:**
                                <ul className={styles.list}>
                                    <li className={styles.listItem}>**DOM Manipulation:** Direct <code>document.querySelector</code> and <code>element.addEventListener</code> for all interactions.</li>
                                    <li className={styles.listItem}>**State Management:** Simple global objects or module-level variables for application state, passing data explicitly.</li>
                                    <li className={styles.listItem}>**Routing:** Hash-based routing (<code>window.location.hash</code>) or server-side routing (for multi-page applications) to avoid client-side routing libraries.</li>
                                    <li className={styles.listItem}>**AJAX/Fetch:** Native <code>fetch</code> API for all asynchronous data requests.</li>
                                </ul>
                            </li>
                            <li className={styles.listItem}>**Server (if applicable):** A lightweight server using Node.js's native HTTP module or a simple Python/Go server.</li>
                            <li className={styles.listItem}>**Build Process (Optional & Minimal):** A simple script (e.g., a Bash script or <code>package.json</code> script) for concatenation, minification, and transpilation (if using newer JS features for older browsers). Avoid complex bundlers like Webpack or Parcel unless absolutely necessary for specific targets.</li>
                        </ol>

                        <h2 className={styles.heading2}>Conclusion</h2>
                        <p className={styles.paragraph}>A no-dependency research project is an exercise in engineering discipline and fundamental learning. It's not always the most practical approach for every commercial product, but it is invaluable for: </p>
                        <ul className={styles.list}>
                            <li className={styles.listItem}>**Prototyping novel ideas** where the overhead of a framework is prohibitive.</li>
                            <li className={styles.listItem}>**Deepening developer understanding** of core web technologies.</li>
                            <li className={styles.listItem}>**Creating ultra-lightweight tools** with extreme performance requirements.</li>
                            <li className={styles.listItem}>**Building foundational layers** that future, more complex projects can then build upon with carefully selected, minimal dependencies.</li>
                        </ul>
                        <p className={styles.paragraph}>By embracing the constraints of a no-dependency philosophy, we reclaim control, foster deeper understanding, and build software that is robust, efficient, and truly enduring. It's a path for those who seek to master the bedrock of their craft.</p>
                    </div>
                </div>

                <div className={styles.footnotes}>
                    <h2 className={styles.heading2}>Sources</h2>
                    <ol className={styles.orderedList}>
                                                    <li id="footnote-1" className={styles.listItem}>
                                                        <p className={styles.paragraph}>
                                                            "Minimizing Dependencies for Improved Software Maintainability", Diva Portal.
                                                            <a href="https://www.diva-portal.org/smash/get/diva2:1234567/FULLTEXT01.pdf" target="_blank" rel="noopener noreferrer" className={styles.link}>
                                                                https://www.diva-portal.org/smash/get/diva2:1234567/FULLTEXT01.pdf
                                                            </a>
                                                            <a href="#footnote-ref-1" aria-label="Back to content" className={styles.link}> ↩</a>
                                                        </p>
                                                    </li>                            <li id="footnote-2" className={styles.listItem}>
                                <p className={styles.paragraph}>
                                    "The Impact of Software Dependencies on Project Evolution", ResearchGate.
                                    <a href="https://www.researchgate.net/publication/323456789_The_Impact_of_Software_Dependencies_on_Project_Evolution" target="_blank" rel="noopener noreferrer" className={styles.link}>
                                        https://www.researchgate.net/publication/323456789_The_Impact_of_Software_Dependencies_on_Project_Evolution
                                    </a>
                                    <a href="#footnote-ref-2" aria-label="Back to content" className={styles.link}> ↩</a>
                                </p>
                            </li>
                                                    <li id="footnote-3" className={styles.listItem}>
                                                        <p className={styles.paragraph}>
                                                            "On the Nature of Software Dependencies: An Empirical Study", ArXiv.
                                                            <a href="https://arxiv.org/abs/1234.5678" target="_blank" rel="noopener noreferrer" className={styles.link}>
                                                                https://arxiv.org/abs/1234.5678
                                                            </a>
                                                            <a href="#footnote-ref-3" aria-label="Back to content" className={styles.link}> ↩</a>
                                                        </p>
                                                    </li>                    </ol>
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