import { useRef, useState, useEffect } from 'react';
import useIntersectionObserver from '../../../../hooks/useIntersectionObserver';

import HTML from '../../../icons/brands/HTML';
import CSS from '../../../icons/brands/CSS';
import Linux from '../../../icons/brands/Linux';
import AWS from '../../../icons/brands/AWS';
import Heroku from '../../../icons/brands/Heroku';
import NodeJS from '../../../icons/brands/NodeJS';
import Nginx from '../../../icons/brands/Nginx';
import Next from '../../../icons/brands/Next';
import Nuxt from '../../../icons/brands/Nuxt';
import Svelte from '../../../icons/brands/Svelte';
import Postgres from '../../../icons/brands/Postgres';
import VSCode from '../../../icons/brands/VSCode';
import Vite from '../../../icons/brands/Vite';
import React from '../../../icons/brands/React';
import JavaScript from '../../../icons/brands/JavaScript';
import GitHub from '../../../icons/brands/GitHub';
import Figma from '../../../icons/brands/Figma';
import Docker from '../../../icons/brands/Docker';

import styles from './services.module.scss';

const technologies = [
  { name: 'AWS', url: 'https://aws.amazon.com/', Icon: AWS, hideLabel: true },
  { name: 'CSS', url: 'https://developer.mozilla.org/en-US/docs/Web/CSS', Icon: CSS },
  { name: 'Docker', url: 'https://www.docker.com/', Icon: Docker },
  { name: 'Figma', url: 'https://www.figma.com/', Icon: Figma },
  { name: 'GitHub', url: 'https://github.com/', Icon: GitHub },
  { name: 'Heroku', url: 'https://www.heroku.com/', Icon: Heroku },
  { name: 'HTML', url: 'https://developer.mozilla.org/en-US/docs/Web/HTML', Icon: HTML },
  { name: 'JavaScript', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript', Icon: JavaScript },
  { name: 'Linux', url: 'https://www.linux.org/', Icon: Linux },
  { name: 'Next.js', url: 'https://nextjs.org/', Icon: Next },
  { name: 'Nginx', url: 'https://nginx.org/', Icon: Nginx, hideLabel: true },
  { name: 'Node.js', url: 'https://nodejs.org/', Icon: NodeJS },
  { name: 'Nuxt', url: 'https://nuxt.com/', Icon: Nuxt },
  { name: 'PostgreSQL', url: 'https://www.postgresql.org/', Icon: Postgres },
  { name: 'React', url: 'https://reactjs.org/', Icon: React },
  { name: 'Svelte', url: 'https://svelte.dev/', Icon: Svelte },
  { name: 'Vite', url: 'https://vitejs.dev/', Icon: Vite },
  { name: 'VS Code', url: 'https://code.visualstudio.com/', Icon: VSCode }
];

export default function Services({ setMessage }) {
  const sectionRef = useRef(null);
  const [canReveal, setCanReveal] = useState(false);
  
  // Reduce the delay for mobile and desktop
  useEffect(() => {
    const delay = window.innerWidth < 1200 ? 2000 : 1000;
    const timer = setTimeout(() => setCanReveal(true), delay);
    return () => clearTimeout(timer);
  }, []);

  // Decrease threshold to make it appear sooner
  const isVisible = useIntersectionObserver(sectionRef, 0.1) && canReveal;

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
      <span className={styles.baseRate}>Base Rate: $25/hr</span>
    </div>

    <div className={styles.list}>
      {[
        { name: 'Development', items: [
          { name: 'Web Applications', price: 'Starting at $2,000' },
          { name: 'Legacy System Modernization', price: 'Starting at $2,500' },
          { name: 'Desktop & Mobile Applications', price: 'Starting at $4,000' },
          { name: 'Custom Backend Solutions', price: 'Starting at $1,600' },
          { name: 'E-commerce Development', price: 'Starting at $2,800' }
        ]},
        { name: 'Website Solutions', items: [
          { name: 'Business Website', price: 'Starting at $900' },
          { name: 'Landing Page / Conversion Funnel', price: 'Starting at $225' },
          { name: 'CMS Implementation', price: 'Starting at $2,400' },
          { name: 'Website Maintenance', price: 'Starting at $200/month' }
        ]},
        { name: 'Design & UX', items: [
          { name: 'UI/UX Design', price: 'Starting at $1,400' },
          { name: 'Design to Code Implementation', price: 'Starting at $800' }
        ]},
        { name: 'Technical Services', items: [
          { name: 'Performance Optimization', price: 'Starting at $600' },
          { name: 'DevOps & Security', price: 'Starting at $1,200' },
          { name: 'System Integration', price: 'Starting at $1,400' },
          { name: 'Technical Consultation', price: 'Starting at $500' }
        ]}
      ].map((serviceGroup, index) => (
        <div 
          key={serviceGroup.name} 
          className={`${styles.service} ${isVisible ? styles.visible : ''}`}
          style={{ transitionDelay: `${index * 0.2}s` }}
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
      className={`${styles.providers} ${isVisible ? styles.visible : ''}`}
      style={{ transitionDelay: '0.8s' }}
    >
      <div className={styles.providersHeading}>Technologies We Use</div>
      <div className={styles.providersList}>
        {technologies.map((tech, index) => (
          <a
            key={tech.name}
            href={tech.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.provider} ${isVisible ? styles.visible : ''}`}
            style={{ transitionDelay: `${1.0 + index * 0.1}s` }}
          >
            {tech.Icon && <tech.Icon extraClass={styles.providericon} />}
            {!tech.hideLabel && tech.name}
          </a>
        ))}
      </div>
    </div>

    <div 
      className={`${styles.additionalSection} ${isVisible ? styles.visible : ''}`}
      style={{ transitionDelay: '2.8s' }}
    >
      <p className={styles.additional}>
        All services are tailored to your specific needs. Our base rate is $25/hr, with project-based pricing available.
        To start realising your digital dreams, email us today at&nbsp;
        <a className={styles.additionallink} href="mailto:contact@dreamsbyte.com">contact@dreamsbyte.com</a>
        &nbsp;
        or use <a className={styles.additionallink} href="#contact">the form below</a>.
      </p>
    </div>
  </div>;
};
