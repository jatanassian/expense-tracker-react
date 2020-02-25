import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

export const TransactionList = () => {
  const { transactions } = useContext(GlobalContext);

  return (
    <>
      <h3>History</h3>
      <ul className="list">
        {transactions.map(t => (
          <li className="minus">
          {t.text} <span>{t.amount}</span><button className="delete-btn">x</button>
        </li>
        ))}
      </ul>
    </>
  )
}
