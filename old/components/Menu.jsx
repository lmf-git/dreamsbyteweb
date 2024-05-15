import styles from '../styles/Menu.module.scss';

export default function Menu() {
    return <div className={styles.menu}>
        <a className={[styles.item, styles['main-item']].join(' ')} href="#start">START PROJECT</a>
        <a className={styles.item} href="#services">SERVICES</a>
        <a className={styles.item} href="#our work">OUR WORK</a>
        <a className={styles.item} href="#contact">CONTACT</a>
    </div>;
}
