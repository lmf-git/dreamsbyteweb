'use client';

import { useRef, useState, useEffect } from 'react';
import { useHero } from '../../contexts/HeroContext';
import { useContact } from '../../contexts/ContactContext';
import Comparison from '../../components/specific/landing/Comparison/Comparison';

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

import styles from '../../components/specific/landing/Services/services.module.scss';

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

export default function ServicesPage() {
  const sectionRef = useRef(null);
  const { heroComplete } = useHero();
  const { openContact } = useContact();
  
  const isVisible = true;

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
              className={`section ${styles.services} ${heroComplete ? styles.heroComplete : ''} ${isVisible ? styles.visible : ''}`} 
              id="services"
            >
              <div className={styles.heading}>
              <span className={styles.preamble}>From Concept to Reality</span>
              <h2 className={styles.title}>Our Services</h2>
              <span className={styles.baseRate}>Base Rate: $75/hr</span>
            </div>

            <div className={styles.list}>
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

            <Comparison />

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
              style={{ transitionDelay: '2.8s' }}>
              <p className={styles.additional}>
                All services are tailored to your specific needs with our base rate of $75/hr and project-based pricing available. <button className={styles.additionallink} onClick={() => openContact()}>Contact us</button> to start realising your dreams.
              </p>
            </div>
          </div>
        </>
    );
}