
import Down from './Down';
import styles from '../styles/Hero.module.scss';

export default function Hero({ extraClass = '' }) {
    return <div className={[styles.hero, extraClass].join(' ')}>
        <p className={styles.blurb}>
            We deliver the best software in the world to the <b>delight</b> of our elite clients and their customers.
        </p>
        <Down extraClass={styles.arrow} />
        <button className={styles.cta}>Start Project</button>
    </div>;
}
