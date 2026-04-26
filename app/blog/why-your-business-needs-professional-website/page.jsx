'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useContact } from '../../../contexts/ContactContext';
import { useHeaderAnimation } from '../../../contexts/HeaderAnimationContext';
import { useLanguage } from '../../../contexts/LanguageContext';
import CallToAction from '../../../components/layout/CallToAction/CallToAction';
import styles from '../post.module.scss';
import { posts } from '../posts';

export default function WhyYourBusinessNeedsWebsite() {
    const { openContact } = useContact();
    const { headerAnimationComplete } = useHeaderAnimation();
    const { language, t } = useLanguage();
    const [contentVisible, setContentVisible] = useState(false);

    const slug = 'why-your-business-needs-professional-website';
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
            <h2 className={styles.heading2}>The Digital Landscape in 2024</h2>
            <h2 className={styles.heading2}>Key Benefits of a Professional Website</h2>
            <ul className={styles.list}>
                <li className={styles.listItem}><strong>24/7 Accessibility:</strong> With 81% of consumers researching products online before buying, your website acts as your always-on storefront.<sup><a href="#footnote-2" id="footnote-ref-2" className={styles.link}>2</a></sup></li>
                <li className={styles.listItem}><strong>Increased Credibility and Trust:</strong> A well-designed, professional site builds immediate trust with potential customers.</li>
                <li className={styles.listItem}><strong>Cost-Effective Marketing:</strong> Content marketing can generate three times more leads while costing 62% less than traditional advertising, with your website as the central hub.<sup><a href="#footnote-3" id="footnote-ref-3" className={styles.link}>3</a></sup></li>
                <li className={styles.listItem}><strong>Better Customer Service and Support:</strong> Offer FAQs, support articles, and easy contact options to improve customer satisfaction.</li>
                <li className={styles.listItem}><strong>Competitive Advantage:</strong> A superior online experience can set you apart from competitors in a crowded market.</li>
                <li className={styles.listItem}><strong>Data Insights:</strong> Analytics from your website provide invaluable data about customer behavior and preferences.</li>
            </ul>

            <h2 className={styles.heading2}>How DreamsByte Helps Your Business Grow</h2>
            <p className={styles.paragraph}>We don't just build websites—<Link href="/blog/understanding-website-development" className={styles.link}>we create digital solutions that drive results</Link>. Our approach focuses on understanding your business goals and creating a website that actively contributes to your success.</p>

            <h3 className={styles.heading3}>Strategic Planning</h3>
            <p className={styles.paragraph}>Every website we build starts with a deep understanding of your business, target audience, and growth objectives.</p>

            <h3 className={styles.heading3}>Modern Technology</h3>
            <p className={styles.paragraph}>We use cutting-edge technologies to ensure your website is fast, secure, and scalable as your business grows.</p>

            <h3 className={styles.heading3}>Ongoing Support</h3>
            <p className={styles.paragraph}>Launch is just the beginning. We provide ongoing support to help your website continue driving results for your business.</p>

            <h2 className={styles.heading2}>Ready to Get Started?</h2>
            <p className={styles.paragraph}>Don't let your competitors get ahead. A professional website is an investment in your business's future success and growth.</p>
        </>
    );

    const ContentES = () => (
        <>
            <h2 className={styles.heading2}>El panorama digital en 2024</h2>
            <h2 className={styles.heading2}>Beneficios clave de un sitio web profesional</h2>
            <ul className={styles.list}>
                <li className={styles.listItem}><strong>Accesibilidad 24/7:</strong> Con el 81% de los consumidores investigando productos online antes de comprar, tu sitio web actúa como tu vidriera siempre abierta.<sup><a href="#footnote-2" id="footnote-ref-2" className={styles.link}>2</a></sup></li>
                <li className={styles.listItem}><strong>Mayor credibilidad y confianza:</strong> Un sitio profesional y bien diseñado genera confianza inmediata en los clientes potenciales.</li>
                <li className={styles.listItem}><strong>Marketing rentable:</strong> El marketing de contenidos puede generar tres veces más leads costando un 62% menos que la publicidad tradicional, con tu sitio web como eje central.<sup><a href="#footnote-3" id="footnote-ref-3" className={styles.link}>3</a></sup></li>
                <li className={styles.listItem}><strong>Mejor servicio y soporte al cliente:</strong> Ofrecé preguntas frecuentes, artículos de soporte y opciones de contacto fáciles para mejorar la satisfacción del cliente.</li>
                <li className={styles.listItem}><strong>Ventaja competitiva:</strong> Una experiencia online superior puede diferenciarte de tus competidores en un mercado saturado.</li>
                <li className={styles.listItem}><strong>Información basada en datos:</strong> Las métricas de tu sitio web proporcionan datos invaluables sobre el comportamiento y las preferencias de tus clientes.</li>
            </ul>

            <h2 className={styles.heading2}>Cómo DreamsByte ayuda a tu negocio a crecer</h2>
            <p className={styles.paragraph}>No solo construimos sitios web, <Link href="/blog/understanding-website-development" className={styles.link}>creamos soluciones digitales que impulsan resultados</Link>. Nuestro enfoque se centra en entender tus objetivos comerciales y crear un sitio web que contribuya activamente a tu éxito.</p>

            <h3 className={styles.heading3}>Planificación estratégica</h3>
            <p className={styles.paragraph}>Cada sitio web que construimos comienza con una comprensión profunda de tu negocio, tu público objetivo y tus objetivos de crecimiento.</p>

            <h3 className={styles.heading3}>Tecnología moderna</h3>
            <p className={styles.paragraph}>Utilizamos tecnologías de vanguardia para asegurar que tu sitio web sea rápido, seguro y escalable a medida que tu negocio crece.</p>

            <h3 className={styles.heading3}>Soporte continuo</h3>
            <p className={styles.paragraph}>El lanzamiento es solo el comienzo. Brindamos soporte continuo para ayudar a que tu sitio web siga impulsando resultados para tu negocio.</p>

            <h2 className={styles.heading2}>¿Listo para transformar tu negocio online?</h2>
            <p className={styles.paragraph}>No dejes que tus competidores te saquen ventaja. Un sitio web profesional es una inversión en el éxito y el crecimiento futuro de tu negocio.</p>
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
                                "How Website Design Influences 75% of Your Business Credibility," <a href="https://tenacity.io/blog/how-website-design-influences-75-of-your-business-credibility/" target="_blank" rel="noopener noreferrer" className={styles.link}>Tenacity</a>.
                                <a href="#footnote-ref-1" aria-label="Back to content" className={styles.link}> ↩</a>
                            </p>
                        </li>
                        <li id="footnote-2" className={styles.listItem}>
                            <p className={styles.paragraph}>
                                "Consumer Behaviour in Online Shopping: A Comprehensive Study," <a href="https://www.hmjournals.com/journal/ijaem/article/view/174" target="_blank" rel="noopener noreferrer" className={styles.link}>HM Journals</a>.
                                <a href="#footnote-ref-2" aria-label="Back to content" className={styles.link}> ↩</a>
                            </p>
                        </li>
                        <li id="footnote-3" className={styles.listItem}>
                            <p className={styles.paragraph}>
                                "Content Marketing vs. Traditional Advertising: What's the Difference?", <a href="https://copypress.com/blog/content-marketing-vs-traditional-advertising-whats-the-difference/" target="_blank" rel="noopener noreferrer" className={styles.link}>Copypress</a>.
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
