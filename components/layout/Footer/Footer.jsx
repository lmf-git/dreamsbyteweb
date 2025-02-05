'use client';

import { useEffect, useRef, useState } from 'react';
import useIntersectionObserver from '../../../hooks/useIntersectionObserver';

import Logo from '../../icons/branding/Logo';

// import ContactNowFab from "../ContactNowFab/ContactNowFab";
import Scroll from "../../icons/controls/Scroll";

import EmailMethod from '../../icons/social/EmailMethod';
import Whatsapp from '../../icons/social/Whatsapp';
import EmailSend from '../../icons/EmailSend';
// import X from '../../icons/social/X';
import Youtube from '../../icons/social/Youtube';
import Github from '../../icons/social/Github';

import styles from './footer.module.scss';


export default function Footer({ message, setMessage }) {
  const footerRef = useRef();
  const isVisible = useIntersectionObserver(footerRef, 0.25);
  const [messageVisible, setMessageVisible] = useState(true);
  const [formStatus, setFormStatus] = useState(null);

  const onSubmit = async ev => {
    ev.preventDefault();

    const endpoint = 'https://formcarry.com/s/OgJvVlDk0Mq';
    const data = new FormData(ev.target);
    const body = JSON.stringify({ email: data.get('email'), message: data.get('message') });
    const headers = { "Accept": "application/json", "Content-Type": "application/json" };
    const response = await fetch(endpoint, { headers, method: 'POST', body });
    const result = await response.json();
    setFormStatus(result.status);

    return false;
  };

  useEffect(() => {
    if (message) {
      setMessageVisible(true);
    }
  }, [message]);

  return <>
    {/* { !footerVisible && <ContactNowFab /> } */}

    <div 
      className={`${styles.footer} ${isVisible ? styles.visible : ''}`} 
      ref={footerRef} 
      id="contact"
    >
      { formStatus !== 'success' ?
        <form 
          className={`${styles.contact} ${isVisible ? styles.visible : ''}`} 
          onSubmit={onSubmit}
          style={{ transitionDelay: '0.2s' }}
        >
          <label className={styles.label} htmlFor="contactform">
            Contact form
          </label>
          <p className={styles.instructions}>
            To start realising your digital dreams, email us today.
          </p>

          <input type="email" name="email" className={styles.input} placeholder="name@domain.tld" required />

          { messageVisible && 
            <textarea 
              name="message" 
              className={styles.textarea} 
              placeholder="Your message here"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          }

          <div className={styles.actions}>
            { !messageVisible && 
              <button type="button" 
                className={`${styles.action} ${styles.add}`} 
                onClick={() => setMessageVisible(true)}>
                Add message
              </button>
            }
            <button type="submit" className={`${styles.action} ${styles.submit}`}>
              Submit
              <EmailSend className={styles['submit-icon']} />
            </button>
            {/* Remove the standalone EmailSend component */}
          </div>
        </form>
        :
        <div 
          className={`${styles.contact} ${styles.success} ${isVisible ? styles.visible : ''}`}
          style={{ transitionDelay: '0.2s' }}
        >
          <label className={styles.label}>
            Thank you!
          </label>
          <p className={styles.instructions}>
            Message received! We'll be in touch very soon.<br/>
            Check out our social links below to connect with us directly.
          </p>
        </div>
      }
      
      <div 
        className={`${styles.shill} ${isVisible ? styles.visible : ''}`}
        style={{ transitionDelay: '0.4s' }}
      >
        <div className={styles.socials}>
          <a href="mailto:contact@dreamsbyte.com" className={styles.social} rel="noopener noreferrer" target="_blank" aria-label="Send us an email">
            <EmailMethod className={styles.socialicon} />
          </a>
          <a href="https://api.whatsapp.com/send?phone=447389805421" className={styles.social} rel="noopener noreferrer" target="_blank" aria-label="Contact us on WhatsApp">
            <Whatsapp className={styles.socialicon} />
          </a>
          <a href="https://x.com/dreamsbytex" className={styles.social} rel="noopener noreferrer" target="_blank">
            <X className={styles.socialicon} />
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
  </>;
};
