import React, { createContext, useContext, useState, ReactNode } from 'react';

// Define the shape of the context
interface CountContextType {
  count: number;
  increment: () => void;
  decrement: () => void;
}

// Create the context with default undefined
const CountContext = createContext<CountContextType | undefined>(undefined);

// Provider component
export const CountProvider = ({ children }: { children: ReactNode }) => {
  const [count, setCount] = useState(0);

  const increment = () => setCount(c => c + 1);
  const decrement = () => setCount(c => c - 1);

  return (
    <CountContext.Provider value={{ count, increment, decrement }}>
      {children}
    </CountContext.Provider>
  );
};

// Custom hook for consuming the context
export const useCount = () => {
  const context = useContext(CountContext);
  if (!context) {
    throw new Error('useCount must be used within a CountProvider');
  }
  return context;
};
