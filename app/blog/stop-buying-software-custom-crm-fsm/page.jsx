'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useContact } from '../../../contexts/ContactContext';
import { useHeaderAnimation } from '../../../contexts/HeaderAnimationContext';
import { useLanguage } from '../../../contexts/LanguageContext';
import CallToAction from '../../../components/layout/CallToAction/CallToAction';
import styles from '../post.module.scss';
import { posts } from '../posts';

export default function CustomCRMFSM() {
    const { openContact } = useContact();
    const { headerAnimationComplete } = useHeaderAnimation();
    const { language, t } = useLanguage();
    const [contentVisible, setContentVisible] = useState(false);

    // Find the current post's metadata from the translation system
    const slug = 'stop-buying-software-custom-crm-fsm';
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
            <h2 className={styles.heading2}>The Hidden Costs of Generic CRM/FSM</h2>
            <h3 className={styles.heading3}>1. Workflow Compromise</h3>
            <p className={styles.paragraph}>Your business has evolved specific, often complex, processes to serve your customers and operate efficiently. Generic software forces you to conform to its logic, not yours. This can lead to inefficient workarounds, frustrated employees, and a diluted customer experience.</p>

            <h3 className={styles.heading3}>2. Feature Bloat and Missing Functionality</h3>
            <p className={styles.paragraph}>You pay for hundreds of features you'll never use, yet still find yourself missing that one critical function that's unique to your operation. These gaps often lead to manual data entry, external spreadsheets, or reliance on yet another third-party tool, fragmenting your data and creating new inefficiencies.</p>

            <h3 className={styles.heading3}>3. Spiraling Subscription and Customization Fees</h3>
            <p className={styles.paragraph}>The monthly per-user fees add up quickly. Then come the integration fees, the premium feature add-ons, and the consulting costs to customize the platform to even vaguely resemble your needs. What starts as an affordable solution can become a <Link href="/blog/vendor-lock-in-subscription-costs" className={styles.link}>substantial, ongoing drain on your resources</Link>.<sup><a href="#footnote-2" id="footnote-ref-2" className={styles.link}>2</a></sup></p>

            <h3 className={styles.heading3}>4. Data Silos and Integration Headaches</h3>
            <p className={styles.paragraph}>Your CRM often doesn't "talk" seamlessly with your ERP, accounting software, or even your website. This creates data silos, leading to inconsistencies, redundant data entry, and a lack of a unified view of your customer or operations.</p>

            <h2 className={styles.heading2}>The Power of Precision: Custom CRM & Business Management Systems</h2>
            <p className={styles.paragraph}>Imagine a system built specifically for *your* business—reflecting your exact workflows, integrating with your existing tools, and providing precisely the data you need, when you need it. That's the power of a <Link href="/blog/legacy-system-modernisation-guide" className={styles.link}>custom CRM or FSM system</Link>.<sup><a href="#footnote-3" id="footnote-ref-3" className={styles.link}>3</a></sup></p>
            <p className={styles.paragraph}>At DreamsByte, we build these systems from the ground up, transforming your operations from a tangled mess into a streamlined, efficient, and intelligent ecosystem.</p>

            <h3 className={styles.heading3}>What Custom Systems Unlock:</h3>
            <ul className={styles.list}>
                <li className={styles.listItem}><strong>Perfect Workflow Alignment:</strong> The software adapts to your business, not the other way around. Every screen, every button, every report is designed to support your team's exact processes.</li>
                <li className={styles.listItem}><strong>Elimination of Feature Bloat:</strong> You get precisely the features you need, built exactly how you need them, without the unnecessary complexity or cost of unused functions.</li>
                <li className={styles.listItem}><strong>Seamless Integration:</strong> Your custom system becomes the central hub, effortlessly connecting with your website, accounting software, marketing platforms, and any other tools critical to your business. This creates a unified data view and eliminates silos.</li>
                <li className={styles.listItem}><strong>Scalability & Future-Proofing:</strong> Built on modern, open-source technologies, your custom system can evolve with your business. Add new features, adapt to market changes, and scale effortlessly without being constrained by a third-party vendor's roadmap or pricing structure.</li>
                <li className={styles.listItem}><strong>Competitive Advantage:</strong> A highly optimized, custom system can provide a unique edge—faster service delivery, better customer insights, streamlined internal operations—that your competitors using generic software simply cannot match.</li>
            </ul>

            <h2 className={styles.heading2}>Real-World Impact: The "Electric Doctors" Case</h2>
            <p className={styles.paragraph}>One of our clients, an electrical contractor <Link href="/blog/from-problem-to-profit-case-studies" className={styles.link}>(like our "Electric Doctors" project)</Link>, was struggling with a fragmented system of spreadsheets, emails, and paper forms to manage their customer appointments, job tracking, and invoicing. Customer communication was inconsistent, and billing was prone to delays and errors.</p>
            <p className={styles.paragraph}>We built them a custom Field Service Management (FSM) system.<sup><a href="#footnote-4" id="footnote-ref-4" className={styles.link}>4</a></sup> It included automated appointment scheduling, real-time job status tracking for both the office and the technicians in the field, and integrated invoicing that automatically generated bills upon job completion. The result? A 30% increase in technician efficiency, a 50% reduction in billing errors, and significantly improved customer satisfaction.</p>

            <h2 className={styles.heading2}>Ownership vs. Rental: The Strategic Choice</h2>
            <p className={styles.paragraph}>Investing in a custom CRM or FSM system is a move from renting your business infrastructure to owning it. You are no longer at the mercy of a third-party vendor's pricing changes or feature decisions. You possess a unique, powerful asset that is built for your success and can evolve as you grow.</p>
            <p className={styles.paragraph}>If you're tired of fighting with generic software and want a system that actually works for you, it's time to consider a custom solution. Let's build the engine that drives your business forward.</p>
        </>
    );

    const ContentES = () => (
        <>
            <h2 className={styles.heading2}>Los costos ocultos de los CRM/FSM genéricos</h2>
            <h3 className={styles.heading3}>1. Compromiso del flujo de trabajo</h3>
            <p className={styles.paragraph}>Tu negocio desarrolló procesos específicos, a menudo complejos, para servir a tus clientes y operar de manera eficiente. El software genérico te obliga a adaptarte a su lógica, no a la tuya. Esto puede llevar a soluciones alternativas ineficientes, empleados frustrados y una experiencia de cliente diluida.</p>

            <h3 className={styles.heading3}>2. Exceso de funciones y falta de funcionalidad</h3>
            <p className={styles.paragraph}>Pagás por cientos de funciones que nunca vas a usar, pero igual te falta esa función crítica que es única para tu operación. Estos huecos suelen terminar en carga manual de datos, planillas externas o la dependencia de otra herramienta más, fragmentando tus datos y creando nuevas ineficiencias.</p>

            <h3 className={styles.heading3}>3. Tarifas de suscripción y personalización en aumento</h3>
            <p className={styles.paragraph}>Las tarifas mensuales por usuario suben rápido. Después vienen las tarifas de integración, los complementos de funciones premium y los costos de consultoría para que la plataforma se parezca, aunque sea un poco, a lo que necesitás. Lo que empieza como una solución accesible puede convertirse en un <Link href="/blog/vendor-lock-in-subscription-costs" className={styles.link}>drenaje sustancial y continuo de tus recursos</Link>.<sup><a href="#footnote-2" id="footnote-ref-2" className={styles.link}>2</a></sup></p>

            <h3 className={styles.heading3}>4. Silos de datos y dolores de cabeza de integración</h3>
            <p className={styles.paragraph}>Tu CRM a menudo no "habla" bien con tu ERP, software de contabilidad o incluso con tu sitio web. Esto crea silos de datos, lo que genera inconsistencias, carga redundante de datos y la falta de una visión unificada de tus clientes u operaciones.</p>

            <h2 className={styles.heading2}>El poder de la precisión: CRM a medida y sistemas de gestión empresarial</h2>
            <p className={styles.paragraph}>Imaginá un sistema construido específicamente para *tu* negocio, que refleje tus flujos de trabajo exactos, se integre con tus herramientas actuales y te brinde precisamente los datos que necesitás, cuando los necesitás. Ese es el poder de un <Link href="/blog/legacy-system-modernisation-guide" className={styles.link}>CRM o sistema FSM a medida</Link>.<sup><a href="#footnote-3" id="footnote-ref-3" className={styles.link}>3</a></sup></p>
            <p className={styles.paragraph}>En DreamsByte, construimos estos sistemas desde cero, transformando tus operaciones de un lío enredado a un ecosistema optimizado, eficiente e inteligente.</p>

            <h3 className={styles.heading3}>Lo que desbloquean los sistemas a medida:</h3>
            <ul className={styles.list}>
                <li className={styles.listItem}><strong>Alineación perfecta con el flujo de trabajo:</strong> El software se adapta a tu negocio, no al revés. Cada pantalla, cada botón, cada informe está diseñado para apoyar los procesos exactos de tu equipo.</li>
                <li className={styles.listItem}><strong>Eliminación del exceso de funciones:</strong> Tenés precisamente las funciones que necesitás, construidas exactamente como las necesitás, sin la complejidad innecesaria ni el costo de funciones que no usás.</li>
                <li className={styles.listItem}><strong>Integración fluida:</strong> Tu sistema a medida se convierte en el centro neurálgico, conectándose sin esfuerzo con tu sitio web, software de contabilidad, plataformas de marketing y cualquier otra herramienta crítica. Esto crea una vista de datos unificada y elimina los silos.</li>
                <li className={styles.listItem}><strong>Escalabilidad y futuro asegurado:</strong> Construido con tecnologías modernas de código abierto, tu sistema puede evolucionar con tu negocio. Agregá nuevas funciones, adaptate a los cambios del mercado y escalá sin las limitaciones de la hoja de ruta o la estructura de precios de un tercero.</li>
                <li className={styles.listItem}><strong>Ventaja competitiva:</strong> Un sistema a medida altamente optimizado puede darte una ventaja única (entrega de servicio más rápida, mejores insights de clientes, operaciones internas fluidas) que tus competidores usando software genérico simplemente no pueden igualar.</li>
            </ul>

            <h2 className={styles.heading2}>Impacto en el mundo real: El caso "Electric Doctors"</h2>
            <p className={styles.paragraph}>Uno de nuestros clientes, un contratista eléctrico <Link href="/blog/from-problem-to-profit-case-studies" className={styles.link}>(como nuestro proyecto "Electric Doctors")</Link>, estaba luchando con un sistema fragmentado de planillas, correos y formularios en papel para gestionar las citas de sus clientes, el seguimiento de trabajos y la facturación. La comunicación con los clientes era inconsistente y la facturación solía tener retrasos y errores.</p>
            <p className={styles.paragraph}>Les construimos un sistema de Gestión de Servicio de Campo (FSM) a medida.<sup><a href="#footnote-4" id="footnote-ref-4" className={styles.link}>4</a></sup> Incluía programación automática de citas, seguimiento del estado de los trabajos en tiempo real tanto para la oficina como para los técnicos en la calle, y facturación integrada que generaba los recibos automáticamente al terminar el trabajo. ¿El resultado? Un aumento del 30% en la eficiencia de los técnicos, una reducción del 50% en errores de facturación y una mejora significativa en la satisfacción del cliente.</p>

            <h2 className={styles.heading2}>Propiedad vs. Alquiler: La elección estratégica</h2>
            <p className={styles.paragraph}>Invertir en un CRM o FSM a medida es pasar de alquilar la infraestructura de tu negocio a ser el dueño. Ya no estás a merced de los cambios de precios o decisiones de funciones de un tercero. Tenés un activo único y potente construido para tu éxito que puede evolucionar a medida que crecés.</p>
            <p className={styles.paragraph}>Si estás cansado de pelear con software genérico y querés un sistema que realmente trabaje para vos, es hora de considerar una solución a medida. Construyamos el motor que impulse tu negocio hacia adelante.</p>
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
                                "The Problem with Generic CRM Software," <a href="https://www.forbes.com/sites/forbesagencycouncil/2021/05/27/the-problem-with-generic-crm-software/" target="_blank" rel="noopener noreferrer" className={styles.link}>Forbes</a>.
                                <a href="#footnote-ref-1" aria-label="Back to content" className={styles.link}> ↩</a>
                            </p>
                        </li>
                        <li id="footnote-2" className={styles.listItem}>
                            <p className={styles.paragraph}>
                                "The true cost of Salesforce," <a href="https://www.inc.com/bill-murphy-jr/the-true-cost-of-salesforce.html" target="_blank" rel="noopener noreferrer" className={styles.link}>Inc.</a>.
                                <a href="#footnote-ref-2" aria-label="Back to content" className={styles.link}> ↩</a>
                            </p>
                        </li>
                        <li id="footnote-3" className={styles.listItem}>
                            <p className={styles.paragraph}>
                                "Why custom CRM is better for your business," <a href="https://www.business.com/articles/custom-crm-vs-off-the-shelf/" target="_blank" rel="noopener noreferrer" className={styles.link}>Business.com</a>.
                                <a href="#footnote-ref-3" aria-label="Back to content" className={styles.link}> ↩</a>
                            </p>
                        </li>
                        <li id="footnote-4" className={styles.listItem}>
                            <p className={styles.paragraph}>
                                "Field Service Management: A Comprehensive Guide," <a href="https://www.gartner.com/en/information-technology/glossary/field-service-management-fsm" target="_blank" rel="noopener noreferrer" className={styles.link}>Gartner</a>.
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
