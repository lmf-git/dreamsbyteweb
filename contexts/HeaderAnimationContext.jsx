'use client';

import { createContext, useContext, useState } from 'react';

const HeaderAnimationContext = createContext();

export function HeaderAnimationProvider({ children }) {
    const [headerAnimationComplete, setHeaderAnimationComplete] = useState(false);

    return (
        <HeaderAnimationContext.Provider value={{
            headerAnimationComplete,
            setHeaderAnimationComplete
        }}>
            {children}
        </HeaderAnimationContext.Provider>
    );
}

export function useHeaderAnimation() {
    const context = useContext(HeaderAnimationContext);
    if (!context) {
        throw new Error('useHeaderAnimation must be used within a HeaderAnimationProvider');
    }
    return context;
}