'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useContact } from '../../../contexts/ContactContext';
import { useHeaderAnimation } from '../../../contexts/HeaderAnimationContext';
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

const CodePenEmbed = dynamic(() => import('../../../components/specific/CodePenEmbed'), { ssr: false });

export default function TakeBackControlFromDistraction() {
    const { openContact } = useContact();
    const { headerAnimationComplete } = useHeaderAnimation();
    const [contentVisible, setContentVisible] = useState(false);

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

    return (
        <article
            className={`${styles.post} ${contentVisible ? styles.visible : ''}`}
            style={{ opacity: contentVisible ? 1 : 0 }}
        >
            <div className={styles.container}>
                <header className={styles.header}>
                    <h1 className={styles.title}>Take Back Control: Digital Distraction</h1>
                    <div className={styles.meta}>
                        <span className={styles.author}>By DreamsByte Team</span>
                        <span className={styles.date}>2024-03-15</span>
                        <span className={styles.readTime}>10 min read</span>
                    </div>
                </header>

                <div className={styles.content}>
                    <div className={styles.prose}>
                        <h2 className={styles.heading2}>The Age of Distraction</h2>
                        <p className={styles.paragraph}>In our hyper-connected world, distractions are everywhere. From social media notifications to clickbait articles, our attention is constantly under siege. It can take an average of over 23 minutes to regain focus after a digital interruption, a significant blow to productivity.<sup><a href="#footnote-2" id="footnote-ref-2" className={styles.link}>2</a></sup> But what if you could take back control? What if you could shape your digital environment to serve your needs, not the other way around?</p>

                        <p className={styles.paragraph}>Studies have shown that it can take anywhere from 18 to 254 days to form a new habit, with the average being 66 days.<sup><a href="#footnote-1" id="footnote-ref-1" className={styles.link}>1</a></sup> Taking control of your digital environment is a great first step.</p>

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
                    </div>

                    <div className={styles.footnotes}>
                        <h2 className={styles.heading2}>Sources</h2>
                        <ol className={styles.orderedList}>
                            <li id="footnote-1" className={styles.listItem}>
                                <p className={styles.paragraph}>
                                    Lally, P., van Jaarsveld, C. H. M., Potts, H. W. W., & Wardle, J. (2010). How are habits formed: Modelling habit formation in the real world. <em>European Journal of Social Psychology, 40</em>(6), 998–1009. 
                                    <a href="https://discovery.ucl.ac.uk/id/eprint/135709/" target="_blank" rel="noopener noreferrer" className={styles.link}>
                                    https://discovery.ucl.ac.uk/id/eprint/135709/
                                    </a>
                                    <a href="#footnote-ref-1" aria-label="Back to content" className={styles.link}> ↩</a>
                                </p>
                            </li>
                            <li id="footnote-2" className={styles.listItem}>
                                <p className={styles.paragraph}>
                                    "Workplace Distraction Statistics 2024", TeamStage.
                                    <a href="https://teamstage.io/workplace-distraction-statistics/" target="_blank" rel="noopener noreferrer" className={styles.link}>
                                        https://teamstage.io/workplace-distraction-statistics/
                                    </a>
                                    <a href="#footnote-ref-2" aria-label="Back to content" className={styles.link}> ↩</a>
                                </p>
                            </li>
                            <li id="footnote-3" className={styles.listItem}>
                                <p className={styles.paragraph}>
                                    "Ad Blocking Usage & Demographics", Exploding Topics, Feb 26, 2024.
                                    <a href="https://explodingtopics.com/blog/ad-blocking" target="_blank" rel="noopener noreferrer" className={styles.link}>
                                        https://explodingtopics.com/blog/ad-blocking
                                    </a>
                                    <a href="#footnote-ref-3" aria-label="Back to content" className={styles.link}> ↩</a>
                                </p>
                            </li>
                        </ol>
                    </div>
                </div>

                <CallToAction />

                <footer className={styles.footer}>
                    <div className={styles.navigation}>
                        <Link href="/blog" className={styles.backLink}>
                            ← Back to Blog
                        </Link>
                    </div>
                </footer>
            </div>
        </article>
    );
}
