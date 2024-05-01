import styles from './intro.module.scss';

export default function Intro() {
    return <div className={styles.intro}>
        <h1 className={styles.introtitle}>
            We make the best software in the world.
        </h1>
        <p className={styles.introblurb}>
            See the results we&apos;ve delivered, and let&apos;s start doing the same for your business.
        </p>
    </div>;
};