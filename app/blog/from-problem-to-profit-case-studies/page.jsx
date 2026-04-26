'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useContact } from '../../../contexts/ContactContext';
import { useHeaderAnimation } from '../../../contexts/HeaderAnimationContext';
import { useLanguage } from '../../../contexts/LanguageContext';
import CallToAction from '../../../components/layout/CallToAction/CallToAction';
import styles from '../post.module.scss';
import { posts } from '../posts';

export default function FromProblemToProfit() {
    const { openContact } = useContact();
    const { headerAnimationComplete } = useHeaderAnimation();
    const { language, t } = useLanguage();
    const [contentVisible, setContentVisible] = useState(false);

    // Find the current post's metadata from the translation system
    const slug = 'from-problem-to-profit-case-studies';
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
            <h2 className={styles.heading2}>Case Study 1: The Logistics Company & <Link href="/blog/legacy-system-modernisation-guide" className={styles.link}>the Legacy System Headache</Link></h2>
            <h3 className={styles.heading3}>The Problem: Manual Processes and Costly Errors</h3>
            <p className={styles.paragraph}>A growing logistics company relied on a combination of spreadsheets, manual data entry, and an ancient, difficult-to-maintain internal system to manage its complex network of deliveries, routes, and inventory. This led to:</p>
            <ul className={styles.list}>
                <li className={styles.listItem}>Frequent human errors in route planning and order fulfillment.</li>
                <li className={styles.listItem}>Inability to track shipments in real-time, leading to poor customer service.</li>
                <li className={styles.listItem}>Massive time waste as employees cross-referenced disparate data sources.</li>
                <li className={styles.listItem}>No scalable way to integrate new clients or expand service areas.</li>
            </ul>

            <h3 className={styles.heading3}>Our Custom Solution: An Integrated Logistics Management Platform</h3>
            <p className={styles.paragraph}>We developed a bespoke, cloud-based Logistics Management Platform that integrated their client data, routing algorithms, and real-time tracking capabilities into a single, intuitive system. Key features included:</p>
            <ul className={styles.list}>
                <li className={styles.listItem}>Automated route optimization, considering traffic, delivery windows, and vehicle capacity.</li>
                <li className={styles.listItem}>Real-time GPS tracking for all vehicles, accessible by both staff and clients.</li>
                <li className={styles.listItem}>Integrated inventory management and automated order processing.</li>
                <li className={styles.listItem}>A user-friendly dashboard providing actionable insights into operational efficiency.</li>
            </ul>

            <h3 className={styles.heading3}>The Transformation: Measurable ROI and Scaled Operations</h3>
            <p className={styles.paragraph}>Within six months of deployment, the client experienced significant improvements:</p>
            <ul className={styles.list}>
                <li className={styles.listItem}>**25% reduction in fuel costs** due to optimized routing.</li>
                <li className={styles.listItem}>**90% decrease in manual data entry errors.**</li>
                <li className={styles.listItem}>**Improved customer satisfaction scores by 15%** due to real-time tracking and accurate ETAs.</li>
                <li className={styles.listItem}>The company was able to **expand into two new regions** without increasing administrative staff, demonstrating significant scalability.</li>
            </ul>

            <h2 className={styles.heading2}>Case Study 2: The E-commerce Retailer & <Link href="/blog/beyond-shopify-custom-ecommerce" className={styles.link}>the Shopify Ceiling</Link></h2>
            <h3 className={styles.heading3}>The Problem: Generic Experience and Spiraling Costs</h3>
            <p className={styles.paragraph}>A successful niche e-commerce retailer, initially thriving on Shopify, began to encounter severe limitations as they scaled. Their unique product customization options required a complex web of third-party apps, leading to:</p>
            <ul className={styles.list}>
                <li className={styles.listItem}>High monthly app subscription costs and transaction fees.</li>
                <li className={styles.listItem}>A slow, bloated website due to too many external scripts.</li>
                <li className={styles.listItem}>A generic brand experience that failed to differentiate them in a competitive market.</li>
                <li className={styles.listItem}>Inflexible backend for managing their custom product configurations and fulfillment.</li>
            </ul>

            <h3 className={styles.heading3}>Our Custom Solution: A Bespoke E-commerce Platform</h3>
            <p className={styles.paragraph}>We migrated the client to a custom e-commerce platform built on a modern framework, designing every aspect to their specific needs. Our solution included:</p>
            <ul className={styles.list}>
                <li className={styles.listItem}>A highly optimized frontend with lightning-fast load times.</li>
                <li className={styles.listItem}>Integrated, native product customization tools, eliminating the need for expensive third-party apps.</li>
                <li className={styles.listItem}>A custom admin panel tailored for their unique order processing and fulfillment workflows.</li>
                <li className={styles.listItem}>A unique, on-brand user experience from product selection to checkout.</li>
            </ul>

            <h3 className={styles.heading3}>The Transformation: Enhanced Brand, Reduced Costs, and Increased Sales</h3>
            <p className={styles.paragraph}>The results were immediate and impactful:</p>
            <ul className={styles.list}>
                <li className={styles.listItem}>**Elimination of over $1,500/month in app subscriptions and platform transaction fees.**</li>
                <li className={styles.listItem}>**Page load times reduced by 40%,** contributing to a **12% increase in conversion rates.**</li>
                <li className={styles.listItem}>The custom backend reduced order processing time by **30%.**</li>
                <li className={styles.listItem}>Improved brand perception led to **higher average order values** and **increased customer reviews.**</li>
            </ul>

            <h2 className={styles.heading2}>Your Challenges, Our Solutions</h2>
            <p className={styles.paragraph}>These are just two examples of how a strategic investment in custom software can lead to profound business improvements. Whether you're struggling with outdated systems, inefficient workflows, or generic online platforms, there's an opportunity to build a solution that precisely fits your needs.</p>
            <p className={styles.paragraph}>Stop adapting your business to your software. Let your software adapt to your business.</p>
        </>
    );

    const ContentES = () => (
        <>
            <h2 className={styles.heading2}>Caso de estudio 1: La empresa de logística y <Link href="/blog/legacy-system-modernisation-guide" className={styles.link}>el dolor de cabeza de los sistemas antiguos</Link></h2>
            <h3 className={styles.heading3}>El Problema: Procesos manuales y errores costosos</h3>
            <p className={styles.paragraph}>Una empresa de logística en crecimiento dependía de planillas, carga manual de datos y un sistema interno viejo y difícil de mantener para gestionar su red de entregas, rutas e inventario. Esto generaba:</p>
            <ul className={styles.list}>
                <li className={styles.listItem}>Errores humanos frecuentes en la planificación de rutas y el cumplimiento de pedidos.</li>
                <li className={styles.listItem}>Imposibilidad de rastrear envíos en tiempo real, afectando el servicio al cliente.</li>
                <li className={styles.listItem}>Pérdida masiva de tiempo cruzando datos de distintas fuentes.</li>
                <li className={styles.listItem}>Falta de escalabilidad para sumar nuevos clientes o expandir áreas de servicio.</li>
            </ul>

            <h3 className={styles.heading3}>Nuestra Solución a Medida: Plataforma Integral de Gestión Logística</h3>
            <p className={styles.paragraph}>Desarrollamos una plataforma de gestión logística en la nube que integró los datos de clientes, algoritmos de ruteo y rastreo en tiempo real en un solo sistema intuitivo. Funciones clave:</p>
            <ul className={styles.list}>
                <li className={styles.listItem}>Optimización automática de rutas, considerando tráfico, ventanas de entrega y capacidad de los vehículos.</li>
                <li className={styles.listItem}>Rastreo GPS en tiempo real para todos los vehículos, accesible para el personal y los clientes.</li>
                <li className={styles.listItem}>Gestión de inventario integrada y procesamiento automático de pedidos.</li>
                <li className={styles.listItem}>Panel de control fácil de usar con información sobre la eficiencia operativa.</li>
            </ul>

            <h3 className={styles.heading3}>La Transformación: ROI medible y operaciones escaladas</h3>
            <p className={styles.paragraph}>A los seis meses de la implementación, el cliente vio mejoras significativas:</p>
            <ul className={styles.list}>
                <li className={styles.listItem}>**Reducción del 25% en costos de combustible** gracias al ruteo optimizado.</li>
                <li className={styles.listItem}>**Disminución del 90% en errores de carga manual de datos.**</li>
                <li className={styles.listItem}>**Aumento del 15% en satisfacción del cliente** por el rastreo en tiempo real y tiempos de llegada precisos.</li>
                <li className={styles.listItem}>La empresa pudo **expandirse a dos nuevas regiones** sin sumar personal administrativo, demostrando una gran escalabilidad.</li>
            </ul>

            <h2 className={styles.heading2}>Caso de estudio 2: El e-commerce y <Link href="/blog/beyond-shopify-custom-ecommerce" className={styles.link}>el techo de Shopify</Link></h2>
            <h3 className={styles.heading3}>El Problema: Experiencia genérica y costos en aumento</h3>
            <p className={styles.paragraph}>Un e-commerce de nicho exitoso, que empezó en Shopify, encontró limitaciones severas al escalar. Sus opciones únicas de personalización de productos requerían muchas apps de terceros, lo que provocaba:</p>
            <ul className={styles.list}>
                <li className={styles.listItem}>Altos costos mensuales en suscripciones de apps y comisiones por transacción.</li>
                <li className={styles.listItem}>Un sitio lento y pesado por el exceso de scripts externos.</li>
                <li className={styles.listItem}>Una experiencia de marca genérica que no los diferenciaba de la competencia.</li>
                <li className={styles.listItem}>Backend inflexible para gestionar sus configuraciones de productos a medida.</li>
            </ul>

            <h3 className={styles.heading3}>Nuestra Solución a Medida: Plataforma de E-commerce Propia</h3>
            <p className={styles.paragraph}>Migramos al cliente a una plataforma de e-commerce a medida construida con tecnologías modernas. Nuestra solución incluyó:</p>
            <ul className={styles.list}>
                <li className={styles.listItem}>Frontend optimizado con tiempos de carga ultrarrápidos.</li>
                <li className={styles.listItem}>Herramientas nativas de personalización, eliminando apps de terceros costosas.</li>
                <li className={styles.listItem}>Panel de administración personalizado para sus flujos de trabajo únicos.</li>
                <li className={styles.listItem}>Experiencia de usuario de marca única desde la selección del producto hasta el pago.</li>
            </ul>

            <h3 className={styles.heading3}>La Transformación: Marca potenciada, costos reducidos y más ventas</h3>
            <p className={styles.paragraph}>Los resultados fueron inmediatos:</p>
            <ul className={styles.list}>
                <li className={styles.listItem}>**Eliminación de más de $1.500 mensuales en suscripciones de apps y comisiones.**</li>
                <li className={styles.listItem}>**Tiempos de carga reducidos en un 40%,** contribuyendo a un **aumento del 12% en las ventas.**</li>
                <li className={styles.listItem}>El backend a medida redujo el tiempo de procesamiento de pedidos en un **30%.**</li>
                <li className={styles.listItem}>La mejor percepción de marca llevó a **carritos de compra más grandes** y mejores reseñas.</li>
            </ul>

            <h2 className={styles.heading2}>Tus desafíos, nuestras soluciones</h2>
            <p className={styles.paragraph}>Estos son solo dos ejemplos de cómo una inversión estratégica en software a medida puede mejorar profundamente un negocio. Ya sea que estés luchando con sistemas viejos, procesos ineficientes o plataformas genéricas, hay una oportunidad de construir algo que se adapte exactamente a vos.</p>
            <p className={styles.paragraph}>Dejá de adaptar tu negocio a tu software. Dejá que tu software se adapte a tu negocio.</p>
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
                                "Decision Making Framework for Enterprise Resource Planning Software Selection: A Focus on Small and Medium Enterprises," <a href="https://www.uvic.ca/ecs/assets/docs/theses/msc-theses/2012-arora.pdf" target="_blank" rel="noopener noreferrer" className={styles.link}>University of Victoria</a>.
                                <a href="#footnote-ref-1" aria-label="Back to content" className={styles.link}> ↩</a>
                            </p>
                        </li>
                        <li id="footnote-2" className={styles.listItem}>
                            <p className={styles.paragraph}>
                                "CUSTOMIZED SOFTWARE Strategies for Acquiring and Sustaining Competitive Advantage: A Japanese Perspective," <a href="https://www.uvic.ca/ecs/assets/docs/theses/msc-theses/2009-suzuki.pdf" target="_blank" rel="noopener noreferrer" className={styles.link}>University of Victoria</a>.
                                <a href="#footnote-ref-2" aria-label="Back to content" className={styles.link}> ↩</a>
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
