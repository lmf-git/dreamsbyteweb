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
          <h3>Development</h3>
          <ul>
            <li>Full Stack Development</li>
            <li>Website / App / DB Maintenance</li>
            <li>UI Development</li>
            <li>WordPress / Ghost / CMS Development</li>
            <li>API Integrations / Custom API Development</li>
          </ul>
        </div>

        <div className={styles.service}>
          <h3>Design</h3>
          <ul>
            <li>Captivating Logos</li>
            <li>Landing Pages</li>
            <li>Branding</li>
            <li>Distinctive Typography</li>
            <li>Compelling Colour Schemes</li>
          </ul>
        </div>

        <div className={styles.service}>
          <h3>E-commerce</h3>
          <ul>
            <li>Shopify / Magento / Woocommerce / Custom Store Creation</li>
            <li>Multichannel / ERP and More Integrations</li>
          </ul>
        </div>

        <div className={styles.service}>
          <h3>Miscellaneous</h3>
          <ul>
            <li>Figma to Website Conversion</li>
            <li>PSD to HTML Conversion</li>
            <li>Translation Services</li>
            <li>Troubleshooting and Error Fixing</li>
            <li>Tutoring in Web Development</li>
            <li>Stripe/Paypal/Square Payments Integration</li>
          </ul>
        </div>
      </div>

      <p>
        To start realizing your digital dreams, email us today at{' '}
        <a href="mailto:newclient@business.com">newclient@business.com</a>.
      </p>

      <p className={styles.copyright}>
        Copyright Information: &copy; 2023 Dreamsbyte. All rights reserved.{' '}
        <a href="/privacy-policy">Privacy Policy</a>
      </p>
    </div>
  );
}
