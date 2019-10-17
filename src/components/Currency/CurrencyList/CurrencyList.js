import React from 'react';

import './CurrencyList.scss';

const CurrencyList = props => {
  return (
    <div className="currency-list">
      <h2 className="currency-list__title">{props.title}</h2>
      {props.transactions.length !== 0 ? (
        <ul>
          {props.transactions.map(trans => (
            <li
              key={trans.id}
              onClick={() => props.removeTransaction(trans.id)}
            >
              <span>
                {trans.name} - {trans.amount} EUR
              </span>
              <span>{trans.convertedAmount} PLN</span>
            </li>
          ))}
        </ul>
      ) : (
        <span>You do not have any transactions</span>
      )}
    </div>
  );
};

export default CurrencyList;
