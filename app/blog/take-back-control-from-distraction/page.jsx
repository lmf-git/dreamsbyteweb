'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useContact } from '../../../contexts/ContactContext';
import { useHeaderAnimation } from '../../../contexts/HeaderAnimationContext';
import { useLanguage } from '../../../contexts/LanguageContext';
import CallToAction from '../../../components/layout/CallToAction/CallToAction';
import Safari from '../../../components/icons/browsers/Safari';
import TamperMonkey from '../../../components/icons/browsers/TamperMonkey';
import OpenScripts from '../../../components/icons/browsers/OpenScripts';
import Chrome from '../../../components/icons/browsers/Chrome';
import Edge from '../../../components/icons/browsers/Edge';
import AdGuard from '../../../components/icons/browsers/AdGuard';
import SponsorBlock from '../../../components/icons/browsers/SponsorBlock';
import styles from '../post.module.scss';
import dynamic from 'next/dynamic';
import { posts } from '../posts';

const CodePenEmbed = dynamic(() => import('../../../components/specific/CodePenEmbed'), { ssr: false });

export default function TakeBackControlFromDistraction() {
    const { openContact } = useContact();
    const { headerAnimationComplete } = useHeaderAnimation();
    const { language, t } = useLanguage();
    const [contentVisible, setContentVisible] = useState(false);

    const slug = 'take-back-control-from-distraction';
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
            <h2 className={styles.heading2}>Introducing User Scripts</h2>
            <p className={styles.paragraph}>User scripts are small pieces of JavaScript that can be run on any website to customize its appearance and functionality. With user scripts, you can block ads, hide annoying elements, and even add new features to your favorite sites. They are a powerful tool for taking back control of your digital life.</p>

            <h2 className={styles.heading2}>Getting Started with User Scripts</h2>
            <p className={styles.paragraph}>To use user scripts, you'll need a user script manager. These are browser extensions that allow you to easily install and manage user scripts. Here are a few popular options:</p>

            <p className={styles.paragraph}><Chrome className={styles.icon} /> <a href="https://chrome.google.com/webstore/category/extensions" target="_blank" rel="noopener noreferrer" className={styles.link}>Chrome</a> (with Tampermonkey)</p>
            <p className={styles.paragraph}><Edge className={styles.icon} /> <a href="https://microsoftedge.microsoft.com/addons/Microsoft-Edge-Extensions-Home" target="_blank" rel="noopener noreferrer" className={styles.link}>Edge</a> (with Tampermonkey)</p>
            <p className={styles.paragraph}><Safari className={styles.icon} /> <a href="https://apps.apple.com/us/app/userscripts/id1463298887" target="_blank" rel="noopener noreferrer" className={styles.link}>Userscripts for Safari</a></p>

            <h2 className={styles.heading2}>A More Powerful Script for Taking Control</h2>
            <p className={styles.paragraph}>Here’s a more advanced user script that demonstrates the power of this approach. This script doesn't just hide elements; it actively redirects you from distracting websites and cleans up your YouTube experience.</p>

            <h3 className={styles.heading3}>What This Script Does:</h3>
            <ul className={styles.list}>
                <li className={styles.listItem}><strong>Redirects from blocked sites:</strong> It maintains a blocklist of distracting websites (like Twitter/X.com and Google News). If you try to visit one, it redirects you to a productive site (in this case, dreamsbyte.com).</li>
                <li className={styles.listItem}><strong>Blocks YouTube Shorts:</strong> It automatically redirects you away from the endless scroll of YouTube Shorts.</li>
                <li className={styles.listItem}><strong>Cleans up YouTube:</strong> It removes the recommended videos feed (the "dismissible" elements) from the YouTube homepage, helping you focus only on what you intended to watch.</li>
                <li className={styles.listItem}><strong>Blocks distracting searches:</strong> It prevents you from searching for "news" on Google, Yahoo, and DuckDuckGo, cutting off another common distraction pathway.</li>
                <li className={styles.listItem}><strong>Smart and Stable:</strong> The script includes a stability timer to avoid redirect loops and a `MutationObserver` to ensure it works reliably even on modern single-page applications (SPAs) like YouTube.</li>
            </ul>

            <CodePenEmbed />

            <h2 className={styles.heading2}>The Nuclear Option: Blocking Sites with the Hosts File</h2>
            <p className={styles.paragraph}>For a more permanent and browser-agnostic solution, you can block websites at the operating system level by editing your <strong className={styles.strong}>hosts file</strong>. This file acts as a local DNS resolver, allowing you to manually map domain names to IP addresses. By mapping a distracting site to your local machine (127.0.0.1), you effectively block access to it from any browser.</p>

            <p className={styles.paragraph}><strong>Warning:</strong> Editing the hosts file requires administrator privileges. Always make a backup before making changes.</p>

            <h3 className={styles.heading3}>macOS and Linux:</h3>
            <ol className={styles.orderedList}>
                <li className={styles.listItem}>Open the Terminal application.</li>
                <li className={styles.listItem}>Type the following command and press Enter to open the hosts file: <code className={styles.inlineCode}>sudo nano /etc/hosts</code></li>
                <li className={styles.listItem}>Enter your administrator password when prompted.</li>
                <li className={styles.listItem}>Add the following lines at the end of the file to block Twitter/X.com:
                    <pre className={styles.preformatted}><code className={styles.code}>127.0.0.1 twitter.com</code></pre>
                    <pre className={styles.preformatted}><code className={styles.code}>127.0.0.1 www.twitter.com</code></pre>
                    <pre className={styles.preformatted}><code className={styles.code}>127.0.0.1 x.com</code></pre>
                    <pre className={styles.preformatted}><code className={styles.code}>127.0.0.1 www.x.com</code></pre>
                </li>
                <li className={styles.listItem}>Save the file by pressing <code className={styles.inlineCode}>Ctrl+O</code>, then <code className={styles.inlineCode}>Enter</code>, and exit with <code className={styles.inlineCode}>Ctrl+X</code>.</li>
            </ol>

            <h3 className={styles.heading3}>Windows:</h3>
            <ol className={styles.orderedList}>
                <li className={styles.listItem}>Open Notepad (or your preferred text editor) as an Administrator. You can do this by searching for Notepad in the Start Menu, right-clicking it, and selecting "Run as administrator".</li>
                <li className={styles.listItem}>In Notepad, go to <code className={styles.inlineCode}>File &gt; Open</code>.</li>
                <li className={styles.listItem}>Navigate to <code className={styles.inlineCode}>C:\Windows\System32\drivers\etc</code>.</li>
                <li className={styles.listItem}>Change the file type from "Text Documents (*.txt)" to "All Files (*.*)".</li>
                <li className={styles.listItem}>Select the <code className={styles.inlineCode}>hosts</code> file and click Open.</li>
                <li className={styles.listItem}>Add the following lines at the end of the file:
                    <pre className={styles.preformatted}><code className={styles.code}>127.0.0.1 twitter.com</code></pre>
                    <pre className={styles.preformatted}><code className={styles.code}>127.0.0.1 www.twitter.com</code></pre>
                    <pre className={styles.preformatted}><code className={styles.code}>127.0.0.1 x.com</code></pre>
                    <pre className={styles.preformatted}><code className={styles.code}>127.0.0.1 www.x.com</code></pre>
                </li>
                <li className={styles.listItem}>Save the file (<code className={styles.inlineCode}>File &gt; Save</code>).</li>
            </ol>
            <p className={styles.paragraph}>After saving, you may need to flush your DNS cache for the changes to take effect immediately. On Windows, open Command Prompt as an administrator and run <code className={styles.inlineCode}>ipconfig /flushdns</code>. On macOS, run <code className={styles.inlineCode}>sudo dscacheutil -flushcache; sudo killall -HUP mDNSResponder</code> in the terminal.</p>

            <h2 className={styles.heading2}>Beyond User Scripts: Browser Extensions for Focus</h2>
            <p className={styles.paragraph}>While user scripts offer incredible customization, sometimes a dedicated browser extension provides a more robust or specialized solution for digital well-being. Here are a couple of powerful options:</p>

            <h3 className={styles.heading3}><SponsorBlock className={styles.icon} /> SponsorBlock (Chrome/Edge/Firefox/Safari)</h3>
            <p className={styles.paragraph}>Tired of sponsored segments, intros, and outros interrupting your YouTube viewing? <a href="https://chrome.google.com/webstore/detail/sponsorblock-for-youtube/mnjggfcpnkjswgmpjcebnaarcdgchpge" target="_blank" rel="noopener noreferrer" className={styles.link}>SponsorBlock for Chrome</a> (also available for <a href="https://microsoftedge.microsoft.com/addons/detail/sponsorblock-for-youtube/fjhbipklglgbpeplpcebgojbdjgoijcp" target="_blank" rel="noopener noreferrer" className={styles.link}>Edge</a>, and <a href="https://apps.apple.com/us/app/sponsorblock-for-youtube/id1573024036" target="_blank" rel="noopener noreferrer" className={styles.link}>Safari</a>) is a crowdsourced browser extension that automatically skips these segments, letting you get straight to the content you care about. It relies on a community of users to identify and submit the start and end times of various categories within videos.</p>

            <h3 className={styles.heading3}><AdGuard className={styles.icon} /> AdGuard AdBlocker (Chrome/Edge/Firefox/Safari)</h3>
            <p className={styles.paragraph}>Beyond just an ad blocker, <a href="https://chrome.google.com/webstore/detail/adguard-adblocker/bgnkhhnnamicmpekafmjoowakgpkanhd" target="_blank" rel="noopener noreferrer" className={styles.link}>AdGuard AdBlocker for Chrome</a> (and for <a href="https://microsoftedge.microsoft.com/addons/detail/adguard-adblocker/mpcegpcjcohmmdjfojchfphhpgmkpbko" target="_blank" rel="noopener noreferrer" className={styles.link}>Edge</a>, and <a href="https://apps.apple.com/us/app/adguard-for-safari/id1047223162" target="_blank" rel="noopener noreferrer" className={styles.link}>Safari</a>) is a powerful tool to remove annoying ads, pop-ups, and banners, but also to protect your privacy by blocking trackers and spyware. With nearly a billion people using ad blockers worldwide, these tools are a mainstream solution for a less cluttered, more focused online experience.<sup><a href="#footnote-3" id="footnote-ref-3" className={styles.link}>3</a></sup></p>

            <h2 className={styles.heading2}>The Possibilities are Endless</h2>
            <p className={styles.paragraph}>Whether you use a simple user script or edit your hosts file, the goal is the same: to create a digital environment that serves your goals, not the goals of tech companies vying for your attention. The possibilities are endless, and the power is in your hands.</p>

            <h2 className={styles.heading2}>Take Control of Your Digital Life</h2>
            <p className={styles.paragraph}>Ready to take back control of your digital life? Install a user script manager and start exploring the world of user scripts today. You'll be amazed at how much more productive and focused you can be when you're in control of your digital environment.</p>
        </>
    );

    const ContentES = () => (
        <>
            <h2 className={styles.heading2}>Presentamos los User Scripts</h2>
            <p className={styles.paragraph}>Los User Scripts son pequeños fragmentos de JavaScript que se pueden ejecutar en cualquier sitio web para personalizar su apariencia y funcionalidad. Con ellos, podés bloquear anuncios, ocultar elementos molestos e incluso agregar nuevas funciones a tus sitios favoritos. Son una herramienta poderosa para recuperar el control de tu vida digital.</p>

            <h2 className={styles.heading2}>Cómo empezar con los User Scripts</h2>
            <p className={styles.paragraph}>Para usar User Scripts, necesitás un gestor de scripts. Son extensiones de navegador que te permiten instalarlos y gestionarlos fácilmente. Aquí tenés algunas opciones populares:</p>

            <p className={styles.paragraph}><Chrome className={styles.icon} /> <a href="https://chrome.google.com/webstore/category/extensions" target="_blank" rel="noopener noreferrer" className={styles.link}>Chrome</a> (con Tampermonkey)</p>
            <p className={styles.paragraph}><Edge className={styles.icon} /> <a href="https://microsoftedge.microsoft.com/addons/Microsoft-Edge-Extensions-Home" target="_blank" rel="noopener noreferrer" className={styles.link}>Edge</a> (con Tampermonkey)</p>
            <p className={styles.paragraph}><Safari className={styles.icon} /> <a href="https://apps.apple.com/us/app/userscripts/id1463298887" target="_blank" rel="noopener noreferrer" className={styles.link}>Userscripts para Safari</a></p>

            <h2 className={styles.heading2}>Un script más potente para tomar el control</h2>
            <p className={styles.paragraph}>Aquí tenés un User Script más avanzado que demuestra el poder de este enfoque. Este script no solo oculta elementos; te redirige activamente desde sitios web distractores y limpia tu experiencia en YouTube.</p>

            <h3 className={styles.heading3}>Qué hace este script:</h3>
            <ul className={styles.list}>
                <li className={styles.listItem}><strong>Redirige desde sitios bloqueados:</strong> Mantiene una lista de sitios web distractores (como Twitter/X.com y Google News). Si intentás visitar uno, te redirige a un sitio productivo (en este caso, dreamsbyte.com).</li>
                <li className={styles.listItem}><strong>Bloquea los YouTube Shorts:</strong> Te redirige automáticamente lejos del scroll infinito de los Shorts.</li>
                <li className={styles.listItem}><strong>Limpia YouTube:</strong> Elimina el feed de videos recomendados de la página de inicio de YouTube, ayudándote a concentrarte solo en lo que tenías intención de ver.</li>
                <li className={styles.listItem}><strong>Bloquea búsquedas distractoras:</strong> Te impide buscar "noticias" en Google, Yahoo y DuckDuckGo, cortando otra vía común de distracción.</li>
                <li className={styles.listItem}><strong>Inteligente y estable:</strong> El script incluye un temporizador de estabilidad para evitar bucles de redirección y un `MutationObserver` para asegurar que funcione de manera confiable incluso en aplicaciones modernas (SPA) como YouTube.</li>
            </ul>

            <CodePenEmbed />

            <h2 className={styles.heading2}>La opción nuclear: Bloquear sitios con el archivo hosts</h2>
            <p className={styles.paragraph}>Para una solución más permanente e independiente del navegador, podés bloquear sitios web a nivel del sistema operativo editando tu <strong className={styles.strong}>archivo hosts</strong>. Este archivo actúa como un resolutor de DNS local. Al mapear un sitio distractor a tu propia máquina (127.0.0.1), bloqueás efectivamente el acceso desde cualquier navegador.</p>

            <p className={styles.paragraph}><strong>Advertencia:</strong> Editar el archivo hosts requiere privilegios de administrador. Siempre hacé una copia de seguridad antes de realizar cambios.</p>

            <h3 className={styles.heading3}>macOS y Linux:</h3>
            <ol className={styles.orderedList}>
                <li className={styles.listItem}>Abrí la aplicación Terminal.</li>
                <li className={styles.listItem}>Escribí el siguiente comando y presioná Enter: <code className={styles.inlineCode}>sudo nano /etc/hosts</code></li>
                <li className={styles.listItem}>Ingresá tu contraseña de administrador cuando se te pida.</li>
                <li className={styles.listItem}>Agregá las siguientes líneas al final del archivo para bloquear Twitter/X.com:
                    <pre className={styles.preformatted}><code className={styles.code}>127.0.0.1 twitter.com</code></pre>
                    <pre className={styles.preformatted}><code className={styles.code}>127.0.0.1 www.twitter.com</code></pre>
                    <pre className={styles.preformatted}><code className={styles.code}>127.0.0.1 x.com</code></pre>
                    <pre className={styles.preformatted}><code className={styles.code}>127.0.0.1 www.x.com</code></pre>
                </li>
                <li className={styles.listItem}>Guardá el archivo presionando <code className={styles.inlineCode}>Ctrl+O</code>, luego <code className={styles.inlineCode}>Enter</code>, y salí con <code className={styles.inlineCode}>Ctrl+X</code>.</li>
            </ol>

            <h3 className={styles.heading3}>Windows:</h3>
            <ol className={styles.orderedList}>
                <li className={styles.listItem}>Abrí el Bloc de notas (o tu editor de texto preferido) como administrador.</li>
                <li className={styles.listItem}>Andá a <code className={styles.inlineCode}>Archivo &gt; Abrir</code>.</li>
                <li className={styles.listItem}>Navegá hasta <code className={styles.inlineCode}>C:\Windows\System32\drivers\etc</code>.</li>
                <li className={styles.listItem}>Cambiá el tipo de archivo de "Documentos de texto (*.txt)" a "Todos los archivos (*.*)".</li>
                <li className={styles.listItem}>Seleccioná el archivo <code className={styles.inlineCode}>hosts</code> y hacé clic en Abrir.</li>
                <li className={styles.listItem}>Agregá las siguientes líneas al final del archivo:
                    <pre className={styles.preformatted}><code className={styles.code}>127.0.0.1 twitter.com</code></pre>
                    <pre className={styles.preformatted}><code className={styles.code}>127.0.0.1 www.twitter.com</code></pre>
                    <pre className={styles.preformatted}><code className={styles.code}>127.0.0.1 x.com</code></pre>
                    <pre className={styles.preformatted}><code className={styles.code}>127.0.0.1 www.x.com</code></pre>
                </li>
                <li className={styles.listItem}>Guardá el archivo (<code className={styles.inlineCode}>Archivo &gt; Guardar</code>).</li>
            </ol>
            <p className={styles.paragraph}>Después de guardar, es posible que necesités vaciar tu caché de DNS. En Windows, abrí el Símbolo del sistema como administrador y ejecutá <code className={styles.inlineCode}>ipconfig /flushdns</code>. En macOS, ejecutá <code className={styles.inlineCode}>sudo dscacheutil -flushcache; sudo killall -HUP mDNSResponder</code> en la terminal.</p>

            <h2 className={styles.heading2}>Más allá de los User Scripts: Extensiones de navegador para el enfoque</h2>
            <p className={styles.paragraph}>A veces, una extensión dedicada ofrece una solución más robusta para el bienestar digital. Aquí tenés un par de opciones poderosas:</p>

            <h3 className={styles.heading3}><SponsorBlock className={styles.icon} /> SponsorBlock (Chrome/Edge/Firefox/Safari)</h3>
            <p className={styles.paragraph}>¿Cansado de los segmentos patrocinados e intros que interrumpen tus videos de YouTube? <a href="https://chrome.google.com/webstore/detail/sponsorblock-for-youtube/mnjggfcpnkjswgmpjcebnaarcdgchpge" target="_blank" rel="noopener noreferrer" className={styles.link}>SponsorBlock</a> es una extensión colaborativa que se salta automáticamente estos segmentos. Se basa en una comunidad de usuarios para identificar los tiempos de inicio y fin de varias categorías dentro de los videos.</p>

            <h3 className={styles.heading3}><AdGuard className={styles.icon} /> AdGuard AdBlocker (Chrome/Edge/Firefox/Safari)</h3>
            <p className={styles.paragraph}>Más que un simple bloqueador de anuncios, <a href="https://chrome.google.com/webstore/detail/adguard-adblocker/bgnkhhnnamicmpekafmjoowakgpkanhd" target="_blank" rel="noopener noreferrer" className={styles.link}>AdGuard</a> elimina anuncios molestos, ventanas emergentes y banners, y también protege tu privacidad bloqueando rastreadores. Es una solución mainstream para una experiencia online menos saturada y más enfocada.<sup><a href="#footnote-3" id="footnote-ref-3" className={styles.link}>3</a></sup></p>

            <h2 className={styles.heading2}>Las posibilidades son infinitas</h2>
            <p className={styles.paragraph}>Ya sea que uses un simple User Script o edites tu archivo hosts, el objetivo es el mismo: crear un entorno digital que sirva a tus metas, no a las de las empresas tecnológicas que compiten por tu atención. El poder está en tus manos.</p>

            <h2 className={styles.heading2}>Tomá el control de tu vida digital</h2>
            <p className={styles.paragraph}>¿Listo para recuperar el control? Instalá un gestor de scripts y empezá a explorar hoy mismo. Te sorprenderá lo mucho más productivo y enfocado que podés estar cuando vos tenés el control de tu entorno digital.</p>
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
                                Lally, P., van Jaarsveld, C. H. M., Potts, H. W. W., & Wardle, J. (2010). How are habits formed: Modelling habit formation in the real world. <em>European Journal of Social Psychology, 40</em>(6), 998–1009. 
                                                                        <a href="#footnote-ref-1" aria-label="Back to content" className={styles.link}> ↩</a>
                            </p>
                        </li>
                        <li id="footnote-2" className={styles.listItem}>
                            <p className={styles.paragraph}>
                                "The Cost of Interrupted Work: More Speed and Stress," <a href="https://sci-hub.st/https://dl.acm.org/citation.cfm?id=1240673" target="_blank" rel="noopener noreferrer" className={styles.link}>ScienceDirect</a>.
                                <a href="#footnote-ref-2" aria-label="Back to content" className={styles.link}> ↩</a>
                            </p>
                        </li>
                        <li id="footnote-3" className={styles.listItem}>
                            <p className={styles.paragraph}>
                                "Adblockers and user experience: A holistic view," <a href="https://www.semanticscholar.org/paper/Adblockers-and-user-experience%3A-A-holistic-view-Pala-H%C3%B6l%C3%A4-V%C3%A4%C3%A4n%C3%A4nen/bf6a6f05f7823f05b0351722e0e5272a27b8786e" target="_blank" rel="noopener noreferrer" className={styles.link}>Semantic Scholar</a>.
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
