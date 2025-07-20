import { useRef, useState, useEffect } from 'react';
import { useHeaderAnimation } from '../../../../contexts/HeaderAnimationContext';
import { useContact } from '../../../../contexts/ContactContext';

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

export default function Services() {
  const sectionRef = useRef(null);
  const { headerAnimationComplete } = useHeaderAnimation();
  const { openContact } = useContact();
  const [servicesVisible, setServicesVisible] = useState(false);
  
  // Handle services visibility timing like intro page
  useEffect(() => {
    // Reset visibility when headerAnimationComplete changes
    setServicesVisible(false);
    
    // If header animation is already complete (navigation), show quickly
    // Otherwise wait for header animation plus a short delay
    const delay = headerAnimationComplete ? 200 : 300;
    
    const timer = setTimeout(() => {
      setServicesVisible(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [headerAnimationComplete]);
  

  const handleExampleClick = (service) => (e) => {
    const dot = e.currentTarget.querySelector('::before');
    if (dot) {
      dot.style.animation = 'none';
      void dot.offsetWidth;
      dot.style.animation = `${styles.ripple} 0.6s ease-out`;
    }

    openContact(`Hi, I'm interested in ${service}`);
  };

  const calculateEstimatedHours = (priceString) => {
    // Extract the numeric value from the price string
    const match = priceString.match(/\$(\d+(?:,\d+)*)/);
    if (match) {
      const price = parseInt(match[1].replace(',', ''));
      const hours = Math.round(price / 75);
      return `est > ${hours}hrs`;
    }
    return '';
  };

  return (
    <div 
      ref={sectionRef}
      className={`section ${styles.services} ${servicesVisible ? styles.visible : ''}`} 
      id="services"
      style={{ opacity: servicesVisible ? 1 : 0 }}
    >
      <div 
        className={`${styles.heading} ${servicesVisible ? styles.visible : ''}`}
        style={{ opacity: servicesVisible ? 1 : 0 }}
      >
      <span className={styles.preamble}>From Concept to Reality</span>
      <h2 className={styles.title}>Our Services</h2>
      <span className={styles.baseRate}>Base Rate: $75/hr</span>
    </div>

    <div 
      className={`${styles.list} ${servicesVisible ? styles.visible : ''}`}
      style={{ opacity: servicesVisible ? 1 : 0 }}
    >
      {[
        { name: 'Web', items: [
          { name: 'Business Website', price: 'Starting at $900' },
          { name: 'Landing Page / Conversion Funnel', price: 'Starting at $225' },
          { name: 'CMS Implementation', price: 'Starting at $2,400' },
          { name: 'Website Maintenance', price: 'Starting at $200/month' },
          { name: 'Web Applications', price: 'Starting at $2,000' }
        ]},
        { name: 'Software', items: [
          { name: 'Desktop & Mobile Applications', price: 'Starting at $4,000' },
          { name: 'Custom API Creation', price: 'Starting at $1,600' },
          { name: 'E-commerce Application', price: 'Starting at $2,800' },
          { name: 'Legacy System Modernisation', price: 'Starting at $6,500' }
        ]},
        { name: 'Technical', items: [
          { name: 'Performance Optimisation', price: 'Starting at $600' },
          { name: 'DevOps & Security', price: 'Starting at $1,200' },
          { name: 'System Integration', price: 'Starting at $1,400' },
          { name: 'Technical Consultation', price: 'Starting at $500' }
        ]}
      ].map((serviceGroup, index) => (
        <div 
          key={serviceGroup.name} 
          className={`${styles.service} ${servicesVisible ? styles.visible : ''}`}
          style={{ 
            transitionDelay: `${index * 0.2}s`,
            opacity: servicesVisible ? 1 : 0 
          }}
        >
          <span className={styles.name}>{serviceGroup.name}</span>
          {serviceGroup.items.map((item, itemIndex) => (
            <span 
              key={item.name} 
              className={styles.example} 
              onClick={handleExampleClick(item.name)}
            >
              <div className={styles.serviceName}>{item.name}</div>
              {item.price && (
                <div className={styles.price}>
                  {item.price}
                  {!item.price.includes('/month') && (
                    <span className={styles.estimatedHours}> ({calculateEstimatedHours(item.price)})</span>
                  )}
                </div>
              )}
            </span>
          ))}
        </div>
      ))}
    </div>


    <div 
      className={`${styles.providers} ${servicesVisible ? styles.visible : ''}`}
      style={{ 
        transitionDelay: '0.8s',
        opacity: servicesVisible ? 1 : 0 
      }}
    >
      <div className={styles.providersHeading}>Technologies We Use</div>
      <div className={styles.providersList}>
        {technologies.map((tech, index) => (
          <a
            key={tech.name}
            href={tech.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.provider} ${servicesVisible ? styles.visible : ''}`}
            style={{ 
              transitionDelay: `${1.0 + index * 0.1}s`,
              opacity: servicesVisible ? 1 : 0 
            }}
          >
            {tech.Icon && <tech.Icon extraClass={styles.providericon} />}
            {!tech.hideLabel && tech.name}
          </a>
        ))}
      </div>
    </div>

    <div 
      className={`${styles.additionalSection} ${servicesVisible ? styles.visible : ''}`}
      style={{ 
        transitionDelay: '2.8s',
        opacity: servicesVisible ? 1 : 0 
      }}>
      <p className={styles.additional}>
        All services are tailored to your specific needs with our base rate of $75/hr and project-based pricing available. <button className={styles.additionallink} onClick={() => openContact()}>Contact us</button> to start realising your dreams.
      </p>
    </div>
  </div>
  );
}
