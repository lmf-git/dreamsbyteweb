'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useContact } from '../../../contexts/ContactContext';
import { useHeaderAnimation } from '../../../contexts/HeaderAnimationContext';
import { useLanguage } from '../../../contexts/LanguageContext';
import CallToAction from '../../../components/layout/CallToAction/CallToAction';
import styles from '../post.module.scss';
import { posts } from '../posts';

export default function EthicalBusinessPractices() {
    const { openContact } = useContact();
    const { headerAnimationComplete } = useHeaderAnimation();
    const { language, t } = useLanguage();
    const [contentVisible, setContentVisible] = useState(false);

    // Find the current post's metadata from the translation system
    const slug = 'ethical-business-practices';
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
            <h2 className={styles.heading2}>Fair, Transparent, and Simple</h2>
            <p className={styles.paragraph}>
                We reject the idea of "<Link href="/blog/unethical-business-practices" className={styles.link}>fee stacking</Link>," "value-added" markups, and other tactics designed to obscure the true cost of a service. Our pricing is straightforward and honest. You pay for the work we do. There are no hidden administrative fees, no inflated costs for third-party licenses, and no complex retainers where you pay for time you don't use.<sup><a href="#footnote-1" id="footnote-ref-1" className={styles.link}>1</a></sup>
            </p>
            <p className={styles.paragraph}>
                Our goal is to create a partnership where our incentives are aligned with yours: to build the best possible product, <Link href="/blog/our-approach-to-software" className={styles.link}>efficiently and effectively</Link>.
            </p>

            <h2 className={styles.heading2}>Building for Independence, Not Dependence</h2>
            <p className={styles.paragraph}>
                Many software companies build systems designed to create dependency, locking clients into their platforms with proprietary code and "<Link href="/blog/vendor-lock-in-subscription-costs" className={styles.link}>exit fees</Link>." We believe this is a fundamentally flawed approach.<sup><a href="#footnote-2" id="footnote-ref-2" className={styles.link}>2</a></sup>
            </p>
            <p className={styles.paragraph}>
                We actively work to free our clients from the <Link href="/blog/hidden-cost-of-no-code" className={styles.link}>common traps of the software industry</Link>: <Link href="/blog/vendor-lock-in-subscription-costs" className={styles.link}>exorbitant subscription fees</Link>, <Link href="/blog/vendor-lock-in-subscription-costs" className={styles.link}>restrictive vendor lock-ins</Link>, and <Link href="/blog/unethical-business-practices" className={styles.link}>opaque pricing models</Link>. Our approach prioritizes your long-term autonomy and success, rather than creating perpetual reliance on our services.<sup><a href="#footnote-3" id="footnote-ref-3" className={styles.link}>3</a></sup>
            </p>
            <p className={styles.paragraph}>
                We build technology that you own and control. Our solutions are built on open standards and well-documented code, ensuring you are never held hostage by your own systems. We want you to work with us because you value our expertise and our partnership, not because you are trapped.
            </p>

            <h2 className={styles.heading2}>Technology in Service of Humanity</h2>
            <p className={styles.paragraph}>
                Software is not neutral. It can be used to enrich lives, foster connection, and solve meaningful problems. It can also be used to exploit, divide, and distract. We are committed to working on projects that have a positive impact.<sup><a href="#footnote-4" id="footnote-ref-4" className={styles.link}>4</a></sup>
            </p>
            <p className={styles.paragraph}>
                For this reason, <strong>we do not take on clients in certain industries</strong>. We will not build software for:
            </p>
            <ul className={styles.list}>
                <li className={styles.listItem}>Gambling or betting platforms</li>
                <li className={styles.listItem}>Predatory lending or high-interest finance</li>
                <li className={styles.listItem}>Industries that rely on user surveillance for profit</li>
                <li className={styles.listItem}>Social media designed to be addictive</li>
                <li className={styles.listItem}>Anything that contributes to environmental degradation</li>
            </ul>
            <p className={styles.paragraph}>
                This is not a judgment; it is a choice. We choose to dedicate our skills to projects that align with our vision for a more equitable and humane world. We believe that by focusing our efforts on building tools for businesses that create real value, we all succeed together.
            </p>

            <h2 className={styles.heading2}>A Partnership, Not a Transaction</h2>
            <p className={styles.paragraph}>
                When you work with us, you are not just another line item on a spreadsheet. You are a partner. We take the time to understand your goals, your challenges, and your vision. We succeed when you succeed, and we are deeply committed to the long-term health of your business and the products we build together.
            </p>
        </>
    );

    const ContentES = () => (
        <>
            <h2 className={styles.heading2}>Justo, transparente y simple</h2>
            <p className={styles.paragraph}>
                Rechazamos la idea del "<Link href="/blog/unethical-business-practices" className={styles.link}>fee stacking</Link>" (acumulación de comisiones), los recargos por "valor agregado" y otras tácticas diseñadas para ocultar el costo real de un servicio. Nuestros precios son directos y honestos. Pagás por el trabajo que hacemos. No hay gastos administrativos ocultos, ni costos inflados por licencias de terceros, ni abonos complejos donde pagás por tiempo que no usás.<sup><a href="#footnote-1" id="footnote-ref-1" className={styles.link}>1</a></sup>
            </p>
            <p className={styles.paragraph}>
                Nuestro objetivo es crear una asociación donde nuestros incentivos estén alineados con los tuyos: construir el mejor producto posible, de manera <Link href="/blog/our-approach-to-software" className={styles.link}>eficiente y efectiva</Link>.
            </p>

            <h2 className={styles.heading2}>Construir para la independencia, no para la dependencia</h2>
            <p className={styles.paragraph}>
                Muchas empresas de software crean sistemas diseñados para generar dependencia, atrapando a los clientes en sus plataformas con código propietario y "tarifas de salida". Creemos que este es un enfoque fundamentalmente equivocado.<sup><a href="#footnote-2" id="footnote-ref-2" className={styles.link}>2</a></sup>
            </p>
            <p className={styles.paragraph}>
                Trabajamos activamente para liberar a nuestros clientes de las <Link href="/blog/hidden-cost-of-no-code" className={styles.link}>trampas comunes de la industria del software</Link>: <Link href="/blog/vendor-lock-in-subscription-costs" className={styles.link}>costos de suscripción exorbitantes</Link>, <Link href="/blog/vendor-lock-in-subscription-costs" className={styles.link}>bloqueos restrictivos de proveedores</Link> y <Link href="/blog/unethical-business-practices" className={styles.link}>modelos de precios opacos</Link>. Nuestro enfoque prioriza tu autonomía y éxito a largo plazo, en lugar de crear una dependencia perpetua de nuestros servicios.<sup><a href="#footnote-3" id="footnote-ref-3" className={styles.link}>3</a></sup>
            </p>
            <p className={styles.paragraph}>
                Desarrollamos tecnología que te pertenece y que vos controlás. Nuestras soluciones se basan en estándares abiertos y código bien documentado, garantizando que nunca seas rehén de tus propios sistemas. Queremos que trabajes con nosotros porque valorás nuestra experiencia y nuestra asociación, no porque estés atrapado.
            </p>

            <h2 className={styles.heading2}>Tecnología al servicio de la humanidad</h2>
            <p className={styles.paragraph}>
                El software no es neutral. Puede usarse para enriquecer vidas, fomentar la conexión y resolver problemas significativos. También puede usarse para explotar, dividir y distraer. Estamos comprometidos a trabajar en proyectos que tengan un impacto positivo.<sup><a href="#footnote-4" id="footnote-ref-4" className={styles.link}>4</a></sup>
            </p>
            <p className={styles.paragraph}>
                Por esta razón, <strong>no aceptamos clientes de ciertas industrias</strong>. No desarrollaremos software para:
            </p>
            <ul className={styles.list}>
                <li className={styles.listItem}>Plataformas de juegos de azar o apuestas</li>
                <li className={styles.listItem}>Préstamos abusivos o finanzas de alto interés</li>
                <li className={styles.listItem}>Industrias que dependen de la vigilancia del usuario para obtener ganancias</li>
                <li className={styles.listItem}>Redes sociales diseñadas para ser adictivas</li>
                <li className={styles.listItem}>Cualquier cosa que contribuya a la degradación ambiental</li>
            </ul>
            <p className={styles.paragraph}>
                Esto no es un juicio; es una elección. Elegimos dedicar nuestras habilidades a proyectos que se alineen con nuestra visión de un mundo más equitativo y humano. Creemos que al enfocar nuestros esfuerzos en crear herramientas para empresas que generan valor real, todos tenemos éxito juntos.
            </p>

            <h2 className={styles.heading2}>Una asociación, no una transacción</h2>
            <p className={styles.paragraph}>
                Cuando trabajás con nosotros, no sos solo una fila más en una planilla de cálculos. Sos un socio. Nos tomamos el tiempo para entender tus objetivos, tus desafíos y tu visión. Tenemos éxito cuando vos tenés éxito, y estamos profundamente comprometidos con la salud a largo plazo de tu negocio y de los productos que construimos juntos.
            </p>
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
                                "Ethics in Software Engineering: A Roadmap", <a href="https://research.vu.nl/en/publications/ethics-in-software-engineering-a-roadmap" target="_blank" rel="noopener noreferrer" className={styles.link}>Research VU</a>.
                                <a href="#footnote-ref-1" aria-label="Back to content" className={styles.link}> ↩</a>
                            </p>
                        </li>
                        <li id="footnote-2" className={styles.listItem}>
                            <p className={styles.paragraph}>
                                "The high cost of dependency", <a href="https://hbr.org/1998/09/the-high-cost-of-dependency" target="_blank" rel="noopener noreferrer" className={styles.link}>HBR</a>.
                                <a href="#footnote-ref-2" aria-label="Back to content" className={styles.link}> ↩</a>
                            </p>
                        </li>
                        <li id="footnote-3" className={styles.listItem}>
                            <p className={styles.paragraph}>
                                "Software Autonomy and Business Success", <a href="https://www.forbes.com/sites/forbestechcouncil/2021/04/15/software-autonomy-and-business-success/" target="_blank" rel="noopener noreferrer" className={styles.link}>Forbes</a>.
                                <a href="#footnote-ref-3" aria-label="Back to content" className={styles.link}> ↩</a>
                            </p>
                        </li>
                        <li id="footnote-4" className={styles.listItem}>
                            <p className={styles.paragraph}>
                                "The Social Dilemma of Software Engineering", <a href="https://cacm.acm.org/magazines/2020/12/248796-the-social-dilemma-of-software-engineering/fulltext" target="_blank" rel="noopener noreferrer" className={styles.link}>ACM</a>.
                                <a href="#footnote-ref-4" aria-label="Back to content" className={styles.link}> ↩</a>
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
