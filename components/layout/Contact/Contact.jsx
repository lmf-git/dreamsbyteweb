'use client';

import { useState, useEffect } from 'react';
import EmailSend from '../../icons/EmailSend';
import EmailMethod from '../../icons/social/EmailMethod';
import Whatsapp from '../../icons/social/Whatsapp';
import { useLanguage } from '../../../contexts/LanguageContext';
import styles from './contact.module.scss';

export default function Contact({ isOpen, onClose, initialMessage = '' }) {
  const [message, setMessage] = useState(initialMessage);
  const [messageVisible, setMessageVisible] = useState(true);
  const [formStatus, setFormStatus] = useState(null);
  const { t } = useLanguage();

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
              {messageVisible ? t.contact.heading : t.contact.headingCallback}
            </label>
            <p className={styles.instructions}>
              {messageVisible ? t.contact.instructionWithMessage : t.contact.instructionCallback}
            </p>

            <input
              type="email"
              name="email"
              className={styles.input}
              placeholder={t.contact.emailPlaceholder}
              required
            />

            {messageVisible && (
              <textarea
                name="message"
                className={styles.textarea}
                placeholder={t.contact.messagePlaceholder}
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
                  {t.contact.addMessage}
                </button>
              )}
              <button type="submit" className={`${styles.action} ${styles.submit}`}>
                {t.contact.submit}
                <EmailSend className={styles['submit-icon']} />
              </button>
            </div>

            <div className={styles.alternatives}>
              <p className={styles.alternativeText}>{t.contact.orDirectly}</p>
              <div className={styles.alternativeLinks}>
                <a
                  href="mailto:contact@dreamsbyte.com"
                  className={styles.alternativeLink}
                  rel="noopener noreferrer"
                  target="_blank"
                  aria-label={t.contact.emailAriaLabel}
                >
                  <EmailMethod className={styles.alternativeIcon} />
                  <span>{t.contact.email}</span>
                </a>
                <a
                  href="https://api.whatsapp.com/send?phone=447389805421"
                  className={styles.alternativeLink}
                  rel="noopener noreferrer"
                  target="_blank"
                  aria-label={t.contact.whatsappAriaLabel}
                >
                  <Whatsapp className={styles.alternativeIcon} />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          </form>
        ) : (
          <div className={`${styles.contact} ${styles.success}`}>
            <label className={styles.label}>
              {t.contact.thankYou}
            </label>
            <p className={styles.instructions}>
              {t.contact.messageReceived}
            </p>
            <button
              className={`${styles.action} ${styles.submit}`}
              onClick={onClose}
            >
              {t.contact.close}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
