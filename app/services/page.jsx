'use client';

import { useRef, useState, useEffect } from 'react';
import { useHero } from '../../contexts/HeroContext';
import { useHeaderAnimation } from '../../contexts/HeaderAnimationContext';
import { useContact } from '../../contexts/ContactContext';
import { useLanguage } from '../../contexts/LanguageContext';

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

const serviceGroups = [
  {
    key: 'web',
    items: [
      { key: 'businessWebsite', amount: 900, monthly: false },
      { key: 'landingPage', amount: 225, monthly: false },
      { key: 'cmsImplementation', amount: 2400, monthly: false },
      { key: 'websiteMaintenance', amount: 200, monthly: true },
      { key: 'webApplications', amount: 2000, monthly: false },
    ],
  },
  {
    key: 'software',
    items: [
      { key: 'desktopMobile', amount: 4000, monthly: false },
      { key: 'customApi', amount: 1600, monthly: false },
      { key: 'ecommerce', amount: 2800, monthly: false },
      { key: 'legacySystem', amount: 6500, monthly: false },
    ],
  },
  {
    key: 'technical',
    items: [
      { key: 'performanceOpt', amount: 600, monthly: false },
      { key: 'devops', amount: 1200, monthly: false },
      { key: 'systemIntegration', amount: 1400, monthly: false },
      { key: 'consultation', amount: 500, monthly: false },
    ],
  },
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
  { name: 'VS Code', url: 'https://code.visualstudio.com/', Icon: VSCode },
];

export default function ServicesPage() {
  const sectionRef = useRef(null);
  const providersRef = useRef(null);
  const { heroComplete } = useHero();
  const { headerAnimationComplete } = useHeaderAnimation();
  const { openContact } = useContact();
  const { t } = useLanguage();
  const [servicesVisible, setServicesVisible] = useState(false);
  const [providersVisible, setProvidersVisible] = useState(false);
  const [providersRevealsComplete, setProvidersRevealsComplete] = useState(false);

  useEffect(() => {
    if (headerAnimationComplete) {
      const timer = setTimeout(() => {
        setServicesVisible(true);
      }, 200);
      return () => clearTimeout(timer);
    } else {
      setServicesVisible(false);
      setProvidersVisible(false);
      setProvidersRevealsComplete(false);
    }
  }, [headerAnimationComplete]);

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

  useEffect(() => {
    if (providersVisible && !providersRevealsComplete) {
      const totalRevealTime = 750;
      const timer = setTimeout(() => {
        setProvidersRevealsComplete(true);
      }, totalRevealTime);
      return () => clearTimeout(timer);
    }
  }, [providersVisible, providersRevealsComplete]);

  const handleAdvantageClick = (title) => () => {
    openContact(`${t.services.advantageContactPrefix} "${title}"`);
  };

  const handleExampleClick = (itemName) => () => {
    openContact(`${t.services.serviceContactPrefix} ${itemName}`);
  };

  const formatPrice = (item) => {
    const formatted = item.amount.toLocaleString('en-US');
    if (item.monthly) {
      return `${t.services.startingAt} $${formatted}${t.services.perMonth}`;
    }
    const estimatedHours = Math.round(item.amount / 75);
    return (
      <>
        {t.services.startingAt} ${formatted}
        <span className={styles.estimatedHours}> (est &gt; {estimatedHours}hrs)</span>
      </>
    );
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
          <span className={styles.preamble}>{t.services.preamble}</span>
          <h2 className={styles.title}>{t.services.title}</h2>
          <span className={styles.baseRate}>{t.services.baseRate}</span>
        </div>

        <div
          className={`${styles.list} ${servicesVisible ? styles.visible : ''}`}
          style={{ opacity: servicesVisible ? 1 : 0 }}
        >
          {serviceGroups.map((group, index) => (
            <div
              key={group.key}
              className={`${styles.service} ${servicesVisible ? styles.visible : ''}`}
              style={{
                transitionDelay: `${index * 0.2}s`,
                opacity: servicesVisible ? 1 : 0,
              }}
            >
              <span className={styles.name}>{t.services.groups[group.key]}</span>
              {group.items.map((item) => {
                const itemName = t.services.items[item.key];
                return (
                  <span
                    key={item.key}
                    className={styles.example}
                    onClick={handleExampleClick(itemName)}
                  >
                    <div className={styles.serviceName}>{itemName}</div>
                    <div className={styles.price}>{formatPrice(item)}</div>
                  </span>
                );
              })}
            </div>
          ))}
        </div>

        <div
          className={`section ${styles.comparison} ${servicesVisible ? styles.visible : ''}`}
          id="comparison">
          <div
            className={`${styles.heading} ${servicesVisible ? styles.visible : ''}`}
            style={{ opacity: servicesVisible ? 1 : 0 }}>
            <span className={styles.preamble}>{t.services.whyChooseUs}</span>
            <h2 className={styles.title}>{t.services.ourAdvantages}</h2>
          </div>

          <div
            className={`${styles.advantages} ${servicesVisible ? styles.visible : ''}`}
            style={{ opacity: servicesVisible ? 1 : 0 }}>
            {t.services.advantages.map((advantage, index) => (
              <div
                key={index}
                className={`${styles.advantage} ${servicesVisible ? styles.visible : ''}`}
                style={{
                  transitionDelay: `${0.4 + index * 0.1}s`,
                  opacity: servicesVisible ? 1 : 0,
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
          style={{ opacity: providersVisible ? 1 : 0 }}>
          <div
            className={`${styles.providersHeading} ${providersVisible ? styles.visible : ''}`}
            style={{ opacity: providersVisible ? 1 : 0 }}>
            {t.services.technologiesTitle}
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
                  opacity: providersVisible ? 1 : 0,
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
          style={{ opacity: servicesVisible ? 1 : 0 }}>
          <p className={`${styles.additional} ${styles.additionalText}`}>
            {t.services.additionalLine1}<br />
            {t.services.additionalLine2}<br />
            <button className={styles.additionallink} onClick={() => openContact()}>{t.services.contactUs}</button> {t.services.additionalLine3}
          </p>
        </div>
      </div>
    </>
  );
}
