import Screen from '../../components/specific/landing/Screen/Screen';
import styles from '../../components/specific/landing/HeroSimple/herosimple.module.scss';

export default function Test() {
    return <main>
        <h1>TEST</h1>
        <div className={styles.projectpreview}>
            <Screen 
                extraClass={styles.screen}
                iframeClassName={styles.screeniframe}
                src="https://trd.vercel.app" 
            />
        </div>
    </main>;
};
