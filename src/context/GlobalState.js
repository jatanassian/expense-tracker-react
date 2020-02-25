import React, { createContext, useReducer } from 'react';

// Initial state
const initialState = {
  // We only need the transactions. As long as we have the transactions data, we can pass them down to the components which then perform the calculations for the balance, etc.
  transactions: [
    { id: 1, text: 'Flower', amount: -20 },
    { id: 2, text: 'Salary', amount: 300 },
    { id: 3, text: 'Book', amount: -10 },
    { id: 4, text: 'Camera', amount: 150 }
  ]
};

// Create context
export const GlobalContext = createContext(initialState);