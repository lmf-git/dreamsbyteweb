import { useRef, useState, useEffect } from 'react';
import useIntersectionObserver from '../../../../hooks/useIntersectionObserver';
import styles from './comparison.module.scss';

const advantages = [
  {
    title: 'Free Hosting Included',
    description: 'We include premium hosting at no additional cost, ensuring your project stays online and performs optimally.'
  },
  {
    title: 'No Hidden Fees',
    description: 'Transparent pricing with no surprise costs. What we quote is what you pay.'
  },
  {
    title: 'Complete Code Control',
    description: 'Full access to your project\'s source code and infrastructure with clean, documented implementations.'
  },
  {
    title: 'Transparent Process',
    description: 'Regular updates and clear communication throughout development with access to our project management tools.'
  },
  {
    title: 'High Performance',
    description: 'Optimized for speed and efficiency with industry-leading performance scores and best practices.'
  },
  {
    title: 'Clear Communication',
    description: 'Direct access to developers and regular check-ins to ensure your vision is perfectly executed.'
  }
];

export default function Comparison({ setMessage }) {
  const sectionRef = useRef(null);
  const [canReveal, setCanReveal] = useState(false);
  
  // Reduce delay significantly for both mobile and desktop
  useEffect(() => {
    const delay = window.innerWidth < 1200 ? 1000 : 500;
    const timer = setTimeout(() => setCanReveal(true), delay);
    return () => clearTimeout(timer);
  }, []);

  // Lower threshold to trigger earlier
  const isVisible = useIntersectionObserver(sectionRef, 0.1) && canReveal;

  const handleAdvantageClick = (title) => () => {
    setMessage(`Hi, I'm interested in learning more about "${title}"`);
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div 
      ref={sectionRef}
      className={`section ${styles.comparison} ${isVisible ? styles.visible : ''}`} 
      id="comparison"
    >
      <div className={styles.heading}>
        <span className={styles.preamble}>Why Choose Us</span>
        <h2 className={styles.title}>Our Advantages</h2>
      </div>

      <div className={styles.advantages}>
        {advantages.map((advantage, index) => (
          <div 
            key={index} 
            className={`${styles.advantage} ${isVisible ? styles.visible : ''}`}
            style={{ transitionDelay: `${index * 0.1}s` }}
            onClick={handleAdvantageClick(advantage.title)}
          >
            <h3 className={styles.advantageTitle}>{advantage.title}</h3>
            <p className={styles.advantageDesc}>{advantage.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
