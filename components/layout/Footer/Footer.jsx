'use client';

import { useEffect, useRef, useState } from 'react';

import Logo from '../../icons/branding/Logo';

import Contact from './Contact/Contact';
import Socials from './Socials/Socials';
import ContactNowFab from "../ContactNowFab/ContactNowFab";
import Scroll from "../../icons/controls/Scroll";

import styles from './footer.module.scss';

export default function Footer() {
  const footerRef = useRef();
  const [footerVisible, setFooterVisible] = useState(false);

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
      <h1>TESTING</h1>
      <Contact />
      <Socials />
      <Logo className={styles.footerlogo} />
    </div>
  </>;
};
