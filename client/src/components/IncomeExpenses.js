import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { numberWithCommas } from '../utils/format';

export const IncomeExpenses = () => {
  const { transactions } = useContext(GlobalContext);

  const amounts = transactions.map(t => t.amount);

  const income = amounts
    .filter(item => item > 0) // Filter the amounts array to get only the positive ones
    .reduce((acc, item) => (acc += item), 0) // Accumulate all those amounts
    .toFixed(2); // Two decimals

  const expense = (amounts.filter(i => i < 0).reduce((acc, i) => (acc += i), 0) * -1).toFixed(2) // Same as income but for negative amounts

  return (
    <div className="inc-exp-container">
      <div>
        <h4>Income</h4>
        <p className="money plus">${numberWithCommas(income)}</p>
      </div>
      <div>
        <h4>Expense</h4>
        <p className="money minus">${numberWithCommas(expense)}</p>
      </div>
    </div>
  )
}
