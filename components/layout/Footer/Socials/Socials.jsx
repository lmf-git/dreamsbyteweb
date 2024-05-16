import EmailMethod from '../../../icons/social/EmailMethod';
import Whatsapp from '../../../icons/social/Whatsapp';
import styles from './socials.module.scss';

export default function Socials() {
  return <div className={styles.socials}>
    <EmailMethod className={styles.icon} />
    <Whatsapp className={styles.icon} />

    {/* TODO: Add Instagram */}
    {/* TODO: Add Upwork */}
    {/* TODO: Add YouTube */}
    {/* TODO: Add Twitter */}
  </div>;
}
