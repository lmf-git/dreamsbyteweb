'use client';

import { useState, useEffect } from 'react';
import styles from './codepenembed.module.scss'; // Import the SCSS module

export default function CodePenEmbed() {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    if (!isClient) {
        return (
            <div className={styles.codepenContainer}>
                {/* Placeholder or loading spinner for server render */}
                <div className={styles.loadingPlaceholder}>
                    Loading CodePen...
                </div>
            </div>
        );
    }

    return (
        <div className={styles.codepenContainer}>
            <iframe
                src="https://codepen.io/lmf-git/embed/yyJYWyz?height=300&theme-id=dark&default-tab=js"
                className={styles.iframe}
                scrolling="no"
                loading="lazy"
                allowtransparency="true"
                allowFullScreen={true}
            >
                See the Pen <a href="https://codepen.io/lmf-git/pen/yyJYWyz">Block distractions (stable v2.1)</a> by lmf-git (<a href="https://codepen.io/lmf-git">@lmf-git</a>) on <a href="https://codepen.io">CodePen</a>.
            </iframe>
        </div>
    );
}
