import EmailMethod from '../../../icons/social/EmailMethod';
import LinkedIn from '../../../icons/social/Linkedin';
import Whatsapp from '../../../icons/social/Whatsapp';
import styles from '../styles/landing/socials.module.scss';

export default function Socials() {
  return <div className={styles.socials}>
    <EmailMethod className={styles.icon} />
    <Whatsapp className={styles.icon} />
    {/* TODO: Add Instagram */}
  </div>;
}
