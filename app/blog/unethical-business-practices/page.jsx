'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useContact } from '../../../contexts/ContactContext';
import { useHeaderAnimation } from '../../../contexts/HeaderAnimationContext';
import { useLanguage } from '../../../contexts/LanguageContext';
import CallToAction from '../../../components/layout/CallToAction/CallToAction';
import styles from '../post.module.scss';
import { posts } from '../posts';

export default function UnethicalBusinessPractices() {
    const { openContact } = useContact();
    const { headerAnimationComplete } = useHeaderAnimation();
    const { language, t } = useLanguage();
    const [contentVisible, setContentVisible] = useState(false);

    // Find the current post's metadata from the translation system
    const slug = 'unethical-business-practices';
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
            <h2 className={styles.heading2}>The Illusion of Value: Understanding Markups</h2>
            <p className={styles.paragraph}>
                In the software industry, adding fees onto fees or margins onto materials often hides behind technical jargon and service-level tiers. Understanding how these markups are applied is essential for any business looking to make informed technology investments.
            </p>

            <h3 className={styles.heading3}>1. "Material" Markups (Licenses & Infrastructure)</h3>
            <p className={styles.paragraph}>Instead of physical materials, software companies may apply markups on digital licenses and usage-based services:</p>
            <ul className={styles.list}>
                <li className={styles.listItem}><strong><Link href="/blog/beyond-shopify-custom-ecommerce" className={styles.link}>White-Labeling</Link>:</strong> A service provider licenses a software product from a vendor, rebrands it, and sells it to a client at a premium. The client may perceive this as a custom-built solution, leading to a significant margin on the "material" software.<sup><a href="#footnote-2" id="footnote-ref-2" className={styles.link}>2</a></sup></li>
                <li className={styles.listItem}><strong><Link href="/blog/cloud-infrastructure-illusion" className={styles.link}>Cloud Uplift</Link>:</strong> In cloud computing, Managed Service Providers (MSPs) often pay a base rate for cloud usage (e.g., AWS, Azure) but charge their clients an additional percentage on top, ostensibly for management and support.</li>
                <li className={styles.listItem}><strong>Value-Added Reselling (VAR):</strong> Companies purchase software or hardware and resell it to end-users at a markup, justifying the margin by adding a service layer like installation or configuration.</li>
                <li className={styles.listItem}><strong>Pass-Through with Admin Fee:</strong> An agency purchases third-party tools (e.g., stock images, fonts, hosting) for a client and then bills the client for the cost plus an administrative percentage (typically 10-20%).</li>
            </ul>

            <h3 className={styles.heading3}>2. "Labor" Markups (Services & Development)</h3>
            <p className={styles.paragraph}>Given that software development is labor-intensive, various strategies can introduce additional fees on top of development costs:</p>
            <ul className={styles.list}>
                <li className={styles.listItem}><strong>The "Spread" (Labor Arbitrage):</strong> This refers to the difference between the actual cost of a developer (e.g., their hourly wage) and the hourly rate billed to the client. This can be significant in global software development where talent is sourced from lower-cost regions while billed at market rates in higher-cost regions.<sup><a href="#footnote-3" id="footnote-ref-3" className={styles.link}>3</a></sup></li>
                <li className={styles.listItem}><strong>Blended Rate:</strong> A single, flat hourly rate charged for all development personnel, regardless of their individual skill level or actual cost. This tactic can obscure higher margins if less experienced developers are utilized more frequently.</li>
                <li className={styles.listItem}><strong><Link href="/blog/vendor-lock-in-subscription-costs" className={styles.link}>Retainers (Availability Margins)</Link>:</strong> Charging a fixed monthly fee to reserve development capacity. If the client does not fully utilize the allotted hours, the unspent time often becomes pure profit margin for the service provider.</li>
            </ul>

            <h3 className={styles.heading3}>3. "Fee Stacking" and Proprietary Tactics</h3>
            <p className={styles.paragraph}>Software companies often employ specific methods to layer fees:</p>
            <ul className={styles.list}>
                <li className={styles.listItem}><strong>Double Marginalization:</strong> Common in multi-tiered subcontracting, where each intermediary (e.g., freelancer, dev shop, agency) adds their own markup, leading to significantly inflated costs for the end client.</li>
                <li className={styles.listItem}><strong>Platform Fees ("Take Rate"):</strong> In marketplace models (e.g., app stores), the platform takes a percentage of each transaction. This platform fee is essentially an additional layer of cost on top of the seller's own pricing.</li>
                <li className={styles.listItem}><strong>Implementation Fees:</strong> A one-time setup fee charged in addition to recurring SaaS subscriptions. This fee often serves to quickly recover customer acquisition costs and boost initial profit margins.</li>
            </ul>

            <h2 className={styles.heading2}>Beyond Direct Markups: Hidden Financial Tactics</h2>
            <p className={styles.paragraph}>Beyond explicit markups, the software industry utilizes other indirect financial tactics:</p>
            <h3 className={styles.heading3}>1. Service Level Agreement (SLA) Tiers</h3>
            <p className={styles.paragraph}>SLAs often involve charging a premium for guaranteed levels of service, reliability, or response times:</p>
            <ul className={styles.list}>
                <li className={styles.listItem}><strong>"Nines" Premium:</strong> Higher uptime guarantees (e.g., 99.99% versus 99.9%) in SaaS offerings come with significantly higher price tags, even if the underlying operational cost increase for the vendor is minimal due to automated redundancy.</li>
                <li className={styles.listItem}><strong>Response Time Arbitrage:</strong> Clients pay more for faster support response times. For example, a 15-minute response for critical issues might incur a 50% premium over a standard 24-hour response.</li>
                <li className={styles.listItem}><strong>Service Credits:</strong> If an SLA is breached, vendors may offer service credits (discounts on future services) instead of cash refunds. This encourages continued use of their services to utilize the credit.</li>
            </ul>

            <h3 className={styles.heading3}>2. Ancillary Revenue Tactics</h3>
            <p className={styles.paragraph}>These are "side" fees that contribute to stacking costs:</p>
            <ul className={styles.list}>
                <li className={styles.listItem}><strong>"Integration Tax":</strong> SaaS platforms may charge additional fees to enable API access or specific connectors to other popular tools, even when the underlying API infrastructure costs the vendor little to maintain.</li>
                <li className={styles.listItem}><strong><Link href="/blog/vendor-lock-in-subscription-costs" className={styles.link}>Exit Fees (Egress)</Link>:</strong> In cloud storage, data ingestion (uploading data) is often free, but egress (downloading data) incurs a per-GB fee. This acts as a deterrent to switching providers, effectively locking in customer data.</li>
            </ul>
            <h3 className={styles.heading3}>3. Contractual & Financial Structures</h3>
            <p className={styles.paragraph}>Specific contractual and financial models can also drive up costs:</p>
            <ul className={styles.list}>
                <li className={styles.listItem}><strong>The "Vig" (Take Rate):</strong> Platforms that facilitate transactions (e.g., payment gateways, app stores) take a percentage of every dollar processed, effectively stacking a platform fee on top of the seller's own pricing.</li>
                <li className={styles.listItem}><strong>Revenue Under Management (RUM):</strong> Some software (e.g., Fintech) charges a percentage of the total money processed using the tool. As a client's business grows, the software fee automatically increases, even if the vendor's service costs remain static.</li>
                <li className={styles.listItem}><strong>Maintenance "Evergreen" Fees:</strong> For older, on-premise software, annual maintenance and support fees (often 20% of the original license cost) can lead to clients effectively paying for the software multiple times over several years, even without new features.</li>
            </ul>
        </>
    );

    const ContentES = () => (
        <>
            <h2 className={styles.heading2}>La ilusión del valor: Entendiendo los recargos</h2>
            <p className={styles.paragraph}>
                En la industria del software, agregar comisiones sobre comisiones o márgenes sobre materiales a menudo se esconde detrás de jerga técnica y niveles de servicio. Entender cómo se aplican estos recargos es esencial para cualquier empresa que busque realizar inversiones tecnológicas informadas.
            </p>

            <h3 className={styles.heading3}>1. Recargos de "Materiales" (Licencias e Infraestructura)</h3>
            <p className={styles.paragraph}>En lugar de materiales físicos, las empresas de software pueden aplicar recargos sobre licencias digitales y servicios basados en el uso:</p>
            <ul className={styles.list}>
                <li className={styles.listItem}><strong><Link href="/blog/beyond-shopify-custom-ecommerce" className={styles.link}>Marca Blanca (White-Labeling)</Link>:</strong> Un proveedor de servicios licencia un producto de software, le cambia la marca y se lo vende a un cliente con un sobreprecio. El cliente puede percibirlo como una solución a medida, lo que genera un margen significativo sobre el software "material".<sup><a href="#footnote-2" id="footnote-ref-2" className={styles.link}>2</a></sup></li>
                <li className={styles.listItem}><strong>Recargo por Nube (Cloud Uplift):</strong> En la computación en la nube, los Proveedores de Servicios Gestionados (MSP) a menudo pagan una tarifa base por el uso de la nube (por ejemplo, AWS, Azure) pero cobran a sus clientes un porcentaje adicional por encima, supuestamente por gestión y soporte.</li>
                <li className={styles.listItem}><strong>Reventa de Valor Agregado (VAR):</strong> Las empresas compran software o hardware y lo revenden a los usuarios finales con un recargo, justificando el margen al agregar una capa de servicio como instalación o configuración.</li>
                <li className={styles.listItem}><strong>Costo Repercutido con Gasto Administrativo:</strong> Una agencia compra herramientas de terceros (fotos de stock, fuentes, hosting) para un cliente y luego le factura el costo más un porcentaje administrativo (típicamente entre 10% y 20%).</li>
            </ul>

            <h3 className={styles.heading3}>2. Recargos de "Mano de Obra" (Servicios y Desarrollo)</h3>
            <p className={styles.paragraph}>Dado que el desarrollo de software requiere mucha mano de obra, varias estrategias pueden introducir tarifas adicionales sobre los costos de desarrollo:</p>
            <ul className={styles.list}>
                <li className={styles.listItem}><strong>El "Spread" (Arbitraje Laboral):</strong> Se refiere a la diferencia entre el costo real de un desarrollador (su sueldo por hora) y la tarifa horaria facturada al cliente. Esto puede ser significativo en el desarrollo global de software, donde se busca talento en regiones de menor costo pero se factura a precios de mercado de regiones más caras.<sup><a href="#footnote-3" id="footnote-ref-3" className={styles.link}>3</a></sup></li>
                <li className={styles.listItem}><strong>Tarifa Mezclada (Blended Rate):</strong> Una tarifa horaria única y fija para todo el personal de desarrollo, independientemente de su nivel de habilidad individual o costo real. Esta táctica puede ocultar márgenes más altos si se utilizan con más frecuencia desarrolladores con menos experiencia.</li>
                <li className={styles.listItem}><strong><Link href="/blog/vendor-lock-in-subscription-costs" className={styles.link}>Abonos (Márgenes de Disponibilidad)</Link>:</strong> Cobrar una tarifa mensual fija para reservar capacidad de desarrollo. Si el cliente no utiliza todas las horas asignadas, el tiempo no usado se convierte en puro margen de ganancia para el proveedor.</li>
            </ul>

            <h3 className={styles.heading3}>3. "Fee Stacking" y Tácticas Propietarias</h3>
            <p className={styles.paragraph}>Las empresas de software suelen emplear métodos específicos para acumular comisiones:</p>
            <ul className={styles.list}>
                <li className={styles.listItem}><strong>Marginalización Doble:</strong> Común en la subcontratación de varios niveles, donde cada intermediario (freelancer, agencia, estudio) agrega su propio recargo, lo que infla significativamente los costos para el cliente final.</li>
                <li className={styles.listItem}><strong>Comisiones de Plataforma (Take Rate):</strong> En los modelos de marketplace (como las tiendas de aplicaciones), la plataforma se lleva un porcentaje de cada transacción. Esta comisión es esencialmente una capa adicional de costo sobre el precio del propio vendedor.</li>
                <li className={styles.listItem}><strong>Tarifas de Implementación:</strong> Una tarifa única de configuración que se cobra además de las suscripciones recurrentes de SaaS. Esta tarifa suele servir para recuperar rápido los costos de adquisición de clientes y aumentar los márgenes de ganancia iniciales.</li>
            </ul>

            <h2 className={styles.heading2}>Más allá de los recargos directos: Tácticas financieras ocultas</h2>
            <p className={styles.paragraph}>Además de los recargos explícitos, la industria del software utiliza otras tácticas financieras indirectas:</p>
            <h3 className={styles.heading3}>1. Niveles de Acuerdos de Nivel de Servicio (SLA)</h3>
            <p className={styles.paragraph}>Los SLA a menudo implican cobrar un extra por niveles garantizados de servicio, confiabilidad o tiempos de respuesta:</p>
            <ul className={styles.list}>
                <li className={styles.listItem}><strong>Premium de "Nueves":</strong> Las garantías de mayor tiempo de actividad (por ejemplo, 99,99% frente a 99,9%) en las ofertas de SaaS vienen con precios significativamente más altos, incluso si el aumento del costo operativo real para el proveedor es mínimo gracias a la automatización.</li>
                <li className={styles.listItem}><strong>Arbitraje del Tiempo de Respuesta:</strong> Los clientes pagan más por tiempos de respuesta de soporte más rápidos. Por ejemplo, una respuesta de 15 minutos para problemas críticos podría tener un recargo del 50% sobre una respuesta estándar de 24 horas.</li>
                <li className={styles.listItem}><strong>Créditos de Servicio:</strong> Si se incumple un SLA, los proveedores pueden ofrecer créditos de servicio (descuentos en futuros servicios) en lugar de reembolsos en efectivo. Esto fomenta el uso continuado de sus servicios para poder usar el crédito.</li>
            </ul>

            <h3 className={styles.heading3}>2. Tácticas de ingresos complementarios</h3>
            <p className={styles.paragraph}>Estas son comisiones "secundarias" que contribuyen a la acumulación de costos:</p>
            <ul className={styles.list}>
                <li className={styles.listItem}><strong>"Impuesto de Integración":</strong> Las plataformas SaaS pueden cobrar tarifas adicionales para habilitar el acceso a la API o conectores específicos con otras herramientas populares, incluso cuando la infraestructura de la API le cuesta poco mantener al proveedor.</li>
                <li className={styles.listItem}><strong><Link href="/blog/vendor-lock-in-subscription-costs" className={styles.link}>Tarifas de Salida (Egress)</Link>:</strong> En el almacenamiento en la nube, la subida de datos suele ser gratis, pero la descarga (egress) tiene un costo por GB. Esto actúa como un freno para cambiar de proveedor, bloqueando efectivamente los datos del cliente.</li>
            </ul>
            <h3 className={styles.heading3}>3. Estructuras contractuales y financieras</h3>
            <p className={styles.paragraph}>Modelos contractuales y financieros específicos también pueden aumentar los costos:</p>
            <ul className={styles.list}>
                <li className={styles.listItem}><strong>El "Vig" (Comisión de Plataforma):</strong> Las plataformas que facilitan transacciones (pasarelas de pago, tiendas de apps) se llevan un porcentaje de cada peso procesado, sumando una comisión de plataforma sobre el precio del vendedor.</li>
                <li className={styles.listItem}><strong>Ingresos Bajo Gestión (RUM):</strong> Algunos softwares (por ejemplo, en Fintech) cobran un porcentaje del total de plata procesada con la herramienta. A medida que el negocio del cliente crece, la tarifa del software aumenta automáticamente, aunque los costos de servicio del proveedor sigan igual.</li>
                <li className={styles.listItem}><strong>Tarifas de mantenimiento "Evergreen":</strong> Para softwares antiguos instalados localmente, las tarifas anuales de mantenimiento y soporte (a menudo el 20% del costo original de la licencia) pueden hacer que los clientes paguen por el software varias veces a lo largo de los años, incluso sin recibir funciones nuevas.</li>
            </ul>
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
                                "Vendor Lock-in Strategies in the Software Industry", <a href="https://ris.utwente.nl/ws/portalfiles/portal/5162407/master_thesis_Nijhof.pdf" target="_blank" rel="noopener noreferrer" className={styles.link}>University of Twente</a>.
                                <a href="#footnote-ref-1" aria-label="Back to content" className={styles.link}> ↩</a>
                            </p>
                        </li>
                        <li id="footnote-2" className={styles.listItem}>
                            <p className={styles.paragraph}>
                                "What Is Cloud Vendor Lock-In (And How To Break Free)?", <a href="https://cast.ai/blog/what-is-cloud-vendor-lock-in/" target="_blank" rel="noopener noreferrer" className={styles.link}>Cast AI</a>.
                                <a href="#footnote-ref-2" aria-label="Back to content" className={styles.link}> ↩</a>
                            </p>
                        </li>
                        <li id="footnote-3" className={styles.listItem}>
                            <p className={styles.paragraph}>
                                "Dark Patterns in UI: A Classification", <a href="https://arxiv.org/abs/1907.04505" target="_blank" rel="noopener noreferrer" className={styles.link}>ArXiv</a>.
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
