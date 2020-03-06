import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';
import axios from 'axios';

// Initial state
const initialState = {
  // We only need the transactions. As long as we have the transactions data, we can pass them down to the components which then perform the calculations for the balance, etc.
  transactions: [],
  error: null, // Put the error message in our state in case we want to display an alert
  loading: true // To be able to use a spinner while it's loading
};

// Create context
export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Actions that are gonna make calls to our reducer
  async function getTransactions() {
    try {
      const res = await axios.get('/api/v1/transactions');

      dispatch({
        type: 'GET_TRANSACTIONS',
        payload: res.data.data
      });

    } catch (error) {
      dispatch({
        type: 'TRANSACTION_ERROR',
        payload: error.response.data.error
      });
    }
  }

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
    error: state.error,
    loading: state.loading,
    getTransactions,
    deleteTransaction,
    addTransaction
  }}>
    {children}
  </GlobalContext.Provider>)
}