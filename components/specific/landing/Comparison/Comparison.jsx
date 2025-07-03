import { useRef, useState, useEffect } from 'react';
import useIntersectionObserver from '../../../../hooks/useIntersectionObserver';
import { useHero } from '../../../../contexts/HeroContext';
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
    description: 'Optimised for speed and efficiency with industry-leading performance scores and best practices.'
  },
  {
    title: 'Fluent Communication',
    description: 'Ability to translate across business, technical and marketing languages.'
  }
];

export default function Comparison({ setMessage, setContactOpen }) {
  const sectionRef = useRef(null);
  const { heroComplete } = useHero();

  // Lower threshold to trigger earlier
  const isVisible = useIntersectionObserver(sectionRef, 0.1) && heroComplete;

  const handleAdvantageClick = (title) => () => {
    setMessage(`Hi, I'm interested in learning more about "${title}"`);
    setContactOpen(true);
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
