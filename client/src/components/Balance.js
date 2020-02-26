import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

export const Balance = () => {
  const { transactions } = useContext(GlobalContext);

  const amounts = transactions.map(t => t.amount); // Map through the context to create an array of all the amounts
  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2); // Add all the amounts together

  return (
    // The empty tag works as a Fragment
    <> 
      <h4>Your Balance</h4>
      <h1>${total}</h1>
    </>
  )
}
