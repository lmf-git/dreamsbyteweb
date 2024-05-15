import Header from '../components/Header';
import Hero from '../components/Hero';
import styles from '../styles/Home.module.scss';

export default function Index() {
  return <div className={styles.page}>
    <Header />

    <Hero extraClass={styles.section} />
    <Hero extraClass={styles.section} />
    <Hero extraClass={styles.section} />
  </div>;
}
