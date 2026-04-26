'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useContact } from '../../../contexts/ContactContext';
import { useHeaderAnimation } from '../../../contexts/HeaderAnimationContext';
import { useLanguage } from '../../../contexts/LanguageContext';
import CallToAction from '../../../components/layout/CallToAction/CallToAction';
import styles from '../post.module.scss';
import { posts } from '../posts';

export default function SEOSnakeOil() {
    const { openContact } = useContact();
    const { headerAnimationComplete } = useHeaderAnimation();
    const { language, t } = useLanguage();
    const [contentVisible, setContentVisible] = useState(false);

    const slug = 'seo-snake-oil-empty-promises';
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
            <h2 className={styles.heading2}>What Actually Matters for SEO</h2>
            <p className={styles.paragraph}>Search engines have one goal: deliver relevant, high-quality content to users. Despite what expensive SEO agencies want you to believe, ranking well comes down to three core principles:</p>

            <ul className={styles.list}>
                <li className={styles.listItem}><strong>Quality Content:</strong> Write genuinely useful content that answers real questions your audience is asking</li>
                <li className={styles.listItem}><strong>Technical Fundamentals:</strong> Fast loading times, mobile responsiveness, and proper HTML structure</li>
                <li className={styles.listItem}><strong>Genuine Authority:</strong> Build real relationships and earn natural backlinks through quality work</li>
            </ul>

            <h2 className={styles.heading2}>The Red Flags of SEO Snake Oil</h2>
            <p className={styles.paragraph}>Here's how to spot services that are wasting your money:</p>

            <h3 className={styles.heading3}>Guaranteed Rankings</h3>
            <p className={styles.paragraph}>No one can guarantee specific rankings. Search algorithms change constantly, and Google explicitly states that guaranteed rankings are impossible.<sup><a href="#footnote-1" id="footnote-ref-1" className={styles.link}>1</a></sup> Anyone promising otherwise is either lying or using black-hat techniques that will eventually get your site penalized.</p>

            <h3 className={styles.heading3}>Mysterious "Secret Techniques"</h3>
            <p className={styles.paragraph}>Good SEO isn't mysterious. It's documented, well-understood, and freely available information. If an agency won't explain their methods in plain English, they're probably doing nothing of value or worse, using tactics that could harm your site.</p>

            <h3 className={styles.heading3}>Obsession with Keyword Density</h3>
            <p className={styles.paragraph}>Keyword stuffing died a decade ago. Modern search engines, since updates like Google's Hummingbird, understand context and semantic meaning.<sup><a href="#footnote-2" id="footnote-ref-2" className={styles.link}>2</a></sup> Writing naturally for humans always beats writing awkwardly for search engines.</p>

            <h3 className={styles.heading3}>Bulk Directory Submissions</h3>
            <p className={styles.paragraph}>Submitting your site to hundreds of low-quality directories doesn't help and can actively hurt your rankings. Quality over quantity applies to backlinks more than anything else.</p>

            <h3 className={styles.heading3}>Poor English & Grammar</h3>
            <p className={styles.paragraph}>This is the ultimate litmus test. Scrutinize the emails and proposals you receive from potential SEO providers. Are they riddled with grammatical errors, spelling mistakes, or awkward phrasing? If an 'expert' can't write a professional sentence, how can you possibly trust them to write compelling, high-quality content for your website?</p>
            <p className={styles.paragraph}>Content is the bedrock of modern SEO. It's not just about sprinkling in keywords; it's about building authority and trust with your audience. Poorly written articles, blog posts, and page copy make your brand look unprofessional and actively harm your credibility. Search engines are increasingly sophisticated, and their algorithms are designed to penalize low-quality, poorly constructed content. Their own communication is a direct sample of the best work you can expect. If it's subpar, run the other way.</p>

            <h2 className={styles.heading2}>What You Should Actually Invest In</h2>
            <p className={styles.paragraph}>Instead of expensive monthly SEO retainers, focus your resources on:</p>

            <ul className={styles.list}>
                <li className={styles.listItem}><Link href="/blog/performance-first-website-lighthouse" className={styles.link}><strong>A Fast, Well-Built Website:</strong> Performance, measured by metrics like Core Web Vitals, is a ranking factor, and it directly impacts user experience.</Link><sup><a href="#footnote-3" id="footnote-ref-3" className={styles.link}>3</a></sup></li>
                <li className={styles.listItem}><Link href="/blog/i-will-sell-to-everyone-is-a-lie" className={styles.link}><strong>Creating Valuable Content:</strong> Blog posts, guides, and resources that genuinely help your audience</Link></li>
                <li className={styles.listItem}><strong>Building Genuine Relationships:</strong> Network with real people and businesses in your industry</li>
                <li className={styles.listItem}><strong>Understanding Your Analytics:</strong> Learn what your audience actually searches for and creates content around that</li>
            </ul>

            <h2 className={styles.heading2}>The DreamsByte Approach</h2>
            <p className={styles.paragraph}>We build SEO-friendly websites from the ground up with proper technical foundations: clean semantic HTML, fast loading times, mobile responsiveness, and proper meta tags. But we don't sell ongoing SEO services because the best SEO strategy is simply creating a great website and filling it with quality content.</p>

            <p className={styles.paragraph}>We'll teach you the basics, set up your site correctly from day one, and give you the tools to succeed. No mysterious monthly reports, no proprietary dashboards, no vendor lock-in.</p>

            <h2 className={styles.heading2}>The Bottom Line</h2>
            <p className={styles.paragraph}>Good SEO is important, but it's not magic, and it shouldn't be expensive. Anyone trying to sell you complicated, ongoing SEO services is probably overcomplicating something simple to justify their fees.</p>

            <p className={styles.paragraph}>Build a fast, well-structured website. Create genuinely useful content. Focus on your actual business. That's the SEO strategy that works.</p>
        </>
    );

    const ContentES = () => (
        <>
            <h2 className={styles.heading2}>Lo que realmente importa para el SEO</h2>
            <p className={styles.paragraph}>Los motores de búsqueda tienen un objetivo: ofrecer contenido relevante y de alta calidad a los usuarios. A pesar de lo que las agencias de SEO caras quieren que creas, posicionarse bien se reduce a tres principios fundamentales:</p>

            <ul className={styles.list}>
                <li className={styles.listItem}><strong>Contenido de calidad:</strong> Escribí contenido genuinamente útil que responda a las preguntas reales que se hace tu audiencia.</li>
                <li className={styles.listItem}><strong>Fundamentos técnicos:</strong> Tiempos de carga rápidos, diseño responsivo y una estructura HTML adecuada.</li>
                <li className={styles.listItem}><strong>Autoridad genuina:</strong> Construí relaciones reales y obtené enlaces (backlinks) naturales a través de un trabajo de calidad.</li>
            </ul>

            <h2 className={styles.heading2}>Las señales de alerta del "humo" del SEO</h2>
            <p className={styles.paragraph}>Así es como podés detectar servicios que solo te hacen perder plata:</p>

            <h3 className={styles.heading3}>Rankings garantizados</h3>
            <p className={styles.paragraph}>Nadie puede garantizar rankings específicos. Los algoritmos de búsqueda cambian constantemente y Google establece explícitamente que los rankings garantizados son imposibles.<sup><a href="#footnote-1" id="footnote-ref-1" className={styles.link}>1</a></sup> Cualquiera que prometa lo contrario está mintiendo o usando técnicas "black-hat" que eventualmente harán que penalicen tu sitio.</p>

            <h3 className={styles.heading3}>Técnicas secretas misteriosas</h3>
            <p className={styles.paragraph}>El buen SEO no es misterioso. Es información documentada, bien comprendida y disponible gratuitamente. Si una agencia no explica sus métodos en un lenguaje claro, probablemente no estén haciendo nada de valor o, peor aún, estén usando tácticas que podrían dañar tu sitio.</p>

            <h3 className={styles.heading3}>Obsesión con la densidad de palabras clave</h3>
            <p className={styles.paragraph}>El "keyword stuffing" (relleno de palabras clave) murió hace una década. Los motores de búsqueda modernos, desde actualizaciones como Hummingbird de Google, entienden el contexto y el significado semántico.<sup><a href="#footnote-2" id="footnote-ref-2" className={styles.link}>2</a></sup> Escribir de forma natural para humanos siempre le gana a escribir de forma forzada para los buscadores.</p>

            <h3 className={styles.heading3}>Envíos masivos a directorios</h3>
            <p className={styles.paragraph}>Enviar tu sitio a cientos de directorios de baja calidad no ayuda y puede perjudicar activamente tus rankings. La calidad sobre la cantidad se aplica a los enlaces más que a cualquier otra cosa.</p>

            <h3 className={styles.heading3}>Mala redacción y gramática</h3>
            <p className={styles.paragraph}>Esta es la prueba definitiva. Analizá los correos y propuestas que recibís de potenciales proveedores de SEO. ¿Están llenos de errores gramaticales, faltas de ortografía o frases raras? Si un "experto" no puede escribir una oración profesional, ¿cómo podés confiar en que escriba contenido convincente y de alta calidad para tu sitio web?</p>
            <p className={styles.paragraph}>El contenido es la base del SEO moderno. No se trata solo de salpicar palabras clave; se trata de construir autoridad y confianza con tu audiencia. Los artículos, posts y textos mal escritos hacen que tu marca se vea poco profesional y dañan activamente tu credibilidad. Los motores de búsqueda son cada vez más sofisticados y sus algoritmos están diseñados para penalizar el contenido de baja calidad. Su propia comunicación es una muestra directa del mejor trabajo que podés esperar. Si es mediocre, salí corriendo.</p>

            <h2 className={styles.heading2}>En qué deberías invertir realmente</h2>
            <p className={styles.paragraph}>En lugar de costosos servicios mensuales de SEO, enfocá tus recursos en:</p>

            <ul className={styles.list}>
                <li className={styles.listItem}><Link href="/blog/performance-first-website-lighthouse" className={styles.link}><strong>Un sitio web rápido y bien construido:</strong> El rendimiento, medido por métricas como Core Web Vitals, es un factor de ranking y afecta directamente la experiencia del usuario.</Link><sup><a href="#footnote-3" id="footnote-ref-3" className={styles.link}>3</a></sup></li>
                <li className={styles.listItem}><Link href="/blog/i-will-sell-to-everyone-is-a-lie" className={styles.link}><strong>Creación de contenido valioso:</strong> Posts, guías y recursos que ayuden genuinamente a tu audiencia.</Link></li>
                <li className={styles.listItem}><strong>Construcción de relaciones genuinas:</strong> Conectá con personas y empresas reales en tu industria.</li>
                <li className={styles.listItem}><strong>Comprensión de tus métricas (Analytics):</strong> Aprendé qué busca realmente tu audiencia y creá contenido en torno a eso.</li>
            </ul>

            <h2 className={styles.heading2}>El enfoque de DreamsByte</h2>
            <p className={styles.paragraph}>Construimos sitios web optimizados para SEO desde cero con bases técnicas sólidas: HTML semántico limpio, tiempos de carga rápidos, diseño responsivo y meta tags adecuados. Pero no vendemos servicios de SEO continuos porque la mejor estrategia de SEO es simplemente crear un sitio web excelente y llenarlo de contenido de calidad.</p>

            <p className={styles.paragraph}>Te enseñaremos lo básico, configuraremos tu sitio correctamente desde el primer día y te daremos las herramientas para tener éxito. Sin informes mensuales misteriosos, sin paneles propietarios, sin ataduras.</p>

            <h2 className={styles.heading2}>Conclusión</h2>
            <p className={styles.paragraph}>El buen SEO es importante, pero no es magia y no debería ser caro. Cualquiera que intente venderte servicios de SEO complicados y continuos probablemente esté sobrecomplicando algo simple para justificar sus honorarios.</p>

            <p className={styles.paragraph}>Construí un sitio web rápido y bien estructurado. Creá contenido genuinamente útil. Enfocate en tu negocio real. Esa es la estrategia de SEO que funciona.</p>
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
                                "No one can guarantee a #1 ranking on Google. Beware of SEOs that claim to guarantee rankings...", <a href="https://developers.google.com/search/docs/fundamentals/do-i-need-seo#no-one-can-guarantee-a-1-ranking-on-google" target="_blank" rel="noopener noreferrer" className={styles.link}>Google Search Central</a>.
                                <a href="#footnote-ref-1" aria-label="Back to content" className={styles.link}> ↩</a>
                            </p>
                        </li>
                        <li id="footnote-2" className={styles.listItem}>
                            <p className={styles.paragraph}>
                                "Google Hummingbird: Everything You Need To Know," <a href="https://www.searchenginejournal.com/google-hummingbird-everything-need-know/4 Hummingbird" target="_blank" rel="noopener noreferrer" className={styles.link}>Search Engine Journal</a>.
                                <a href="#footnote-ref-2" aria-label="Back to content" className={styles.link}> ↩</a>
                            </p>
                        </li>
                        <li id="footnote-3" className={styles.listItem}>
                            <p className={styles.paragraph}>
                                "Understanding Core Web Vitals and Google search results", <a href="https://developers.google.com/search/docs/appearance/page-experience" target="_blank" rel="noopener noreferrer" className={styles.link}>Google Search Central</a>.
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
