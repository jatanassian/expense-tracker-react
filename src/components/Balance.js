import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

export const Balance = () => {
  const { transactions } = useContext(GlobalContext);

  return (
    // The empty tag works as a Fragment
    <> 
      <h4>Your Balance</h4>
      <h1>$0.00</h1>
    </>
  )
}
