'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useContact } from '../../../contexts/ContactContext';
import { useHeaderAnimation } from '../../../contexts/HeaderAnimationContext';
import { useLanguage } from '../../../contexts/LanguageContext';
import CallToAction from '../../../components/layout/CallToAction/CallToAction';
import styles from '../post.module.scss';
import { posts } from '../posts';

export default function DevOpsForSmallBusiness() {
    const { openContact } = useContact();
    const { headerAnimationComplete } = useHeaderAnimation();
    const { language, t } = useLanguage();
    const [contentVisible, setContentVisible] = useState(false);

    // Find the current post's metadata from the translation system
    const slug = 'devops-for-small-business';
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
            <h2 className={styles.heading2}>"We're Not Big Enough for DevOps"</h2>
            <p className={styles.paragraph}>When small business owners hear the term "DevOps," they often picture Silicon Valley giants with huge teams of engineers managing complex, automated pipelines. They think, "That's for Google and Netflix, not for me. I just have a website." This is a fundamental misunderstanding of what DevOps is really about.</p>
            <p className={styles.paragraph}>At its core, DevOps isn't about complex tools; it's a philosophy focused on reliability, security, and efficiency. It's about answering three simple but crucial questions:</p>
            <ul className={styles.list}>
                <li className={styles.listItem}>What happens if our website goes down?</li>
                <li className={styles.listItem}>What happens if we get hacked and lose our data?</li>
                <li className={styles.listItem}>How can we deploy updates safely and without causing new problems?</li>
            </ul>
            <p className={styles.paragraph}>These are not big-company problems. These are business-survival problems. For a small business, a day of downtime or a single data breach can be an extinction-level event.<sup><a href="#footnote-1" id="footnote-ref-1" className={styles.link}>1</a></sup></p>

            <h2 className={styles.heading2}>DevOps for the Rest of Us: What Really Matters</h2>
            <p className={styles.paragraph}>You don't need a Kubernetes cluster and a team of Site Reliability Engineers. For most small and medium-sized businesses, a solid DevOps foundation comes down to a few key practices that provide immense value and peace of mind.</p>

            <h3 className={styles.heading3}>1. Automated, Off-Site Backups</h3>
            <p className={styles.paragraph}>This is the absolute, non-negotiable foundation. If your website's server crashed right now, do you have a complete, recent copy of your site and your database stored somewhere else? Many businesses rely on their hosting provider's "backups," only to discover they are incomplete, outdated, or have been overwritten. A proper backup strategy involves automated, daily backups of both your files and your database, stored in a separate, secure location (like Amazon S3). This is your ultimate insurance policy.<sup><a href="#footnote-2" id="footnote-ref-2" className={styles.link}>2</a></sup></p>

            <h3 className={styles.heading3}>2. Proactive Security and Patching</h3>
            <p className={styles.paragraph}>Security isn't a one-time setup; it's an ongoing process. The software your website depends on—the operating system, the web server, the programming language—is constantly being updated to patch security vulnerabilities. A core DevOps practice is having a system to regularly apply these patches to keep your server secure.<sup><a href="#footnote-3" id="footnote-ref-3" className={styles.link}>3</a></sup> It also means implementing a firewall, monitoring for suspicious activity, and <Link href="/blog/legacy-system-modernisation-guide" className={styles.link}>ensuring your application code is built with security best practices from day one</Link>.</p>

            <h3 className={styles.heading3}>3. Health Monitoring and Alerting</h3>
            <p className={styles.paragraph}>How do you know your website is down? Do you wait for a customer to call and complain? A proper DevOps setup includes automated health checks that monitor your site 24/7. If the site goes down or experiences a critical error, the system should send an immediate alert to your technical team so the problem can be fixed before it impacts a significant number of users.</p>

            <h3 className={styles.heading3}>4. Repeatable, Zero-Downtime Deployments</h3>
            <p className={styles.paragraph}>How do you update your website? Do you manually upload files via FTP and cross your fingers? This is a recipe for disaster. A modern DevOps approach automates the deployment process. When new code is ready, a script runs that automatically tests, builds, and deploys the update with zero downtime. If something goes wrong, you can roll back to the previous version with a single click. This makes updates safe, repeatable, and stress-free.</p>

            <h2 className={styles.heading2}>The Cost of Neglecting Your Infrastructure</h2>
            <p className={styles.paragraph}>"My hosting provider handles all that." This is a <Link href="/blog/cloud-infrastructure-illusion" className={styles.link}>common and dangerous assumption</Link>. Most basic hosting plans provide the bare minimum. They give you a server, but you are responsible for securing it, backing it up, and maintaining the software on it. Relying on them is abdicating responsibility for your own business continuity.</p>
            <p className={styles.paragraph}>The cost of not having a proper DevOps foundation is the cost of a catastrophic failure. How much revenue would you lose if your e-commerce site was down for a full day? What would be the reputational damage of a data breach? What is the cost of rebuilding your entire site from scratch because you didn't have a backup?</p>

            <h2 className={styles.heading2}>The DreamsByte Approach: DevOps as a Standard Feature</h2>
            <p className={styles.paragraph}>At DreamsByte, we believe that a professional website is more than just code; it's a reliable, secure service. That's why we include these core DevOps practices as a standard part of our "DevOps & Security" service offering. We don't believe that reliability and security should be optional extras.</p>
            <p className={styles.paragraph}>We build systems that are resilient by design. We automate the boring but critical work of backups, security patching, and monitoring so you can focus on your business, confident that your digital infrastructure is solid.</p>

            <h2 className={styles.heading2}>Invest in Peace of Mind</h2>
            <p className={styles.paragraph}>You don't need to become a DevOps expert. But you do need to partner with someone who takes the stability and security of your digital presence as seriously as you take your business itself.</p>
            <p className={styles.paragraph}>Does your current website have automated, off-site backups? Is it being proactively monitored and patched? Do you have a plan for when things go wrong? If the answer to any of these is "I don't know," then it's time for a conversation.</p>
        </>
    );

    const ContentES = () => (
        <>
            <h2 className={styles.heading2}>"No somos lo suficientemente grandes para DevOps"</h2>
            <p className={styles.paragraph}>Cuando los dueños de PyMEs escuchan el término "DevOps", suelen imaginar gigantes de Silicon Valley con equipos enormes de ingenieros gestionando procesos automatizados complejos. Piensan: "Eso es para Google y Netflix, no para mí. Yo solo tengo un sitio web". Esto es un error fundamental sobre qué es realmente DevOps.</p>
            <p className={styles.paragraph}>En su esencia, DevOps no se trata de herramientas complejas; es una filosofía enfocada en la confiabilidad, la seguridad y la eficiencia. Se trata de responder tres preguntas simples pero cruciales:</p>
            <ul className={styles.list}>
                <li className={styles.listItem}>¿Qué pasa si nuestro sitio web se cae?</li>
                <li className={styles.listItem}>¿Qué pasa si nos hackean y perdemos nuestros datos?</li>
                <li className={styles.listItem}>¿Cómo podemos subir actualizaciones de forma segura y sin generar nuevos problemas?</li>
            </ul>
            <p className={styles.paragraph}>Estos no son problemas de empresas grandes. Son problemas de supervivencia del negocio. Para una PyME, un día de inactividad o una filtración de datos puede ser el fin de la empresa.<sup><a href="#footnote-1" id="footnote-ref-1" className={styles.link}>1</a></sup></p>

            <h2 className={styles.heading2}>DevOps para el resto de nosotros: Lo que realmente importa</h2>
            <p className={styles.paragraph}>No necesitás un cluster de Kubernetes ni un equipo de Site Reliability Engineers. Para la mayoría de las PyMEs, una base sólida de DevOps se resume en unas pocas prácticas clave que brindan un valor inmenso y tranquilidad.</p>

            <h3 className={styles.heading3}>1. Backups automáticos y externos</h3>
            <p className={styles.paragraph}>Esta es la base absoluta y no negociable. Si el servidor de tu sitio se rompiera ahora mismo, ¿tenés una copia completa y reciente de tu sitio y de tu base de datos guardada en otro lugar? Muchos negocios confían en los "backups" de su proveedor de hosting, solo para descubrir que están incompletos, desactualizados o que fueron sobrescritos. Una estrategia de backup real implica copias diarias automáticas, guardadas en una ubicación segura y separada (como Amazon S3). Esta es tu póliza de seguro definitiva.<sup><a href="#footnote-2" id="footnote-ref-2" className={styles.link}>2</a></sup></p>

            <h3 className={styles.heading3}>2. Seguridad proactiva y parches</h3>
            <p className={styles.paragraph}>La seguridad no es una configuración de una sola vez; es un proceso continuo. El software del que depende tu sitio (el sistema operativo, el servidor web, el lenguaje de programación) se actualiza constantemente para corregir vulnerabilidades. Una práctica central de DevOps es tener un sistema para aplicar estos parches regularmente.<sup><a href="#footnote-3" id="footnote-ref-3" className={styles.link}>3</a></sup> También significa implementar un firewall, monitorear actividad sospechosa y <Link href="/blog/legacy-system-modernisation-guide" className={styles.link}>asegurar que el código de tu aplicación esté construido con mejores prácticas de seguridad desde el primer día</Link>.</p>

            <h3 className={styles.heading3}>3. Monitoreo de salud y alertas</h3>
            <p className={styles.paragraph}>¿Cómo te enterás si tu sitio está caído? ¿Esperás a que un cliente te llame para quejarse? Una configuración correcta de DevOps incluye chequeos automáticos que monitorean tu sitio las 24 horas. Si el sitio se cae o tiene un error crítico, el sistema tiene que mandar una alerta inmediata a tu equipo técnico para que el problema se solucione antes de que afecte a muchos usuarios.</p>

            <h3 className={styles.heading3}>4. Despliegues repetibles y sin tiempo de inactividad</h3>
            <p className={styles.paragraph}>¿Cómo actualizás tu sitio web? ¿Subís archivos manualmente por FTP y cruzás los dedos? Esa es la receta para el desastre. Un enfoque moderno de DevOps automatiza el proceso de despliegue. Cuando el código nuevo está listo, un script lo testea, lo construye y lo publica automáticamente sin que el sitio deje de funcionar ni un segundo. Si algo sale mal, podés volver a la versión anterior con un solo click. Esto hace que las actualizaciones sean seguras y sin estrés.</p>

            <h2 className={styles.heading2}>El costo de descuidar tu infraestructura</h2>
            <p className={styles.paragraph}>"Mi proveedor de hosting se encarga de todo eso". Esta es una <Link href="/blog/cloud-infrastructure-illusion" className={styles.link}>suposición común y peligrosa</Link>. La mayoría de los planes de hosting básicos dan lo mínimo. Te dan un servidor, pero vos sos responsable de asegurarlo, respaldarlo y mantener el software. Confiar ciegamente en ellos es abandonar la responsabilidad sobre la continuidad de tu propio negocio.</p>
            <p className={styles.paragraph}>El costo de no tener una base de DevOps adecuada es el costo de una falla catastrófica. ¿Cuánta plata perderías si tu e-commerce estuviera caído un día entero? ¿Cuál sería el daño a tu reputación por una filtración de datos? ¿Cuál es el costo de reconstruir todo tu sitio desde cero porque no tenías un backup?</p>

            <h2 className={styles.heading2}>El enfoque de DreamsByte: DevOps como estándar</h2>
            <p className={styles.paragraph}>En DreamsByte, creemos que un sitio web profesional es más que solo código; es un servicio confiable y seguro. Por eso, incluimos estas prácticas de DevOps como parte estándar de nuestra oferta de "DevOps y Seguridad". No creemos que la confiabilidad y la seguridad deban ser opcionales.</p>
            <p className={styles.paragraph}>Construimos sistemas resilientes por diseño. Automatizamos el trabajo aburrido pero crítico de backups, parches y monitoreo para que vos puedas enfocarte en tu negocio, con la confianza de que tu infraestructura digital es sólida.</p>

            <h2 className={styles.heading2}>Invertí en tranquilidad</h2>
            <p className={styles.paragraph}>No necesitás ser un experto en DevOps. Pero sí necesitás un socio que se tome la estabilidad y seguridad de tu presencia digital tan en serio como vos te tomás tu negocio.</p>
            <p className={styles.paragraph}>¿Tu sitio actual tiene backups automáticos y externos? ¿Se monitorea y se parcha de forma proactiva? ¿Tenés un plan para cuando las cosas salgan mal? Si la respuesta a alguna de estas es "no lo sé", entonces es momento de que charlemos.</p>
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
                                "15 Backup and Disaster Recovery Best Practices to Consider," <a href="https://solutionsreview.com/backup-recovery/backup-and-disaster-recovery-best-practices/" target="_blank" rel="noopener noreferrer" className={styles.link}>Solutions Review</a>.
                                <a href="#footnote-ref-2" aria-label="Back to content" className={styles.link}> ↩</a>
                            </p>
                        </li>
                        <li id="footnote-3" className={styles.listItem}>
                            <p className={styles.paragraph}>
                                "Software Security Patch Management—A Systematic Literature Review of Challenges, Approaches, Tools and Practices," <a href="https://arxiv.org/abs/2004.09846" target="_blank" rel="noopener noreferrer" className={styles.link}>arXiv</a>.
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
