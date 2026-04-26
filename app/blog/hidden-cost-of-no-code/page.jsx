'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useContact } from '../../../contexts/ContactContext';
import { useHeaderAnimation } from '../../../contexts/HeaderAnimationContext';
import { useLanguage } from '../../../contexts/LanguageContext';
import CallToAction from '../../../components/layout/CallToAction/CallToAction';
import styles from '../post.module.scss';
import { posts } from '../posts';

export default function HiddenCostOfNoCode() {
    const { openContact } = useContact();
    const { headerAnimationComplete } = useHeaderAnimation();
    const { language, t } = useLanguage();
    const [contentVisible, setContentVisible] = useState(false);

    const slug = 'hidden-cost-of-no-code';
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
            <h2 className={styles.heading2}>Your Business Logic is Your Most Valuable Asset</h2>
            <p className={styles.paragraph}>Every business has a unique way of doing things. The specific steps you take to qualify a lead, process an order, or manage a project—that is your core business logic. It's the secret sauce of your operations. Entrusting this logic to a third-party, point-and-click interface is a massive strategic error.</p>
            <p className={styles.paragraph}>When you build your business on a web of no-code automations, you are creating a distributed monolith of hidden dependencies, where a single change in one app can cause a cascade of failures in another.</p>
            
            <h2 className={styles.heading2}>The Cracks in the No-Code Facade</h2>
            <h3 className={styles.heading3}>1. It's Brittle and Opaque</h3>
            <p className={styles.paragraph}>What happens when one of your no-code automations fails? You get a cryptic email from Zapier saying a "zap has been turned off." There's no clear error message, no debugger, and no way to easily trace the problem. You're left clicking through a dozen different interfaces, trying to figure out if the problem is in your CRM, your email platform, or the no-code tool itself. This is not a reliable foundation for a growing business.<sup><a href="#footnote-2" id="footnote-ref-2" className={styles.link}>2</a></sup></p>

            <h3 className={styles.heading3}>2. It Doesn't Scale</h3>
            <p className={styles.paragraph}>No-code platforms are priced based on tasks or operations. As your business grows, the number of tasks explodes, and <Link href="/blog/vendor-lock-in-subscription-costs" className={styles.link}>so does your monthly bill</Link>. That affordable $50/month plan quickly becomes $500/month, and then $2,000/month. You are being penalized for your own success. Furthermore, these platforms have hard limits on execution speed and API calls, creating performance bottlenecks that can grind your operations to a halt.<sup><a href="#footnote-3" id="footnote-ref-3" className={styles.link}>3</a></sup></p>

            <h3 className={styles.heading3}>3. It's Insecure</h3>
            <p className={styles.paragraph}>To connect your apps, you have to grant these no-code platforms sweeping access to your data. You are storing sensitive API keys and credentials in a third-party database, creating a massive security liability. A breach at the no-code provider could expose your entire operational infrastructure and sensitive customer data.<sup><a href="#footnote-4" id="footnote-ref-4" className={styles.link}>4</a></sup></p>

            <h2 className={styles.heading2}>The Solution: Own Your Logic with a Custom API</h2>
            <p className={styles.paragraph}>The robust, scalable, and secure alternative is to centralize your business logic into a custom API that you own and control. An API (Application Programming Interface) is the engine of your business. It's a set of rules and routines, built by developers, that handles all the critical operations.<sup><a href="#footnote-5" id="footnote-ref-5" className={styles.link}>5</a></sup></p>
            <p className={styles.paragraph}>Instead of a fragile chain of zaps, you have a single, well-documented codebase that says: "When a new customer signs up, do these five things in this specific order."</p>

            <h3 className={styles.heading3}>Why a Custom API is Superior</h3>
            <ul className={styles.list}>
                <li className={styles.listItem}><strong>Rock-Solid Reliability:</strong> Code is testable and debuggable. When something goes wrong, you have detailed logs and error reporting that pinpoint the exact problem. You can build with confidence.</li>
                <li className={styles.listItem}><strong>Infinite Scalability:</strong> Your custom API runs on your own infrastructure. You are not limited by arbitrary task limits or pricing tiers. It can handle as much volume as you need, and your costs remain predictable.</li>
                <li className={styles.listItem}><strong>Fort-Knox Security:</strong> Your credentials and business logic are contained within your own system, not scattered across third-party services. You control the security from end to end.</li>
                <li className={styles.listItem}><Link href="/blog/our-approach-to-software" className={styles.link}><strong>Deep Integration:</strong> A custom API can perform complex, multi-step operations that are simply impossible with no-code tools. It can interact with your database, external services, and internal systems in a sophisticated, orchestrated way.</Link></li>
            </ul>

            <h2 className={styles.heading2}>The Right Tool for the Right Job</h2>
            <p className={styles.paragraph}>This isn't an all-or-nothing argument. No-code tools are still great for peripheral tasks. But the core, mission-critical logic of your business belongs in a system you own.</p>
            <p className={styles.paragraph}>Think of it like building a house. You can use pre-fabricated shelves from IKEA (no-code) for your closet, but you wouldn't use them for the foundational support beams of the house. That requires custom-engineered steel (your API).</p>
            
            <h2 className={styles.heading2}>Invest in a Real Foundation</h2>
            <p className={styles.paragraph}>Relying on no-code for your core operations is like building a skyscraper on a foundation of sand. It's fast at first, but the long-term cost of instability, insecurity, and spiraling fees is immense.</p>
            <p className={styles.paragraph}>A custom API is a strategic investment in a stable, secure, and scalable future. It's the digital engine that will power your growth for years to come, without compromise.</p>
        </>
    );

    const ContentES = () => (
        <>
            <h2 className={styles.heading2}>Tu lógica de negocio es tu activo más valioso</h2>
            <p className={styles.paragraph}>Cada negocio tiene una forma única de hacer las cosas. Los pasos específicos que seguís para calificar un lead, procesar un pedido o gestionar un proyecto: esa es tu lógica de negocio central. Es el ingrediente secreto de tus operaciones. Confiar esta lógica a una interfaz de terceros de "apuntar y hacer clic" es un error estratégico masivo.</p>
            <p className={styles.paragraph}>Cuando construís tu negocio sobre una red de automatizaciones "no-code", estás creando un monolito distribuido de dependencias ocultas, donde un solo cambio en una app puede causar una cascada de fallas en otra.</p>
            
            <h2 className={styles.heading2}>Las grietas en la fachada del "No-Code"</h2>
            <h3 className={styles.heading3}>1. Es frágil y opaco</h3>
            <p className={styles.paragraph}>¿Qué pasa cuando una de tus automatizaciones falla? Recibís un email críptico de Zapier diciendo que un "zap ha sido desactivado". No hay un mensaje de error claro, ni depurador, ni forma de rastrear fácilmente el problema. Te quedás haciendo clic en una docena de interfaces diferentes, intentando descubrir si el problema está en tu CRM, en tu plataforma de email o en la propia herramienta no-code. Esta no es una base confiable para un negocio que crece.<sup><a href="#footnote-2" id="footnote-ref-2" className={styles.link}>2</a></sup></p>

            <h3 className={styles.heading3}>2. No escala</h3>
            <p className={styles.paragraph}>Las plataformas no-code cobran por tareas u operaciones. A medida que tu negocio crece, el número de tareas explota, y <Link href="/blog/vendor-lock-in-subscription-costs" className={styles.link}>también lo hace tu factura mensual</Link>. Ese plan accesible de $50/mes se convierte rápidamente en $500/mes, y luego en $2.000/mes. Te están penalizando por tu propio éxito. Además, estas plataformas tienen límites estrictos de velocidad de ejecución y llamadas a la API, creando cuellos de botella que pueden paralizar tus operaciones.<sup><a href="#footnote-3" id="footnote-ref-3" className={styles.link}>3</a></sup></p>

            <h3 className={styles.heading3}>3. Es inseguro</h3>
            <p className={styles.paragraph}>Para conectar tus apps, tenés que otorgar a estas plataformas no-code un acceso total a tus datos. Estás almacenando claves API y credenciales sensibles en una base de datos de terceros, creando una responsabilidad de seguridad masiva. Una brecha en el proveedor no-code podría exponer toda tu infraestructura operativa y los datos sensibles de tus clientes.<sup><a href="#footnote-4" id="footnote-ref-4" className={styles.link}>4</a></sup></p>

            <h2 className={styles.heading2}>La solución: Sé dueño de tu lógica con una API personalizada</h2>
            <p className={styles.paragraph}>La alternativa robusta, escalable y segura es centralizar tu lógica de negocio en una API personalizada que vos poseas y controles. Una API (Interfaz de Programación de Aplicaciones) es el motor de tu negocio. Es un conjunto de reglas y rutinas, construidas por desarrolladores, que maneja todas las operaciones críticas.<sup><a href="#footnote-5" id="footnote-ref-5" className={styles.link}>5</a></sup></p>
            <p className={styles.paragraph}>En lugar de una cadena frágil de "zaps", tenés un único código bien documentado que dice: "Cuando un nuevo cliente se registra, hacé estas cinco cosas en este orden específico".</p>

            <h3 className={styles.heading3}>Por qué una API personalizada es superior</h3>
            <ul className={styles.list}>
                <li className={styles.listItem}><strong>Fiabilidad sólida como una roca:</strong> El código es testeable y depurable. Cuando algo sale mal, tenés registros detallados e informes de errores que señalan el problema exacto. Podés construir con confianza.</li>
                <li className={styles.listItem}><strong>Escalabilidad infinita:</strong> Tu API personalizada se ejecuta en tu propia infraestructura. No estás limitado por límites de tareas arbitrarios o niveles de precios. Puede manejar tanto volumen como necesités, y tus costos siguen siendo predecibles.</li>
                <li className={styles.listItem}><strong>Seguridad nivel Fort-Knox:</strong> Tus credenciales y lógica de negocio están contenidas en tu propio sistema, no dispersas en servicios de terceros. Vos controlás la seguridad de punta a punta.</li>
                <li className={styles.listItem}><Link href="/blog/our-approach-to-software" className={styles.link}><strong>Integración profunda:</strong> Una API personalizada puede realizar operaciones complejas de varios pasos que son simplemente imposibles con herramientas no-code. Puede interactuar con tu base de datos, servicios externos y sistemas internos de una manera sofisticada y orquestada.</Link></li>
            </ul>

            <h2 className={styles.heading2}>La herramienta adecuada para el trabajo adecuado</h2>
            <p className={styles.paragraph}>Este no es un argumento de "todo o nada". Las herramientas no-code siguen siendo geniales para tareas periféricas. Pero la lógica central y crítica de tu negocio pertenece a un sistema que vos poseas.</p>
            <p className={styles.paragraph}>Pensalo como construir una casa. Podés usar estantes prefabricados de IKEA (no-code) para tu placard, pero no los usarías para las vigas de soporte fundamentales de la casa. Eso requiere acero diseñado a medida (tu API).</p>
            
            <h2 className={styles.heading2}>Invertí en una base real</h2>
            <p className={styles.paragraph}>Confiar en el no-code para tus operaciones centrales es como construir un rascacielos sobre una base de arena. Es rápido al principio, pero el costo a largo plazo de la inestabilidad, la inseguridad y las tarifas crecientes es inmenso.</p>
            <p className={styles.paragraph}>Una API personalizada es una inversión estratégica en un futuro estable, seguro y escalable. Es el motor digital que impulsará tu crecimiento durante los próximos años, sin compromisos.</p>
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
                                "Low-Code/No-Code Platforms: Hidden Limitations and Costs," <a href="https://depalma.io/blog/low-code-no-code-hidden-limitations-and-costs" target="_blank" rel="noopener noreferrer" className={styles.link}>DePalma</a>.
                                <a href="#footnote-ref-1" aria-label="Back to content" className={styles.link}> ↩</a>
                            </p>
                        </li>
                        <li id="footnote-2" className={styles.listItem}>
                            <p className={styles.paragraph}>
                                "What are the Disadvantages of Low-Code Platforms? - Quixy," <a href="https://quixy.com/blog/disadvantages-of-low-code/" target="_blank" rel="noopener noreferrer" className={styles.link}>Quixy</a>.
                                <a href="#footnote-ref-2" aria-label="Back to content" className={styles.link}> ↩</a>
                            </p>
                        </li>
                        <li id="footnote-3" className={styles.listItem}>
                            <p className={styles.paragraph}>
                                "Why Most Low-Code Platforms Eventually Face Limitations—and Strategic Considerations for the Future," <a href="https://baytechconsulting.com/blog/low-code-limitations/" target="_blank" rel="noopener noreferrer" className={styles.link}>Baytech Consulting</a>.
                                <a href="#footnote-ref-3" aria-label="Back to content" className={styles.link}> ↩</a>
                            </p>
                        </li>
                        <li id="footnote-4" className={styles.listItem}>
                            <p className={styles.paragraph}>
                                "Security Risks of Low-Code Development Platforms," <a href="https://thescimus.com/security-risks-of-low-code-development-platforms/" target="_blank" rel="noopener noreferrer" className={styles.link}>SCIMUS</a>.
                                <a href="#footnote-ref-4" aria-label="Back to content" className={styles.link}> ↩</a>
                            </p>
                        </li>
                        <li id="footnote-5" className={styles.listItem}>
                            <p className={styles.paragraph}>
                                "The Business Value of APIs: An Ecosystem Perspective," <a href="https://gravitee.io/blog/api-business-value" target="_blank" rel="noopener noreferrer" className={styles.link}>Gravitee</a>.
                                <a href="#footnote-ref-5" aria-label="Back to content" className={styles.link}> ↩</a>
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
