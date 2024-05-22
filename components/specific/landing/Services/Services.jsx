import styles from './services.module.scss';

export default function Services() {
  return (
    <div className={`section ${styles.services}`}>
      <div className={styles.heading}>
        <span className={styles.preamble}>From Concept to Reality</span>
        <h2 className={styles.title}>Our Services</h2>
      </div>

    <div className={styles.list}>
        <div className={styles.service}>
          <span className={styles.name}>Development</span>
          
          <span className={styles.example}>Full Stack Development</span>
          <span className={styles.example}>Website / App / DB Maintenance</span>
          <span className={styles.example}>UI Development</span>
          <span className={styles.example}>WordPress / Ghost / CMS Development</span>
          <span className={styles.example}>API Integrations / Custom API Development</span>
        </div>

        <div className={styles.service}>
          <span className={styles.name}>E-commerce</span>
          
          <span className={styles.example}>Shopify / Magento / Woocommerce / Custom Store Creation</span>
          <span className={styles.example}>Multichannel / ERP and More Integrations</span>
        </div>

        <div className={styles.service}>
          <span className={styles.name}>Design</span>
          
          <span className={styles.example}>Captivating Logos</span>
          <span className={styles.example}>Landing Pages</span>
          <span className={styles.example}>Branding</span>
          <span className={styles.example}>Distinctive Typography</span>
          <span className={styles.example}>Compelling Colour Schemes</span>
        </div>

        <div className={styles.service}>
          <span className={styles.name}>Miscellaneous</span>
          
          <span className={styles.example}>Figma to Website Conversion</span>
          <span className={styles.example}>PSD to HTML Conversion</span>
          <span className={styles.example}>Translation Services</span>
          <span className={styles.example}>Troubleshooting and Error Fixing</span>
          <span className={styles.example}>Tutoring in Web Development</span>
          <span className={styles.example}>Stripe/Paypal/Square Payments Integration</span>
        </div>
      </div>

      <p className={styles.additional}>
        To start realising your digital dreams, email us today at&nbsp;
        <a className={styles.additionallink} href="mailto:contact@dreamsbyte.com">contact@dreamsbyte.com</a>
        &nbsp;
        or use <a className={styles.additionallink} href="#footer">this form</a>.
      </p>
    </div>
  );
}
