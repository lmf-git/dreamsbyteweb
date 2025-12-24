'use client';

import { useContact } from '../../../contexts/ContactContext';
import styles from './calltoaction.module.scss';

export default function CallToAction() {
    const { openContact } = useContact();

    return <section className={styles.cta}>
        <div className={styles.container}>
            <div className={styles.content}>
                <h2 className={styles.title}>Ready to Bring Your Ideas to Life?</h2>
                <p className={styles.description}>
                    Let's turn your vision into a powerful digital solution. Whether you're starting from scratch or need to enhance an existing platform, we're here to make it happen.
                </p>
                <button
                    onClick={() => openContact('I\'d like to discuss a project')}
                    className={styles.button}
                >
                    Start Your Project
                </button>
            </div>
        </div>
    </section>;
};
