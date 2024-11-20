import { useRouter } from 'next/navigation';
import ContactNowIcon from './ContactNowIcon';
import ContactNowTextIcon from './ContactNowTextIcon';
import styles from './contactnowfab.module.scss';

export default function ContactNowFab() {
    const router = useRouter();
    
    return <button className={styles.fab} onClick={() => router.push('/#contact')}>
        <ContactNowTextIcon className={styles.fabtext} />
        <ContactNowIcon className={styles.fabicon} />
    </button>;
};
