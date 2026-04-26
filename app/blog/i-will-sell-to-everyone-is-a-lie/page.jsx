'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useContact } from '../../../contexts/ContactContext';
import { useHeaderAnimation } from '../../../contexts/HeaderAnimationContext';
import { useLanguage } from '../../../contexts/LanguageContext';
import CallToAction from '../../../components/layout/CallToAction/CallToAction';
import styles from '../post.module.scss';
import { posts } from '../posts';

export default function TargetAudienceIsEverything() {
    const { openContact } = useContact();
    const { headerAnimationComplete } = useHeaderAnimation();
    const { language, t } = useLanguage();
    const [contentVisible, setContentVisible] = useState(false);

    const slug = 'i-will-sell-to-everyone-is-a-lie';
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
            <h2 className={styles.heading2}>Why "Everyone" is the Worst Target Audience</h2>
            <p className={styles.paragraph}>When your target is "everyone," your marketing efforts become diluted, ineffective, and incredibly expensive. Here’s why:</p>
            <ul className={styles.list}>
                <li className={styles.listItem}><strong>Generic Messaging:</strong> You can't speak to specific pain points or desires. Your copy becomes bland, corporate-speak that resonates with no one because it’s trying to offend no one.</li>
                <li className={styles.listItem}><strong>Wasted Resources:</strong> You burn money on advertising to people who will never need, want, or afford your product.<sup><a href="#footnote-2" id="footnote-ref-2" className={styles.link}>2</a></sup> It’s like putting up billboards for a steakhouse in a town of vegetarians.</li>
                <li className={styles.listItem}><strong>Lack of Brand Identity:</strong> Brands are built on specificity and connection.<sup><a href="#footnote-3" id="footnote-ref-3" className={styles.link}>3</a></sup> Apple isn't for everyone; it's for people who value design and simplicity. Your brand's power comes from what it stands *for*, which also defines who it’s *not* for.</li>
                <li className={styles.listItem}><strong>Impossible to Differentiate:</strong> If you're for everyone, you're just like every other generic competitor. You have no unique angle to stand out in a crowded market.</li>
            </ul>

            <h2 className={styles.heading2}>Finding Your Who: A Tale of Two Businesses</h2>
            <p className={styles.paragraph}>Let's see this in action. Imagine two new businesses that build custom websites.</p>

            <h3 className={styles.heading3}>Business A: "We Build Websites for Everyone"</h3>
            <p className={styles.paragraph}>Their website says, "We offer affordable, high-quality websites for any business." Their marketing is scattered across Facebook ads, Google search ads for "website builder," and maybe a local newspaper ad. Their message is generic. Their results are dismal. They compete with Wix, Squarespace, and every other developer on price alone. It’s a race to the bottom.<sup><a href="#footnote-4" id="footnote-ref-4" className={styles.link}>4</a></sup></p>

            <h3 className={styles.heading3}>Business B: "We Build Websites for Independent Financial Advisors"</h3>
            <p className={styles.paragraph}>This is a niche. Business B has done their homework. They know that independent financial advisors struggle with outdated websites, need to build trust with high-net-worth clients, and have specific compliance requirements.
            </p>
            <p className={styles.paragraph}>
            Their entire strategy is focused:
            </p>
            <ul className={styles.list}>
               <li className={styles.listItem}><strong>Website Copy:</strong> Their homepage reads, "The Professional Website Your High-Net-Worth Clients Expect." It talks about SEC compliance, secure client portals, and building digital trust.</li>
               <li className={styles.listItem}><strong>Content:</strong> They write blog posts like, "5 Ways Your Website Can Help You Retain More AUM" and "Is Your Website SEC-Compliant?".</li>
               <li className={styles.listItem}><strong>Marketing Channels:</strong> They ignore Facebook and run targeted ads on LinkedIn, sponsor a newsletter for financial planners, and attend industry conferences.</li>
            </ul>
            <p className={styles.paragraph}>Business B gets fewer leads, but they are high-quality leads. They can charge premium prices because they are specialists, not generalists. They have become the big fish in a small, profitable pond.</p>

            <h2 className={styles.heading2}>How to Define Your Target Audience</h2>
            <p className={styles.paragraph}>Defining your audience isn't about stereotypes; it's about focus. Go beyond basic demographics and dive into what makes your ideal customers tick.</p>
            <ul className={styles.list}>
                <li className={styles.listItem}><strong>Demographics (The What):</strong> Age, gender, income, location, occupation. This is the surface level.</li>
                <li className={styles.listItem}><strong>Psychographics (The Why):</strong> This is the goldmine. What are their values, goals, fears, and frustrations? What do they read? Where do they hang out online? What is the core problem they are trying to solve?</li>
                <li className={styles.listItem}><strong>Pain Points:</strong> What specific problem does your product or service solve for them? If you don't know the pain, you can't be the solution.</li>
            </ul>

            <h2 className={styles.heading2}>Your Website is Your #1 Salesperson—If It Knows Who It's Talking To</h2>
            <p className={styles.paragraph}>Once you know your audience, it <Link href="/blog/website-as-lead-generation-machine" className={styles.link}>transforms your website from a passive brochure into an active salesperson</Link>. Every element should be crafted for them:</p>
            <ul className={styles.list}>
                <li className={styles.listItem}>The **visual design** should match their aesthetic.</li>
                <li className={styles.listItem}>The **language** should mirror how they speak.</li>
                <li className={styles.listItem}>The **testimonials** should feature people they identify with.</li>
                <li className={styles.listItem}>The **call to action** should address their specific needs.</li>
            </ul>

            <h2 className={styles.heading2}>Stop Shouting and Start Connecting</h2>
            <p className={styles.paragraph}>Defining a target audience isn't about excluding people. It's about focusing your finite resources—time, money, and energy—on creating a powerful, magnetic brand that attracts the *right* people. The ones who need you, value you, and are happy to pay for your expertise.</p>
            <p className={styles.paragraph}>It's time to stop trying to sell to everyone. Who is the one person you can help the most? Start there.</p>
        </>
    );

    const ContentES = () => (
        <>
            <h2 className={styles.heading2}>Por qué "todos" es el peor público objetivo</h2>
            <p className={styles.paragraph}>Cuando tu objetivo es "todos", tus esfuerzos de marketing se diluyen, son ineficaces e increíblemente caros. He aquí por qué:</p>
            <ul className={styles.list}>
                <li className={styles.listItem}><strong>Mensajes genéricos:</strong> No podés hablar de puntos de dolor o deseos específicos. Tu texto se vuelve blando, un lenguaje corporativo que no resuena con nadie porque intenta no ofender a nadie.</li>
                <li className={styles.listItem}><strong>Recursos desperdiciados:</strong> Quemás plata en publicidad para personas que nunca necesitarán, querrán o podrán pagar tu producto.<sup><a href="#footnote-2" id="footnote-ref-2" className={styles.link}>2</a></sup> Es como poner carteles de una parrilla en un pueblo de vegetarianos.</li>
                <li className={styles.listItem}><strong>Falta de identidad de marca:</strong> Las marcas se construyen sobre la especificidad y la conexión.<sup><a href="#footnote-3" id="footnote-ref-3" className={styles.link}>3</a></sup> Apple no es para todos; es para personas que valoran el diseño y la simplicidad. El poder de tu marca proviene de lo que defiende, lo que también define para quién *no* es.</li>
                <li className={styles.listItem}><strong>Imposible de diferenciar:</strong> Si sos para todos, sos igual a cualquier otro competidor genérico. No tenés un ángulo único para destacar en un mercado saturado.</li>
            </ul>

            <h2 className={styles.heading2}>Encontrando a tu "quién": Una historia de dos negocios</h2>
            <p className={styles.paragraph}>Veamos esto en acción. Imaginá dos nuevos negocios que construyen sitios web personalizados.</p>

            <h3 className={styles.heading3}>Negocio A: "Construimos sitios web para todos"</h3>
            <p className={styles.paragraph}>Su sitio dice: "Ofrecemos sitios web accesibles y de alta calidad para cualquier negocio". Su marketing está disperso en anuncios de Facebook, anuncios de búsqueda de Google para "creador de sitios web" y tal vez un anuncio en un periódico local. Su mensaje es genérico. Sus resultados son mediocres. Compiten con Wix, Squarespace y cualquier otro desarrollador solo por precio. Es una carrera hacia el fondo.<sup><a href="#footnote-4" id="footnote-ref-4" className={styles.link}>4</a></sup></p>

            <h3 className={styles.heading3}>Negocio B: "Construimos sitios web para asesores financieros independientes"</h3>
            <p className={styles.paragraph}>Esto es un nicho. El Negocio B ha hecho su tarea. Saben que los asesores financieros independientes luchan con sitios web obsoletos, necesitan generar confianza con clientes de alto patrimonio y tienen requisitos de cumplimiento específicos.</p>
            <p className={styles.paragraph}>
            Toda su estrategia está enfocada:
            </p>
            <ul className={styles.list}>
               <li className={styles.listItem}><strong>Texto del sitio web:</strong> Su página de inicio dice: "El sitio web profesional que tus clientes de alto patrimonio esperan". Habla sobre cumplimiento normativo, portales seguros para clientes y la construcción de confianza digital.</li>
               <li className={styles.listItem}><strong>Contenido:</strong> Escriben posts como: "5 formas en que tu sitio web puede ayudarte a retener más activos bajo gestión" y "¿Tu sitio web cumple con las normativas?".</li>
               <li className={styles.listItem}><strong>Canales de marketing:</strong> Ignoran Facebook y publican anuncios segmentados en LinkedIn, patrocinan un newsletter para planificadores financieros y asisten a conferencias de la industria.</li>
            </ul>
            <p className={styles.paragraph}>El Negocio B recibe menos leads, pero son leads de alta calidad. Pueden cobrar precios premium porque son especialistas, no generalistas. Se han convertido en el pez grande en un estanque pequeño y rentable.</p>

            <h2 className={styles.heading2}>Cómo definir a tu público objetivo</h2>
            <p className={styles.paragraph}>Definir a tu audiencia no se trata de estereotipos; se trata de enfoque. Ve más allá de la demografía básica y sumergite en lo que motiva a tus clientes ideales.</p>
            <ul className={styles.list}>
                <li className={styles.listItem}><strong>Demografía (El qué):</strong> Edad, género, ingresos, ubicación, ocupación. Este es el nivel superficial.</li>
                <li className={styles.listItem}><strong>Psicografía (El por qué):</strong> Esta es la mina de oro. ¿Cuáles son sus valores, metas, miedos y frustraciones? ¿Qué leen? ¿Dónde pasan el tiempo online? ¿Cuál es el problema central que intentan resolver?</li>
                <li className={styles.listItem}><strong>Puntos de dolor (Pain Points):</strong> ¿Qué problema específico resuelve tu producto o servicio para ellos? Si no conocés el dolor, no podés ser la solución.</li>
            </ul>

            <h2 className={styles.heading2}>Tu sitio web es tu vendedor número uno, si sabe con quién está hablando</h2>
            <p className={styles.paragraph}>Una vez que conocés a tu audiencia, eso <Link href="/blog/website-as-lead-generation-machine" className={styles.link}>transforma tu sitio web de un folleto pasivo en un vendedor activo</Link>. Cada elemento debe estar diseñado para ellos:</p>
            <ul className={styles.list}>
                <li className={styles.listItem}>El **diseño visual** debe coincidir con su estética.</li>
                <li className={styles.listItem}>El **lenguaje** debe reflejar cómo hablan.</li>
                <li className={styles.listItem}>Los **testimonios** deben presentar a personas con las que se identifiquen.</li>
                <li className={styles.listItem}>La **llamada a la acción** debe abordar sus necesidades específicas.</li>
            </ul>

            <h2 className={styles.heading2}>Dejá de gritar y empezá a conectar</h2>
            <p className={styles.paragraph}>Definir un público objetivo no se trata de excluir personas. Se trata de enfocar tus recursos finitos —tiempo, plata y energía— en crear una marca poderosa y magnética que atraiga a las personas *adecuadas*. Aquellas que te necesitan, te valoran y están felices de pagar por tu experiencia.</p>
            <p className={styles.paragraph}>Es hora de dejar de intentar venderle a todos. ¿Quién es la persona a la que más podés ayudar? Empezá por ahí.</p>
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
                                "Examples of Niche Marketing for Small Business," <a href="https://www.indeed.com/career-advice/career-development/niche-marketing-small-business" target="_blank" rel="noopener noreferrer" className={styles.link}>Indeed</a>.
                                <a href="#footnote-ref-1" aria-label="Back to content" className={styles.link}> ↩</a>
                            </p>
                        </li>
                        <li id="footnote-2" className={styles.listItem}>
                            <p className={styles.paragraph}>
                                "Niche Marketing: A Deep Dive," <a href="https://thestrategyinstitute.org/niche-marketing/" target="_blank" rel="noopener noreferrer" className={styles.link}>The Strategy Institute</a>.
                                <a href="#footnote-ref-2" aria-label="Back to content" className={styles.link}> ↩</a>
                            </p>
                        </li>
                        <li id="footnote-3" className={styles.listItem}>
                            <p className={styles.paragraph}>
                                "Why is brand identity important: building trust, recognition, & loyalty," <a href="https://ikon.london/blog/why-is-brand-identity-important" target="_blank" rel="noopener noreferrer" className={styles.link}>ikon.london</a>.
                                <a href="#footnote-ref-3" aria-label="Back to content" className={styles.link}> ↩</a>
                            </p>
                        </li>
                        <li id="footnote-4" className={styles.listItem}>
                            <p className={styles.paragraph}>
                                "Specialization: What It Is in Economics and Business," <a href="https://www.investopedia.com/terms/s/specialization.asp" target="_blank" rel="noopener noreferrer" className={styles.link}>Investopedia</a>.
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
