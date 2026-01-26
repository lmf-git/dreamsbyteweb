'use client';

import { useRef, useState, useEffect } from 'react';
import Link from 'next/link';
import { useHeaderAnimation } from '../../contexts/HeaderAnimationContext';
import { posts } from './posts'; // Import posts from the new file
import styles from './blog.module.scss';

export default function Blog() {
    const sectionRef = useRef(null);
    const { headerAnimationComplete } = useHeaderAnimation();
    const [blogVisible, setBlogVisible] = useState(false);
    const [revealsComplete, setRevealsComplete] = useState(false);

    // Handle blog visibility timing like other animated pages
    useEffect(() => {
        // Only show blog content after header animation completes
        if (headerAnimationComplete) {
            const timer = setTimeout(() => {
                setBlogVisible(true);
            }, 200); // Brief delay after header completes
            return () => clearTimeout(timer);
        } else {
            setBlogVisible(false);
            setRevealsComplete(false);
        }
    }, [headerAnimationComplete]);

    // Clear transition delays after reveal animations complete so hover effects work instantly
    useEffect(() => {
        if (blogVisible && !revealsComplete) {
            // Last post's delay + transition duration: (posts.length - 1) * 100ms + 500ms
            const totalRevealTime = 19 * 100 + 500;
            const timer = setTimeout(() => {
                setRevealsComplete(true);
            }, totalRevealTime);
            return () => clearTimeout(timer);
        }
    }, [blogVisible, revealsComplete]);

    return (
        <div
            ref={sectionRef}
            className={`${styles.blog} ${blogVisible ? styles.visible : ''}`}
            style={{ opacity: blogVisible ? 1 : 0 }}
        >
            <div
                className={`${styles.hero} ${blogVisible ? styles.visible : ''}`}
                style={{ opacity: blogVisible ? 1 : 0 }}
            >
                <h1 className={styles.title}>Blog</h1>
                <p className={styles.subtitle}>
                    Understanding web development, digital solutions, and how DreamsByte can help grow your business online.
                </p>
            </div>

            <div
                className={`${styles.posts} ${blogVisible ? styles.visible : ''}`}
                style={{ opacity: blogVisible ? 1 : 0 }}
            >
                {posts.map((post, index) => (
                    <Link
                        key={post.id}
                        href={`/blog/${post.slug}`}
                        className={`${styles.post} ${blogVisible ? styles.visible : ''}`}
                        style={{
                            transitionDelay: revealsComplete ? '0s' : `${index * 0.1}s`,
                            opacity: blogVisible ? 1 : 0
                        }}
                    >
                        <article>
                            <h2 className={styles.postTitle}>{post.title}</h2>
                            <p className={styles.postExcerpt}>{post.excerpt}</p>
                            <div className={styles.postMeta}>
                                <time className={styles.postDate}>{post.date}</time>
                                <span className={styles.readMore}>Read More →</span>
                            </div>
                        </article>
                    </Link>
                ))}
            </div>
        </div>
    );
}
