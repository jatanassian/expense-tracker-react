import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';
import axios from 'axios';

// Initial state
const initialState = {
  // We only need the transactions. As long as we have the transactions data, we can pass them down to the components which then perform the calculations for the balance, etc.
  transactions: [],
  error: null,
  loading: true
};

// Create context
export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Actions that are gonna make calls to our reducer
  const deleteTransaction = (id) => {
    dispatch({
      type:'DELETE_TRANSACTION',
      payload: id
    });
  };

  const addTransaction = (transaction) => {
    dispatch({
      type:'ADD_TRANSACTION',
      payload: transaction
    });
  };

  return (<GlobalContext.Provider value={{
    transactions: state.transactions,
    deleteTransaction,
    addTransaction
  }}>
    {children}
  </GlobalContext.Provider>)
}