'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useContact } from '../../../contexts/ContactContext';
import { useHeaderAnimation } from '../../../contexts/HeaderAnimationContext';
import { useLanguage } from '../../../contexts/LanguageContext';
import CallToAction from '../../../components/layout/CallToAction/CallToAction';
import styles from '../post.module.scss';
import { posts } from '../posts';

export default function VendorLockIn() {
    const { openContact } = useContact();
    const { headerAnimationComplete } = useHeaderAnimation();
    const { language, t } = useLanguage();
    const [contentVisible, setContentVisible] = useState(false);

    const slug = 'vendor-lock-in-subscription-costs';
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
            <h2 className={styles.heading2}>The Math Doesn't Lie</h2>
            <p className={styles.paragraph}>Let's run the numbers on a typical website builder subscription:</p>

            <ul className={styles.list}>
                <li className={styles.listItem}>Website builder: £25/month</li>
                <li className={styles.listItem}>E-commerce features: £20/month</li>
                <li className={styles.listItem}>Email marketing: £30/month</li>
                <li className={styles.listItem}>Advanced features: £15/month</li>
                <li className={styles.listItem}><strong>Total: £90/month or £1,080/year</strong></li>
            </ul>

            <p className={styles.paragraph}>After five years, you've paid £5,400. After ten years, £10,800. And what do you own? Nothing. Stop paying, and your entire online presence vanishes.</p>

            <h2 className={styles.heading2}>What Vendor Lock-In Actually Means</h2>
            <p className={styles.paragraph}>When you build on <Link href="/blog/stop-buying-software-custom-crm-fsm" className={styles.link}>someone else's platform</Link>, you're accepting several critical limitations:</p>

            <h3 className={styles.heading3}>You Don't Own Your Data</h3>
            <p className={styles.paragraph}>Your customer data, content, and digital assets live on their servers under their terms. Many platforms make it deliberately difficult to export your data, and even when you can, it's often in formats that are useless without their proprietary tools.<sup><a href="#footnote-1" id="footnote-ref-1" className={styles.link}>1</a></sup></p>

            <h3 className={styles.heading3}>You Can't Leave Without Starting Over</h3>
            <p className={styles.paragraph}>Switching platforms means rebuilding everything from scratch. Your URLs change, breaking all your search engine rankings and inbound links. Your custom work gets abandoned. Your integrated services need reconnecting.</p>

            <h3 className={styles.heading3}>Features Appear and Disappear at Their Whim</h3>
            <p className={styles.paragraph}>Platforms regularly remove features, change pricing tiers, or sunset entire products. You have no control and no recourse. Remember when they said that feature was included? Too bad, it's now a premium add-on.</p>

            <h3 className={styles.heading3}>You're Competing With Your Platform</h3>
            <p className={styles.paragraph}>Many platforms now compete directly with their customers. Shopify launched Shopify Balance and Shop Pay. Squarespace offers Squarespace Scheduling.<sup><a href="#footnote-2" id="footnote-ref-2" className={styles.link}>2</a></sup> They're not just your vendor, they're your competitor.</p>

            <h2 className={styles.heading2}>The Hidden Costs Keep Growing</h2>
            <p className={styles.paragraph}>Beyond the obvious price premium, vendor lock-in creates expenses most businesses don't anticipate:</p>

            <ul className={styles.list}>
                <li className={styles.listItem}><strong>Transaction Fees:</strong> Many platforms take a percentage of every sale on top of your subscription if you don't use their in-house payment processor.<sup><a href="#footnote-3" id="footnote-ref-3" className={styles.link}>3</a></sup></li>
                <li className={styles.listItem}><strong>Forced Upgrades:</strong> Your traffic grew? Congratulations, you're now required to upgrade to a more expensive tier</li>
                <li className={styles.listItem}><strong>Integration Costs:</strong> Each third-party tool integration adds another subscription</li>
                <li className={styles.listItem}><strong>Premium Support:</strong> Real help costs extra, basic support is deliberately unhelpful</li>
                <li className={styles.listItem}><strong>Custom Features:</strong> Want something specific to your business? That'll be their enterprise plan at 10x the price</li>
            </ul>

            <p className={styles.paragraph}>These companies enjoy massive profit margins by charging exorbitant subscription fees for services that often cost them very little to provide. The operational cost of storing user data, for example, is minimal compared to the tens or even hundreds of dollars billed monthly to businesses. This allows them to generate significant revenue from recurring payments without delivering proportional value or ownership.<sup><a href="#footnote-4" id="footnote-ref-4" className={styles.link}>4</a></sup></p>

            <h2 className={styles.heading2}>The Alternative: Ownership</h2>
            <p className={styles.paragraph}>When you own your website and infrastructure, you <Link href="/blog/our-approach-to-software" className={styles.link}>control your destiny</Link>:</p>

            <ul className={styles.list}>
                <li className={styles.listItem}><strong>One-Time Investment:</strong> Pay once for development, own it forever</li>
                <li className={styles.listItem}><strong>Minimal Ongoing Costs:</strong> Just hosting and domain, often under £10/month</li>
                <li className={styles.listItem}><strong>Complete Control:</strong> Modify anything, integrate anything, customize everything</li>
                <li className={styles.listItem}><strong>Your Data, Your Terms:</strong> Everything lives in formats you can access and use</li>
                <li className={styles.listItem}><strong>Freedom to Move:</strong> Change hosts, add features, or redesign without starting over</li>
            </ul>

            <h2 className={styles.heading2}>But What About Ease of Use?</h2>
            <p className={styles.paragraph}>Platform companies sell convenience, and there's truth to it—initially. Drag-and-drop builders are easy for basic sites. But that simplicity is superficial:</p>

            <ul className={styles.list}>
                <li className={styles.listItem}>Want something they didn't anticipate? You're stuck</li>
                <li className={styles.listItem}>Need to integrate with your existing systems? Probably impossible</li>
                <li className={styles.listItem}>Have specific workflow requirements? Use theirs or nothing</li>
            </ul>

            <p className={styles.paragraph}>Meanwhile, a properly built custom site with a modern CMS gives you the same ease of content management without the constraints. You get the simplicity where it matters—daily operations—while maintaining complete flexibility everywhere else.</p>

            <h2 className={styles.heading2}>The DreamsByte Difference</h2>
            <p className={styles.paragraph}>We build websites you own outright. No monthly fees beyond basic hosting. No proprietary systems. No vendor lock-in. Just clean, modern code that you can host anywhere, modify freely, and own forever.</p>

            <p className={styles.paragraph}>Our upfront costs are transparent and competitive. Over any reasonable time horizon, ownership is dramatically cheaper than subscription platforms. And it's not just about money—it's about control, flexibility, and building a real asset for your business.</p>

            <h2 className={styles.heading2}>An Asset That Pays For Itself</h2>
            <p className={styles.paragraph}>Our philosophy is simple: we don’t charge fees on top of fees, and we don’t aim to lock you into a subscription. We build you an asset. The goal is for our work to pay for itself by providing more value than it costs, giving you a permanent tool for growth rather than a recurring line item in your budget.</p>
            <p className={styles.paragraph}>Consider a common scenario for a growing business: the need for a robust e-commerce solution. Many full-service digital agencies or premium SaaS platforms will charge a hefty monthly retainer for this. This often includes the platform fee, mandatory plugins, priority support, and maintenance that does little more than keep the lights on.</p>

            <h3 className={styles.heading3}>Let's Do the Math: Ownership vs. A High-Cost Rental</h3>
            <p className={styles.paragraph}>A typical all-inclusive e-commerce subscription or agency maintenance plan can easily cost <strong>$450 per month</strong>. Over time, this rental model becomes incredibly expensive.</p>
            <ul className={styles.list}>
                <li className={styles.listItem}>Cost after 1 Year: $5,400</li>
                <li className={styles.listItem}>Cost after 3 Years: $16,200</li>
                <li className={styles.listItem}><strong>Asset Owned after 3 Years: $0.</strong> You've spent a fortune and still own nothing.</li>
            </ul>
            <p className={styles.paragraph}>Now, let's compare that to a one-time investment in a custom solution. Based on our own <Link href="/services" className={styles.link}>service pricing</Link>, a powerful, custom-built <strong>E-commerce Application</strong> might be a one-time project cost of around <strong>$8,000</strong>.</p>
            <p className={styles.paragraph}>The break-even point is reached in just under 18 months ($8,000 ÷ $450/month ≈ 17.8 months). After that, the savings are substantial.</p>
            <ul className={styles.list}>
                <li className={styles.listItem}><strong>Total cost after 3 years: $8,000.</strong></li>
                <li className={styles.listItem}><strong>Total savings compared to subscription: $8,200.</strong></li>
            </ul>
            <p className={styles.paragraph}>In three years, not only have you saved over eight thousand dollars, but you also own a high-performance, scalable asset tailored specifically to your business. You are free from vendor lock-in, arbitrary price hikes, and transaction fees. The work has more than paid for itself.</p>

            <h2 className={styles.heading2}>Break Free</h2>
            <p className={styles.paragraph}>If you're currently trapped in a subscription platform, it's not too late to escape. Yes, there's an upfront cost to migrate. But every month you wait is another month of payments toward something you'll never own.</p>
        </>
    );

    const ContentES = () => (
        <>
            <h2 className={styles.heading2}>Las cuentas no mienten</h2>
            <p className={styles.paragraph}>Hagamos los números para una suscripción típica a un creador de sitios web:</p>

            <ul className={styles.list}>
                <li className={styles.listItem}>Creador de sitios web: £25/mes</li>
                <li className={styles.listItem}>Funciones de e-commerce: £20/mes</li>
                <li className={styles.listItem}>Email marketing: £30/mes</li>
                <li className={styles.listItem}>Funciones avanzadas: £15/mes</li>
                <li className={styles.listItem}><strong>Total: £90/mes o £1.080/año</strong></li>
            </ul>

            <p className={styles.paragraph}>Después de cinco años, habrás pagado £5.400. Después de diez años, £10.800. ¿Y qué es lo que te pertenece? Nada. Dejá de pagar y toda tu presencia online desaparece.</p>

            <h2 className={styles.heading2}>Lo que realmente significa la dependencia del proveedor (Vendor Lock-In)</h2>
            <p className={styles.paragraph}>Cuando construís sobre la <Link href="/blog/stop-buying-software-custom-crm-fsm" className={styles.link}>plataforma de otra persona</Link>, aceptás varias limitaciones críticas:</p>

            <h3 className={styles.heading3}>No sos dueño de tus datos</h3>
            <p className={styles.paragraph}>Los datos de tus clientes, el contenido y tus activos digitales viven en sus servidores bajo sus condiciones. Muchas plataformas dificultan deliberadamente la exportación de tus datos e incluso cuando podés hacerlo, suelen estar en formatos inútiles sin sus herramientas propietarias.<sup><a href="#footnote-1" id="footnote-ref-1" className={styles.link}>1</a></sup></p>

            <h3 className={styles.heading3}>No podés irte sin empezar de cero</h3>
            <p className={styles.paragraph}>Cambiar de plataforma significa reconstruir todo desde el principio. Tus URLs cambian, rompiendo todos tus rankings en los buscadores y los enlaces entrantes. Tu trabajo a medida se pierde. Tus servicios integrados necesitan reconectarse.</p>

            <h3 className={styles.heading3}>Las funcionalidades aparecen y desaparecen a su antojo</h3>
            <p className={styles.paragraph}>Las plataformas eliminan funcionalidades con frecuencia, cambian los niveles de precios o retiran productos enteros. No tenés control ni recurso alguno. ¿Recordás cuando dijeron que esa función estaba incluida? Mala suerte, ahora es un complemento premium.</p>

            <h3 className={styles.heading3}>Estás compitiendo con tu propia plataforma</h3>
            <p className={styles.paragraph}>Muchas plataformas ahora compiten directamente con sus clientes. Shopify lanzó Shopify Balance y Shop Pay. Squarespace ofrece Squarespace Scheduling.<sup><a href="#footnote-2" id="footnote-ref-2" className={styles.link}>2</a></sup> No son solo tu proveedor, son tu competidor.</p>

            <h2 className={styles.heading2}>Los costos ocultos siguen creciendo</h2>
            <p className={styles.paragraph}>Más allá de la evidente cuota mensual, la dependencia del proveedor crea gastos que la mayoría de los negocios no anticipan:</p>

            <ul className={styles.list}>
                <li className={styles.listItem}><strong>Comisiones por transacción:</strong> Muchas plataformas se llevan un porcentaje de cada venta además de tu suscripción si no usás su procesador de pagos interno.<sup><a href="#footnote-3" id="footnote-ref-3" className={styles.link}>3</a></sup></li>
                <li className={styles.listItem}><strong>Actualizaciones forzadas:</strong> ¿Tu tráfico creció? Felicitaciones, ahora tenés que subir a un nivel de precios más caro.</li>
                <li className={styles.listItem}><strong>Costos de integración:</strong> Cada integración de herramienta de terceros suma otra suscripción.</li>
                <li className={styles.listItem}><strong>Soporte Premium:</strong> La ayuda real cuesta extra, el soporte básico es deliberadamente inútil.</li>
                <li className={styles.listItem}><strong>Funcionalidades a medida:</strong> ¿Querés algo específico para tu negocio? Eso será su plan enterprise a 10 veces el precio.</li>
            </ul>

            <p className={styles.paragraph}>Estas empresas disfrutan de márgenes de beneficio masivos cobrando cuotas de suscripción exorbitantes por servicios que a menudo les cuestan muy poco proveer. El costo operativo de almacenar datos de usuarios es mínimo comparado con las decenas o cientos de dólares que facturan mensualmente. Esto les permite generar ingresos significativos a partir de pagos recurrentes sin entregar un valor o propiedad proporcional.<sup><a href="#footnote-4" id="footnote-ref-4" className={styles.link}>4</a></sup></p>

            <h2 className={styles.heading2}>La alternativa: La propiedad</h2>
            <p className={styles.paragraph}>Cuando sos dueño de tu sitio web e infraestructura, <Link href="/blog/our-approach-to-software" className={styles.link}>controlás tu destino</Link>:</p>

            <ul className={styles.list}>
                <li className={styles.listItem}><strong>Inversión única:</strong> Pagás una vez por el desarrollo, sos dueño para siempre.</li>
                <li className={styles.listItem}><strong>Costos de mantenimiento mínimos:</strong> Solo hosting y dominio, a menudo por menos de £10/mes.</li>
                <li className={styles.listItem}><strong>Control total:</strong> Modificá cualquier cosa, integrá lo que quieras, personalizalo todo.</li>
                <li className={styles.listItem}><strong>Tus datos, tus condiciones:</strong> Todo vive en formatos a los que podés acceder y usar.</li>
                <li className={styles.listItem}><strong>Libertad de movimiento:</strong> Cambiá de hosting, agregá funciones o rediseñá sin empezar de cero.</li>
            </ul>

            <h2 className={styles.heading2}>¿Pero qué pasa con la facilidad de uso?</h2>
            <p className={styles.paragraph}>Las empresas de plataformas venden conveniencia, y hay algo de verdad en eso... al principio. Los editores visuales son fáciles para sitios básicos. Pero esa simplicidad es superficial:</p>

            <ul className={styles.list}>
                <li className={styles.listItem}>¿Querés algo que ellos no anticiparon? Estás atrapado.</li>
                <li className={styles.listItem}>¿Necesitás integrar con tus sistemas existentes? Probablemente imposible.</li>
                <li className={styles.listItem}>¿Tenés requisitos específicos de flujo de trabajo? Usá los de ellos o nada.</li>
            </ul>

            <p className={styles.paragraph}>Mientras tanto, un sitio personalizado bien construido con un CMS moderno te ofrece la misma facilidad de gestión de contenidos sin las restricciones. Obtenés la simplicidad donde importa (operaciones diarias) mientras mantenés una flexibilidad total en todo lo demás.</p>

            <h2 className={styles.heading2}>La diferencia DreamsByte</h2>
            <p className={styles.paragraph}>Construimos sitios web de los que sos propietario absoluto. Sin cuotas mensuales más allá del hosting básico. Sin sistemas propietarios. Sin dependencia del proveedor. Solo código limpio y moderno que podés alojar en cualquier lugar, modificar libremente y poseer para siempre.</p>

            <p className={styles.paragraph}>Nuestros costos iniciales son transparentes y competitivos. En cualquier horizonte de tiempo razonable, la propiedad es drásticamente más barata que las plataformas de suscripción. Y no se trata solo de plata: se trata de control, flexibilidad y de construir un activo real para tu negocio.</p>

            <h2 className={styles.heading2}>Un activo que se paga solo</h2>
            <p className={styles.paragraph}>Nuestra filosofía es simple: no cobramos cuotas sobre cuotas, y nuestro objetivo no es atarte a una suscripción. Te construimos un activo. El objetivo es que nuestro trabajo se pague solo al aportar más valor de lo que cuesta, dándote una herramienta permanente para el crecimiento en lugar de un gasto recurrente en tu presupuesto.</p>
            <p className={styles.paragraph}>Consideremos un escenario común para un negocio en crecimiento: la necesidad de una solución robusta de e-commerce. Muchas agencias digitales o plataformas SaaS premium cobrarán un abono mensual elevado por esto. Esto suele incluir la cuota de la plataforma, plugins obligatorios, soporte prioritario y un mantenimiento que no hace mucho más que "mantener la luz prendida".</p>

            <h3 className={styles.heading3}>Hagamos las cuentas: Propiedad vs. Alquiler de alto costo</h3>
            <p className={styles.paragraph}>Una suscripción típica de e-commerce o un plan de mantenimiento de agencia puede costar fácilmente <strong>$450 por mes</strong>. Con el tiempo, este modelo de alquiler se vuelve increíblemente caro.</p>
            <ul className={styles.list}>
                <li className={styles.listItem}>Costo tras 1 año: $5.400</li>
                <li className={styles.listItem}>Costo tras 3 años: $16.200</li>
                <li className={styles.listItem}><strong>Activo en propiedad tras 3 años: $0.</strong> Gastaste una fortuna y seguís sin ser dueño de nada.</li>
            </ul>
            <p className={styles.paragraph}>Ahora, comparemos eso con una inversión única en una solución personalizada. Basándonos en nuestros propios <Link href="/services" className={styles.link}>precios de servicios</Link>, una <strong>Aplicación de E-commerce</strong> personalizada podría tener un costo de proyecto único de unos <strong>$8.000</strong>.</p>
            <p className={styles.paragraph}>El punto de equilibrio se alcanza en poco menos de 18 meses ($8.000 ÷ $450/mes ≈ 17,8 meses). Después de eso, el ahorro es sustancial.</p>
            <ul className={styles.list}>
                <li className={styles.listItem}><strong>Costo total tras 3 años: $8.000.</strong></li>
                <li className={styles.listItem}><strong>Ahorro total comparado con la suscripción: $8.200.</strong></li>
            </ul>
            <p className={styles.paragraph}>En tres años, no solo habrás ahorrado más de ocho mil dólares, sino que también serás dueño de un activo de alto rendimiento, escalable y adaptado específicamente a tu negocio. Estás libre de dependencias, de aumentos de precios arbitrarios y de comisiones por transacción. El trabajo se ha pagado con creces.</p>

            <h2 className={styles.heading2}>Liberate</h2>
            <p className={styles.paragraph}>Si actualmente estás atrapado en una plataforma de suscripción, no es demasiado tarde para escapar. Sí, hay un costo inicial para migrar. Pero cada mes que esperás es otro mes de pagos hacia algo que nunca te pertenecerá.</p>
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
                                "Cloud Vendor Lock-in: What it is and how to avoid it," <a href="https://www.cloudflare.com/learning/cloud/what-is-cloud-vendor-lock-in/" target="_blank" rel="noopener noreferrer" className={styles.link}>Cloudflare</a>.
                                <a href="#footnote-ref-1" aria-label="Back to content" className={styles.link}> ↩</a>
                            </p>
                        </li>
                        <li id="footnote-2" className={styles.listItem}>
                            <p className={styles.paragraph}>
                                "Platform Encroachment: What Happens When Marketplaces Compete with Their Sellers?," <a href="https://www.shopify.com/retail/platform-encroachment" target="_blank" rel="noopener noreferrer" className={styles.link}>Shopify Blog</a>.
                                <a href="#footnote-ref-2" aria-label="Back to content" className={styles.link}> ↩</a>
                            </p>
                        </li>
                        <li id="footnote-3" className={styles.listItem}>
                            <p className={styles.paragraph}>
                                "Platform Fees Explained: A Guide for Online Businesses," <a href="https://www.altexsoft.com/blog/platform-fees-explained/" target="_blank" rel="noopener noreferrer" className={styles.link}>Altexsoft</a>.
                                <a href="#footnote-ref-3" aria-label="Back to content" className={styles.link}> ↩</a>
                            </p>
                        </li>
                        <li id="footnote-4" className={styles.listItem}>
                            <p className={styles.paragraph}>
                                "The Economics of SaaS: A Deep Dive into Recurring Revenue," <a href="https://www.cloudzero.com/blog/economics-of-saas" target="_blank" rel="noopener noreferrer" className={styles.link}>CloudZero</a>.
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
