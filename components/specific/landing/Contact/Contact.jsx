import styles from '../styles/landing/contact.module.scss';
import Socials from '../Socials/Socials';
import EmailSend from '../../../icons/EmailSend';

export default function Contact() {
  return <div className={styles.contact}>
    <form className={styles.form}>
      <label className={styles.label} htmlFor="contactform">
        We'll contact you.
      </label>
      <p className={styles.instructions}>
        To start realizing your digital dreams, email us today.
      </p>
      <div className={styles.emailInputGroup}>
        <input
          type="email"
          id="contactform"
          className={styles.emailInput}
          placeholder="name@domain.tld"
        />
      </div>
      <button type="button" className={styles.addMessageButton}>
        Add message
      </button>
      <button type="submit" className={styles.submitButton}>
        <EmailSend className={styles.sendicon} />
        Submit
      </button>
    </form>
  </div>;
};

