import ContactNowIcon from './ContactNowIcon';
import ContactNowTextIcon from './ContactNowTextIcon';
import styles from './contactnowfab.module.scss';

export default function ContactNowFab() {
    return <div className={styles.fab}>
        <ContactNowTextIcon className={styles.fabtext} />
        <ContactNowIcon className={styles.fabicon} />
    </div>;
};
