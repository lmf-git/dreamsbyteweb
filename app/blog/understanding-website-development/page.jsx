'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useContact } from '../../../contexts/ContactContext';
import { useHeaderAnimation } from '../../../contexts/HeaderAnimationContext';
import { useLanguage } from '../../../contexts/LanguageContext';
import CallToAction from '../../../components/layout/CallToAction/CallToAction';
import styles from '../post.module.scss';
import { posts } from '../posts';

export default function UnderstandingWebsiteDevelopment() {
    const { openContact } = useContact();
    const { headerAnimationComplete } = useHeaderAnimation();
    const { language, t } = useLanguage();
    const [contentVisible, setContentVisible] = useState(false);

    const slug = 'understanding-website-development';
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
            <h2 className={styles.heading2}>What Goes Into Website Development</h2>
            <ul className={styles.list}>
                <li className={styles.listItem}>Business analysis and goal setting</li>
                <li className={styles.listItem}>User experience (UX) design and planning</li>
                <li className={styles.listItem}>Visual design and branding integration</li>
                <li className={styles.listItem}>Technical development and programming</li>
                <li className={styles.listItem}>Content management system setup</li>
                <li className={styles.listItem}>Testing, optimization, and launch</li>
            </ul>

            <h2 className={styles.heading2}>Our Development Process</h2>
            <p className={styles.paragraph}>We start every project with a thorough understanding of your business goals. This helps us create a website that not only represents your brand but also <Link href="/blog/website-as-lead-generation-machine" className={styles.link}>converts visitors into customers</Link>.</p>

            <h3 className={styles.heading3}>Discovery & Planning</h3>
            <p className={styles.paragraph}>We begin by understanding your business, target audience, and objectives. This foundation ensures every decision we make serves your business goals.</p>

            <h3 className={styles.heading3}>Design & User Experience</h3>
            <p className={styles.paragraph}>Our design process focuses on creating an intuitive, engaging experience for your visitors while maintaining your brand identity and professional appearance. With 75% of consumers judging a business's credibility by its website design, this is not just an aesthetic choice, but a crucial business investment.<sup><a href="#footnote-2" id="footnote-ref-2" className={styles.link}>2</a></sup></p>

            <h3 className={styles.heading3}>Development & Implementation</h3>
            <p className={styles.paragraph}>Using modern, secure technologies, we build your website to be <Link href="/blog/performance-first-website-lighthouse" className={styles.link}>fast, reliable, and easy to manage</Link>. We ensure your site works perfectly on all devices and browsers.</p>

            <h2 className={styles.heading2}>What Makes DreamsByte Different</h2>
            <ul className={styles.list}>
                <li className={styles.listItem}><strong>Complete Ownership:</strong> You own all the code and content</li>
                <li className={styles.listItem}><strong>Cost-Effective Marketing:</strong> Your website is the core of your digital marketing. Content marketing, centered around your site, can generate three times more leads while costing 62% less than traditional advertising.<sup><a href="#footnote-3" id="footnote-ref-3" className={styles.link}>3</a></sup></li>
                <li className={styles.listItem}><strong>Free Hosting:</strong> We include hosting for the first year</li>
                <li className={styles.listItem}><strong>Ongoing Support:</strong> We're here to help even after launch</li>
            </ul>

            <h2 className={styles.heading2}>Ready to Get Started?</h2>
            <p className={styles.paragraph}>Every business deserves a professional online presence. Whether you're starting from scratch or need to modernize an existing site, we're here to help you succeed online.</p>
        </>
    );

    const ContentES = () => (
        <>
            <h2 className={styles.heading2}>Qué implica el desarrollo de un sitio web</h2>
            <ul className={styles.list}>
                <li className={styles.listItem}>Análisis de negocio y definición de objetivos</li>
                <li className={styles.listItem}>Diseño y planificación de la experiencia de usuario (UX)</li>
                <li className={styles.listItem}>Diseño visual e integración de la identidad de marca</li>
                <li className={styles.listItem}>Desarrollo técnico y programación</li>
                <li className={styles.listItem}>Configuración del sistema de gestión de contenidos (CMS)</li>
                <li className={styles.listItem}>Pruebas, optimización y lanzamiento</li>
            </ul>

            <h2 className={styles.heading2}>Nuestro proceso de desarrollo</h2>
            <p className={styles.paragraph}>Comenzamos cada proyecto con una comprensión profunda de tus objetivos de negocio. Esto nos ayuda a crear un sitio web que no solo representa tu marca, sino que también <Link href="/blog/website-as-lead-generation-machine" className={styles.link}>convierte a los visitantes en clientes</Link>.</p>

            <h3 className={styles.heading3}>Descubrimiento y Planificación</h3>
            <p className={styles.paragraph}>Empezamos por entender tu negocio, tu público objetivo y tus metas. Esta base asegura que cada decisión que tomemos sirva a tus objetivos comerciales.</p>

            <h3 className={styles.heading3}>Diseño y Experiencia de Usuario</h3>
            <p className={styles.paragraph}>Nuestro proceso de diseño se centra en crear una experiencia intuitiva y atractiva para tus visitantes, manteniendo la identidad de tu marca y una apariencia profesional. Con el 75% de los consumidores juzgando la credibilidad de un negocio por el diseño de su sitio web, esta no es solo una elección estética, sino una inversión empresarial crucial.<sup><a href="#footnote-2" id="footnote-ref-2" className={styles.link}>2</a></sup></p>

            <h3 className={styles.heading3}>Desarrollo e Implementación</h3>
            <p className={styles.paragraph}>Utilizando tecnologías modernas y seguras, construimos tu sitio web para que sea <Link href="/blog/performance-first-website-lighthouse" className={styles.link}>rápido, confiable y fácil de gestionar</Link>. Nos aseguramos de que tu sitio funcione perfectamente en todos los dispositivos y navegadores.</p>

            <h2 className={styles.heading2}>Qué hace diferente a DreamsByte</h2>
            <ul className={styles.list}>
                <li className={styles.listItem}><strong>Propiedad total:</strong> Sos dueño de todo el código y contenido.</li>
                <li className={styles.listItem}><strong>Marketing rentable:</strong> Tu sitio web es el núcleo de tu marketing digital. El marketing de contenidos, centrado en tu sitio, puede generar tres veces más leads costando un 62% menos que la publicidad tradicional.<sup><a href="#footnote-3" id="footnote-ref-3" className={styles.link}>3</a></sup></li>
                <li className={styles.listItem}><strong>Hosting gratuito:</strong> Incluimos el hosting durante el primer año.</li>
                <li className={styles.listItem}><strong>Soporte continuo:</strong> Estamos aquí para ayudarte incluso después del lanzamiento.</li>
            </ul>

            <h2 className={styles.heading2}>¿Listo para empezar?</h2>
            <p className={styles.paragraph}>Todo negocio merece una presencia online profesional. Ya sea que estés empezando de cero o necesités modernizar un sitio existente, estamos aquí para ayudarte a tener éxito en internet.</p>
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
                                "The impact of User Experience (UX) on Customer Loyalty," <a href="https://impresee.com/blog/the-impact-of-user-experience-ux-on-customer-loyalty/" target="_blank" rel="noopener noreferrer" className={styles.link}>Impresee</a>.
                                <a href="#footnote-ref-1" aria-label="Back to content" className={styles.link}> ↩</a>
                            </p>
                        </li>
                        <li id="footnote-2" className={styles.listItem}>
                            <p className={styles.paragraph}>
                                "Why Website Credibility Matters: A Guide for Businesses," <a href="https://neuron-agency.com/blog/website-credibility/" target="_blank" rel="noopener noreferrer" className={styles.link}>Neuron Agency</a>.
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
