import Screen from '../../components/specific/landing/Screen/Screen';
import styles from '../../components/specific/landing/Hero/hero.module.scss';

export default function Test() {
    return <main>
        <h1>TEST</h1>
        <div className={styles.projectpreview}>
            <Screen 
                extraClass={styles.screen}
                src="/projects/trk/trk-desktop.png" 
            />
        </div>
    </main>;
};
