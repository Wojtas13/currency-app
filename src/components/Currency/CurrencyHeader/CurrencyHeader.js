import React from 'react';

import './CurrencyHeader.scss';

const CurrencyHeader = props => {
  return (
    <div className="currency">
      <h1 className="currency__title">Currency exchange App</h1>
      <div className="currency__amount">
        <label className="currency__label" htmlFor="currency">
          1 EUR -
        </label>
        <input
          type="text"
          className="currency__input"
          placeholder="4.29"
          value={props.currencyRate}
          onChange={event => props.getCurrency(event.target.value)}
        />
        <label className="currency__label" htmlFor="currency">
          PLN
        </label>
      </div>
    </div>
  );
};

export default CurrencyHeader;
