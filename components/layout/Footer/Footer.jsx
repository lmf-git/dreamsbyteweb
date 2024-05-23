'use client';

import { useEffect, useRef, useState } from 'react';

import Logo from '../../icons/branding/Logo';

import ContactNowFab from "../ContactNowFab/ContactNowFab";
import Scroll from "../../icons/controls/Scroll";

import EmailMethod from '../../icons/social/EmailMethod';
import Whatsapp from '../../icons/social/Whatsapp';
import EmailSend from '../../icons/EmailSend';

import styles from './footer.module.scss';
import X from '../../icons/social/X';
import Instagram from '../../icons/social/Instagram';
import Upwork from '../../icons/social/Upwork';
import Youtube from '../../icons/social/Youtube';
import Github from '../../icons/social/Github';

export default function Footer() {
  const footerRef = useRef();
  const [footerVisible, setFooterVisible] = useState(false);
  const [messageVisible, setMessageVisible] = useState(false);

  const onSubmit = ev => {
    ev.preventDefault();

    // alert('submit wip');
    return false;
  };

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => setFooterVisible(entry.intersectionRatio > 0.25), { threshold: 0.25 });
    if (footerRef.current)
      observer.observe(footerRef.current);

    return () => {
      if (footerRef.current)
        observer.unobserve(footerRef.current);
    };
  }, []);

  return <>
    { !footerVisible &&
      <>
        <Scroll />
        <ContactNowFab />
      </>
    }

    <div className={styles.footer} ref={footerRef}>

      <form className={styles.contact} onSubmit={onSubmit}>
        <label className={styles.label} htmlFor="contactform">
          We'll contact you.
        </label>
        <p className={styles.instructions}>
          To start realising your digital dreams, email us today.
        </p>

        <input type="email" name="email" className={styles.input} placeholder="name@domain.tld" />

        { messageVisible && 
          <textarea name="message" className={styles.textarea} placeholder="Your message here" />
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
            <EmailSend className={styles.sendicon} />
          </button>
        </div>
      </form>

      <div className={styles.shill}>
        <div className={styles.socials}>
          <a href="" className={styles.social} rel="noopener noreferrer" target="_blank">
            <EmailMethod className={styles.socialicon} />
          </a>
          <a href="" className={styles.social} rel="noopener noreferrer" target="_blank">
            <Whatsapp className={styles.socialicon} />
          </a>
          <a href="" className={styles.social} rel="noopener noreferrer" target="_blank">
            <Youtube className={styles.socialicon} />
          </a>
          <a href="" className={styles.social} rel="noopener noreferrer" target="_blank">
            <X className={styles.socialicon} />
          </a>
          {/* <Instagram className={styles.socialicon} /> */}
          {/* <Upwork className={styles.socialicon} /> */}
          <a href="" className={styles.social} rel="noopener noreferrer" target="_blank">
            <Github className={styles.socialicon} />
          </a>
        </div>;

        <Logo extraClass={styles.logo} />

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
