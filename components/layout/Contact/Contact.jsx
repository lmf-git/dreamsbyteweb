'use client';

import { useState, useEffect } from 'react';
import EmailSend from '../../icons/EmailSend';
import styles from './contact.module.scss';

export default function Contact({ isOpen, onClose, initialMessage = '' }) {
  const [message, setMessage] = useState(initialMessage);
  const [messageVisible, setMessageVisible] = useState(true);
  const [formStatus, setFormStatus] = useState(null);

  useEffect(() => {
    if (isOpen) {
      setMessage(initialMessage);
      setMessageVisible(!!initialMessage);
      setFormStatus(null);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, initialMessage]);

  const onSubmit = async ev => {
    ev.preventDefault();

    const endpoint = 'https://formcarry.com/s/OgJvVlDk0Mq';
    const data = new FormData(ev.target);
    const body = JSON.stringify({ email: data.get('email'), message: data.get('message') });
    const headers = { "Accept": "application/json", "Content-Type": "application/json" };
    const response = await fetch(endpoint, { headers, method: 'POST', body });
    const result = await response.json();
    setFormStatus(result.status);

    return false;
  };

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className={styles.backdrop} onClick={handleBackdropClick}>
      <div className={styles.modal}>
        <button className={styles.closeButton} onClick={onClose} aria-label="Close modal">
          ×
        </button>
        
        {formStatus !== 'success' ? (
          <form className={styles.contact} onSubmit={onSubmit}>
            <label className={styles.label} htmlFor="contactform">
              {messageVisible ? 'Contact us' : 'We will contact you'}
            </label>
            <p className={styles.instructions}>
              {messageVisible ? 'To start realising your digital dreams, email us today.' : 'Leave your email and we\'ll contact you.'}
            </p>

            <input 
              type="email" 
              name="email" 
              className={styles.input} 
              placeholder="name@domain.tld" 
              required 
            />

            {messageVisible && (
              <textarea 
                name="message" 
                className={styles.textarea} 
                placeholder="Your message here"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            )}

            <div className={styles.actions}>
              {!messageVisible && (
                <button 
                  type="button" 
                  className={`${styles.action} ${styles.add}`} 
                  onClick={() => setMessageVisible(true)}
                >
                  Add message
                </button>
              )}
              <button type="submit" className={`${styles.action} ${styles.submit}`}>
                Submit
                <EmailSend className={styles['submit-icon']} />
              </button>
            </div>
          </form>
        ) : (
          <div className={`${styles.contact} ${styles.success}`}>
            <label className={styles.label}>
              Thank you!
            </label>
            <p className={styles.instructions}>
              Message received! We'll be in touch very soon.
            </p>
            <button 
              className={`${styles.action} ${styles.submit}`}
              onClick={onClose}
            >
              Close
            </button>
          </div>
        )}
      </div>
    </div>
  );
}