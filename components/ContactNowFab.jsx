import ContactNowIcon from './icons/ContactNowIcon';
import ContactNowTextIcon from './icons/ContactNowTextIcon';
import styles from '../styles/_contactfab.module.scss';

export default function ContactNowFab() {
    return <div className={styles.fab}>
        <ContactNowTextIcon className={styles.fabtext} />
        <ContactNowIcon className={styles.fabicon} />
    </div>
}
