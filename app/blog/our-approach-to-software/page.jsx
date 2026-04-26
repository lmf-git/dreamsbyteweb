'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useContact } from '../../../contexts/ContactContext';
import { useHeaderAnimation } from '../../../contexts/HeaderAnimationContext';
import { useLanguage } from '../../../contexts/LanguageContext';
import CallToAction from '../../../components/layout/CallToAction/CallToAction';
import NextIcon from '../../../components/icons/brands/Next';
import NuxtIcon from '../../../components/icons/brands/Nuxt';
import SvelteIcon from '../../../components/icons/brands/Svelte';
import ReactIcon from '../../../components/icons/brands/React';
import styles from '../post.module.scss';
import { posts } from '../posts';

export default function OurApproachToSoftware() {
    const { openContact } = useContact();
    const { headerAnimationComplete } = useHeaderAnimation();
    const { language, t } = useLanguage();
    const [contentVisible, setContentVisible] = useState(false);

    // Find the current post's metadata from the translation system
    const slug = 'our-approach-to-software';
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
            <h2 className={styles.heading2}>1. The Backend as a Mechanical Boot Sequence</h2>
            <p className={styles.paragraph}>Most Node.js backends are often perceived as collections of loosely coupled routes and handlers. Our approach fundamentally redefines this by treating the server as a <strong><Link href="/blog/cloud-infrastructure-illusion" className={styles.link}>Static Singleton</Link></strong>. It's a single, resilient entity whose initialization is a precisely choreographed mechanical boot sequence.<sup><a href="#footnote-2" id="footnote-ref-2" className={styles.link}>2</a></sup></p>
            <ul className={styles.list}>
                <li className={styles.listItem}><strong>The Registry Pattern:</strong> By encapsulating the entire service within a static class, we establish a single source of truth that is never instantiated, nor does it need to be. Instead, a <code>PROVIDERS</code> registry is utilized as a dependency checklist. When the service starts, it doesn't just run; it orchestrates. Each external integration (Slack, Databases, third-party APIs) must fulfill a predefined <code>setup()</code> contract. This guarantees:
                    <ul className={styles.list}>
                        <li className={styles.listItem}><strong>Sequential Reliability:</strong> We can guarantee, for instance, that a sensitive Secrets module is fully loaded and initialized before the Database attempts to connect using those credentials.</li>
                        <li className={styles.listItem}><strong>Visual Diagnostics:</strong> High-fidelity terminal logging isn't merely aesthetic; it creates a command center feel. This provides a developer-facing UI that reports on the health and progress of the boot sequence in real-time, offering immediate insight into any issues.</li>
                    </ul>
                </li>
                <li className={styles.listItem}><strong>The Self-Healing Loop:</strong> Rather than building complex, event-driven listeners for transient states like token expiration, we embrace a brute-force approach to long-term stability: a 30-minute global re-init loop. This forces the system to periodically re-verify its external connections and state, leveraging idempotency to ensure everything remains evergreen and operational without constant manual intervention.</li>
            </ul>

            <h2 className={styles.heading2}>2. The API as a Managed Proxy: The SDK-as-a-Service Layer</h2>
            <p className={styles.paragraph}>Our API communication strategy is a deliberate rejection of the fragmented hook-soup often found in modern applications. We treat our API layer as a <strong>Private SDK</strong>, acting as a managed proxy for all external interactions.<sup><a href="#footnote-3" id="footnote-ref-3" className={styles.link}>3</a></sup></p>
            <ul className={styles.list}>
                <li className={styles.listItem}><strong>Global Singleton as a Proxy:</strong> By centralizing all external communication into a static API class or global singleton, we implement a robust <a href="https://refactoring.guru/design-patterns/proxy" target="_blank" rel="noopener noreferrer" className={styles.link}>Proxy Pattern</a>. The rest of your application never speaks directly to the internet; it only speaks to our dedicated API object. This choke point provides a single, powerful location to inject authentication headers, manage caching, and handle global error states (such as a 401 Unauthorized response) in precisely one line of code, rather than scattering logic across dozens of UI components or hooks.</li>
                <li className={styles.listItem}><strong>Environment Abstraction:</strong> This centralized proxy effectively decouples the where (e.g., local development server, Heroku instance, AWS Lambda) from the how (the underlying communication protocol, e.g., Fetch API, Axios, GraphQL). Your frontend code becomes <q>Environment Blind,</q> a hallmark of clean architecture. This empowers us to swap out your entire communication protocol (e.g., migrating from Fetch to a new GraphQL client) by changing a single file, without touching any UI components.</li>
            </ul>

            <h2 className={styles.heading2}>3. High-Fidelity Frontend Orchestration</h2>
            <p className={styles.paragraph}>This is where <strong>Control meets Choreography</strong>. In our frontend development, exemplified by projects built with React and Next.js, we consciously shift focus from merely state-as-data towards state-as-timing, orchestrating user interactions with cinematic precision.</p>
            <ul className={styles.list}>
                <li className={styles.listItem}><strong>Temporal Guards and Transition Locking:</strong> In a standard React application, clicking a button primarily triggers a data change. In our architecture, it initiates a precise <strong>State Sequence</strong>. We implement a transition lock (managed via an <code>isTransitioning</code> state or similar guard) combined with manual image preloading. This guarantees the user never experiences a jarring, partial UI. The software intelligently refuses to display the next screen until it has verified—via a Promise-based cache check—that every essential asset is fully prepared. This is <strong>Mechanical Sympathy</strong>: a deep respect for the browser’s bandwidth and the user’s cognitive load, preventing the dreaded flicker of loading images.</li>
                <li className={styles.listItem}><strong>Bypassing the Reconciler (The "Fast Path"):</strong> React's Virtual DOM is excellent for managing structural changes, but it can become a bottleneck for high-frequency motion. In our layout logic, particularly for elements demanding constant, fluid animation (like complex header effects), we utilize a fast path approach with React's <code>useRef</code>. Instead of triggering a global re-render on every scroll event, we manipulate the DOM directly where appropriate. By injecting styles directly into <code>ref.current</code>, we maintain a <Link href="/blog/performance-first-website-lighthouse" className={styles.link}>rock-solid 60 frames per second (fps) performance</Link> for complex animations, allowing React to efficiently handle big state changes while the browser's native rendering engine handles the fast ones.</li>
            </ul>

            <h2 className={styles.heading2}>4. Kinetic CSS: The Physics of the UI</h2>
            <p className={styles.paragraph}>Finally, our visual layer transcends static styling and is treated as a dynamic, 3D space. This is where our meticulous attention to animation and responsiveness brings the UI to life.</p>
            <ul className={styles.list}>
                <li className={styles.listItem}><strong>Atomic Animation:</strong> We don't animate entire paragraphs; we animate atoms—individual characters. By leveraging CSS variables to dynamically stagger delays at the character level, we create a kinetic energy that feels inherently physical and engaging. This bridges the gap between JavaScript logic and SCSS presentation seamlessly.</li>
                <li className={styles.listItem}><strong>Cubic-Bezier Over-engineering:</strong> We consciously avoid standard easing functions. Instead, we employ bespoke <code>cubic-bezier</code> curves that incorporate overshoot. When a word or element enters the screen, it doesn't just stop abruptly; it lands with a subtle weight and elasticity. This creates a tactile, organic experience that makes the software feel like a high-end instrument.</li>
                <li className={styles.listItem}><strong>Fluidity over Breakpoints:</strong> Our philosophy embraces Elastic Design through the strategic use of <code>clamp()</code> and <code>em</code> units. Rather than the UI snapping at rigid breakpoints, it flows like a liquid, maintaining proportional relationships mathematically across all screen sizes. This ensures a consistently refined user experience without the need for extensive, often brittle, media query overrides.</li>
            </ul>

            <h2 className={styles.heading2}>Technology Agnosticism: Empowering Client Solutions</h2>
            <p className={styles.paragraph}>Our commitment to explicit control and engineering excellence allows us to remain largely technology-agnostic when it comes to specific frameworks for client projects. While the underlying "Orchestrated Singleton" methodology remains constant, we choose the right tools for the job based on project requirements, team familiarity, and long-term maintainability. This flexibility is showcased by our proficiency across various modern frontend frameworks:</p>
            <ul className={styles.list}>
                <li className={styles.listItem}> <NextIcon extraClass={styles.icon} /> Next.js</li>
                <li className={styles.listItem}> <NuxtIcon extraClass={styles.icon} /> Nuxt.js</li>
                <li className={styles.listItem}> <SvelteIcon extraClass={styles.icon} /> SvelteKit</li>
                <li className={styles.listItem}> <ReactIcon extraClass={styles.icon} /> React</li>
            </ul>
        </>
    );

    const ContentES = () => (
        <>
            <h2 className={styles.heading2}>1. El Backend como una secuencia de arranque mecánica</h2>
            <p className={styles.paragraph}>La mayoría de los backends de Node.js se perciben como colecciones de rutas y controladores poco conectados. Nuestro enfoque redefine esto por completo al tratar al servidor como un <strong><Link href="/blog/cloud-infrastructure-illusion" className={styles.link}>Singleton Estático</Link></strong>. Es una entidad única y resiliente cuya inicialización es una secuencia de arranque mecánica precisamente coreografiada.<sup><a href="#footnote-2" id="footnote-ref-2" className={styles.link}>2</a></sup></p>
            <ul className={styles.list}>
                <li className={styles.listItem}><strong>El Patrón Registry:</strong> Al encapsular todo el servicio dentro de una clase estática, establecemos una única fuente de verdad que nunca se instancia, ni necesita serlo. En su lugar, se utiliza un registro de <code>PROVIDERS</code> como una lista de verificación de dependencias. Cuando el servicio arranca, no solo corre; orquesta. Cada integración externa (Slack, bases de datos, APIs de terceros) debe cumplir con un contrato <code>setup()</code> predefinido. Esto garantiza:
                    <ul className={styles.list}>
                        <li className={styles.listItem}><strong>Confiabilidad Secuencial:</strong> Podemos garantizar, por ejemplo, que un módulo sensible de Secretos esté totalmente cargado e inicializado antes de que la Base de Datos intente conectarse usando esas credenciales.</li>
                        <li className={styles.listItem}><strong>Diagnóstico Visual:</strong> El registro en la terminal de alta fidelidad no es puramente estético; crea una sensación de centro de comando. Esto proporciona una interfaz para el desarrollador que informa sobre el estado y el progreso de la secuencia de arranque en tiempo real, ofreciendo una visión inmediata de cualquier problema.</li>
                    </ul>
                </li>
                <li className={styles.listItem}><strong>El Bucle de Autocuración:</strong> En lugar de construir oyentes complejos basados en eventos para estados transitorios como la expiración de tokens, adoptamos un enfoque de "fuerza bruta" para la estabilidad a largo plazo: un bucle de reinicialización global cada 30 minutos. Esto obliga al sistema a volver a verificar periódicamente sus conexiones y estados externos, asegurando que todo se mantenga vigente y operativo sin necesidad de intervención manual constante.</li>
            </ul>

            <h2 className={styles.heading2}>2. La API como un Proxy gestionado: La capa SDK-as-a-Service</h2>
            <p className={styles.paragraph}>Nuestra estrategia de comunicación de la API es un rechazo deliberado a la fragmentación de hooks que se suele ver en las aplicaciones modernas. Tratamos a nuestra capa de API como un <strong>SDK Privado</strong>, actuando como un proxy gestionado para todas las interacciones externas.<sup><a href="#footnote-3" id="footnote-ref-3" className={styles.link}>3</a></sup></p>
            <ul className={styles.list}>
                <li className={styles.listItem}><strong>Singleton Global como Proxy:</strong> Al centralizar toda la comunicación externa en una clase de API estática o un singleton global, implementamos un <a href="https://refactoring.guru/design-patterns/proxy" target="_blank" rel="noopener noreferrer" className={styles.link}>Patrón Proxy</a> robusto. El resto de tu aplicación nunca habla directamente con Internet; solo habla con nuestro objeto de API dedicado. Este punto de control proporciona un lugar único y potente para inyectar cabeceras de autenticación, gestionar el caché y manejar estados de error globales (como un error 401) en una sola línea de código, en lugar de dispersar la lógica por docenas de componentes o hooks.</li>
                <li className={styles.listItem}><strong>Abstracción del Entorno:</strong> Este proxy centralizado desacopla el "dónde" (servidor de desarrollo local, instancia de Heroku, AWS Lambda) del "cómo" (el protocolo de comunicación subyacente). Tu código de frontend se vuelve "ciego al entorno", una marca distintiva de la arquitectura limpia. Esto nos permite cambiar todo el protocolo de comunicación (por ejemplo, migrar de Fetch a un nuevo cliente GraphQL) cambiando un solo archivo, sin tocar ningún componente de la interfaz.</li>
            </ul>

            <h2 className={styles.heading2}>3. Orquestación de Frontend de alta fidelidad</h2>
            <p className={styles.paragraph}>Acá es donde el <strong>Control se encuentra con la Coreografía</strong>. En nuestro desarrollo de frontend, ejemplificado por proyectos construidos con React y Next.js, cambiamos conscientemente el enfoque de "estado como datos" a "estado como tiempos", orquestando las interacciones del usuario con precisión cinematográfica.</p>
            <ul className={styles.list}>
                <li className={styles.listItem}><strong>Guardias Temporales y Bloqueo de Transiciones:</strong> En una aplicación de React estándar, hacer clic en un botón dispara principalmente un cambio de datos. En nuestra arquitectura, inicia una <strong>Secuencia de Estados</strong> precisa. Implementamos un bloqueo de transición combinado con la precarga manual de imágenes. Esto garantiza que el usuario nunca experimente una interfaz parcial o brusca. El software se niega a mostrar la siguiente pantalla hasta que verifica que cada activo esencial está totalmente preparado. Esto es <strong>Simpatía Mecánica</strong>: un respeto profundo por el ancho de banda del navegador y la carga cognitiva del usuario.</li>
                <li className={styles.listItem}><strong>Bypassing del Reconciliador (El "Camino Rápido"):</strong> El DOM Virtual de React es excelente para gestionar cambios estructurales, pero puede ser un cuello de botella para el movimiento de alta frecuencia. En nuestra lógica de diseño, particularmente para elementos que exigen una animación constante y fluida (como los efectos del encabezado), utilizamos un enfoque de camino rápido con <code>useRef</code> de React. Al inyectar estilos directamente en <code>ref.current</code>, mantenemos un rendimiento sólido de <Link href="/blog/performance-first-website-lighthouse" className={styles.link}>60 cuadros por segundo (fps)</Link> para animaciones complejas.</li>
            </ul>

            <h2 className={styles.heading2}>4. CSS Kinético: La física de la interfaz</h2>
            <p className={styles.paragraph}>Finalmente, nuestra capa visual trasciende el estilo estático y se trata como un espacio dinámico y 3D. Acá es donde nuestra atención meticulosa a la animación y la capacidad de respuesta le da vida a la interfaz.</p>
            <ul className={styles.list}>
                <li className={styles.listItem}><strong>Animación Atómica:</strong> No animamos párrafos enteros; animamos átomos: caracteres individuales. Al aprovechar las variables CSS para escalonar dinámicamente los retrasos a nivel de carácter, creamos una energía cinética que se siente físicamente atractiva. Esto une la lógica de JavaScript y la presentación de SCSS sin fisuras.</li>
                <li className={styles.listItem}><strong>Sobrediagnóstico de Cubic-Bezier:</strong> Evitamos conscientemente las funciones de aceleración estándar. En su lugar, usamos curvas <code>cubic-bezier</code> a medida que incorporan un "overshoot". Cuando un elemento entra en pantalla, no se detiene en seco; aterriza con un peso y elasticidad sutiles. Esto crea una experiencia táctil y orgánica que hace que el software se sienta como un instrumento de alta gama.</li>
                <li className={styles.listItem}><strong>Fluidez sobre Breakpoints:</strong> Nuestra filosofía adopta el Diseño Elástico mediante el uso estratégico de <code>clamp()</code> y unidades <code>em</code>. En lugar de que la interfaz "salte" en puntos rígidos, fluye como un líquido, manteniendo las relaciones proporcionales matemáticamente en todos los tamaños de pantalla.</li>
            </ul>

            <h2 className={styles.heading2}>Agnosticismo Tecnológico: Potenciando soluciones para clientes</h2>
            <p className={styles.paragraph}>Nuestro compromiso con el control explícito y la excelencia en ingeniería nos permite ser en gran medida agnósticos en cuanto a la tecnología. Si bien la metodología del "Singleton Orquestado" permanece constante, elegimos las herramientas adecuadas para cada trabajo basándonos en los requisitos del proyecto y la mantenibilidad a largo plazo. Esta flexibilidad se demuestra en nuestra experiencia en varios frameworks modernos de frontend:</p>
            <ul className={styles.list}>
                <li className={styles.listItem}> <NextIcon extraClass={styles.icon} /> Next.js</li>
                <li className={styles.listItem}> <NuxtIcon extraClass={styles.icon} /> Nuxt.js</li>
                <li className={styles.listItem}> <SvelteIcon extraClass={styles.icon} /> SvelteKit</li>
                <li className={styles.listItem}> <ReactIcon extraClass={styles.icon} /> React</li>
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
                                "Functional Programming Oriented Software Design: A Systematic Literature Review," <a href="https://ieeexplore.ieee.org/abstract/document/9483321" target="_blank" rel="noopener noreferrer" className={styles.link}>IEEE Xplore</a>.
                                <a href="#footnote-ref-1" aria-label="Back to content" className={styles.link}> ↩</a>
                            </p>
                        </li>
                        <li id="footnote-2" className={styles.listItem}>
                            <p className={styles.paragraph}>
                                "Boot Loader Choices for Small and Fast System Initialization Requirements", <a href="https://www.intel.com/content/www/us/en/developer/articles/technical/boot-loader-choices-for-small-and-fast-system-initialization-requirements.html" target="_blank" rel="noopener noreferrer" className={styles.link}>Intel</a>.
                                <a href="#footnote-ref-2" aria-label="Back to content" className={styles.link}> ↩</a>
                            </p>
                        </li>
                        <li id="footnote-3" className={styles.listItem}>
                            <p className={styles.paragraph}>
                                "API Gateway Pattern: 5 Design Options and How to Choose", <a href="https://www.solo.io/blog/api-gateway-pattern-5-design-options-and-how-to-choose/" target="_blank" rel="noopener noreferrer" className={styles.link}>Solo.io</a>.
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
