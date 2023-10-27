import Contact from './Contact';
import Socials from './Socials';
import Logo from './icons/branding/Logo';
import styles from '../styles/landing/footer.module.scss';
import { forwardRef } from 'react';



const Footer = forwardRef((props, ref) => {
  console.log(props, ref);

  return (
    <div className={styles.footer} ref={ref}>
      <Contact />
      <Socials />
      <Logo className={styles.footerlogo} />
    </div>
  );
});
export default Footer;