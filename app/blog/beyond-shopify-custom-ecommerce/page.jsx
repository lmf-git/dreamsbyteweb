'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useContact } from '../../../contexts/ContactContext';
import { useHeaderAnimation } from '../../../contexts/HeaderAnimationContext';
import { useLanguage } from '../../../contexts/LanguageContext';
import CallToAction from '../../../components/layout/CallToAction/CallToAction';
import styles from '../post.module.scss';
import { posts } from '../posts';

export default function BeyondShopify() {
    const { openContact } = useContact();
    const { headerAnimationComplete } = useHeaderAnimation();
    const { language, t } = useLanguage();
    const [contentVisible, setContentVisible] = useState(false);

    // Find the current post's metadata from the translation system
    const slug = 'beyond-shopify-custom-ecommerce';
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
            <h2 className={styles.heading2}>The Shopify Ceiling</h2>
            <p className={styles.paragraph}>Shopify is a phenomenal tool. It has empowered millions of entrepreneurs to launch online stores quickly and affordably. For a straightforward business that sells standard products, it's often the perfect place to start. You can get a store up and running in a weekend, and that's a powerful thing.</p>
            <p className={styles.paragraph}>But as your business grows, you may start to feel the constraints. The one-size-fits-all model begins to chafe. <Link href="/blog/vendor-lock-in-subscription-costs" className={styles.link}>The transaction fees, the app subscription costs</Link>, and the creative limitations start to add up. You hit the Shopify ceiling—the point where the platform that helped you grow is now holding you back.</p>

            <h2 className={styles.heading2}>Signs You're Outgrowing Shopify</h2>
            <p className={styles.paragraph}>How do you know you've hit the ceiling? Look for these common pain points:</p>
            
            <h3 className={styles.heading3}>1. Your App Stack is a Jenga Tower</h3>
            <p className={styles.paragraph}>Your store relies on a dozen different third-party apps for subscriptions, loyalty programs, wholesale pricing, and custom product options. Each app has its own monthly fee, <Link href="/blog/performance-first-website-lighthouse" className={styles.link}>adds bloat to your site</Link>, and creates potential conflicts. Your cost of goods sold is being eaten alive by a Frankenstein's monster of app subscriptions.<sup><a href="#footnote-1" id="footnote-ref-1" className={styles.link}>1</a></sup></p>

            <h3 className={styles.heading3}>2. You Have Unique Business Logic</h3>
            <p className={styles.paragraph}>Your business isn't standard, so why should your software be? Maybe you sell customizable products, offer complex bundled deals, or have a unique fulfillment process. Trying to shoehorn this complexity into Shopify's rigid structure requires awkward workarounds that frustrate both your team and your customers.</p>

            <h3 className={styles.heading3}>3. You're Drowning in Transaction Fees</h3>
            <p className={styles.paragraph}>You're paying your Shopify subscription, credit card processing fees, and on top of that, Shopify takes an additional cut (up to 2%) of every sale if you don't use Shopify Payments. As your revenue grows, this becomes a significant and unnecessary tax on your success.<sup><a href="#footnote-2" id="footnote-ref-2" className={styles.link}>2</a></sup></p>

            <h3 className={styles.heading3}>4. Your Brand Experience Feels Generic</h3>
            <p className={styles.paragraph}>You're using a premium theme, but your store still looks like a thousand other Shopify stores. You want a truly unique, immersive brand experience, but the template system forces you into a box. The checkout process, in particular, is notoriously difficult to customize, breaking the seamless brand journey at the most critical moment.<sup><a href="#footnote-3" id="footnote-ref-3" className={styles.link}>3</a></sup></p>
            
            <h2 className={styles.heading2}>The Power of Ownership: The Custom E-commerce Solution</h2>
            <p className={styles.paragraph}>A custom e-commerce application is not about reinventing the wheel. It's about building a wheel that is perfectly suited to your vehicle. It integrates your specific business logic, brand identity, and operational workflows into a single, cohesive system <Link href="/blog/from-problem-to-profit-case-studies" className={styles.link}>that you own completely</Link>.<sup><a href="#footnote-4" id="footnote-ref-4" className={styles.link}>4</a></sup></p>
            
            <h3 className={styles.heading3}>What a Custom Solution Unlocks:</h3>
            <ul className={styles.list}>
                <li className={styles.listItem}><strong>Perfectly Tailored Workflows:</strong> Your admin dashboard is built for *your* process. Manage complex orders, unique fulfillment logic, and specific customer needs with an interface designed for your team.</li>
                <li className={styles.listItem}><strong>Zero Transaction Fees (Beyond Processing):</strong> The 0.5% to 2% platform tax vanishes overnight. That money goes directly to your bottom line, often paying for the custom development within a year or two.</li>
                <li className={styles.listItem}><strong>Complete Brand Control:</strong> From the landing page to the final thank you, every pixel is on-brand. Create a checkout experience that builds trust and maximizes conversions, without being constrained by a template.</li>
                <li className={styles.listItem}><strong>Deeper Integrations:</strong> Connect your store directly to your accounting software, warehouse management system (WMS), or customer relationship manager (CRM) in a deep, robust way that off-the-shelf apps can't match.</li>
                <li className={styles.listItem}><strong>Superior Performance:</strong> A custom build is lean and optimized. No app bloat, no unnecessary scripts. Just a fast, responsive experience that delights customers and boosts search rankings.</li>
            </ul>

            <h2 className={styles.heading2}>Case Study: From Clunky Apps to Custom Logic</h2>
            <p className={styles.paragraph}>Consider a business that sells subscription boxes with customizable options each month. On Shopify, this is a nightmare. It requires multiple apps: one for the subscription, one for the product options, and another to handle the custom fulfillment logic. The apps barely work together, the monthly cost is over $300, and the customer experience is confusing.</p>
            <p className={styles.paragraph}>With a custom application, this entire flow is built into the core system. Customers manage their subscriptions and choices from a single, intuitive dashboard. The fulfillment team gets a clear, automated report of what to pack for each customer. The cost is a one-time development investment, and the result is a seamless experience that increases customer retention and operational efficiency.</p>

            <h2 className={styles.heading2}>Is It Time to Go Custom?</h2>
            <p className={styles.paragraph}>Making the leap from Shopify to a custom solution is a significant decision. It's not for businesses just starting out. But if you are an established, growing business feeling constrained by your platform, the question isn't *if* you'll need to move, but *when*.</p>
            <p className={styles.paragraph}>Calculate the true cost of your current platform: subscription fees + app fees + transaction fees + the cost of manual workarounds. Then consider the opportunity cost of a generic brand experience and stunted growth. The ROI on owning your e-commerce infrastructure is often clearer and faster than you think.</p>
        </>
    );

    const ContentES = () => (
        <>
            <h2 className={styles.heading2}>El techo de Shopify</h2>
            <p className={styles.paragraph}>Shopify es una herramienta fenomenal. Permitió que millones de emprendedores lancen sus tiendas online de forma rápida y accesible. Para un negocio directo que vende productos estándar, suele ser el lugar perfecto para empezar. Podés tener una tienda funcionando en un fin de semana, y eso es algo muy potente.</p>
            <p className={styles.paragraph}>Pero a medida que tu negocio crece, podés empezar a sentir las limitaciones. El modelo de "talle único" empieza a apretar. <Link href="/blog/vendor-lock-in-subscription-costs" className={styles.link}>Las comisiones por transacción, los costos de suscripción de las apps</Link> y las limitaciones creativas empiezan a sumar. Llegaste al techo de Shopify: el punto donde la plataforma que te ayudó a crecer ahora te está frenando.</p>

            <h2 className={styles.heading2}>Señales de que Shopify te quedó chico</h2>
            <p className={styles.paragraph}>¿Cómo sabés si llegaste al techo? Buscá estos problemas comunes:</p>
            
            <h3 className={styles.heading3}>1. Tu stack de apps es una torre de Jenga</h3>
            <p className={styles.paragraph}>Tu tienda depende de una docena de apps de terceros para suscripciones, programas de fidelidad, precios mayoristas y opciones de productos a medida. Cada app tiene su propia cuota mensual, <Link href="/blog/performance-first-website-lighthouse" className={styles.link}>carga tu sitio de código innecesario</Link> y genera conflictos. Tus márgenes se los está comiendo un "monstruo de Frankenstein" de suscripciones de apps.<sup><a href="#footnote-1" id="footnote-ref-1" className={styles.link}>1</a></sup></p>

            <h3 className={styles.heading3}>2. Tenés una lógica de negocio única</h3>
            <p className={styles.paragraph}>Tu negocio no es estándar, ¿entonces por qué debería serlo tu software? Quizás vendés productos personalizables, ofrecés combos complejos o tenés un proceso de logística único. Intentar meter esa complejidad en la estructura rígida de Shopify requiere soluciones raras que frustran a tu equipo y a tus clientes.</p>

            <h3 className={styles.heading3}>3. Te ahogás en comisiones por transacción</h3>
            <p className={styles.paragraph}>Pagás tu suscripción de Shopify, las comisiones de la tarjeta y, encima de eso, Shopify se lleva una tajada extra (hasta el 2%) de cada venta si no usás su pasarela de pagos. A medida que tus ventas crecen, esto se convierte en un impuesto innecesario sobre tu éxito.<sup><a href="#footnote-2" id="footnote-ref-2" className={styles.link}>2</a></sup></p>

            <h3 className={styles.heading3}>4. Tu experiencia de marca se siente genérica</h3>
            <p className={styles.paragraph}>Usás un tema premium, pero tu tienda se ve igual a otras mil tiendas de Shopify. Querés una experiencia de marca única e inmersiva, pero el sistema de plantillas te encierra en una caja. El proceso de pago (checkout), en particular, es muy difícil de personalizar, rompiendo el viaje de tu marca en el momento más crítico.<sup><a href="#footnote-3" id="footnote-ref-3" className={styles.link}>3</a></sup></p>
            
            <h2 className={styles.heading2}>El poder de la propiedad: La solución de E-commerce a medida</h2>
            <p className={styles.paragraph}>Una aplicación de e-commerce a medida no se trata de reinventar la rueda. Se trata de construir la rueda perfecta para tu vehículo. Integra tu lógica de negocio, tu identidad de marca y tus flujos operativos en un solo sistema coherente <Link href="/blog/from-problem-to-profit-case-studies" className={styles.link}>que te pertenece totalmente</Link>.<sup><a href="#footnote-4" id="footnote-ref-4" className={styles.link}>4</a></sup></p>
            
            <h3 className={styles.heading3}>Lo que desbloquea una solución a medida:</h3>
            <ul className={styles.list}>
                <li className={styles.listItem}><strong>Flujos de trabajo a medida:</strong> Tu panel de administración se construye para *tu* proceso. Gestioná pedidos complejos y logística única con una interfaz pensada para tu equipo.</li>
                <li className={styles.listItem}><strong>Cero comisiones de plataforma:</strong> Ese 0,5% a 2% extra desaparece. Esa plata va directo a tu bolsillo, pagando la inversión del desarrollo en poco tiempo.</li>
                <li className={styles.listItem}><strong>Control total de marca:</strong> Desde la página de inicio hasta el "gracias por tu compra", cada píxel es tuyo. Creá un checkout que genere confianza y maximice ventas sin limitaciones de plantillas.</li>
                <li className={styles.listItem}><strong>Integraciones profundas:</strong> Conectá tu tienda directamente con tu software contable, sistema de stock o CRM de una forma que las apps genéricas no pueden.</li>
                <li className={styles.listItem}><strong>Rendimiento superior:</strong> Un desarrollo a medida es liviano y optimizado. Sin basura de apps, sin scripts innecesarios. Solo una experiencia rápida que encanta a los clientes y mejora el SEO.</li>
            </ul>

            <h2 className={styles.heading2}>Caso de estudio: De apps toscas a lógica propia</h2>
            <p className={styles.paragraph}>Imaginá un negocio que vende cajas de suscripción con opciones personalizables cada mes. En Shopify, esto es una pesadilla. Requiere varias apps: una para la suscripción, otra para las opciones y otra para la logística a medida. Las apps apenas se hablan entre sí, el costo mensual supera los $300 y la experiencia para el cliente es confusa.</p>
            <p className={styles.paragraph}>Con una aplicación a medida, todo este flujo está en el corazón del sistema. Los clientes gestionan todo desde un solo panel intuitivo. El equipo de depósito recibe un informe claro y automático de qué empacar para cada uno. El costo es una inversión de desarrollo única y el resultado es una experiencia fluida que aumenta la retención y la eficiencia.</p>

            <h2 className={styles.heading2}>¿Es momento de pasar a algo a medida?</h2>
            <p className={styles.paragraph}>Dar el salto de Shopify a una solución propia es una decisión importante. No es para negocios que recién empiezan. Pero si sos una empresa establecida que se siente frenada por su plataforma, la pregunta no es *si* vas a tener que mudarte, sino *cuándo*.</p>
            <p className={styles.paragraph}>Calculá el costo real de tu plataforma actual: cuotas + apps + comisiones + costo de soluciones manuales. Después considerá el costo de oportunidad de una marca genérica y un crecimiento estancado. El ROI de ser dueño de tu propia infraestructura de e-commerce suele ser más claro y rápido de lo que pensás.</p>
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
                                "Critical Factors Affecting E-Commerce Platform Selection," <a href="https://www.semanticscholar.org/paper/Critical-Factors-Affecting-E-Commerce-Platform-Hossain-Al-Shaikh/b9c02d1d0526017b2b0051e70e30906296c09819" target="_blank" rel="noopener noreferrer" className={styles.link}>Semantic Scholar</a>.
                                <a href="#footnote-ref-1" aria-label="Back to content" className={styles.link}> ↩</a>
                            </p>
                        </li>
                        <li id="footnote-2" className={styles.listItem}>
                            <p className={styles.paragraph}>
                                "Critical Factors Affecting E-Commerce Platform Selection," <a href="https://www.semanticscholar.org/paper/Critical-Factors-Affecting-E-Commerce-Platform-Hossain-Al-Shaikh/b9c02d1d0526017b2b0051e70e30906296c09819" target="_blank" rel="noopener noreferrer" className={styles.link}>Semantic Scholar</a>.
                                <a href="#footnote-ref-2" aria-label="Back to content" className={styles.link}> ↩</a>
                            </p>
                        </li>
                        <li id="footnote-3" className={styles.listItem}>
                            <p className={styles.paragraph}>
                                "E-commerce Made Easy: Key Factors to Consider When Choosing Your Platform," <a href="https://www.sunzinet.com/en/magazine/e-commerce-made-easy-key-factors-to-consider-when-choosing-your-platform/" target="_blank" rel="noopener noreferrer" className={styles.link}>Sunzinet</a>.
                                <a href="#footnote-ref-3" aria-label="Back to content" className={styles.link}> ↩</a>
                            </p>
                        </li>
                        <li id="footnote-4" className={styles.listItem}>
                            <p className={styles.paragraph}>
                                "Critical Factors Affecting E-Commerce Platform Selection," <a href="https://www.semanticscholar.org/paper/Critical-Factors-Affecting-E-Commerce-Platform-Hossain-Al-Shaikh/b9c02d1d0526017b2b0051e70e30906296c09819" target="_blank" rel="noopener noreferrer" className={styles.link}>Semantic Scholar</a>.
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
