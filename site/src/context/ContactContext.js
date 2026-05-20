"use client";
import React, { createContext, useContext, useState } from 'react';

const ContactContext = createContext();

export function ContactProvider({ children }) {
  const [isContactOpen, setIsContactOpen] = useState(false);

  const openContact = () => setIsContactOpen(true);
  const closeContact = () => setIsContactOpen(false);
  const toggleContact = () => setIsContactOpen(prev => !prev);

  return (
    <ContactContext.Provider value={{ isContactOpen, openContact, closeContact, toggleContact }}>
      {children}
    </ContactContext.Provider>
  );
}

export function useContact() {
  const context = useContext(ContactContext);
  if (context === undefined) {
    throw new Error('useContact must be used within a ContactProvider');
  }
  return context;
}
