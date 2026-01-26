'use client';

import { useRef, useState, useEffect } from 'react';
import { useHero } from '../../contexts/HeroContext';
import { useHeaderAnimation } from '../../contexts/HeaderAnimationContext';
import { useContact } from '../../contexts/ContactContext';

import HTML from '../../components/icons/brands/HTML';
import CSS from '../../components/icons/brands/CSS';
import Linux from '../../components/icons/brands/Linux';
import AWS from '../../components/icons/brands/AWS';
import Heroku from '../../components/icons/brands/Heroku';
import NodeJS from '../../components/icons/brands/NodeJS';
import Nginx from '../../components/icons/brands/Nginx';
import Next from '../../components/icons/brands/Next';
import Nuxt from '../../components/icons/brands/Nuxt';
import Svelte from '../../components/icons/brands/Svelte';
import Postgres from '../../components/icons/brands/Postgres';
import VSCode from '../../components/icons/brands/VSCode';
import Vite from '../../components/icons/brands/Vite';
import React from '../../components/icons/brands/React';
import JavaScript from '../../components/icons/brands/JavaScript';
import GitHub from '../../components/icons/brands/GitHub';
import Figma from '../../components/icons/brands/Figma';
import Docker from '../../components/icons/brands/Docker';
import Proton from '../../components/icons/brands/Proton';

import styles from './services.module.scss';

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
  }
];

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
  { name: 'Proton', url: 'https://proton.me/', Icon: Proton, hideLabel: true },
  { name: 'React', url: 'https://reactjs.org/', Icon: React },
  { name: 'Svelte', url: 'https://svelte.dev/', Icon: Svelte },
  { name: 'Vite', url: 'https://vitejs.dev/', Icon: Vite },
  { name: 'VS Code', url: 'https://code.visualstudio.com/', Icon: VSCode }
];

export default function ServicesPage() {
  const sectionRef = useRef(null);
  const providersRef = useRef(null);
  const { heroComplete } = useHero();
  const { headerAnimationComplete } = useHeaderAnimation();
  const { openContact } = useContact();
  const [servicesVisible, setServicesVisible] = useState(false);
  const [providersVisible, setProvidersVisible] = useState(false);
  const [providersRevealsComplete, setProvidersRevealsComplete] = useState(false);

  // Handle services visibility timing like intro page
  useEffect(() => {
    // Only show services after header animation completes
    if (headerAnimationComplete) {
      const timer = setTimeout(() => {
        setServicesVisible(true);
      }, 200); // Brief delay after header completes
      return () => clearTimeout(timer);
    } else {
      setServicesVisible(false);
      setProvidersVisible(false);
      setProvidersRevealsComplete(false);
    }
  }, [headerAnimationComplete]);

  // Intersection Observer for providers section
  useEffect(() => {
    if (!servicesVisible) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setProvidersVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (providersRef.current) {
      observer.observe(providersRef.current);
    }

    return () => observer.disconnect();
  }, [servicesVisible]);

  // Clear transition delays after provider reveals complete so hover effects work instantly
  useEffect(() => {
    if (providersVisible && !providersRevealsComplete) {
      // Last provider's delay + transition duration: (0.05 + 18 * 0.02)s + 0.3s ≈ 0.75s
      const totalRevealTime = 750;
      const timer = setTimeout(() => {
        setProvidersRevealsComplete(true);
      }, totalRevealTime);
      return () => clearTimeout(timer);
    }
  }, [providersVisible, providersRevealsComplete]);


  const handleAdvantageClick = (title) => () => {
    openContact(`Hi, I'm interested in learning more about "${title}"`);
  };

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
    const match = priceString.match(/\$(\d+(?:,\d+)*)/);
    if (match) {
      const price = parseInt(match[1].replace(',', ''));
      const hours = Math.round(price / 75);
      return `est > ${hours}hrs`;
    }
    return '';
  };

  return (
    <>
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
            {
              name: 'Web', items: [
                { name: 'Business Website', price: 'Starting at $900' },
                { name: 'Landing Page / Conversion Funnel', price: 'Starting at $225' },
                { name: 'CMS Implementation', price: 'Starting at $2,400' },
                { name: 'Website Maintenance', price: 'Starting at $200/month' },
                { name: 'Web Applications', price: 'Starting at $2,000' }
              ]
            },
            {
              name: 'Software', items: [
                { name: 'Desktop & Mobile Applications', price: 'Starting at $4,000' },
                { name: 'Custom API Creation', price: 'Starting at $1,600' },
                { name: 'E-commerce Application', price: 'Starting at $2,800' },
                { name: 'Legacy System Modernisation', price: 'Starting at $6,500' }
              ]
            },
            {
              name: 'Technical', items: [
                { name: 'Performance Optimisation', price: 'Starting at $600' },
                { name: 'DevOps & Security', price: 'Starting at $1,200' },
                { name: 'System Integration', price: 'Starting at $1,400' },
                { name: 'Technical Consultation', price: 'Starting at $500' }
              ]
            }
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
          className={`section ${styles.comparison} ${servicesVisible ? styles.visible : ''}`}
          id="comparison">              
        <div
          className={`${styles.heading} ${servicesVisible ? styles.visible : ''}`}
          style={{ opacity: servicesVisible ? 1 : 0 }}>
            <span className={styles.preamble}>Why Choose Us</span>
            <h2 className={styles.title}>Our Advantages</h2>
          </div>

          <div
            className={`${styles.advantages} ${servicesVisible ? styles.visible : ''}`}
            style={{ opacity: servicesVisible ? 1 : 0 }}>
            { advantages.map((advantage, index) => (
              <div
                key={index}
                className={`${styles.advantage} ${servicesVisible ? styles.visible : ''}`}
                style={{
                  transitionDelay: `${0.4 + index * 0.1}s`,
                  opacity: servicesVisible ? 1 : 0
                }}
                onClick={handleAdvantageClick(advantage.title)}
              >
                <h3 className={styles.advantageTitle}>{advantage.title}</h3>
                <p className={styles.advantageDesc}>{advantage.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div
          ref={providersRef}
          className={`${styles.providers} ${providersVisible ? styles.visible : ''}`}
          style={{
            opacity: providersVisible ? 1 : 0
          }}>
        <div
          className={`${styles.providersHeading} ${providersVisible ? styles.visible : ''}`}
          style={{ opacity: providersVisible ? 1 : 0 }}>
            Technologies We Use
          </div>
          <div className={styles.providersList}>
            {technologies.map((tech, index) => (
              <a
                key={tech.name}
                href={tech.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`${styles.provider} ${providersVisible ? styles.visible : ''}`}
                style={{
                  transitionDelay: providersRevealsComplete ? '0s' : `${0.05 + index * 0.02}s`,
                  opacity: providersVisible ? 1 : 0
                }}
              >
                { tech.Icon && <tech.Icon extraClass={styles.providericon} /> }
                { !tech.hideLabel && tech.name }
              </a>
            ))}
          </div>
        </div>

                    <div

                      className={`${styles.additionalSection} ${servicesVisible ? styles.visible : ''}`}

                      style={{

                        opacity: servicesVisible ? 1 : 0

                      }}>              
          <p className={`${styles.additional} ${styles.additionalText}`}>
            All services are tailored to your specific needs<br />
            with our base rate of $75/hr and project-based pricing available.<br />
            <button className={styles.additionallink} onClick={() => openContact()}>Contact us</button> to start realising your dreams.
          </p>
        </div>
      </div>
    </>
  );
}