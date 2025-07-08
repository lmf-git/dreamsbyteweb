'use client';

import { createContext, useContext, useState } from 'react';

const ContactContext = createContext();

export function ContactProvider({ children }) {
    const [contactOpen, setContactOpen] = useState(false);
    const [message, setMessage] = useState('');

    const openContact = (initialMessage = '') => {
        setMessage(initialMessage);
        setContactOpen(true);
    };

    const closeContact = () => {
        setContactOpen(false);
        setMessage('');
    };

    return (
        <ContactContext.Provider value={{
            contactOpen,
            message,
            openContact,
            closeContact,
            setMessage
        }}>
            {children}
        </ContactContext.Provider>
    );
}

export function useContact() {
    const context = useContext(ContactContext);
    if (!context) {
        throw new Error('useContact must be used within a ContactProvider');
    }
    return context;
}