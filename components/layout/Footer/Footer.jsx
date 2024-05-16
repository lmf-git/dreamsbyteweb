import Contact from './Contact/Contact';
import Socials from './Socials/Socials';

import Logo from '../../icons/branding/Logo';

import styles from './footer.module.scss';

export default function Footer() {
  return <div className={styles.footer}>
    <Contact />
    <Socials />
    <Logo className={styles.footerlogo} />
  </div>;
};
