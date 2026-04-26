'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useContact } from '../../../contexts/ContactContext';
import { useHeaderAnimation } from '../../../contexts/HeaderAnimationContext';
import { useLanguage } from '../../../contexts/LanguageContext';
import CallToAction from '../../../components/layout/CallToAction/CallToAction';
import styles from '../post.module.scss';
import { posts } from '../posts';

export default function CloudInfrastructureIllusion() {
    const { openContact } = useContact();
    const { headerAnimationComplete } = useHeaderAnimation();
    const { language, t } = useLanguage();
    const [contentVisible, setContentVisible] = useState(false);

    const slug = 'cloud-infrastructure-illusion';
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
            <h2 className={styles.heading2}>The Day AWS Went Down</h2>
            <p className={styles.paragraph}>December 7, 2021. Amazon Web Services experienced a major outage in their US-EAST-1 region. For hours, thousands of businesses were completely offline. Netflix, Disney+, Robinhood, and countless enterprise applications simply stopped working.<sup><a href="#footnote-1" id="footnote-ref-1" className={styles.link}>1</a></sup> Their customers couldn't access services. Their employees couldn't work. Their revenue stopped flowing.</p>

            <p className={styles.paragraph}>And there was nothing they could do but wait for Amazon to fix it.</p>

            <h2 className={styles.heading2}>The False Promise of Cloud Reliability</h2>
            <p className={styles.paragraph}>Cloud providers sell reliability through buzzwords: "99.99% uptime," "globally distributed," "enterprise-grade infrastructure." But these promises come with an asterisk the size of a data center.</p>

            <p className={styles.paragraph}>When AWS goes down—and it does, regularly—everyone on AWS goes down together. Your redundancy doesn't matter. Your backup plans don't matter. Your multi-region architecture doesn't help when the control plane itself fails.</p>

            <h2 className={styles.heading2}>For Enterprise: The Math Changes Completely</h2>
            <p className={styles.paragraph}>Cloud infrastructure makes sense for startups and small businesses. The flexibility, low entry cost, and reduced operational complexity are genuine advantages when you're small and growing unpredictably.</p>

            <p className={styles.paragraph}>But for established enterprise businesses serving customers across multiple countries, the equation flips entirely:</p>

            <h3 className={styles.heading3}>You Have Predictable Scale</h3>
            <p className={styles.paragraph}>Startups need cloud elasticity because they might 10x overnight or shrink by half. Enterprise businesses have years of traffic data. You know your capacity requirements. You don't need to pay premium prices for flexibility you won't use.</p>

            <h3 className={styles.heading3}>You Can Afford Infrastructure</h3>
            <p className={styles.paragraph}>A dedicated server in a quality data center costs £50-200/month. To match the compute power of a single £200/month dedicated server, you'll pay AWS £500-1000/month. For enterprise scale, the savings are massive.</p>

            <h3 className={styles.heading3}>You Need Geographic Distribution Anyway</h3>
            <p className={styles.paragraph}>If you serve customers in the UK, EU, US, and Asia, you need infrastructure in those regions regardless. But cloud "global deployment" just means paying premium prices in multiple regions. Own servers in each region and you control everything.</p>

            <h2 className={styles.heading2}>The Real Costs of Cloud Dependency</h2>
            <p className={styles.paragraph}>Beyond the obvious price premium, <Link href="/blog/vendor-lock-in-subscription-costs" className={styles.link}>cloud lock-in</Link> creates costs most businesses don't calculate:</p>

            <h3 className={styles.heading3}>Egress Fees</h3>
            <p className={styles.paragraph}>AWS charges you to move your own data out of their network. Serving files to customers? That's egress. Backing up your data? Egress. Moving between their own services in different regions? Believe it or not, egress. These fees compound at scale.<sup><a href="#footnote-2" id="footnote-ref-2" className={styles.link}>2</a></sup></p>

            <h3 className={styles.heading3}>Service Multiplication</h3>
            <p className={styles.paragraph}>Need a database? That's RDS. Want caching? ElastiCache. File storage? S3. CDN? CloudFront. Load balancing? ALB. Each service has its own pricing structure, its own scaling rules, its own surprise bills.</p>

            <h3 className={styles.heading3}>Architectural Complexity</h3>
            <p className={styles.paragraph}>Cloud-native architecture requires constant optimization to avoid bill shock. You employ engineers specifically to manage cloud costs. You architect around pricing quirks rather than technical merit.</p>

            <h3 className={styles.heading3}>Vendor Lock-In</h3>
            <p className={styles.paragraph}>Once you're deep into AWS-specific services—Lambda, DynamoDB, Kinesis—<Link href="/blog/vendor-lock-in-subscription-costs" className={styles.link}>migrating away becomes prohibitively expensive</Link>. They know this. Prices creep up over time because switching costs are enormous.</p>

            <h2 className={styles.heading2}>The Alternative: Own Your Infrastructure</h2>
            <p className={styles.paragraph}>For enterprise businesses, owned infrastructure in each served region provides:</p>

            <h3 className={styles.heading3}>True Redundancy</h3>
            <p className={styles.paragraph}>Server in London goes down? Your Paris, Frankfurt, and Dublin servers keep running. When you own infrastructure across multiple providers and locations, you're truly distributed. No single point of failure can take down your entire business.</p>

            <h3 className={styles.heading3}>Predictable Costs</h3>
            <p className={styles.paragraph}>You know exactly what infrastructure costs each month. No surprise bills. No mysterious charges. No pricing changes at AWS's whim.</p>

            <h3 className={styles.heading3}>Better Performance</h3>
            <p className={styles.paragraph}>Dedicated hardware in the regions you serve delivers lower latency than cloud VMs sharing resources. Your UK customers hit your UK server directly. Your Singapore customers hit your Singapore server directly.</p>

            <h3 className={styles.heading3}>Data Sovereignty</h3>
            <p className={styles.paragraph}>When regulations require data to stay in specific jurisdictions, owning servers in those regions gives you complete control. No questions about where data transits or which AWS region actually hosts it.</p>

            <h3 className={styles.heading3}>Independence from Vendor Failures</h3>
            <p className={styles.paragraph}>AWS outage? Your infrastructure keeps running. AWS price increases? Irrelevant. AWS deprecates a service you depend on? Not your problem.</p>

            <h2 className={styles.heading2}>But What About Management Complexity?</h2>
            <p className={styles.paragraph}>Cloud providers sell the myth that <Link href="/blog/devops-for-small-business" className={styles.link}>managing your own infrastructure is impossibly complex</Link>. It's not—it's just different from their abstracted services.</p>

            <p className={styles.paragraph}>Modern tools make infrastructure management straightforward:</p>
            <ul className={styles.list}>
                <li className={styles.listItem}>Automated deployment with Docker and Kubernetes</li>
                <li className={styles.listItem}>Infrastructure as code with Terraform</li>
                <li className={styles.listItem}>Monitoring with open-source tools like Prometheus and Grafana</li>
                <li className={styles.listItem}>Automated backups and disaster recovery</li>
            </ul>

            <p className={styles.paragraph}>Yes, you need competent systems administrators. But you're an enterprise business—you should have those anyway. Relying entirely on cloud abstractions means you're one AWS outage away from having no one who understands how your infrastructure actually works.</p>

            <h2 className={styles.heading2}>Hybrid Approaches That Actually Work</h2>
            <p className={styles.paragraph}>You don't have to choose all-cloud or all-owned. Smart enterprise infrastructure often combines both:</p>

            <ul className={styles.list}>
                <li className={styles.listItem}><strong>Core Services on Owned Infrastructure:</strong> Your main application runs on your servers in each region</li>
                <li className={styles.listItem}><strong>Cloud for Specific Services:</strong> Use S3 for backup storage, CloudFront for CDN, but don't build your entire stack there</li>
                <li className={styles.listItem}><strong>Multi-Cloud Strategy:</strong> Use different providers for different services to avoid single-vendor dependency</li>
            </ul>

            <h2 className={styles.heading2}>The Question of Scale</h2>
            <p className={styles.paragraph}>At what point does owning infrastructure make sense? While every case is different, the cost-benefit analysis often starts to shift when monthly cloud bills exceed £5,000. For prominent companies like 37signals (creators of Basecamp and HEY), leaving the cloud resulted in projected savings of millions annually, demonstrating that for established businesses, owned infrastructure almost always wins financially.<sup><a href="#footnote-3" id="footnote-ref-3" className={styles.link}>3</a></sup></p>

            <p className={styles.paragraph}>Beyond pure costs, consider the strategic value of infrastructure independence. If your business depends on reliable uptime, can you afford to have no control when your provider fails?</p>

            <h2 className={styles.heading2}>Breaking Free</h2>
            <p className={styles.paragraph}>Migrating from cloud to owned infrastructure isn't trivial, but it's not as complex as cloud providers want you to believe. The process:</p>

            <ul className={styles.list}>
                <li className={styles.listItem}>Audit your actual resource usage (not what you're paying for)</li>
                <li className={styles.listItem}>Design owned infrastructure to match real needs</li>
                <li className={styles.listItem}>Set up parallel infrastructure in key regions</li>
                <li className={styles.listItem}>Migrate services incrementally</li>
                <li className={styles.listItem}>Phase out cloud dependencies</li>
            </ul>

            <p className={styles.paragraph}>Most enterprise migrations recoup their investment within 12-18 months purely from reduced operating costs.</p>

            <h2 className={styles.heading2}>The DreamsByte Perspective</h2>
            <p className={styles.paragraph}>We build systems that can run anywhere—cloud, owned infrastructure, or hybrid. We don't have a vendor to push or a cloud services contract to upsell. We design architecture based on what actually makes sense for your business.</p>

            <p className={styles.paragraph}>For enterprise clients, that usually means owned infrastructure in key regions, selective use of cloud services where they genuinely add value, and complete independence from any single vendor.</p>

            <h2 className={styles.heading2}>Take Control</h2>
            <p className={styles.paragraph}>Cloud infrastructure is a tool, not a religion. For many enterprise businesses, it's an expensive tool that creates dependency without delivering corresponding value.</p>

            <p className={styles.paragraph}>Your business is mature enough to own its infrastructure. The question is whether you want to keep paying rent on computing power or invest in assets you control.</p>
        </>
    );

    const ContentES = () => (
        <>
            <h2 className={styles.heading2}>El día que AWS se cayó</h2>
            <p className={styles.paragraph}>7 de diciembre de 2021. Amazon Web Services experimentó una interrupción importante en su región US-EAST-1. Durante horas, miles de empresas estuvieron completamente fuera de línea. Netflix, Disney+, Robinhood e innumerables aplicaciones empresariales simplemente dejaron de funcionar.<sup><a href="#footnote-1" id="footnote-ref-1" className={styles.link}>1</a></sup> Sus clientes no podían acceder a los servicios. Sus empleados no podían trabajar. Sus ingresos dejaron de fluir.</p>

            <p className={styles.paragraph}>Y no podían hacer nada más que esperar a que Amazon lo arreglara.</p>

            <h2 className={styles.heading2}>La falsa promesa de la fiabilidad de la nube</h2>
            <p className={styles.paragraph}>Los proveedores de la nube venden fiabilidad a través de palabras de moda: "99,99% de tiempo de actividad", "distribuido globalmente", "infraestructura de grado empresarial". Pero estas promesas vienen con un asterisco del tamaño de un centro de datos.</p>

            <p className={styles.paragraph}>Cuando AWS se cae —y lo hace con regularidad— todos los que están en AWS se caen juntos. Tu redundancia no importa. Tus planes de backup no importan. Tu arquitectura multirregión no ayuda cuando el propio plano de control falla.</p>

            <h2 className={styles.heading2}>Para empresas: La matemática cambia por completo</h2>
            <p className={styles.paragraph}>La infraestructura en la nube tiene sentido para las startups y las pequeñas empresas. La flexibilidad, el bajo costo de entrada y la reducción de la complejidad operativa son ventajas reales cuando eres pequeño y creces de forma impredecible.</p>

            <p className={styles.paragraph}>Pero para las empresas establecidas que prestan servicios a clientes en varios países, la ecuación cambia por completo:</p>

            <h3 className={styles.heading3}>Tenés una escala predecible</h3>
            <p className={styles.paragraph}>Las startups necesitan la elasticidad de la nube porque pueden multiplicarse por 10 de la noche a la mañana o reducirse a la mitad. Las empresas establecidas tienen años de datos de tráfico. Conocés tus necesidades de capacidad. No necesitás pagar precios premium por una flexibilidad que no vas a usar.</p>

            <h3 className={styles.heading3}>Podés costear la infraestructura</h3>
            <p className={styles.paragraph}>Un servidor dedicado en un centro de datos de calidad cuesta entre £50 y £200 al mes. Para igualar la potencia de cálculo de un solo servidor dedicado de £200 al mes, pagarás a AWS entre £500 y £1000 al mes. Para una escala empresarial, el ahorro es masivo.</p>

            <h3 className={styles.heading3}>Necesitás distribución geográfica de todos modos</h3>
            <p className={styles.paragraph}>Si prestás servicios a clientes en el Reino Unido, la UE, EE. UU. y Asia, necesitás infraestructura en esas regiones de todos modos. Pero el "despliegue global" de la nube solo significa pagar precios premium en varias regiones. Sé dueño de tus servidores en cada región y tendrás el control de todo.</p>

            <h2 className={styles.heading2}>Los costos reales de la dependencia de la nube</h2>
            <p className={styles.paragraph}>Más allá de la evidente prima de precio, la <Link href="/blog/vendor-lock-in-subscription-costs" className={styles.link}>dependencia del proveedor (lock-in)</Link> crea costos que la mayoría de las empresas no calculan:</p>

            <h3 className={styles.heading3}>Tasas de salida (Egress)</h3>
            <p className={styles.paragraph}>AWS te cobra por sacar tus propios datos de su red. ¿Sirves archivos a tus clientes? Eso es salida. ¿Haces copias de seguridad de tus datos? Salida. ¿Te mueves entre sus propios servicios en diferentes regiones? Lo creas o no, salida. Estas tasas se acumulan a escala.<sup><a href="#footnote-2" id="footnote-ref-2" className={styles.link}>2</a></sup></p>

            <h3 className={styles.heading3}>Multiplicación de servicios</h3>
            <p className={styles.paragraph}>¿Necesitás una base de datos? Eso es RDS. ¿Querés caché? ElastiCache. ¿Almacenamiento de archivos? S3. ¿CDN? CloudFront. ¿Balanceo de carga? ALB. Cada servicio tiene su propia estructura de precios, sus propias reglas de escalado, sus propias facturas sorpresa.</p>

            <h3 className={styles.heading3}>Complejidad arquitectónica</h3>
            <p className={styles.paragraph}>La arquitectura nativa de la nube requiere una optimización constante para evitar sorpresas en la factura. Empleás ingenieros específicamente para gestionar los costos de la nube. Arquitecturás en torno a las peculiaridades de los precios en lugar del mérito técnico.</p>

            <h3 className={styles.heading3}>Dependencia del proveedor (Vendor Lock-In)</h3>
            <p className={styles.paragraph}>Una vez que te adentras en los servicios específicos de AWS —Lambda, DynamoDB, Kinesis— <Link href="/blog/vendor-lock-in-subscription-costs" className={styles.link}>migrar a otro lugar resulta prohibitivamente caro</Link>. Ellos lo saben. Los precios suben con el tiempo porque los costos de cambio son enormes.</p>

            <h2 className={styles.heading2}>La alternativa: Ser dueño de tu propia infraestructura</h2>
            <p className={styles.paragraph}>Para las empresas, tener infraestructura propia en cada región atendida proporciona:</p>

            <h3 className={styles.heading3}>Redundancia real</h3>
            <p className={styles.paragraph}>¿Se cae el servidor de Londres? Tus servidores de París, Frankfurt y Dublín siguen funcionando. Cuando eres dueño de la infraestructura en múltiples proveedores y ubicaciones, estás verdaderamente distribuido. Ningún punto único de falla puede derribar todo tu negocio.</p>

            <h3 className={styles.heading3}>Costos predecibles</h3>
            <p className={styles.paragraph}>Sabés exactamente cuánto cuesta la infraestructura cada mes. Sin facturas sorpresa. Sin cargos misteriosos. Sin cambios de precios al antojo de AWS.</p>

            <h3 className={styles.heading3}>Mejor rendimiento</h3>
            <p className={styles.paragraph}>El hardware dedicado en las regiones a las que sirves ofrece una latencia menor que las máquinas virtuales de la nube que comparten recursos. Tus clientes del Reino Unido llegan directamente a tu servidor del Reino Unido. Tus clientes de Singapur llegan directamente a tu servidor de Singapur.</p>

            <h3 className={styles.heading3}>Soberanía de datos</h3>
            <p className={styles.paragraph}>Cuando la normativa exige que los datos permanezcan en jurisdicciones específicas, poseer servidores en esas regiones te da un control total. No hay dudas sobre por dónde transitan los datos o qué región de AWS los aloja realmente.</p>

            <h3 className={styles.heading3}>Independencia de las fallas del proveedor</h3>
            <p className={styles.paragraph}>¿Interrupción de AWS? Tu infraestructura sigue funcionando. ¿Aumento de precios de AWS? Irrelevante. ¿AWS deja de ofrecer un servicio del que dependes? No es tu problema.</p>

            <h2 className={styles.heading2}>¿Pero qué pasa con la complejidad de gestión?</h2>
            <p className={styles.paragraph}>Los proveedores de la nube venden el mito de que <Link href="/blog/devops-for-small-business" className={styles.link}>gestionar tu propia infraestructura es increíblemente complejo</Link>. No lo es, solo es diferente de sus servicios abstraídos.</p>

            <p className={styles.paragraph}>Las herramientas modernas simplifican la gestión de la infraestructura:</p>
            <ul className={styles.list}>
                <li className={styles.listItem}>Despliegue automatizado con Docker y Kubernetes</li>
                <li className={styles.listItem}>Infraestructura como código con Terraform</li>
                <li className={styles.listItem}>Monitoreo con herramientas de código abierto como Prometheus y Grafana</li>
                <li className={styles.listItem}>Copias de seguridad automatizadas y recuperación ante desastres</li>
            </ul>

            <p className={styles.paragraph}>Sí, necesitás administradores de sistemas competentes. Pero eres una empresa, deberías tenerlos de todos modos. Confiar plenamente en las abstracciones de la nube significa que estás a una interrupción de AWS de no tener a nadie que entienda cómo funciona realmente tu infraestructura.</p>

            <h2 className={styles.heading2}>Enfoques híbridos que realmente funcionan</h2>
            <p className={styles.paragraph}>No tenés que elegir entre todo nube o todo propio. Una infraestructura empresarial inteligente suele combinar ambas cosas:</p>

            <ul className={styles.list}>
                <li className={styles.listItem}><strong>Servicios centrales en infraestructura propia:</strong> Tu aplicación principal se ejecuta en tus servidores en cada región.</li>
                <li className={styles.listItem}><strong>Nube para servicios específicos:</strong> Usa S3 para el almacenamiento de backups, CloudFront para el CDN, pero no construyas todo tu stack allí.</li>
                <li className={styles.listItem}><strong>Estrategia multi-nube:</strong> Usa diferentes proveedores para diferentes servicios para evitar la dependencia de un solo proveedor.</li>
            </ul>

            <h2 className={styles.heading2}>La cuestión de la escala</h2>
            <p className={styles.paragraph}>¿En qué momento tiene sentido poseer la infraestructura? Aunque cada caso es diferente, el análisis de costo-beneficio suele empezar a cambiar cuando las facturas mensuales de la nube superan los £5.000. Para empresas prominentes como 37signals (creadores de Basecamp y HEY), salir de la nube supuso un ahorro proyectado de millones anuales, lo que demuestra que, para las empresas establecidas, la infraestructura propia casi siempre gana financieramente.<sup><a href="#footnote-3" id="footnote-ref-3" className={styles.link}>3</a></sup></p>

            <p className={styles.paragraph}>Más allá de los puros costos, considera el valor estratégico de la independencia de la infraestructura. Si tu negocio depende de un tiempo de actividad fiable, ¿podés permitirte no tener ningún control cuando tu proveedor falla?</p>

            <h2 className={styles.heading2}>Liberarse</h2>
            <p className={styles.paragraph}>Migrar de la nube a una infraestructura propia no es algo trivial, pero no es tan complejo como los proveedores de la nube quieren hacerte creer. El proceso:</p>

            <ul className={styles.list}>
                <li className={styles.listItem}>Auditá tu uso real de recursos (no lo que estás pagando).</li>
                <li className={styles.listItem}>Diseñá una infraestructura propia que se ajuste a tus necesidades reales.</li>
                <li className={styles.listItem}>Configurá una infraestructura paralela en regiones clave.</li>
                <li className={styles.listItem}>Migrá los servicios de forma incremental.</li>
                <li className={styles.listItem}>Eliminá gradualmente las dependencias de la nube.</li>
            </ul>

            <p className={styles.paragraph}>La mayoría de las migraciones empresariales recuperan su inversión en 12-18 meses puramente por la reducción de los costos operativos.</p>

            <h2 className={styles.heading2}>La perspectiva de DreamsByte</h2>
            <p className={styles.paragraph}>Construimos sistemas que pueden ejecutarse en cualquier lugar: en la nube, en infraestructura propia o en un entorno híbrido. No tenemos un proveedor que promocionar ni un contrato de servicios en la nube que vender. Diseñamos la arquitectura basándonos en lo que realmente tiene sentido para tu negocio.</p>

            <p className={styles.paragraph}>Para los clientes empresariales, eso suele significar infraestructura propia en regiones clave, uso selectivo de servicios en la nube donde realmente aportan valor e independencia total de cualquier proveedor individual.</p>

            <h2 className={styles.heading2}>Tomá el control</h2>
            <p className={styles.paragraph}>La infraestructura en la nube es una herramienta, no una religión. Para muchas empresas, es una herramienta cara que crea dependencia sin aportar un valor proporcional.</p>

            <p className={styles.paragraph}>Tu negocio es lo suficientemente maduro como para poseer su infraestructura. La pregunta es si querés seguir pagando un alquiler por la potencia de cálculo o invertir en activos que vos controles.</p>
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
                                "Annual Outage Analysis 2023," <a href="https://uptimeinstitute.com/resources/assets/reports/Annual-Outage-Analysis-2023.pdf" target="_blank" rel="noopener noreferrer" className={styles.link}>Uptime Institute</a>.
                                <a href="#footnote-ref-1" aria-label="Back to content" className={styles.link}> ↩</a>
                            </p>
                        </li>
                        <li id="footnote-2" className={styles.listItem}>
                            <p className={styles.paragraph}>
                                "Cloud Pricing Models," <a href="https://www.semanticscholar.org/paper/Cloud-Pricing-Models-Wu-Buyya-Ramamohanarao/31201d4a04d5d278b0e8b1b519b168a7b0a7c4a1" target="_blank" rel="noopener noreferrer" className={styles.link}>ACM Computing Surveys</a>.
                                <a href="#footnote-ref-2" aria-label="Back to content" className={styles.link}> ↩</a>
                            </p>
                        </li>
                        <li id="footnote-3" className={styles.listItem}>
                            <p className={styles.paragraph}>
                                "Financial Impact of Moving to Cloud Computing," <a href="https://www.na-businesspress.com/JSCR/JSCR20n1_44-51.pdf" target="_blank" rel="noopener noreferrer" className={styles.link}>North American Business Press</a>.
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
