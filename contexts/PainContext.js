import React, { createContext, useState } from 'react';

// Create the context
export const PainContext = createContext();

// Create the provider component
export const PainProvider = ({ children }) => {
  const [painLogs, setPainLogs] = useState([]); // Dummy state for now

  return (
    <PainContext.Provider value={{ painLogs, setPainLogs }}>
      {children}
    </PainContext.Provider>
  );
};