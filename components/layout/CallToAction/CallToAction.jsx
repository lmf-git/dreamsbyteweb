'use client';

import { useContact } from '../../../contexts/ContactContext';
import { useLanguage } from '../../../contexts/LanguageContext';
import styles from './calltoaction.module.scss';

export default function CallToAction() {
    const { openContact } = useContact();
    const { t } = useLanguage();

    return <section className={styles.cta}>
        <div className={styles.container}>
            <div className={styles.content}>
                <h2 className={styles.title}>{t.cta.title}</h2>
                <p className={styles.description}>{t.cta.description}</p>
                <button
                    onClick={() => openContact(t.cta.contactMessage)}
                    className={styles.button}
                >
                    {t.cta.button}
                </button>
            </div>
        </div>
    </section>;
};
