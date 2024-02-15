// DateContext.js
import React, { createContext, useState } from 'react';

export const DateContext = createContext();

export const DateProvider = ({ children }) => {
  const [currentDate] = useState(new Date());

  return (
    <DateContext.Provider value={currentDate}>
      {children}
    </DateContext.Provider>
  );
};
