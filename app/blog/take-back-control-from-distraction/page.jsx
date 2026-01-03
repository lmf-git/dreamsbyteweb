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
                        <h2>The Age of Distraction</h2>
                        <p>In our hyper-connected world, distractions are everywhere. From social media notifications to clickbait articles, our attention is constantly under siege. But what if you could take back control? What if you could shape your digital environment to serve your needs, not the other way around?</p>

                        <p>Studies have shown that it can take anywhere from <a href="https://www.healthline.com/health/how-long-does-it-take-for-a-new-behavior-to-become-automatic" target="_blank" rel="noopener noreferrer">18 to 254 days</a> to form a new habit, with the average being 66 days. Taking control of your digital environment is a great first step.</p>

                        <h2>Introducing User Scripts</h2>
                        <p>User scripts are small pieces of JavaScript that can be run on any website to customize its appearance and functionality. With user scripts, you can block ads, hide annoying elements, and even add new features to your favorite sites. They are a powerful tool for taking back control of your digital life.</p>

                        <h2>Getting Started with User Scripts</h2>
                        <p>To use user scripts, you'll need a user script manager. These are browser extensions that allow you to easily install and manage user scripts. Here are a few popular options:</p>

                        <p><Chrome className={styles.icon} /> <a href="https://chrome.google.com/webstore/category/extensions" target="_blank" rel="noopener noreferrer">Chrome</a> (with Tampermonkey)</p>
                        <p><Edge className={styles.icon} /> <a href="https://microsoftedge.microsoft.com/addons/Microsoft-Edge-Extensions-Home" target="_blank" rel="noopener noreferrer">Edge</a> (with Tampermonkey)</p>


                        <p><Safari className={styles.icon} /> <a href="https://apps.apple.com/us/app/userscripts/id1463298887" target="_blank" rel="noopener noreferrer">Userscripts for Safari</a></p>

                        <h2>A More Powerful Script for Taking Control</h2>
                        <p>Here’s a more advanced user script that demonstrates the power of this approach. This script doesn't just hide elements; it actively redirects you from distracting websites and cleans up your YouTube experience.</p>

                        <h3>What This Script Does:</h3>
                        <ul>
                            <li><strong>Redirects from blocked sites:</strong> It maintains a blocklist of distracting websites (like Twitter/X.com and Google News). If you try to visit one, it redirects you to a productive site (in this case, dreamsbyte.com).</li>
                            <li><strong>Blocks YouTube Shorts:</strong> It automatically redirects you away from the endless scroll of YouTube Shorts.</li>
                            <li><strong>Cleans up YouTube:</strong> It removes the recommended videos feed (the "dismissible" elements) from the YouTube homepage, helping you focus only on what you intended to watch.</li>
                            <li><strong>Blocks distracting searches:</strong> It prevents you from searching for "news" on Google, Yahoo, and DuckDuckGo, cutting off another common distraction pathway.</li>
                            <li><strong>Smart and Stable:</strong> The script includes a stability timer to avoid redirect loops and a `MutationObserver` to ensure it works reliably even on modern single-page applications (SPAs) like YouTube.</li>
                        </ul>

                        <CodePenEmbed />

                        <h2>The Nuclear Option: Blocking Sites with the Hosts File</h2>
                        <p>For a more permanent and browser-agnostic solution, you can block websites at the operating system level by editing your <strong>hosts file</strong>. This file acts as a local DNS resolver, allowing you to manually map domain names to IP addresses. By mapping a distracting site to your local machine (127.0.0.1), you effectively block access to it from any browser.</p>

                        <p><strong>Warning:</strong> Editing the hosts file requires administrator privileges. Always make a backup before making changes.</p>

                        <h3>macOS and Linux:</h3>
                        <ol>
                            <li>Open the Terminal application.</li>
                            <li>Type the following command and press Enter to open the hosts file: <code>sudo nano /etc/hosts</code></li>
                            <li>Enter your administrator password when prompted.</li>
                            <li>Add the following lines at the end of the file to block Twitter/X.com:
                                <pre className={styles['inline-code-block']}><code>127.0.0.1 twitter.com</code></pre>
                                <pre className={styles['inline-code-block']}><code>127.0.0.1 www.twitter.com</code></pre>
                                <pre className={styles['inline-code-block']}><code>127.0.0.1 x.com</code></pre>
                                <pre className={styles['inline-code-block']}><code>127.0.0.1 www.x.com</code></pre>
                            </li>
                            <li>Save the file by pressing <code>Ctrl+O</code>, then <code>Enter</code>, and exit with <code>Ctrl+X</code>.</li>
                        </ol>

                        <h3>Windows:</h3>
                        <ol>
                            <li>Open Notepad (or your preferred text editor) as an Administrator. You can do this by searching for Notepad in the Start Menu, right-clicking it, and selecting "Run as administrator".</li>
                            <li>In Notepad, go to <code>File &gt; Open</code>.</li>
                            <li>Navigate to <code>C:\Windows\System32\drivers\etc</code>.</li>
                            <li>Change the file type from "Text Documents (*.txt)" to "All Files (*.*)".</li>
                            <li>Select the <code>hosts</code> file and click Open.</li>
                            <li>Add the following lines at the end of the file:
                                <pre className={styles['inline-code-block']}><code>127.0.0.1 twitter.com</code></pre>
                                <pre className={styles['inline-code-block']}><code>127.0.0.1 www.twitter.com</code></pre>
                                <pre className={styles['inline-code-block']}><code>127.0.0.1 x.com</code></pre>
                                <pre className={styles['inline-code-block']}><code>127.0.0.1 www.x.com</code></pre>
                            </li>
                            <li>Save the file (<code>File &gt; Save</code>).</li>
                        </ol>
                        <p>After saving, you may need to flush your DNS cache for the changes to take effect immediately. On Windows, open Command Prompt as an administrator and run <code>ipconfig /flushdns</code>. On macOS, run <code>sudo dscacheutil -flushcache; sudo killall -HUP mDNSResponder</code> in the terminal.</p>

                        <h2>Beyond User Scripts: Browser Extensions for Focus</h2>
                        <p>While user scripts offer incredible customization, sometimes a dedicated browser extension provides a more robust or specialized solution for digital well-being. Here are a couple of powerful options:</p>

                        <h3><SponsorBlock className={styles.icon} /> SponsorBlock (Chrome/Edge/Firefox/Safari)</h3>
                        <p>Tired of sponsored segments, intros, and outros interrupting your YouTube viewing? <a href="https://chrome.google.com/webstore/detail/sponsorblock-for-youtube/mnjggfcpnkjswgmpjcebnaarcdgchpge" target="_blank" rel="noopener noreferrer">SponsorBlock for Chrome</a> (also available for <a href="https://microsoftedge.microsoft.com/addons/detail/sponsorblock-for-youtube/fjhbipklglgbpeplpcebgojbdjgoijcp" target="_blank" rel="noopener noreferrer">Edge</a>, and <a href="https://apps.apple.com/us/app/sponsorblock-for-youtube/id1573024036" target="_blank" rel="noopener noreferrer">Safari</a>) is a crowdsourced browser extension that automatically skips these segments, letting you get straight to the content you care about. It relies on a community of users to identify and submit the start and end times of various categories within videos.</p>

                        <h3><AdGuard className={styles.icon} /> AdGuard AdBlocker (Chrome/Edge/Firefox/Safari)</h3>
                        <p>Beyond just an ad blocker, <a href="https://chrome.google.com/webstore/detail/adguard-adblocker/bgnkhhnnamicmpekafmjoowakgpkanhd" target="_blank" rel="noopener noreferrer">AdGuard AdBlocker for Chrome</a> (and for <a href="https://microsoftedge.microsoft.com/addons/detail/adguard-adblocker/mpcegpcjcohmmdjfojchfphhpgmkpbko" target="_blank" rel="noopener noreferrer">Edge</a>, and <a href="https://apps.apple.com/us/app/adguard-for-safari/id1047223162" target="_blank" rel="noopener noreferrer">Safari</a>) is a powerful tool to remove annoying ads, pop-ups, and banners, but also to protect your privacy by blocking trackers and spyware. A cleaner browsing experience directly translates to fewer distractions and improved focus.</p>

                        <h2>The Possibilities are Endless</h2>
                        <p>Whether you use a simple user script or edit your hosts file, the goal is the same: to create a digital environment that serves your goals, not the goals of tech companies vying for your attention. The possibilities are endless, and the power is in your hands.</p>

                        <h2>Take Control of Your Digital Life</h2>
                        <p>Ready to take back control of your digital life? Install a user script manager and start exploring the world of user scripts today. You'll be amazed at how much more productive and focused you can be when you're in control of your digital environment.</p>
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
