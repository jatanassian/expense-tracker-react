import React, { useContext, useEffect } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { Transaction } from './Transaction';

export const TransactionList = () => {
  const { transactions, getTransactions } = useContext(GlobalContext);

  useEffect(() => {
    getTransactions();
    // The empty array below prevents the infinite loop. This will fire off a warning in the console, if we want to quiet it down we can use eslint-disable-next-line react-hooks/exhaustive-deps which is in the useEffect documentation
  }, []);

  return (
    <>
      <h3>History</h3>
      <ul className="list">
        {transactions.map(t => (<Transaction key={t.id} transaction={t} />))}
      </ul>
    </>
  )
}
