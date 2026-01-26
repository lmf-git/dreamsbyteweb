'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useContact } from '../../../contexts/ContactContext';
import { useHeaderAnimation } from '../../../contexts/HeaderAnimationContext';
import CallToAction from '../../../components/layout/CallToAction/CallToAction';
import styles from '../post.module.scss';
import { posts } from '../posts';

export default function AIWontBuildYourBusiness() {
    const { openContact } = useContact();
    const { headerAnimationComplete } = useHeaderAnimation();
    const [contentVisible, setContentVisible] = useState(false);

    const post = posts.find(p => p.slug === 'ai-wont-build-your-business');

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
                    <h1 className={styles.title}>{post?.title || `AI Won't Build Your Business`}</h1>
                    {post?.excerpt && <p className={styles.excerpt}>{post.excerpt}</p>}
                    <div className={styles.meta}>
                        <span className={styles.author}>By Liam Fielding</span>
                        <span className={styles.date}>{post?.date || '2024-02-15'}</span>
                        <span className={styles.readTime}>{post?.readTime || '9 min read'}</span>
                    </div>
                </header>

                <div className={styles.content}>
                    <div className={styles.prose}>
                        <h2 className={styles.heading2}>The New Commodity Trap: From WordPress to AI</h2>
                        <p className={styles.paragraph}>History is repeating itself. In the 2010s, clients asked, "Why pay for custom PHP when a $50 WordPress theme looks fine?" Today, the question has evolved: "Why pay for a senior developer when I can prompt an LLM?"</p>

                        <p className={styles.paragraph}>This is the <Link href="/blog/vendor-lock-in-subscription-costs" className={styles.link}>Commodity Trap</Link>. Technology evolves, but client literacy regarding the "last 20%" of a project—where the real value lies—remains stagnant. AI, like WordPress before it, has made it dangerously easy to create a "finished-looking" product in minutes, fueling a fundamental misunderstanding of what it takes to build professional, secure, and strategic software.</p>

                        <h2 className={styles.heading2}>The "<Link href="/blog/social-proof-shifting-goalposts" className={styles.link}>Dunning-Kruger</Link>" of AI Development</h2>
                        <p className={styles.paragraph}>AI induces a powerful Dunning-Kruger effect. It generates a high-fidelity prototype or a block of code that looks correct, giving the user an inflated sense of their own technical capability.</p>
                        <ul className={styles.list}>
                            <li className={styles.listItem}><strong>The WordPress Era Misconception:</strong> "It’s just dragging and dropping blocks." (Ignoring security, database optimization, and scalability).</li>
                            <li className={styles.listItem}><strong>The AI Era Misconception:</strong> "It’s just asking the AI to write the code." (Ignoring <Link href="/blog/legacy-system-modernisation-guide" className={styles.link}>technical debt</Link>, edge-case logic, and <Link href="/blog/our-approach-to-software" className={styles.link}>architectural integrity</Link>).</li>
                        </ul>
                        <p className={styles.paragraph}>The tool creates an illusion of completeness, making the invisible, high-stakes work of a professional developer seem unnecessary.</p>
                        
                        <h2 className={styles.heading2}>The Visibility Gap: What You See vs. What You Get</h2>
                        <p className={styles.paragraph}>Clients value what they can see. AI excels at the visible parts of a project—UI components, boilerplate text, basic layouts—but is currently incapable of the invisible, high-value work that makes a business successful.</p>

                        <h3 className={styles.heading3}>Strategic Architecture</h3>
                        <p className={styles.paragraph}>An AI doesn't understand your three-year business roadmap. It cannot design a system that scales with your growth, pivots with market changes, or integrates with future tools. It builds for the prompt it was given, not for the business you're trying to build.</p>

                        <h3 className={styles.heading3}>Risk Mitigation and Accountability</h3>
                        <p className={styles.paragraph}>AI cannot take accountability. When a "prompted" application leaks customer data or fails a <Link href="/blog/devops-for-small-business" className={styles.link}>PCI compliance audit</Link>, the "cost savings" from using AI evaporate instantly. A professional developer's value lies not just in writing code, but in taking responsibility for its security and integrity.</p>

                        <h2 className={styles.heading2}>A New Approach: Consultative Implementation</h2>
                        <p className={styles.paragraph}>If you find clients constantly benchmarking your quotes against "what an AI can do," it's time to change your positioning.</p>

                        <h3 className={styles.heading3}>The Audit-First Approach</h3>
                        <p className={styles.paragraph}>Offer a "Code & Architecture Review" for their AI-generated projects. Present a formal report detailing the security holes, performance bottlenecks, technical debt, and scalability issues you find. When the client sees the documented risks, the value of your work becomes self-evident.</p>

                        <h3 className={styles.heading3}>The "Insurance" Narrative</h3>
                        <p className={styles.paragraph}>Frame your fee not as the cost of typing code, but as the cost of guaranteeing that the code works under pressure. You are selling peace of mind. Your expertise is the insurance policy against the inevitable failures of a hastily prompted system. You aren't just a builder; you are a risk manager.</p>
                        
                        <h2 className={styles.heading2}>AI is a Tool, Not a Strategist</h2>
                        <p className={styles.paragraph}>We use AI every day to accelerate routine tasks. It helps us generate boilerplate, write documentation, and catch simple bugs. But these are tools that enhance our developers, not replace them.</p>

                        <p className={styles.paragraph}>An AI is a powerful engine, but it has no driver. It cannot decide where to go, what questions to ask, or what problems to solve. The critical thinking happens before you even talk to the AI. Building great software requires capabilities that AI fundamentally lacks: <Link href="/blog/ethical-business-practices" className={styles.link}>strategic thinking</Link>, user empathy, and creative problem-solving.</p>
                        
                        <h2 className={styles.heading2}>Invest in Expertise, Not Illusions</h2>
                        <p className={styles.paragraph}>Your digital presence is the face of your business. That impression should reflect quality, professionalism, and strategic foresight—not the generic, fragile output of an algorithm. The real cost of a "cheap" AI solution is the time and money spent rebuilding it correctly from scratch.</p>



                        <h2 className={styles.heading2}>The Fundamental Limitations of AI: Beyond the Hype</h2>

                        <h3 className={styles.heading3}>I. The Geometry of Meaning: Why 3D is "Crowded"</h3>
                        <p className={styles.paragraph}>
                            The fundamental reason AI, particularly large language models (LLMs), doesn't use 2D or 3D vectors to represent concepts is a principle known as <strong>Mathematical Crowding</strong> <sup>[1]</sup>. In low-dimensional spaces, distinct ideas would inevitably "bump into" each other, leading to ambiguity and a lack of precise representation. Imagine trying to distinctly plot "Apple" (the fruit), "Apple" (the tech company), and "Apple" (the record label) in a simple 3D graph; their meanings would constantly collide.
                        </p>
                        <p className={styles.paragraph}>
                            Instead, LLMs operate in vastly higher-dimensional spaces, typically ranging from 768 to 4,096 dimensions <sup>[2]</sup>. Each dimension in this hyper-space acts as an independent "trait" or "feature." For instance, one dimension might represent "edibility," another "corporate status," and another "color." Just as hundreds of unique traits allow us to identify individuals, these numerous <strong>Degrees of Freedom</strong> enable AI to capture immense nuance <sup>[3]</sup>. While three traits are insufficient to describe the complexities of the world, thousands of dimensions can uniquely identify billions of nuances, including sarcasm, technical jargon, and subtle cultural contexts simultaneously.
                        </p>
                        <p className={styles.paragraph}>
                            This leads to a phenomenon sometimes called the "<strong>Curse and Blessing of Dimensionality</strong>" <sup>[4]</sup>. In these high-dimensional "hyper-cubes," most points naturally gravitate towards the edges and corners, leaving a massive amount of "empty room" in the center. This is a profound blessing for AI because it provides a near-infinite workspace to store unique ideas without them accidentally overlapping, unless they are genuinely semantically related.
                        </p>
                        <p className={styles.paragraph}>
                            Since humans cannot visualize 768 dimensions, researchers employ techniques like <strong>Dimensionality Reduction</strong> (e.g., t-SNE or UMAP) to "squash" these high-dimensional AI "thoughts" into 2D or 3D "shadows" <sup>[15]</sup>. This allows us to observe and understand clusters of related meanings, providing a visual metaphor for the AI's internal representation of concepts.
                        </p>

                        <h3 className={styles.heading3}>II. The Transformer as a "Coordinate Generator"</h3>
                        <p className={styles.paragraph}>
                            A Transformer model doesn't "read" text in a human sense; instead, it performs high-speed geometry, continuously mapping and re-mapping concepts within its high-dimensional space <sup>[16]</sup>. The process begins with <strong>Input Embedding</strong>, where each word or sub-word (token) is initially converted into a numerical vector—a fixed "dictionary coordinate" in this vast space.
                        </p>
                        <p className={styles.paragraph}>
                            As the AI processes sequences of text, the crucial <strong>Attention Layers</strong> come into play. These layers act like a dynamic steering wheel or a magnet <sup>[17]</sup>, constantly "tugging" a word's vector toward a specific semantic cluster based on its surrounding context. For example, if the word "Apple" appears near "juice," the attention mechanism pulls its coordinate toward the "Fruit" region of the space. Conversely, if it appears with "stock," the same "Apple" vector is steered toward the "Tech Company" region <sup>[5], [6]</sup>. This dynamic contextualization is fundamental to how Transformers disambiguate meaning.
                        </p>
                        <p className={styles.paragraph}>
                            The final step is <strong>Un-Embedding</strong> (often involving a Softmax function) <sup>[18]</sup>. After layers of processing, the Transformer outputs a final coordinate representing the "next thought" or the most probable subsequent word. The model then compares this output coordinate against its entire vocabulary of known words, selecting the word that sits closest to this predicted position in the 768D (or higher) space. This continuous generation and refinement of coordinates is how Transformers build coherent and contextually relevant responses.
                        </p>

                        <h3 className={styles.heading3}>III. Technical Limits & The "Logic Ceiling"</h3>
                        <p className={styles.paragraph}>
                            Your experience of AI failing on a website build, despite its impressive linguistic fluency, is the result of inherent technical walls. Even with seemingly infinite token windows, current AI models suffer from <strong>Attention Dilution</strong> or "Context Rot" <sup>[19]</sup>. Research shows that as you add more tokens to a prompt, the AI's "attention" becomes thin, exhibiting a "U-Shape" curve where it remembers the very beginning and very end of your prompt but "blurs" the crucial middle sections. You might provide 50,000 lines of code, and the AI "forgets" the core logic in the center, leading to incoherent outputs.
                        </p>
                        <p className={styles.paragraph}>
                            Furthermore, the challenge is compounded by <strong>Cascading Probability</strong> <sup>[13]</sup>. If an AI boasts an impressive 95% accuracy per individual step, but a complex project like a website build requires 100 such steps, the probability of a perfect, error-free result drops precipitously to a mere ~0.5% (0.95<sup>100</sup> &asymp; 0.0059). Without constant human guidance to "reset" the error probability and provide corrective feedback, the project inevitably collapses under the weight of compounding inaccuracies.
                        </p>
                        <p className={styles.paragraph}>
                            This highlights a fundamental distinction: AI excels at <strong>Retrieval</strong> (identifying and generating patterns it has encountered in its training data) but struggles with <strong>Long-Horizon Reasoning</strong> <sup>[20]</sup>. It can quickly retrieve and combine code snippets that appear plausible, but it struggles to execute a multi-step plan where step 19 critically depends on a nuanced outcome of step 2. The inability to genuinely simulate and verify causal connections across a complex workflow creates a "logic ceiling" that current architectures cannot inherently overcome.
                        </p>

                        <h3 className={styles.heading3}>IV. The Great Deception: "Thinking" vs. Pattern Matching</h3>
                        <p className={styles.paragraph}>
                            We explored the fundamental gap between the marketing of AI and the reality of the underlying math. The impressive outputs of AI models often lead to a subtle yet profound psychological phenomenon known as the <strong>Eliza Effect</strong> <sup>[7]</sup>. This is where humans unconsciously attribute understanding, intelligence, and even empathy to a machine simply because it communicates using relatable language. When an AI displays a "Thinking..." prompt or generates coherent text, our innate tendency for <strong>Anthropomorphism</strong> kicks in <sup>[8]</sup>; we project a "mind at work," assuming genuine deliberation, when in reality, the machine is executing complex mathematical operations to predict the next most probable token based on patterns learned from vast datasets. The "Thinking..." bubble is a UI choice designed to hide statistical probability calculations.
                        </p>
                        <p className={styles.paragraph}>
                            Current AI, despite its sophistication, operates almost entirely as <strong>System 1</strong> thinking—fast, intuitive, and pattern-matching. It lacks <strong>System 2</strong> capabilities—the deliberate, slow, and logical verification <sup>[9]</sup>. Based on Daniel Kahneman’s framework, current AI is essentially "System 1 on Steroids." Even advanced techniques like "Chain of Thought" (CoT), often marketed as AI "reasoning," are essentially longer, more elaborate System 1 loops. The AI predicts what a human thought process *looks like*, rather than truly performing logical verification. This can lead to "<strong>Unfaithful Reasoning</strong>," where the AI might generate a plausible-sounding explanation *after* arriving at an answer through pattern matching, even if that explanation doesn't reflect its actual computational path <sup>[10]</sup>. This discrepancy creates a significant trust gap, especially when the AI fails at tasks requiring genuine common sense or causal understanding.
                        </p>
                        <p className={styles.paragraph}>
                            Furthermore, AI suffers from a profound <strong>Lack of Grounding</strong> <sup>[11]</sup>. It has no "World Model" <sup>[12]</sup>. It doesn't know what a "button" or a "database" is in reality; it only knows how those words relate to each other in a multi-dimensional map. It has no "physics engine" for logic, meaning it cannot truly simulate the real-world consequences of its code or understand causal relationships.
                        </p>

                        <h3 className={styles.heading3}>V. The Future: Breaking the "Token Tether"</h3>
                        <p className={styles.paragraph}>
                            To move past the current limitations and unlock true AI autonomy, the industry is actively shifting beyond the pure Transformer architecture. This involves several promising directions:
                        </p>
                        <p className={styles.paragraph}>
                            <strong>Latent Reasoning</strong>: Moving away from "thinking in words" (tokens) toward models that loop internally through <strong>Latent Vectors</strong> (pure, high-dimensional concepts) to "settle" on a logical state before generating any external output. This aims to give AI a form of internal "mulling" or deliberation that is not directly tied to sequential token generation <sup>[21]</sup>.
                        </p>
                        <p className={styles.paragraph}>
                            <strong>JEPA & World Models</strong>: New architectures, such as Yann LeCun’s Joint Embedding Predictive Architecture (JEPA), aim to enable AI to learn robust internal "World Models" <sup>[22]</sup>. Instead of merely predicting the "next word," these models are designed to predict "world states" or the outcomes of actions, giving AI a foundational sense of cause-and-effect and how the world functions. This is seen as critical for developing AI with true grounded understanding.
                        </p>
                        <p className={styles.paragraph}>
                            <strong>The Model Collapse Risk</strong>: A significant long-term concern is "model collapse" <sup>[23]</sup>. This occurs when AI models are increasingly trained on data generated by other AI models. This creates a "copy of a copy" effect, where the high-dimensional clusters of meaning start to blur, the diversity of data decreases, and the reasoning capabilities of subsequent generations of AI models can actually degrade rather than improve. Preventing this requires continuous access to diverse, high-quality human-generated data or novel ways for AI to explore and learn from the real world.
                        </p>

                        <div className={styles.footnotes}>
                            <h2>References</h2>
                            <ol>
                                <li>"Anisotropy and the Crowding Problem in Pre-trained Language Models," <a href="https://arxiv.org/abs/2004.09846" target="_blank" rel="noopener noreferrer">arXiv</a>.</li>
                                <li><a href="https://arxiv.org/abs/1706.03762" target="_blank" rel="noopener noreferrer">"Attention Is All You Need," arXiv.</a></li>
                                <li><a href="https://arxiv.org/abs/1908.09886" target="_blank" rel="noopener noreferrer">"A Survey on the Curse of Dimensionality," arXiv.</a></li>
                                <li><a href="https://arxiv.org/abs/1706.03762" target="_blank" rel="noopener noreferrer">"Attention Is All You Need," arXiv.</a></li>
                                <li><a href="https://arxiv.org/abs/2003.11181" target="_blank" rel="noopener noreferrer">"A Survey on Contextual Embeddings," arXiv.</a></li>
                                <li><a href="https://arxiv.org/abs/1706.03762" target="_blank" rel="noopener noreferrer">"Attention Is All You Need," arXiv.</a></li>
                                <li>"The ELIZA Effect: Avoiding emotional attachment to AI coworkers," <a href="https://www.ibm.com/blogs/research/2023/10/26/the-eliza-effect/" target="_blank" rel="noopener noreferrer">IBM</a>.</li>
                                <li>"The ELIZA Effect: Avoiding emotional attachment to AI coworkers," <a href="https://www.ibm.com/blogs/research/2023/10/26/the-eliza-effect/" target="_blank" rel="noopener noreferrer">IBM</a>.</li>
                                <li>"Cognitive Dual-Process Theories Applied to Artificial Intelligence," <a href="https://osstyn.co.uk/articles/cognitive-dual-process-theories-applied-to-artificial-intelligence/" target="_blank" rel="noopener noreferrer">Osstyn</a>.</li>
                                <li><a href="https://arxiv.org/abs/2405.08471" target="_blank" rel="noopener noreferrer">"Dissociation of Faithful and Unfaithful Reasoning in LLMs," arXiv.</a></li>
                                <li><a href="https://arxiv.org/abs/2209.09874" target="_blank" rel="noopener noreferrer">"The AI World Model Problem," arXiv.</a></li>
                                <li><a href="https://arxiv.org/abs/2304.09462" target="_blank" rel="noopener noreferrer">"World Models: A Survey," arXiv.</a></li>
                                <li><a href="https://arxiv.org/abs/2304.09462" target="_blank" rel="noopener noreferrer">"Limits of Large Language Models for Automated Software Engineering," arXiv.</a></li>
                                <li>"Thinking Fast and Slow in Human and Machine Intelligence," <a href="https://dl.acm.org/doi/10.1145/3702580" target="_blank" rel="noopener noreferrer">Communications of the ACM</a>.</li>
                                <li><a href="https://arxiv.org/abs/1802.03426" target="_blank" rel="noopener noreferrer">"UMAP: Uniform Manifold Approximation and Projection for Dimension Reduction," arXiv.</a></li>
                                <li><a href="https://arxiv.org/abs/2006.16236" target="_blank" rel="noopener noreferrer">"A Survey on Transformers in Deep Learning," arXiv.</a></li>
                                <li><a href="https://arxiv.org/abs/1706.03762" target="_blank" rel="noopener noreferrer">"Attention Is All You Need," arXiv.</a></li>
                                <li><a href="https://arxiv.org/abs/2307.03172" target="_blank" rel="noopener noreferrer">"Lost in the Middle: How Language Models Use Long Contexts," arXiv.</a></li>
                                <li><a href="https://arxiv.org/abs/2305.11718" target="_blank" rel="noopener noreferrer">"Can We Rely on LLM Agents to Draft Long-Horizon Plans? Let's Take TravelPlanner as an Example," arXiv.</a></li>
                                <li>"A Survey on Latent Reasoning," <a href="https://arxiv.org/abs/2507.08585" target="_blank" rel="noopener noreferrer">arXiv</a>.</li>
                                <li><a href="https://arxiv.org/abs/2210.03852" target="_blank" rel="noopener noreferrer">"A Path Towards Autonomous Machine Intelligence," arXiv.</a></li>
                                <li><a href="https://arxiv.org/abs/2305.17493" target="_blank" rel="noopener noreferrer">"The Curse of Recursion: Training on Generated Data Makes Models Forget," arXiv.</a></li>
                            </ol>
                        </div>
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