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
        },
        {
            id: 3,
            title: "E-commerce vs Traditional Retail: Making the Digital Transition",
            excerpt: "Understand the benefits of e-commerce and how DreamsByte can help you transition your business online.",
            date: "2024-01-25",
            slug: "ecommerce-vs-traditional-retail"
        },
        {
            id: 4,
            title: "Web Security Basics: Protecting Your Business and Customers Online",
            excerpt: "Essential security practices every business owner should know to keep their website and customer data safe.",
            date: "2024-02-01",
            slug: "web-security-basics"
        },
        {
            id: 5,
            title: "The Complete Guide to Website Maintenance",
            excerpt: "Learn what goes into maintaining a website and why regular updates are crucial for your business.",
            date: "2024-02-10",
            slug: "complete-guide-website-maintenance"
        },
        {
            id: 6,
            title: "Understanding Web Performance: Why Speed Matters for Your Business",
            excerpt: "Discover how website speed affects your customers and business success, and what we do to optimize it.",
            date: "2024-02-15",
            slug: "understanding-web-performance"
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