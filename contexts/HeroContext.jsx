'use client';

import { createContext, useContext, useState } from 'react';

const HeroContext = createContext();

export function HeroProvider({ children }) {
  const [heroComplete, setHeroComplete] = useState(false);

  return (
    <HeroContext.Provider value={{ heroComplete, setHeroComplete }}>
      {children}
    </HeroContext.Provider>
  );
}

export function useHero() {
  const context = useContext(HeroContext);
  if (!context) {
    throw new Error('useHero must be used within a HeroProvider');
  }
  return context;
}