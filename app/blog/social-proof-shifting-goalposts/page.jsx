'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useContact } from '../../../contexts/ContactContext';
import { useHeaderAnimation } from '../../../contexts/HeaderAnimationContext';
import { useLanguage } from '../../../contexts/LanguageContext';
import CallToAction from '../../../components/layout/CallToAction/CallToAction';
import styles from '../post.module.scss';
import { posts } from '../posts';

export default function SocialProofShiftingGoalposts() {
    const { openContact } = useContact();
    const { headerAnimationComplete } = useHeaderAnimation();
    const { language, t } = useLanguage();
    const [contentVisible, setContentVisible] = useState(false);

    // Find the current post's metadata from the translation system
    const slug = 'social-proof-shifting-goalposts';
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
            <h2 className={styles.heading2}>The Social Proof Gaslight</h2>
            <p className={styles.paragraph}>
                Social proof – testimonials, follower counts, glowing reviews – is often touted as the bedrock of modern marketing. But as we head into 2026, it's increasingly used as a linguistic sleight of hand. Platforms like Meta and Google claim the benefit they provide is an invisible layer of trust or authority, when in reality, they are just charging you for the privilege of accessing the network you built or the customers who were already looking for you.
            </p>
            <p className={styles.paragraph}>
                The platform’s argument usually goes like this: "Even if you don't see a direct sale from this ad, the Social Proof (likes, views, presence) builds a hidden brand value that will pay off later." This is often a cover for declining performance.
            </p>

            <h3 className={styles.heading3}>You Bring the Network, They Charge the Rent</h3>
            <p className={styles.paragraph}>
                You spend years building a following or a reputation. Then, the algorithm throttles your reach so that only 2% of your network sees your posts. To reach the other 98%, you have to pay. They aren't providing social proof; they are holding your own social proof hostage and selling it back to you.
            </p>

            <h3 className={styles.heading3}>The Contextual Mirage</h3>
            <p className={styles.paragraph}>
                Google often claims that being at the top of a Search Result provides authority. But as <Link href="/blog/seo-snake-oil-empty-promises" className={styles.link}>SGE (Search Generative Experience)</Link> and AI overviews take over in 2026, Google is scraping your content to answer the question directly. They take your proof (your expertise) and present it as their own, often without even sending the user to your site.
            </p>

            <h3 className={styles.heading3}>The Zero-Sum Engagement</h3>
            <p className={styles.paragraph}>
                The platforms know this, yet they still use these vanity metrics to justify ad spend when <Link href="/blog/website-as-lead-generation-machine" className={styles.link}>actual conversion rates (ROAS) are cratering</Link>.
            </p>

            <h2 className={styles.heading2}>The Hidden Benefit Trap</h2>
            <p className={styles.paragraph}>
                By claiming the benefit is hidden, these companies move the goalposts. If you can't measure it, you can't prove it's failing. This allows them to continue extraction even as the organic value of the platform declines. It’s the digital equivalent of a landlord claiming that the prestige of a 20% rent hike is the benefit of living in the building, while the elevator is broken and the roof is leaking.
            </p>
            <p className={styles.paragraph}>
                <strong>The Social Proof Paradox:</strong> If you have to pay $5,000 in ads to show your 50,000 followers a product, you don't own a social network—you are a tenant in a digital feudal system where the social proof is just the paint on the walls.
            </p>

            <h2 className={styles.heading2}>The Anti-Enshittification Stack</h2>
            <p className={styles.paragraph}>
                To fight this, a new Direct-to-Community stack has emerged. These tools focus on sovereignty—meaning you own the data, the list, and the reach, and no algorithm can hide your benefit behind a paywall.
            </p>

            <h3 className={styles.heading3}>1. The Sovereign Social Protocols (Web3)</h3>
            <p className={styles.paragraph}>
                Instead of a platform owning your data, these are protocols where you own your Social Graph. If you don't like the app you're using, you can move your entire audience to a different app instantly.
            </p>
            <ul className={styles.list}>
                <li className={styles.listItem}><strong>Farcaster (Warpcast):</strong> A leader in sovereign social, Farcaster offers a decentralized alternative that feels like early Twitter. While it promises freedom from algorithmic suppression, it's not without its own complexities.
                    <ul style={{marginTop: '10px'}}>
                        <li><strong>Dynamic Costs:</strong> The initial $5/year storage fee is misleading. By 2026, Farcaster's growth has led to a more dynamic unit system where high-volume creators pay more for storage.</li>
                        <li><strong>The Web3 Hurdle:</strong> The article glosses over the significant friction of Web3. For the average user, managing a seed phrase or a crypto wallet is still a massive barrier to entry, making it less of a seamless utopia than it appears.</li>
                        <li><strong>Frictionless Commerce:</strong> Its Frames feature remains revolutionary, allowing users to build mini-apps directly into a post. This cuts out the link in bio step and enables commerce to happen natively within the feed.</li>
                    </ul>
                </li>
                <li className={styles.listItem}><strong>Lens Protocol:</strong> Built by the Aave team, this turns every follow into an NFT. This means your relationship with your audience is a digital asset that you own, not Meta.</li>
            </ul>

            <h3 className={styles.heading3}>2. Google’s E-E-A-T and User Signals</h3>
            <p className={styles.paragraph}>
                In 2024 and 2025, leaked Google documents confirmed that user signals (like Click-Through Rate and pogo-sticking) are used for rankings.
            </p>
            <ul className={styles.list}>
                <li className={styles.listItem}><strong>The Indirect Admission:</strong> Google officially tells creators to focus on E-E-A-T (Experience, Expertise, Authoritativeness, and Trustworthiness).</li>
                <li className={styles.listItem}><strong>The Paradox:</strong> They admit that they can’t actually read your mind to know if you are an expert. Instead, they look for signals of social proof (like other people linking to you). By shifting the goalposts to AI-generated overviews (SGE), they are effectively saying: "We trust your social proof enough to use your answer, but not enough to give you the click."</li>
            </ul>

            <h2 className={styles.heading2}>More Smoking Guns: Technical Features and Hidden Realities</h2>
            <p className={styles.paragraph}>
                There are a few smoking guns in the current 2026 landscape that the platforms acknowledge as technical features, but which are actually the mechanics of the Social Proof Gaslight the blog mentioned. Beyond what we’ve discussed, here are three critical, lesser-known pieces of the puzzle:
            </p>

            <h3 className={styles.heading3}>1. The "Meta Verified" Tier System: Pay-for-Support, Not Just Status</h3>
            <p className={styles.paragraph}>
                As of 2026, Meta has expanded its verification system into a multi-tiered subscription. While it's easy to see this as simply paying for status, the reality is more nuanced.
            </p>
            <ul className={styles.list}>
                <li className={styles.listItem}><strong>The Reality of Tiers:</strong> For high-end business tiers, costs can reach as high as <strong>$349.99/month</strong>. However, this price isn't just for a blue checkmark. It's primarily for a VIP pass to Meta’s business support, which was notoriously non-existent for years. It's less about buying authority and more about buying insurance for account security and access to technical assistance.</li>
                <li className={styles.listItem}><strong>The Algorithmic Edge:</strong> While Meta's terms state that verification doesn't guarantee viral growth, it does offer increased visibility. This suggests a subtle algorithmic preference for paying customers, blending the lines between authentic reach and paid priority.</li>
            </ul>

            <h3 className={styles.heading3}>2. Google’s "Citation Share": The New SEO</h3>
            <p className={styles.paragraph}>
                The rise of AI Overviews (formerly SGE) has created a zero-click environment where Google answers user queries directly. In response, Google is shifting the goalposts from clicks to a new metric: Citation Share.
            </p>
            <ul className={styles.list}>
                <li className={styles.listItem}><strong>A Half-Truth:</strong> Calling this metric a complete gaslight is a half-truth. While it reduces direct traffic, Citation Share is becoming the new frontier of SEO. Being the cited source in an AI overview is often the only way to appear above the fold.</li>
                <li className={styles.listItem}><strong>From Traffic to Attribution:</strong> The game is no longer about winning the click; it's about winning the Expertise battle. If the AI says, "According to [Your Brand]...", you are building top-of-mind awareness and brand authority, even if the user never visits your site. It's a shift from measuring traffic to measuring brand attribution.</li>
            </ul>

            <h3 className={styles.heading3}>3. The "Creative-as-Targeting" Shift: An Algorithmic Reality</h3>
            <p className={styles.paragraph}>
                In 2026, Meta's ad platform has largely automated audience targeting, leading to the mantra: "The creative is the targeting." This isn't just a trap to get advertisers to train the AI for free, but a technical evolution.
            </p>
            <ul className={styles.list}>
                <li className={styles.listItem}><strong>Meet Andromeda:</strong> Meta's 2026 retrieval algorithm, known as Andromeda, is now so fast that it can't rely on slow, manual interest-targeting. It needs signals from the creative itself.</li>
                <li className={styles.listItem}><strong>Speaking to the User:</strong> By embedding social proof (like user-generated content and reviews) directly into your ads, you're not just training an AI; you are speaking directly to user psychology. The algorithm is simply the delivery mechanism. You provide the "Who" (your brand voice and proof), and the AI handles the "How" (the targeting).</li>
            </ul>

            <h2 className={styles.heading2}>The Verdict: A Shift in Perspective</h2>
            <p className={styles.paragraph}>
                This article began as a sharp critique of platforms as purely predatory entities. While the frustration with <Link href="/blog/unethical-business-practices" className={styles.link}>enshittification</Link> is real, the Social Proof Gaslight is often a side effect of hyper-automation, not just malice. The landscape of 2026 requires a more balanced view.
            </p>

            <div className={styles.table_container}>
                <table className={styles.table}>
                    <thead>
                        <tr>
                            <th>Feature</th>
                            <th>The Article's Original View</th>
                            <th>The 2026 Industry Reality</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td data-label="Feature">Social Proof</td>
                            <td data-label="Original View">A linguistic sleight of hand</td>
                            <td data-label="2026 Reality">Still the #1 driver of conversion, just harder to earn.</td>
                        </tr>
                        <tr>
                            <td data-label="Feature">Reach</td>
                            <td data-label="Original View">Held hostage by algorithms</td>
                            <td data-label="2026 Reality">Reach is abundant; attention is what's scarce.</td>
                        </tr>
                        <tr>
                            <td data-label="Feature">SGE/AI Overviews</td>
                            <td data-label="Original View">Content scraping</td>
                            <td data-label="2026 Reality">A shift from Traffic to Brand Attribution.</td>
                        </tr>
                        <tr>
                            <td data-label="Feature">Verification</td>
                            <td data-label="Original View">Pay-to-play identity</td>
                            <td data-label="2026 Reality">An insurance policy for account security and support.</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <p className={styles.paragraph}>
                The platforms are moving toward a world where businesses provide the <strong>"Who"</strong> (a strong brand voice and authentic social proof) and they handle the <strong>"How"</strong> (the automated targeting and delivery). The call for <Link href="/blog/hidden-cost-of-no-code" className={styles.link}><strong>digital sovereignty</strong></Link> is more relevant than ever, but winning in this environment means understanding these new rules, not just fighting them. The most successful businesses in 2026 are not just building micro-communities; they are learning to leverage their sovereign assets (their expertise, their customer stories) within the automated systems of the giants.
            </p>
        </>
    );

    const ContentES = () => (
        <>
            <h2 className={styles.heading2}>El Gaslighting de la Prueba Social</h2>
            <p className={styles.paragraph}>
                La prueba social (testimonios, conteo de seguidores, reseñas entusiastas) a menudo se promociona como la base del marketing moderno. Pero a medida que avanzamos en 2026, se utiliza cada vez más como un truco lingüístico. Plataformas como Meta y Google afirman que el beneficio que brindan es una capa invisible de confianza o autoridad, cuando en realidad, solo te están cobrando por el privilegio de acceder a la red que vos mismo construiste o a los clientes que ya te estaban buscando.
            </p>
            <p className={styles.paragraph}>
                El argumento de la plataforma suele ser así: "Incluso si no ves una venta directa de este anuncio, la Prueba Social (likes, vistas, presencia) construye un valor de marca oculto que dará sus frutos más adelante". Esto a menudo es una excusa para tapar un rendimiento que viene en picada.
            </p>

            <h3 className={styles.heading3}>Vos ponés la red, ellos te cobran el alquiler</h3>
            <p className={styles.paragraph}>
                Pasás años construyendo una audiencia o una reputación. Después, el algoritmo te frena el alcance para que solo el 2% de tu red vea tus publicaciones. Para llegar al otro 98%, tenés que pagar. No te están dando prueba social; están secuestrando tu propia prueba social y vendiéndotela de nuevo.
            </p>

            <h3 className={styles.heading3}>El espejismo contextual</h3>
            <p className={styles.paragraph}>
                Google a menudo afirma que estar en la cima de un resultado de búsqueda te da autoridad. Pero a medida que <Link href="/blog/seo-snake-oil-empty-promises" className={styles.link}>SGE (Search Generative Experience)</Link> y los resúmenes de IA toman el control en 2026, Google está extrayendo tu contenido para responder la pregunta directamente. Se quedan con tu prueba (tu experiencia) y la presentan como propia, muchas veces sin siquiera mandar al usuario a tu sitio.
            </p>

            <h3 className={styles.heading3}>El engagement de suma cero</h3>
            <p className={styles.paragraph}>
                Las plataformas saben esto, pero igual usan estas métricas de vanidad para justificar el gasto en publicidad cuando <Link href="/blog/website-as-lead-generation-machine" className={styles.link}>las tasas de conversión reales (ROAS) se están hundiendo</Link>.
            </p>

            <h2 className={styles.heading2}>La trampa del beneficio oculto</h2>
            <p className={styles.paragraph}>
                Al afirmar que el beneficio está oculto, estas empresas mueven el arco. Si no lo podés medir, no podés demostrar que está fallando. Esto les permite seguir extrayendo plata incluso cuando el valor orgánico de la plataforma decae. Es el equivalente digital de un propietario que dice que el prestigio de un aumento del 20% en el alquiler es el beneficio de vivir en el edificio, mientras el ascensor no anda y el techo tiene goteras.
            </p>
            <p className={styles.paragraph}>
                <strong>La paradoja de la prueba social:</strong> Si tenés que pagar $5.000 en anuncios para mostrarle un producto a tus 50.000 seguidores, no sos dueño de una red social: sos un inquilino en un sistema feudal digital donde la prueba social es solo la pintura de las paredes.
            </p>

            <h2 className={styles.heading2}>El Stack Anti-Enshittification</h2>
            <p className={styles.paragraph}>
                Para pelear contra esto, surgió un nuevo stack directo a la comunidad. Estas herramientas se enfocan en la soberanía, lo que significa que vos sos el dueño de los datos, la lista y el alcance, y ningún algoritmo puede esconder tu beneficio detrás de un muro de pago.
            </p>

            <h3 className={styles.heading3}>1. Los protocolos sociales soberanos (Web3)</h3>
            <p className={styles.paragraph}>
                En lugar de que una plataforma sea dueña de tus datos, estos son protocolos donde vos sos dueño de tu gráfico social. Si no te gusta la aplicación que estás usando, podés mudar a toda tu audiencia a otra aplicación al instante.
            </p>
            <ul className={styles.list}>
                <li className={styles.listItem}><strong>Farcaster (Warpcast):</strong> Líder en redes sociales soberanas, Farcaster ofrece una alternativa descentralizada que se siente como el Twitter de los inicios. Aunque promete libertad de la supresión algorítmica, no deja de tener sus vueltas.
                    <ul style={{marginTop: '10px'}}>
                        <li><strong>Costos dinámicos:</strong> La tarifa inicial de $5 anuales por almacenamiento es engañosa. Para 2026, el crecimiento de Farcaster llevó a un sistema de unidades más dinámico donde los creadores de alto volumen pagan más por el almacenamiento.</li>
                        <li><strong>El obstáculo de la Web3:</strong> El artículo pasa por alto la fricción significativa de la Web3. Para el usuario promedio, manejar una frase semilla o una billetera cripto sigue siendo una barrera enorme, lo que lo hace menos utópico de lo que parece.</li>
                        <li><strong>Comercio sin fricciones:</strong> Su función Frames sigue siendo revolucionaria, permitiendo a los usuarios crear mini-apps directamente en una publicación. Esto elimina el paso del "link en la bio" y permite que el comercio ocurra de forma nativa en el feed.</li>
                    </ul>
                </li>
                <li className={styles.listItem}><strong>Lens Protocol:</strong> Creado por el equipo de Aave, esto convierte cada "follow" en un NFT. Esto significa que la relación con tu audiencia es un activo digital que te pertenece a vos, no a Meta.</li>
            </ul>

            <h3 className={styles.heading3}>2. El E-E-A-T de Google y las señales de usuario</h3>
            <p className={styles.paragraph}>
                En 2024 y 2025, documentos filtrados de Google confirmaron que se usan señales de usuario (como el Click-Through Rate) para el ranking.
            </p>
            <ul className={styles.list}>
                <li className={styles.listItem}><strong>La admisión indirecta:</strong> Google les dice oficialmente a los creadores que se enfoquen en E-E-A-T (Experiencia, Especialización, Autoridad y Confiabilidad).</li>
                <li className={styles.listItem}><strong>La paradoja:</strong> Admiten que en realidad no pueden leerte la mente para saber si sos un experto. En cambio, buscan señales de prueba social (como que otras personas te enlacen). Al mover el arco hacia resúmenes generados por IA (SGE), están diciendo: "Confiamos en tu prueba social lo suficiente como para usar tu respuesta, pero no lo suficiente como para darte el click".</li>
            </ul>

            <h2 className={styles.heading2}>Más evidencia: Características técnicas y realidades ocultas</h2>
            <p className={styles.paragraph}>
                Hay algunas pruebas contundentes en el panorama actual de 2026 que las plataformas reconocen como características técnicas, pero que en realidad son la mecánica del "Gaslighting de la Prueba Social". Acá hay tres piezas críticas y menos conocidas del rompecabezas:
            </p>

            <h3 className={styles.heading3}>1. El sistema de niveles "Meta Verified": Pagás por soporte, no solo por estatus</h3>
            <p className={styles.paragraph}>
                A partir de 2026, Meta expandió su sistema de verificación en una suscripción de varios niveles. Es fácil verlo solo como pagar por estatus, pero la realidad es más compleja.
            </p>
            <ul className={styles.list}>
                <li className={styles.listItem}><strong>La realidad de los niveles:</strong> Para los niveles de negocios premium, los costos pueden llegar a <strong>$349.99 por mes</strong>. Sin embargo, este precio no es solo por el tilde azul. Es principalmente para un pase VIP al soporte de Meta, que fue históricamente inexistente. Se trata menos de comprar autoridad y más de comprar un seguro para la seguridad de la cuenta y el acceso a asistencia técnica.</li>
                <li className={styles.listItem}><strong>La ventaja algorítmica:</strong> Aunque los términos de Meta dicen que la verificación no garantiza crecimiento viral, sí ofrece mayor visibilidad. Esto sugiere una sutil preferencia algorítmica por los clientes que pagan, borrando los límites entre el alcance auténtico y la prioridad paga.</li>
            </ul>

            <h3 className={styles.heading3}>2. El "Citation Share" de Google: El nuevo SEO</h3>
            <p className={styles.paragraph}>
                El auge de los AI Overviews creó un entorno de "cero clicks" donde Google responde directamente. En respuesta, Google está moviendo el arco de los clicks hacia una nueva métrica: Citation Share (Cuota de Citación).
            </p>
            <ul className={styles.list}>
                <li className={styles.listItem}><strong>Una verdad a medias:</strong> Decir que esta métrica es un gaslighting total es una verdad a medias. Aunque reduce el tráfico directo, el Citation Share se está convirtiendo en la nueva frontera del SEO. Ser la fuente citada en un resumen de IA es a menudo la única forma de aparecer arriba de todo.</li>
                <li className={styles.listItem}><strong>Del tráfico a la atribución:</strong> El juego ya no se trata de ganar el click; se trata de ganar la batalla de la especialización. Si la IA dice, "Según [Tu Marca]...", estás construyendo recordación y autoridad de marca, incluso si el usuario nunca visita tu sitio. Es un cambio de medir tráfico a medir atribución de marca.</li>
            </ul>

            <h3 className={styles.heading3}>3. El cambio de "Creativo como segmentación": Una realidad algorítmica</h3>
            <p className={styles.paragraph}>
                En 2026, la plataforma de anuncios de Meta automatizó gran parte de la segmentación de audiencia, lo que llevó al mantra: "El creativo es la segmentación". Esto no es solo una trampa para que los anunciantes entrenen a la IA gratis, sino una evolución técnica.
            </p>
            <ul className={styles.list}>
                <li className={styles.listItem}><strong>Conocé a Andromeda:</strong> El algoritmo de recuperación de Meta en 2026, Andromeda, es tan rápido que no puede depender de la segmentación manual por intereses, que es lenta. Necesita señales del propio creativo.</li>
                <li className={styles.listItem}><strong>Hablándole al usuario:</strong> Al incluir prueba social (como contenido generado por usuarios y reseñas) directamente en tus anuncios, no solo estás entrenando a una IA; le estás hablando directamente a la psicología del usuario. El algoritmo es simplemente el mecanismo de entrega. Vos ponés el "¿Quién?" (tu voz de marca y prueba), y la IA se encarga del "¿Cómo?" (la segmentación).</li>
            </ul>

            <h2 className={styles.heading2}>El veredicto: Un cambio de perspectiva</h2>
            <p className={styles.paragraph}>
                Este artículo empezó como una crítica feroz a las plataformas como entidades puramente depredadoras. Si bien la frustración con la <Link href="/blog/unethical-business-practices" className={styles.link}>enshittification</Link> es real, el gaslighting de la prueba social a menudo es un efecto secundario de la hiperautomatización, no solo de la malicia. El panorama de 2026 requiere una visión más equilibrada.
            </p>

            <div className={styles.table_container}>
                <table className={styles.table}>
                    <thead>
                        <tr>
                            <th>Característica</th>
                            <th>Visión original del artículo</th>
                            <th>Realidad de la industria en 2026</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td data-label="Característica">Prueba Social</td>
                            <td data-label="Visión original">Un truco lingüístico</td>
                            <td data-label="Realidad 2026">Sigue siendo el motor #1 de conversión, solo que es más difícil de ganar.</td>
                        </tr>
                        <tr>
                            <td data-label="Característica">Alcance</td>
                            <td data-label="Visión original">Secuestrado por algoritmos</td>
                            <td data-label="Realidad 2026">El alcance sobra; lo que escasea es la atención.</td>
                        </tr>
                        <tr>
                            <td data-label="Característica">SGE/Resúmenes IA</td>
                            <td data-label="Visión original">Extracción de contenido</td>
                            <td data-label="Realidad 2026">Un cambio del Tráfico a la Atribución de Marca.</td>
                        </tr>
                        <tr>
                            <td data-label="Característica">Verificación</td>
                            <td data-label="Visión original">Identidad pay-to-play</td>
                            <td data-label="Realidad 2026">Un seguro para la seguridad y el soporte de la cuenta.</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <p className={styles.paragraph}>
                Las plataformas avanzan hacia un mundo donde las empresas ponen el <strong>"Quién"</strong> (una voz de marca fuerte y prueba social auténtica) y ellas se encargan del <strong>"Cómo"</strong> (la segmentación y entrega automatizada). El llamado a la <Link href="/blog/hidden-cost-of-no-code" className={styles.link}><strong>soberanía digital</strong></Link> es más relevante que nunca, pero ganar en este entorno significa entender estas nuevas reglas, no solo pelear contra ellas. Las empresas más exitosas en 2026 no solo están construyendo microcomunidades; están aprendiendo a potenciar sus activos soberanos (su experiencia, sus historias de clientes) dentro de los sistemas automatizados de los gigantes.
            </p>
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