'use client';

import { createContext, useContext, useState } from 'react';

const StarsContext = createContext();

export function StarsProvider({ children }) {
    const [dangerMode, setDangerMode] = useState(false);

    return (
        <StarsContext.Provider value={{ dangerMode, setDangerMode }}>
            {children}
        </StarsContext.Provider>
    );
}

export function useStars() {
    const context = useContext(StarsContext);
    if (!context) {
        throw new Error('useStars must be used within a StarsProvider');
    }
    return context;
}