import Link from 'next/link';
import styles from './education.module.scss';

export default function Education() {
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
        <div className={styles.education}>
            <div className={styles.hero}>
                <h1 className={styles.title}>Client Education</h1>
                <p className={styles.subtitle}>
                    Understanding web development, digital solutions, and how DreamsByte can help grow your business online.
                </p>
            </div>

            <div className={styles.posts}>
                {posts.map(post => (
                    <article key={post.id} className={styles.post}>
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