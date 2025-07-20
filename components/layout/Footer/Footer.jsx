'use client';

import { useRef } from 'react';
import { usePathname } from 'next/navigation';
import { useHero } from '../../../contexts/HeroContext';

import Logo from '../../icons/branding/Logo';

import EmailMethod from '../../icons/social/EmailMethod';
import Whatsapp from '../../icons/social/Whatsapp';
import Youtube from '../../icons/social/Youtube';
import Github from '../../icons/social/Github';

import styles from './footer.module.scss';


export default function Footer() {
  const footerRef = useRef();
  const pathname = usePathname();
  const { heroComplete } = useHero();
  const isLandingPage = pathname === '/';
  
  // Footer shows immediately - no intersection observer needed
  const isVisible = true;

  return (
    <div 
      className={`${styles.footer} ${(isLandingPage && heroComplete) || !isLandingPage ? styles.heroComplete : ''} ${isVisible ? styles.visible : ''}`} 
      ref={footerRef} 
      id="contact"
    >
      <div 
        className={`${styles.shill} ${isVisible ? styles.visible : ''}`}
      >
        <div className={styles.socials}>
          <a href="mailto:contact@dreamsbyte.com" className={styles.social} rel="noopener noreferrer" target="_blank" aria-label="Send us an email">
            <EmailMethod className={styles.socialicon} />
          </a>
          <a href="https://api.whatsapp.com/send?phone=447389805421" className={styles.social} rel="noopener noreferrer" target="_blank" aria-label="Contact us on WhatsApp">
            <Whatsapp className={styles.socialicon} />
          </a>

          {/* <Instagram className={styles.socialicon} /> */}
          {/* <Upwork className={styles.socialicon} /> */}
          <a href="https://github.com/lmf-git" className={styles.social} rel="noopener noreferrer" target="_blank" aria-label="Visit our GitHub profile">
            <Github className={styles.socialicon} />
          </a>
          <a href="https://www.youtube.com/@dreamsbyte" className={styles.social} rel="noopener noreferrer" target="_blank" aria-label="Subscribe to our YouTube channel">
            <Youtube className={styles.socialicon} />
          </a>
        </div>

        <Logo extraClass={`${styles.logo} ${isVisible ? styles.visible : ''}`} />
        
        <div className={styles.meta}>
          <p className={styles.metatext}>
            We ensure that all our clients have all assets and source code available to them and under their ownership.
          </p>

          <a className={styles.metalink} target="_blank" href="https://github.com/lmf-git/dreamsbyteweb" rel="noopener noreferrer" >
            Source code for this website
          </a>
        </div>
      </div>
    </div>
  );
};
