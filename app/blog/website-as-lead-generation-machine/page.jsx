'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useContact } from '../../../contexts/ContactContext';
import { useHeaderAnimation } from '../../../contexts/HeaderAnimationContext';
import { useLanguage } from '../../../contexts/LanguageContext';
import CallToAction from '../../../components/layout/CallToAction/CallToAction';
import styles from '../post.module.scss';
import { posts } from '../posts';

export default function WebsiteAsLeadGenerationMachine() {
    const { openContact } = useContact();
    const { headerAnimationComplete } = useHeaderAnimation();
    const { language, t } = useLanguage();
    const [contentVisible, setContentVisible] = useState(false);

    // Find the current post's metadata from the translation system
    const slug = 'website-as-lead-generation-machine';
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
            <h2 className={styles.heading2}>Beyond the Digital Brochure</h2>
            <p className={styles.paragraph}>Many businesses view their website as a digital brochure—a static place to list services and contact information. In 2026, this approach is a missed opportunity. A truly effective website is a <strong>lead generation machine</strong>, an engineered system designed to attract, engage, and convert visitors into high-quality leads.<sup><a href="#footnote-1" id="footnote-ref-1" className={styles.link}>1</a></sup></p>

            <h2 className={styles.heading2}>The Anatomy of a Conversion Funnel</h2>
            <p className={styles.paragraph}>A lead generation website is built around a clear conversion funnel. This is the journey a user takes from their first interaction with your brand to the final desired action (e.g., filling out a contact form, requesting a quote, or making a purchase).<sup><a href="#footnote-2" id="footnote-ref-2" className={styles.link}>2</a></sup></p>
            <ul className={styles.list}>
                <li className={styles.listItem}><strong>Awareness:</strong> The prospect discovers your business (e.g., through <Link href="/blog/seo-snake-oil-empty-promises" className={styles.link}>search</Link>, social media, ads).</li>
                <li className={styles.listItem}><strong>Interest:</strong> They explore your website, learning more about your offerings.</li>
                <li className={styles.listItem}><strong>Consideration:</strong> They evaluate your solution against alternatives, often seeking more detailed information.</li>
                <li className={styles.listItem}><strong>Intent:</strong> They show clear signs of wanting to engage (e.g., download a guide, start a free trial).</li>
                <li className={styles.listItem}><strong>Conversion:</strong> They take the desired action (e.g., make a purchase, contact sales).</li>
            </ul>
            <p className={styles.paragraph}>Each stage requires specific website elements and content designed to move the user forward.</p>

            <h2 className={styles.heading2}>Engineering Your Website for Maximum Lead Generation</h2>
            <h3 className={styles.heading3}>1. The Captivating Entry Point: Homepage & Landing Pages</h3>
            <p className={styles.paragraph}>Your homepage needs to immediately communicate your value proposition and guide visitors to relevant sections. Dedicated landing pages, stripped of distractions, are crucial for specific campaigns. Both must have:</p>
            <ul className={styles.list}>
                <li className={styles.listItem}><strong>Clear Value Proposition:</strong> What problem do you solve?</li>
                <li className={styles.listItem}><strong>Compelling Headline:</strong> Grab attention instantly.</li>
                <li className={styles.listItem}><strong>Strong Call-to-Action (CTA):</strong> Tell users exactly what to do next.</li>
                <li className={styles.listItem}><Link href="/blog/from-problem-to-profit-case-studies" className={styles.link}><strong>Social Proof:</strong> Testimonials, client logos, case studies build trust.</Link></li>
            </ul>

            <h3 className={styles.heading3}>2. Content that Converts: Solving Problems and Building Authority</h3>
            <p className={styles.paragraph}>Content is the fuel for your funnel. High-quality blog posts (like these!), whitepapers, guides, and videos address user questions, solve their problems, and establish your authority. Content should be easily shareable and optimized for search engines to attract organic traffic.</p>
            <ul className={styles.list}>
                <li className={styles.listItem}><strong>Blog Articles:</strong> Answer common questions, demonstrate expertise.</li>
                <li className={styles.listItem}><strong>Lead Magnets:</strong> Offer valuable content (e.g., e-books, checklists) in exchange for contact information.</li>
                <li className={styles.listItem}><strong>Case Studies:</strong> Show, don't just tell, how you've helped others achieve success.</li>
            </ul>

            <h3 className={styles.heading3}>3. Frictionless Forms and Inquiry Tools</h3>
            <p className={styles.paragraph}>Once a user is ready to engage, the process must be as smooth as possible. Long, confusing forms kill conversion rates.<sup><a href="#footnote-3" id="footnote-ref-3" className={styles.link}>3</a></sup> We design:</p>
            <ul className={styles.list}>
                <li className={styles.listItem}><strong>Optimized Forms:</strong> Only ask for essential information. Use clear labels, validation, and progress indicators.</li>
                <li className={styles.listItem}><strong>Clear CTAs:</strong> Buttons that say "Submit" are far less effective than "Get Your Free Quote" or "Schedule a Demo."</li>
                <li className={styles.listItem}><strong>Live Chat & Chatbots:</strong> Provide immediate answers and capture contact information for follow-up.</li>
                <li className={styles.listItem}><strong>Direct Contact Options:</strong> Prominently display phone numbers and email addresses.</li>
            </ul>

            <h3 className={styles.heading3}>4. Analytics and A/B Testing: Continuous Optimization</h3>
            <p className={styles.paragraph}>Building a lead generation machine isn't a one-time task; it's an ongoing process of refinement. We integrate robust analytics to track user behavior, identify bottlenecks in the funnel, and conduct A/B tests to continuously improve performance. What headline performs best? Which CTA color gets more clicks? Data-driven decisions are key to maximizing your conversion rates.</p>

            <h2 className={styles.heading2}>The DreamsByte Difference: Integrating Marketing & Engineering</h2>
            <p className={styles.paragraph}>Many web developers focus only on the code. Many marketers focus only on the message. At DreamsByte, we bridge this gap. We combine deep understanding of conversion psychology and lead generation strategies with cutting-edge engineering practices to build websites that are not only technically excellent but also highly effective at driving business results.</p>
            <p className={styles.paragraph}>From strategic information architecture and compelling copy to lightning-fast load times and seamless integrations, every element of your website is crafted with your conversion goals in mind.</p>

            <h2 className={styles.heading2}>Turn Your Website into Your Best Salesperson</h2>
            <p className={styles.paragraph}>Stop thinking of your website as an expense and start seeing it as an investment—a powerful, always-on sales and marketing asset. By engineering a clear and efficient conversion funnel, you can consistently generate high-quality leads and drive sustainable growth for your business.</p>
        </>
    );

    const ContentES = () => (
        <>
            <h2 className={styles.heading2}>Más allá del folleto digital</h2>
            <p className={styles.paragraph}>Muchos negocios ven a su sitio web como un folleto digital: un lugar estático para listar servicios e información de contacto. En 2026, este enfoque es una oportunidad perdida. Un sitio web realmente efectivo es una <strong>máquina de generación de leads</strong>, un sistema diseñado para atraer, interesar y convertir visitantes en clientes potenciales de alta calidad.<sup><a href="#footnote-1" id="footnote-ref-1" className={styles.link}>1</a></sup></p>

            <h2 className={styles.heading2}>La anatomía de un embudo de conversión</h2>
            <p className={styles.paragraph}>Un sitio web de generación de leads se construye alrededor de un embudo de conversión claro. Este es el camino que recorre un usuario desde su primera interacción con tu marca hasta la acción final deseada (por ejemplo, completar un formulario de contacto, pedir un presupuesto o hacer una compra).<sup><a href="#footnote-2" id="footnote-ref-2" className={styles.link}>2</a></sup></p>
            <ul className={styles.list}>
                <li className={styles.listItem}><strong>Conciencia:</strong> El cliente potencial descubre tu negocio (por ejemplo, a través de <Link href="/blog/seo-snake-oil-empty-promises" className={styles.link}>búsquedas en Google</Link>, redes sociales o anuncios).</li>
                <li className={styles.listItem}><strong>Interés:</strong> Exploran tu sitio, aprendiendo más sobre lo que ofrecés.</li>
                <li className={styles.listItem}><strong>Consideración:</strong> Evalúan tu solución frente a otras alternativas, buscando información más detallada.</li>
                <li className={styles.listItem}><strong>Intención:</strong> Muestran señales claras de querer avanzar (por ejemplo, bajando una guía o iniciando una prueba gratis).</li>
                <li className={styles.listItem}><strong>Conversión:</strong> Realizan la acción deseada (compran o se contactan con ventas).</li>
            </ul>
            <p className={styles.paragraph}>Cada etapa requiere elementos y contenido específicos diseñados para que el usuario siga avanzando.</p>

            <h2 className={styles.heading2}>Ingeniería web para la máxima generación de leads</h2>
            <h3 className={styles.heading3}>1. El punto de entrada cautivador: Inicio y Landing Pages</h3>
            <p className={styles.paragraph}>Tu página de inicio tiene que comunicar inmediatamente tu propuesta de valor y guiar a los visitantes. Las landing pages dedicadas, sin distracciones, son cruciales para campañas específicas. Ambas deben tener:</p>
            <ul className={styles.list}>
                <li className={styles.listItem}><strong>Propuesta de valor clara:</strong> ¿Qué problema resolvés?</li>
                <li className={styles.listItem}><strong>Título convincente:</strong> Llamá la atención al instante.</li>
                <li className={styles.listItem}><strong>Llamado a la acción (CTA) fuerte:</strong> Deciles exactamente qué hacer después.</li>
                <li className={styles.listItem}><Link href="/blog/from-problem-to-profit-case-studies" className={styles.link}><strong>Prueba social:</strong> Testimonios, logos de clientes y casos de estudio para generar confianza.</Link></li>
            </ul>

            <h3 className={styles.heading3}>2. Contenido que convierte: Resolver problemas y generar autoridad</h3>
            <p className={styles.paragraph}>El contenido es el combustible de tu embudo. Blog posts de alta calidad (¡como este!), guías y videos responden las dudas de los usuarios, resuelven sus problemas y establecen tu autoridad. El contenido debe ser fácil de compartir y estar optimizado para buscadores.</p>
            <ul className={styles.list}>
                <li className={styles.listItem}><strong>Artículos de Blog:</strong> Respondé preguntas comunes, demostrá tu experiencia.</li>
                <li className={styles.listItem}><strong>Imanes de Leads (Lead Magnets):</strong> Ofrecé contenido valioso (e-books, checklists) a cambio de información de contacto.</li>
                <li className={styles.listItem}><strong>Casos de Estudio:</strong> Mostrá, no solo cuentes, cómo ayudaste a otros a tener éxito.</li>
            </ul>

            <h3 className={styles.heading3}>3. Formularios y herramientas de consulta sin fricción</h3>
            <p className={styles.paragraph}>Cuando un usuario está listo para avanzar, el proceso debe ser lo más fluido posible. Los formularios largos y confusos matan las tasas de conversión.<sup><a href="#footnote-3" id="footnote-ref-3" className={styles.link}>3</a></sup> Nosotros diseñamos:</p>
            <ul className={styles.list}>
                <li className={styles.listItem}><strong>Formularios optimizados:</strong> Pedí solo la información esencial. Usá etiquetas claras y validación.</li>
                <li className={styles.listItem}><strong>CTAs claros:</strong> Los botones que dicen "Enviar" son mucho menos efectivos que "Obtené tu presupuesto gratis" o "Agendá una demo".</li>
                <li className={styles.listItem}><strong>Chat en vivo y Chatbots:</strong> Da respuestas inmediatas y capturá datos para el seguimiento.</li>
                <li className={styles.listItem}><strong>Opciones de contacto directo:</strong> Mostrá claramente números de teléfono y emails.</li>
            </ul>

            <h3 className={styles.heading3}>4. Analytics y Testeo A/B: Optimización continua</h3>
            <p className={styles.paragraph}>Construir una máquina de generación de leads no es algo de una sola vez; es un proceso continuo. Integramos analytics para rastrear el comportamiento del usuario, identificar cuellos de botella y hacer tests A/B para mejorar el rendimiento. ¿Qué título funciona mejor? ¿Qué color de botón recibe más clicks? Las decisiones basadas en datos son la clave.</p>

            <h2 className={styles.heading2}>La diferencia DreamsByte: Integrando Marketing e Ingeniería</h2>
            <p className={styles.paragraph}>Muchos desarrolladores se enfocan solo en el código. Muchos marketers se enfocan solo en el mensaje. En DreamsByte, cerramos esa brecha. Combinamos el entendimiento de la psicología de conversión con prácticas de ingeniería de vanguardia para crear sitios que no solo son técnicamente excelentes, sino también efectivos para generar resultados de negocio.</p>
            <p className={styles.paragraph}>Desde la arquitectura de información estratégica hasta tiempos de carga ultrarrápidos, cada elemento de tu sitio se crea pensando en tus objetivos de conversión.</p>

            <h2 className={styles.heading2}>Convertí tu sitio web en tu mejor vendedor</h2>
            <p className={styles.paragraph}>Dejá de pensar en tu sitio como un gasto y empezá a verlo como una inversión: un activo de ventas y marketing potente que trabaja las 24 horas. Al diseñar un embudo de conversión claro y eficiente, podés generar leads de alta calidad de forma constante y potenciar el crecimiento de tu negocio.</p>
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
                                "How to Generate Leads: 43 Strategies, Tips, & Ideas," <a href="https://blog.hubspot.com/sales/how-to-generate-leads" target="_blank" rel="noopener noreferrer" className={styles.link}>HubSpot</a>.
                                <a href="#footnote-ref-1" aria-label="Back to content" className={styles.link}> ↩</a>
                            </p>
                        </li>
                        <li id="footnote-2" className={styles.listItem}>
                            <p className={styles.paragraph}>
                                "A STUDY ON MARKETING FUNNEL AND ITS UTILITY WITH REFERENCE TO CERTAIN IDENTIFIED PRODUCTS," <a href="https://eprajournals.com/index.php/IJMR/article/view/528" target="_blank" rel="noopener noreferrer" className={styles.link}>EPRA Journals</a>.
                                <a href="#footnote-ref-2" aria-label="Back to content" className={styles.link}> ↩</a>
                            </p>
                        </li>
                        <li id="footnote-3" className={styles.listItem}>
                            <p className={styles.paragraph}>
                                "How to Improve your Form Conversion Rates - 12 Effective Ways," <a href="https://zuko.io/blog/how-to-improve-form-conversion-rates" target="_blank" rel="noopener noreferrer" className={styles.link}>Zuko</a>.
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
