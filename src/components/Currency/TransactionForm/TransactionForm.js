import React from 'react';

import Button from '../../UI/Button/Button';

import './TransactionForm.scss';

const TransactionForm = props => {
  let { name, amount } = '';
  const handleNameInput = event => {
    name = event.target.value;
  };
  const handleAmountInput = event => {
    amount = event.target.value;
  };

  const transactionHandler = event => {
    event.preventDefault();

    const transaction = {
      id: Math.random() + 1,
      name: name,
      amount: amount,
      convertedAmount: (amount * props.currencyRate).toFixed(2)
    };
    props.addTransaction(transaction);
    props.sortTransactions();
  };

  return (
    <form className="form">
      <div className="input-wrapper">
        <label className="label" htmlFor="name">
          title
        </label>
        <input
          className="input"
          id="name"
          placeholder="apples..."
          type="text"
          required
          onChange={handleNameInput}
          value={name}
        />

        <label className="label" htmlFor="amount">
          amount
        </label>
        <input
          className="input"
          id="amount"
          onChange={handleAmountInput}
          placeholder="1 EUR"
          type="number"
          required
          step="0.01"
          value={amount}
        />
        <Button title={props.btnTitle} clicked={transactionHandler} />
      </div>
    </form>
  );
};

export default TransactionForm;
