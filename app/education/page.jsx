'use client';

import { useRef, useState, useEffect } from 'react';
import Link from 'next/link';
import { useHeaderAnimation } from '../../contexts/HeaderAnimationContext';
import styles from './education.module.scss';

export default function Education() {
    const sectionRef = useRef(null);
    const { headerAnimationComplete } = useHeaderAnimation();
    const [educationVisible, setEducationVisible] = useState(false);

    // Handle education visibility timing like other animated pages
    useEffect(() => {
        // Only show education content after header animation completes
        if (headerAnimationComplete) {
            const timer = setTimeout(() => {
                setEducationVisible(true);
            }, 200); // Brief delay after header completes
            return () => clearTimeout(timer);
        } else {
            setEducationVisible(false);
        }
    }, [headerAnimationComplete]);
    
    const posts = [
        {
            id: 1,
            title: "Understanding Website Development: What Goes Into Building Your Digital Presence",
            excerpt: "Discover the process behind creating a professional website and what to expect when working with DreamsByte.",
            date: "2024-01-15",
            slug: "understanding-website-development"
        },
        {
            id: 2,
            title: "Why Your Business Needs a Professional Website in 2024",
            excerpt: "Learn how a well-designed website can transform your business and drive growth in today's digital landscape.",
            date: "2024-01-20",
            slug: "why-your-business-needs-professional-website"
        }
    ];

    return (
        <div 
            ref={sectionRef} 
            className={`${styles.education} ${educationVisible ? styles.visible : ''}`}
            style={{ opacity: educationVisible ? 1 : 0 }}
        >
            <div 
                className={`${styles.hero} ${educationVisible ? styles.visible : ''}`}
                style={{ opacity: educationVisible ? 1 : 0 }}
            >
                <h1 className={styles.title}>Client Education</h1>
                <p className={styles.subtitle}>
                    Understanding web development, digital solutions, and how DreamsByte can help grow your business online.
                </p>
            </div>

            <div 
                className={`${styles.posts} ${educationVisible ? styles.visible : ''}`}
                style={{ opacity: educationVisible ? 1 : 0 }}
            >
                {posts.map((post, index) => (
                    <article 
                        key={post.id} 
                        className={`${styles.post} ${educationVisible ? styles.visible : ''}`}
                        style={{ 
                            transitionDelay: `${index * 0.1}s`,
                            opacity: educationVisible ? 1 : 0 
                        }}
                    >
                        <div className={styles.postContent}>
                            <h2 className={styles.postTitle}>
                                <Link href={`/education/${post.slug}`} className={styles.postLink}>
                                    {post.title}
                                </Link>
                            </h2>
                            <p className={styles.postExcerpt}>{post.excerpt}</p>
                            <div className={styles.postMeta}>
                                <time className={styles.postDate}>{post.date}</time>
                                <Link href={`/education/${post.slug}`} className={styles.readMore}>
                                    Read More →
                                </Link>
                            </div>
                        </div>
                    </article>
                ))}
            </div>
        </div>
    );
}