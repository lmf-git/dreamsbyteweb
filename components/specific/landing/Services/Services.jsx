import { useRef } from 'react';
import useIntersectionObserver from '../../../../hooks/useIntersectionObserver';
import styles from './services.module.scss';

const technologies = [
  'Node.js', 'Heroku', 'AWS', 'Nuxt', 'Svelte',
  'JavaScript', 'HTML', 'CSS', 'PostgreSQL', 'Nginx'
];

export default function Services({ setMessage }) {
  const sectionRef = useRef(null);
  const isVisible = useIntersectionObserver(sectionRef, 0.3);

  const handleExampleClick = (service) => (e) => {
    const dot = e.currentTarget.querySelector('::before');
    if (dot) {
      dot.style.animation = 'none';
      void dot.offsetWidth;
      dot.style.animation = `${styles.ripple} 0.6s ease-out`;
    }

    setMessage(`Hi, I'm interested in ${service}`);
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return <div 
    ref={sectionRef}
    className={`section ${styles.services} ${isVisible ? styles.visible : ''}`} 
    id="services"
  >
    <div className={styles.heading}>
      <span className={styles.preamble}>From Concept to Reality</span>
      <h2 className={styles.title}>Our Services</h2>
    </div>

    <div className={styles.list}>
      {[
        { name: 'Development', items: [
          { name: 'Full Stack Development', price: 'Starting at $2,500' },
          { name: 'Website / App / DB Maintenance', price: 'Starting at $300/month' },
          { name: 'UI Development', price: 'Starting at $1,200' },
          { name: 'WordPress / Ghost / CMS Development' },
          { name: 'API Integrations / Custom API Development' }
        ]},
        { name: 'E-commerce', items: [
          { name: 'Shopify / Magento / Woocommerce / Custom Store Creation', price: 'Starting at $1,500' },
          { name: 'Multichannel / ERP and More Integrations' }
        ]},
        { name: 'Design', items: [
          { name: 'Captivating Logos', price: 'Starting at $300' },
          { name: 'Landing Pages', price: 'Starting at $800' },
          { name: 'Branding', price: 'Starting at $1,000' },
          { name: 'Distinctive Typography' },
          { name: 'Compelling Colour Schemes' }
        ]},
        { name: 'Miscellaneous', items: [
          { name: 'Figma to Website Conversion' },
          { name: 'PSD to HTML Conversion' },
          { name: 'Translation Services' },
          { name: 'Troubleshooting and Error Fixing' },
          { name: 'Tutoring in Web Development' }
        ]}
      ].map((serviceGroup, index) => (
        <div 
          key={serviceGroup.name} 
          className={styles.service}
          style={{ animationDelay: `${0.8 + index * 0.2}s` }}
        >
          <span className={styles.name}>{serviceGroup.name}</span>
          {serviceGroup.items.map((item, itemIndex) => (
            <span 
              key={item.name} 
              className={styles.example} 
              onClick={handleExampleClick(item.name)}
            >
              {item.name}
              {item.price && <span className={styles.price}>{item.price}</span>}
            </span>
          ))}
        </div>
      ))}
    </div>

    <div 
      className={styles.providers}
      style={{ animationDelay: '1.6s' }}
    >
      <div className={styles.providersHeading}>Technologies We Use</div>
      <div className={styles.providersList}>
        {technologies.map((tech, index) => (
          <span 
            key={tech}
            className={styles.provider}
            style={{ animationDelay: `${1.8 + index * 0.1}s` }}
          >
            {tech}
          </span>
        ))}
      </div>
    </div>

    <p className={styles.additional}>
      To start realising your digital dreams, email us today at&nbsp;
      <a className={styles.additionallink} href="mailto:contact@dreamsbyte.com">contact@dreamsbyte.com</a>
      &nbsp;
      or use <a className={styles.additionallink} href="#contact">the form below</a>.
    </p>
  </div>;
};
