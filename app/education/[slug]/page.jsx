'use client';

import { useParams } from 'next/navigation';
import Link from 'next/link';
import { useContact } from '../../../contexts/ContactContext';
import styles from './post.module.scss';

// Article content components
function UnderstandingWebsiteDevelopment() {
    const { openContact } = useContact();
    return (
        <>
            <h2>Introduction</h2>
            <p>Building a professional website is more than just putting together some pages and images. At DreamsByte, we follow a comprehensive process to ensure your website not only looks great but also drives results for your business.</p>
            
            <h2>What Goes Into Website Development</h2>
            <ul>
                <li>Business analysis and goal setting</li>
                <li>User experience (UX) design and planning</li>
                <li>Visual design and branding integration</li>
                <li>Technical development and programming</li>
                <li>Content management system setup</li>
                <li>Testing, optimization, and launch</li>
            </ul>
            
            <h2>Our Development Process</h2>
            <p>We start every project with a thorough understanding of your business goals. This helps us create a website that not only represents your brand but also converts visitors into customers.</p>
            
            <h3>Discovery & Planning</h3>
            <p>We begin by understanding your business, target audience, and objectives. This foundation ensures every decision we make serves your business goals.</p>
            
            <h3>Design & User Experience</h3>
            <p>Our design process focuses on creating an intuitive, engaging experience for your visitors while maintaining your brand identity and professional appearance.</p>
            
            <h3>Development & Implementation</h3>
            <p>Using modern, secure technologies, we build your website to be fast, reliable, and easy to manage. We ensure your site works perfectly on all devices and browsers.</p>
            
            <h2>What Makes DreamsByte Different</h2>
            <ul>
                <li><strong>Complete Ownership:</strong> You own all the code and content</li>
                <li><strong>No Hidden Fees:</strong> Transparent pricing with no surprise costs</li>
                <li><strong>Free Hosting:</strong> We include hosting for the first year</li>
                <li><strong>Ongoing Support:</strong> We're here to help even after launch</li>
            </ul>
            
            <h2>Ready to Get Started?</h2>
            <p>Every business deserves a professional online presence. Whether you're starting from scratch or need to modernize an existing site, we're here to help you succeed online.</p>
            
            <p>Ready to discuss your project? <button 
                onClick={() => openContact()} 
                className={styles.contactButton}
            >
                Contact us today
            </button> for a free consultation and see how we can help grow your business online.</p>
        </>
    );
}

function WhyYourBusinessNeedsWebsite() {
    const { openContact } = useContact();
    return (
        <>
            <h2>The Digital Landscape in 2024</h2>
            <p>In today's digital-first world, your website is often the first impression potential customers have of your business. A professional online presence isn't just nice to have—it's essential for growth and credibility.</p>
            
            <h2>Key Benefits of a Professional Website</h2>
            <ul>
                <li>24/7 accessibility for your customers</li>
                <li>Increased credibility and trust</li>
                <li>Cost-effective marketing and advertising</li>
                <li>Better customer service and support</li>
                <li>Competitive advantage in your market</li>
                <li>Data insights about your customers</li>
            </ul>
            
            <h2>How DreamsByte Helps Your Business Grow</h2>
            <p>We don't just build websites—we create digital solutions that drive results. Our approach focuses on understanding your business goals and creating a website that actively contributes to your success.</p>
            
            <h3>Strategic Planning</h3>
            <p>Every website we build starts with a deep understanding of your business, target audience, and growth objectives.</p>
            
            <h3>Modern Technology</h3>
            <p>We use cutting-edge technologies to ensure your website is fast, secure, and scalable as your business grows.</p>
            
            <h3>Ongoing Support</h3>
            <p>Launch is just the beginning. We provide ongoing support to help your website continue driving results for your business.</p>
            
            <h2>Ready to Transform Your Business Online?</h2>
            <p>Don't let your competitors get ahead. A professional website is an investment in your business's future success and growth.</p>
            
            <p><button 
                onClick={() => openContact()} 
                className={styles.contactButton}
            >
                Contact us today
            </button> to discuss how we can help transform your business with a professional website that drives real results.</p>
        </>
    );
}

// Component mapping
const contentComponents = {
    "understanding-website-development": UnderstandingWebsiteDevelopment,
    "why-your-business-needs-professional-website": WhyYourBusinessNeedsWebsite
};

export default function BlogPost() {
    const params = useParams();
    const slug = params.slug;
    
    // Hardcoded articles data
    const articles = {
        "understanding-website-development": {
            title: "Understanding Website Development: What Goes Into Building Your Digital Presence",
            date: "2024-01-15",
            author: "DreamsByte Team",
            readTime: "6 min read"
        },
        "why-your-business-needs-professional-website": {
            title: "Why Your Business Needs a Professional Website in 2024",
            date: "2024-01-20", 
            author: "DreamsByte Team",
            readTime: "5 min read"
        }
    };
    
    const post = articles[slug];
    const ContentComponent = contentComponents[slug];

    if (!post || !ContentComponent) {
        return (
            <div className={styles.post}>
                <div className={styles.container}>
                    <h1>Article not found</h1>
                    <Link href="/education">← Back to Education</Link>
                </div>
            </div>
        );
    }

    return (
        <article className={styles.post}>
            <div className={styles.container}>
                <header className={styles.header}>
                    <h1 className={styles.title}>{post.title}</h1>
                    <div className={styles.meta}>
                        <span className={styles.author}>By {post.author}</span>
                        <span className={styles.date}>{post.date}</span>
                        <span className={styles.readTime}>{post.readTime}</span>
                    </div>
                </header>

                <div className={styles.content}>
                    <div className={styles.prose}>
                        <ContentComponent />
                    </div>
                </div>

                <footer className={styles.footer}>
                    <div className={styles.navigation}>
                        <Link href="/education" className={styles.backLink}>
                            ← Back to Education
                        </Link>
                    </div>
                </footer>
            </div>
        </article>
    );
}