'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useContact } from '../../../contexts/ContactContext';
import { useHeaderAnimation } from '../../../contexts/HeaderAnimationContext';
import { useLanguage } from '../../../contexts/LanguageContext';
import CallToAction from '../../../components/layout/CallToAction/CallToAction';
import styles from '../post.module.scss';
import { posts } from '../posts';

export default function PerformanceFirstWebsite() {
    const { openContact } = useContact();
    const { headerAnimationComplete } = useHeaderAnimation();
    const { language, t } = useLanguage();
    const [contentVisible, setContentVisible] = useState(false);

    // Find the current post's metadata from the translation system
    const slug = 'performance-first-website-lighthouse';
    const postData = posts.find(p => p.slug === slug);
    const postMetadata = t.blog.posts[slug];

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

    const ContentEN = () => (
        <>
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
                <li className={styles.listItem}><strong>Responsive Sizing:</strong> We generate multiple sizes of each image and use the <code>&lt;picture&gt;</code> element or <code>srcset</code> attribute to ensure that a mobile device downloads a small, mobile-sized image, not a huge desktop-sized one.</li>
                <li className={styles.listItem}><strong>Lazy Loading:</strong> Images that are below the fold (not visible on the screen) are not loaded until the user scrolls down to them. This dramatically speeds up the initial page load.</li>
            </ul>

            <h3 className={styles.heading3}>3. A "Less is More" Approach to JavaScript</h3>
            <p className={styles.paragraph}>JavaScript is powerful, but it's also "expensive" in performance terms. Every script has to be downloaded, parsed, and executed by the browser. We are ruthless about minimizing our use of third-party scripts and libraries. Every package we add is scrutinized for its performance impact. This "JavaScript budget" is a core part of our development philosophy.</p>

            <h3 className={styles.heading3}>4. Smart Caching and Server-Side Rendering</h3>
            <p className={styles.paragraph}>With server-side rendering (SSR), the server sends a fully-rendered HTML page to the browser. This means the user sees content almost instantly, resulting in a very low First Contentful Paint (FCP). We then use smart caching strategies to serve these pre-rendered pages from a CDN (Content Delivery Network), making subsequent loads almost instantaneous.</p>

            <h3 className={styles.heading3}>5. Efficient Code and Database Queries</h3>
            <p className={styles.paragraph}>This is where craftsmanship comes in. We write clean, efficient code that avoids unnecessary re-renders. When we fetch data from a database, we write lean, optimized queries that only retrieve the exact data needed, and nothing more. We avoid the "N+1" query problem that plagues many applications and slows them to a crawl.</p>
            
            <h2 className={styles.heading2}>Why Most Websites are Slow</h2>
            <p className={styles.paragraph}>Most websites today are built using generic builders (like Wix, Squarespace, or standard WordPress themes) or by developers who don't prioritize performance. These tools often prioritize ease of use for the developer over speed for the user. They come with massive amounts of unused code, unoptimized images, and inefficient data handling, leading to poor Lighthouse scores and frustrated users.</p>

            <h2 className={styles.heading2}>Performance is a Business Strategy</h2>
            <p className={styles.paragraph}>In 2026, a fast website is not a luxury; it's a necessity. It's better for SEO (Google favors fast sites), better for user experience, and directly tied to your bottom line. By prioritizing performance from day one, we help you build a digital presence that is not only beautiful but also exceptionally powerful.<sup><a href="#footnote-3" id="footnote-ref-3" className={styles.link}>3</a></sup></p>
        </>
    );

    const ContentES = () => (
        <>
            <h2 className={styles.heading2}>¿Qué es Google Lighthouse?</h2>
            <p className={styles.paragraph}>Google Lighthouse es una herramienta automatizada de código abierto para mejorar la calidad de las páginas web.<sup><a href="#footnote-2" id="footnote-ref-2" className={styles.link}>2</a></sup> Realiza una serie de auditorías y genera un informe sobre el rendimiento. El puntaje de "Performance" es un promedio ponderado de varias métricas clave, incluyendo:</p>
            <ul className={styles.list}>
                <li className={styles.listItem}><strong>First Contentful Paint (FCP):</strong> Cuánto tarda en aparecer el primer trozo de contenido en la pantalla.</li>
                <li className={styles.listItem}><strong>Speed Index:</strong> Qué tan rápido se completa visualmente el contenido de la página.</li>
                <li className={styles.listItem}><strong>Largest Contentful Paint (LCP):</strong> El tiempo que tarda en hacerse visible la imagen o bloque de texto más grande. Es clave para la percepción de velocidad.</li>
                <li className={styles.listItem}><strong>Time to Interactive (TTI):</strong> Cuánto tarda la página en ser totalmente interactiva.</li>
                <li className={styles.listItem}><strong>Total Blocking Time (TBT):</strong> El tiempo total que la página estuvo bloqueada sin responder a la interacción del usuario.</li>
            </ul>
            <p className={styles.paragraph}>Un puntaje de 90 o más pone al sitio en la zona "verde", indicando una experiencia de usuario rápida y de alta calidad que las propias herramientas de Google reconocen como excelente.</p>
            
            <h2 className={styles.heading2}>Cómo garantizamos un puntaje de 90+</h2>
            <p className={styles.paragraph}>Lograr un alto rendimiento no se trata de un solo truco secreto. Es un enfoque disciplinado y multifacético durante todo el desarrollo.</p>

            <h3 className={styles.heading3}>1. Un Framework moderno y optimizado</h3>
            <p className={styles.paragraph}>Construimos nuestras aplicaciones con Next.js, un framework de React diseñado para el rendimiento. Proporciona optimizaciones potentes de fábrica como code-splitting (solo carga el JavaScript necesario para la página actual), renderizado del lado del servidor (SSR) y generación de sitios estáticos (SSG).</p>

            <h3 className={styles.heading3}>2. Optimización agresiva de imágenes</h3>
            <p className={styles.paragraph}>Las imágenes suelen ser el mayor cuello de botella. Tenemos un proceso de varios pasos para asegurar que sean lo más livianas posible:</p>
            <ul className={styles.list}>
                <li className={styles.listItem}><strong>Formatos de nueva generación:</strong> Servimos todas las imágenes en formatos modernos como WebP.</li>
                <li className={styles.listItem}><strong>Tamaños responsivos:</strong> Generamos múltiples tamaños de cada imagen para que un celular no baje una imagen gigante pensada para computadoras de escritorio.</li>
                <li className={styles.listItem}><strong>Lazy Loading:</strong> Las imágenes que no están visibles inicialmente no se cargan hasta que el usuario hace scroll hacia ellas.</li>
            </ul>

            <h3 className={styles.heading3}>3. Enfoque "Menos es más" con JavaScript</h3>
            <p className={styles.paragraph}>JavaScript es potente, pero "caro" para el rendimiento. Cada script tiene que ser bajado y procesado por el navegador. Somos implacables minimizando el uso de scripts de terceros. Cada paquete que sumamos es analizado por su impacto. Este "presupuesto de JavaScript" es central en nuestra filosofía.</p>

            <h3 className={styles.heading3}>4. Caché inteligente y SSR</h3>
            <p className={styles.paragraph}>Con el renderizado del lado del servidor (SSR), el servidor manda la página HTML ya armada. El usuario ve el contenido casi al instante (FCP bajo). Usamos estrategias de caché para servir estas páginas desde una CDN, haciendo que las cargas siguientes sean instantáneas.</p>

            <h3 className={styles.heading3}>5. Código y consultas a base de datos eficientes</h3>
            <p className={styles.paragraph}>Acá entra el oficio. Escribimos código limpio que evita re-renders innecesarios. Cuando traemos datos de la base, hacemos consultas optimizadas que solo buscan lo justo y necesario, evitando problemas de lentitud que plagan a muchas aplicaciones.</p>
            
            <h2 className={styles.heading2}>Por qué la mayoría de los sitios son lentos</h2>
            <p className={styles.paragraph}>Muchos sitios hoy se hacen con constructores genéricos (como Wix o Squarespace) o temas de WordPress estándar. Estas herramientas priorizan la facilidad para el desarrollador sobre la velocidad para el usuario. Vienen con muchísimo código que no se usa, imágenes pesadas y un manejo de datos ineficiente, lo que resulta en puntajes bajos y usuarios frustrados.</p>

            <h2 className={styles.heading2}>El rendimiento es una estrategia de negocio</h2>
            <p className={styles.paragraph}>En 2026, un sitio rápido no es un lujo; es una necesidad. Es mejor para el SEO (Google prefiere sitios rápidos), mejor para la experiencia de usuario y afecta directamente a tus ganancias. Al priorizar la performance, te ayudamos a construir una presencia digital que no solo es linda, sino excepcionalmente potente.<sup><a href="#footnote-3" id="footnote-ref-3" className={styles.link}>3</a></sup></p>
        </>
    );

    return (
        <article
            className={`${styles.post} ${contentVisible ? styles.visible : ''}`}
            style={{ opacity: contentVisible ? 1 : 0 }}
        >
            <div className={styles.container}>
                <header className={styles.header}>
                    <h1 className={styles.title}>{postMetadata?.title}</h1>
                    {postMetadata?.excerpt && <p className={styles.excerpt}>{postMetadata.excerpt}</p>}
                    <div className={styles.meta}>
                        <span className={styles.author}>{language === 'es' ? 'Por Liam Fielding' : 'By Liam Fielding'}</span>
                        <span className={styles.date}>{postData?.date}</span>
                        <span className={styles.readTime}>{postMetadata?.readTime}</span>
                    </div>
                </header>

                <div className={styles.content}>
                    <div className={styles.prose}>
                        {language === 'es' ? <ContentES /> : <ContentEN />}
                    </div>
                </div>

                <div className={styles.footnotes}>
                    <h2 className={styles.heading2}>{language === 'es' ? 'Fuentes' : 'Sources'}</h2>
                    <ol className={styles.orderedList}>
                        <li id="footnote-1" className={styles.listItem}>
                            <p className={styles.paragraph}>
                                "The cost of a 1-second delay in page load time," <a href="https://www.cloudflare.com/learning/performance/why-site-speed-matters/" target="_blank" rel="noopener noreferrer" className={styles.link}>Cloudflare</a>.
                                <a href="#footnote-ref-1" aria-label="Back to content" className={styles.link}> ↩</a>
                            </p>
                        </li>
                        <li id="footnote-2" className={styles.listItem}>
                            <p className={styles.paragraph}>
                                "Google Lighthouse Documentation," <a href="https://developer.google.com/speed/docs/insights/v5/about" target="_blank" rel="noopener noreferrer" className={styles.link}>Google</a>.
                                <a href="#footnote-ref-2" aria-label="Back to content" className={styles.link}> ↩</a>
                            </p>
                        </li>
                        <li id="footnote-3" className={styles.listItem}>
                            <p className={styles.paragraph}>
                                "Speed is a Killer Feature," <a href="https://web.dev/why-speed-matters/" target="_blank" rel="noopener noreferrer" className={styles.link}>web.dev</a>.
                                <a href="#footnote-ref-3" aria-label="Back to content" className={styles.link}> ↩</a>
                            </p>
                        </li>
                    </ol>
                </div>

                <CallToAction />

                <footer className={styles.footer}>
                    <div className={styles.navigation}>
                        <Link href="/blog" className={styles.backLink}>
                            {language === 'es' ? '← Volver al Blog' : '← Back to Blog'}
                        </Link>
                    </div>
                </footer>
            </div>
        </article>
    );
}
