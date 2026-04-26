'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useContact } from '../../../contexts/ContactContext';
import { useHeaderAnimation } from '../../../contexts/HeaderAnimationContext';
import { useLanguage } from '../../../contexts/LanguageContext';
import CallToAction from '../../../components/layout/CallToAction/CallToAction';
import styles from '../post.module.scss';
import { posts } from '../posts';

export default function LegacySystemModernisation() {
    const { openContact } = useContact();
    const { headerAnimationComplete } = useHeaderAnimation();
    const { language, t } = useLanguage();
    const [contentVisible, setContentVisible] = useState(false);

    // Find the current post's metadata from the translation system
    const slug = 'legacy-system-modernisation-guide';
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
            <h2 className={styles.heading2}>The Cost of Doing Nothing</h2>
            <p className={styles.paragraph}>We've all seen it: the "essential" piece of software that everyone in the office hates. It's slow, it's clunky, it doesn't integrate with anything, and the only person who knew how it worked retired five years ago. This is a <strong>legacy system</strong>, and keeping it on life support is costing your business more than you realize.<sup><a href="#footnote-1" id="footnote-ref-1" className={styles.link}>1</a></sup></p>

            <h3 className={styles.heading3}>The Hidden "Legacy Tax":</h3>
            <ul className={styles.list}>
                <li className={styles.listItem}><strong>Inefficiency and Lost Productivity:</strong> Your team spends hours on manual workarounds, double-entry, and waiting for the system to respond.</li>
                <li className={styles.listItem}><strong>Technical Debt:</strong> Every new feature or integration becomes a complex and expensive hack. You are building on a foundation of sand.<sup><a href="#footnote-2" id="footnote-ref-2" className={styles.link}>2</a></sup></li>
                <li className={styles.listItem}><strong>Security Vulnerabilities:</strong> Outdated systems often lack modern security protocols and are no longer receiving updates, making them a prime target for cyberattacks.<sup><a href="#footnote-3" id="footnote-ref-3" className={styles.link}>3</a></sup></li>
                <li className={styles.listItem}><strong>Missed Opportunities:</strong> You can't take advantage of modern tools, APIs, or data analytics because your core system is a closed box.</li>
            </ul>

            <h2 className={styles.heading2}>Modernisation: A Strategic Roadmap</h2>
            <p className={styles.paragraph}>A full rip and replace sounds terrifying, but a modern approach to system modernisation is incremental, strategic, and focused on de-risking the entire process.</p>
            
            <h3 className={styles.heading3}>Step 1: Discover and Document</h3>
            <p className={styles.paragraph}>The first step isn't to write code. It's to talk to the people who actually use the system. We map out the real-world business processes, not just what the old software does. We identify the core functions that provide 80% of the value and the features that no one has used in a decade.</p>

            <h3 className={styles.heading3}>Step 2: Build the New Core</h3>
            <p className={styles.paragraph}>We start by building a clean, modern, and stable core for the new system using modern technologies. We focus on getting the most critical piece of functionality up and running first. This becomes the new foundation.</p>

            <h3 className={styles.heading3}>Step 3: The Incremental Changeover (The Strangler Fig Pattern)</h3>
            <p className={styles.paragraph}>We don't switch everything at once. We use a method called the "Strangler Fig Pattern."<sup><a href="#footnote-4" id="footnote-ref-4" className={styles.link}>4</a></sup> <Link href="/blog/our-approach-to-software" className={styles.link}>The new system is put in place *around* the old one</Link>. We start by redirecting one small piece of functionality to the new application. Over time, more and more functionality is strangled from the old system and replaced by the new one, until the legacy application has no responsibilities left and can be safely turned off.</p>
            <p className={styles.paragraph}>This approach minimizes disruption, allows your team to learn the new system gradually, and provides immediate value at each stage.</p>

            <h2 className={styles.heading2}>The Payoff: A System That Accelerates Your Business</h2>
            <p className={styles.paragraph}>Modernizing your legacy system is one of the highest-ROI investments a business can make. The results are transformative:</p>
            <ul className={styles.list}>
                <li className={styles.listItem}><Link href="/blog/stop-buying-software-custom-crm-fsm" className={styles.link}><strong>A Happier, More Productive Team:</strong> When you replace a tool your team hates with one they love, their efficiency and morale skyrockets.</Link></li>
                <li className={styles.listItem}><strong>Actionable Business Intelligence:</strong> Modern systems have proper dashboards and reporting. You can finally get a clear, real-time view of your business operations.</li>
                <li className={styles.listItem}><strong>The Ability to Say "Yes":</strong> When your team has a great idea for a new feature or integration, your answer can finally be "Yes, let's do it," instead of "The system can't handle that."</li>
                <li className={styles.listItem}><Link href="/blog/devops-for-small-business" className={styles.link}><strong>Peace of Mind:</strong> Knowing your critical business data is secure, backed up, and running on a stable, modern platform is invaluable.</Link></li>
            </ul>

            <h2 className={styles.heading2}>Stop Paying the Legacy Tax</h2>
            <p className={styles.paragraph}>Every day you keep that old system running, you are paying a tax on your business's future. It's time to stop polishing and start replacing.</p>
        </>
    );

    const ContentES = () => (
        <>
            <h2 className={styles.heading2}>El costo de no hacer nada</h2>
            <p className={styles.paragraph}>Todos lo vimos: ese software "esencial" que todos en la oficina odian. Es lento, es tosco, no se integra con nada y la única persona que sabía cómo funcionaba se jubiló hace cinco años. Esto es un <strong>sistema legado</strong>, y mantenerlo con vida le está costando a tu negocio más de lo que creés.<sup><a href="#footnote-1" id="footnote-ref-1" className={styles.link}>1</a></sup></p>

            <h3 className={styles.heading3}>El "impuesto legado" oculto:</h3>
            <ul className={styles.list}>
                <li className={styles.listItem}><strong>Ineficiencia y pérdida de productividad:</strong> Tu equipo pierde horas en soluciones manuales, carga doble de datos y esperando a que el sistema responda.</li>
                <li className={styles.listItem}><strong>Deuda técnica:</strong> Cada nueva función o integración se convierte en un "parche" complejo y caro. Estás construyendo sobre cimientos de arena.<sup><a href="#footnote-2" id="footnote-ref-2" className={styles.link}>2</a></sup></li>
                <li className={styles.listItem}><strong>Vulnerabilidades de seguridad:</strong> Los sistemas antiguos suelen carecer de protocolos de seguridad modernos y ya no reciben actualizaciones, lo que los hace un blanco fácil para ataques.<sup><a href="#footnote-3" id="footnote-ref-3" className={styles.link}>3</a></sup></li>
                <li className={styles.listItem}><strong>Oportunidades perdidas:</strong> No podés aprovechar herramientas modernas, APIs o análisis de datos porque tu sistema central es una caja cerrada.</li>
            </ul>

            <h2 className={styles.heading2}>Modernización: Una hoja de ruta estratégica</h2>
            <p className={styles.paragraph}>Un reemplazo total de un día para el otro suena aterrador, pero un enfoque moderno para la modernización de sistemas es incremental, estratégico y se enfoca en reducir los riesgos de todo el proceso.</p>
            
            <h3 className={styles.heading3}>Paso 1: Descubrimiento y documentación</h3>
            <p className={styles.paragraph}>El primer paso no es escribir código. Es hablar con las personas que realmente usan el sistema. Mapeamos los procesos de negocio reales, no solo lo que hace el software viejo. Identificamos las funciones centrales que dan el 80% del valor y las funciones que nadie usa hace una década.</p>

            <h3 className={styles.heading3}>Paso 2: Construir el nuevo núcleo</h3>
            <p className={styles.paragraph}>Empezamos construyendo un núcleo limpio, moderno y estable para el nuevo sistema usando tecnologías actuales. Nos enfocamos en poner en marcha la funcionalidad más crítica primero. Esto se convierte en la nueva base.</p>

            <h3 className={styles.heading3}>Paso 3: El cambio incremental (Patrón Strangler Fig)</h3>
            <p className={styles.paragraph}>No cambiamos todo a la vez. Usamos un método llamado "Patrón Strangler Fig" (Higo Estrangulador).<sup><a href="#footnote-4" id="footnote-ref-4" className={styles.link}>4</a></sup> <Link href="/blog/our-approach-to-software" className={styles.link}>El nuevo sistema se coloca *alrededor* del viejo</Link>. Empezamos redirigiendo una pequeña pieza de funcionalidad a la nueva aplicación. Con el tiempo, se van "estrangulando" más funciones del sistema viejo hasta que la aplicación legada no tiene más responsabilidades y se puede apagar de forma segura.</p>
            <p className={styles.paragraph}>Este enfoque minimiza las interrupciones, permite que tu equipo aprenda el nuevo sistema gradualmente y brinda valor inmediato en cada etapa.</p>

            <h2 className={styles.heading2}>El resultado: Un sistema que acelera tu negocio</h2>
            <p className={styles.paragraph}>Modernizar tu sistema legado es una de las inversiones con mayor ROI que puede hacer una empresa. Los resultados son transformadores:</p>
            <ul className={styles.list}>
                <li className={styles.listItem}><Link href="/blog/stop-buying-software-custom-crm-fsm" className={styles.link}><strong>Un equipo más feliz y productivo:</strong> Cuando reemplazás una herramienta que tu equipo odia por una que aman, la eficiencia y el ánimo suben por las nubes.</Link></li>
                <li className={styles.listItem}><strong>Inteligencia de negocio accionable:</strong> Los sistemas modernos tienen tableros de control e informes reales. Finalmente podés tener una visión clara y en tiempo real de tus operaciones.</li>
                <li className={styles.listItem}><strong>La capacidad de decir que "sí":</strong> Cuando tu equipo tiene una gran idea para una nueva función o integración, tu respuesta finalmente puede ser "Sí, hagámoslo", en lugar de "El sistema no lo banca".</li>
                <li className={styles.listItem}><Link href="/blog/devops-for-small-business" className={styles.link}><strong>Tranquilidad:</strong> Saber que tus datos críticos están seguros, respaldados y corriendo en una plataforma estable y moderna no tiene precio.</Link></li>
            </ul>

            <h2 className={styles.heading2}>Dejá de pagar el impuesto legado</h2>
            <p className={styles.paragraph}>Cada día que mantenés ese sistema viejo funcionando, estás pagando un impuesto sobre el futuro de tu negocio. Es hora de dejar de emparchar y empezar a reemplazar.</p>
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
                                "Legacy System Modernization Strategies for 2023," <a href="https://vikasietum.com/blog/legacy-system-modernization-strategies/" target="_blank" rel="noopener noreferrer" className={styles.link}>Vikasietum</a>.
                                <a href="#footnote-ref-1" aria-label="Back to content" className={styles.link}> ↩</a>
                            </p>
                        </li>
                        <li id="footnote-2" className={styles.listItem}>
                            <p className={styles.paragraph}>
                                "The Cost of Technical Debt: A Review," <a href="https://arxiv.org/abs/1903.04757" target="_blank" rel="noopener noreferrer" className={styles.link}>arXiv</a>.
                                <a href="#footnote-ref-2" aria-label="Back to content" className={styles.link}> ↩</a>
                            </p>
                        </li>
                        <li id="footnote-3" className={styles.listItem}>
                            <p className={styles.paragraph}>
                                "Legacy Systems Vulnerabilities," <a href="https://infoguardsecurity.com/legacy-systems-vulnerabilities/" target="_blank" rel="noopener noreferrer" className={styles.link}>InfoGuard Security</a>.
                                <a href="#footnote-ref-3" aria-label="Back to content" className={styles.link}> ↩</a>
                            </p>
                        </li>
                        <li id="footnote-4" className={styles.listItem}>
                            <p className={styles.paragraph}>
                                "Strangler Fig Pattern," <a href="https://vfunction.com/blog/strangler-fig-pattern-the-best-microservices-migration-strategy/" target="_blank" rel="noopener noreferrer" className={styles.link}>vFunction</a>.
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
