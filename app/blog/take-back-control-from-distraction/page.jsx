'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useContact } from '../../../contexts/ContactContext';
import { useHeaderAnimation } from '../../../contexts/HeaderAnimationContext';
import CallToAction from '../../../components/layout/CallToAction/CallToAction';
import Safari from '../../../components/icons/browsers/Safari';
import TamperMonkey from '../../../components/icons/browsers/TamperMonkey';
import OpenScripts from '../../../components/icons/browsers/OpenScripts';
import styles from '../post.module.scss';

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
                    <h1 className={styles.title}>Take Back Control from Distraction: A Guide to a More Focused Digital Life</h1>
                    <div className={styles.meta}>
                        <span className={styles.author}>By DreamsByte Team</span>
                        <span className={styles.date}>2024-03-15</span>
                        <span className={styles.readTime}>5 min read</span>
                    </div>
                </header>

                <div className={styles.content}>
                    <div className={styles.prose}>
                        <h2>The Age of Distraction</h2>
                        <p>In our hyper-connected world, distractions are everywhere. From social media notifications to clickbait articles, our attention is constantly under siege. But what if you could take back control? What if you could shape your digital environment to serve your needs, not the other way around?</p>

                        <h2>Introducing User Scripts</h2>
                        <p>User scripts are small pieces of JavaScript that can be run on any website to customize its appearance and functionality. With user scripts, you can block ads, hide annoying elements, and even add new features to your favorite sites. They are a powerful tool for taking back control of your digital life.</p>

                        <h2>Getting Started with User Scripts</h2>
                        <p>To use user scripts, you'll need a user script manager. These are browser extensions that allow you to easily install and manage user scripts. Here are a few popular options:</p>

                        <ul>
                            <li><TamperMonkey className={styles.icon} /> <a href="https://www.tampermonkey.net/" target="_blank" rel="noopener noreferrer">Tampermonkey</a>: The most popular user script manager, available for Chrome, Firefox, Safari, and other browsers.</li>
                            <li><OpenScripts className={styles.icon} /> <a href="https://openuserjs.org/" target="_blank" rel="noopener noreferrer">OpenUserJS</a>: An open-source user script repository and manager.</li>
                            <li><Safari className={styles.icon} /> For Safari users, you can use the built-in extension support to run user scripts.</li>
                        </ul>

                        <h2>A Simple Script to Get You Started</h2>
                        <p>Here's a simple user script that removes the "You might also like" section from Twitter. This is a common source of distraction, and removing it can help you stay focused on the content you care about.</p>

                        <pre>
                            <code>
{`// ==UserScript==
// @name         Hide Twitter "You might also like"
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Hides the "You might also like" section on Twitter.
// @author       You
// @match        https://twitter.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    setInterval(() => {
        const whoToFollow = document.querySelector('[aria-label="Who to follow"]');
        if (whoToFollow) {
            whoToFollow.parentElement.parentElement.parentElement.style.display = 'none';
        }
    }, 1000);
})();`}
                            </code>
                        </pre>

                        <h2>The Possibilities are Endless</h2>
                        <p>This is just the tip of the iceberg. With user scripts, you can customize any website to your liking. You can block ads, hide comments, change layouts, and much more. The only limit is your imagination.</p>

                        <h2>Take Control of Your Digital Life</h2>
                        <p>Ready to take back control of your digital life? Install a user script manager and start exploring the world of user scripts today. You'll be amazed at how much more productive and focused you can be when you're in control of your digital environment.</p>

                        <p>If you need help creating custom scripts or want to take your website to the next level with professional development, <button
                            onClick={() => openContact('I want to take control of my digital life')}
                            className={styles.contactButton}
                        >
                            contact us
                        </button> today.</p>
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
