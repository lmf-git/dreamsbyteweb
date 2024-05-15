import Logo from "./Logo";
import Menu from "./Menu";
import styles from '../styles/Header.module.scss';

export default function Header() {
    return <div className={styles.header}>
        <Logo />
        <Menu />
    </div>;
}
