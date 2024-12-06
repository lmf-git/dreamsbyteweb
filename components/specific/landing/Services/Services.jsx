import styles from './services.module.scss';

export default function Services() {
  const handleExampleClick = (e) => {
    const dot = e.currentTarget.querySelector('::before');
    if (dot) {
      dot.style.animation = 'none';
      // Trigger reflow
      void dot.offsetWidth;
      dot.style.animation = `${styles.ripple} 0.6s ease-out`;
    }
  };

  return <div className={`section ${styles.services}`} id="services">
    <div className={styles.heading}>
      <span className={styles.preamble}>From Concept to Reality</span>
      <h2 className={styles.title}>Our Services</h2>
    </div>

    <div className={styles.list}>
      <div className={styles.service}>
        <span className={styles.name}>Development</span>
        
        <span className={styles.example} onClick={handleExampleClick}>Full Stack Development</span>
        <span className={styles.example} onClick={handleExampleClick}>Website / App / DB Maintenance</span>
        <span className={styles.example} onClick={handleExampleClick}>UI Development</span>
        <span className={styles.example} onClick={handleExampleClick}>WordPress / Ghost / CMS Development</span>
        <span className={styles.example} onClick={handleExampleClick}>API Integrations / Custom API Development</span>
      </div>

      <div className={styles.service}>
        <span className={styles.name}>E-commerce</span>
        
        <span className={styles.example} onClick={handleExampleClick}>Shopify / Magento / Woocommerce / Custom Store Creation</span>
        <span className={styles.example} onClick={handleExampleClick}>Multichannel / ERP and More Integrations</span>
      </div>

      <div className={styles.service}>
        <span className={styles.name}>Design</span>
        
        <span className={styles.example} onClick={handleExampleClick}>Captivating Logos</span>
        <span className={styles.example} onClick={handleExampleClick}>Landing Pages</span>
        <span className={styles.example} onClick={handleExampleClick}>Branding</span>
        <span className={styles.example} onClick={handleExampleClick}>Distinctive Typography</span>
        <span className={styles.example} onClick={handleExampleClick}>Compelling Colour Schemes</span>
      </div>

      <div className={styles.service}>
        <span className={styles.name}>Miscellaneous</span>
        
        <span className={styles.example} onClick={handleExampleClick}>Figma to Website Conversion</span>
        <span className={styles.example} onClick={handleExampleClick}>PSD to HTML Conversion</span>
        <span className={styles.example} onClick={handleExampleClick}>Translation Services</span>
        <span className={styles.example} onClick={handleExampleClick}>Troubleshooting and Error Fixing</span>
        <span className={styles.example} onClick={handleExampleClick}>Tutoring in Web Development</span>
      </div>
    </div>

    <div className={styles.providers}>
      <div className={styles.providersHeading}>Technologies We Use</div>
      <div className={styles.providersList}>
        <span className={styles.provider}>Node.js</span>
        <span className={styles.provider}>Heroku</span>
        <span className={styles.provider}>AWS</span>
        <span className={styles.provider}>Nuxt</span>
        <span className={styles.provider}>Svelte</span>
        <span className={styles.provider}>JavaScript</span>
        <span className={styles.provider}>HTML</span>
        <span className={styles.provider}>CSS</span>
        <span className={styles.provider}>PostgreSQL</span>
        <span className={styles.provider}>Nginx</span>
      </div>
    </div>

    <p className={styles.additional}>
      To start realising your digital dreams, email us today at&nbsp;
      <a className={styles.additionallink} href="mailto:contact@dreamsbyte.com">contact@dreamsbyte.com</a>
      &nbsp;
      or use <a className={styles.additionallink} href="#contact">the form below</a>.
    </p>
  </div>;
};
