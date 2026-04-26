'use client';

import { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { en } from '../translations/en';
import { es } from '../translations/es';

const translations = { en, es };

const LanguageContext = createContext(null);

export function LanguageProvider({ children, initialLanguage = 'en' }) {
  const [language, setLanguageState] = useState(initialLanguage);

  useEffect(() => {
    document.documentElement.lang = language === 'es' ? 'es-AR' : 'en';
  }, [language]);

  const setLanguage = useCallback((lang) => {
    setLanguageState(lang);
    document.cookie = `language=${lang};path=/;max-age=${60 * 60 * 24 * 365};samesite=lax`;
  }, []);

  const t = translations[language] || translations.en;

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be used within LanguageProvider');
  return context;
}
