import React from 'react';

import './CurrencyForm.scss';

const CurrencyForm = props => {
  return (
    <form className="form">
      <div className="input-wrapper">
        <label className="label" htmlFor="eur">
          EUR
        </label>
        <input
          className="input"
          onChange={event => props.convertToPLN(event.target.value)}
          type="number"
          id="eur"
          step="0.01"
          placeholder="1 EUR"
          value={props.eurAmount}
        />
        <label className="label" htmlFor="pln">
          PLN
        </label>
        <input
          className="input"
          onChange={event => props.convertToEUR(event.target.value)}
          id="pln"
          type="number"
          step="0.01"
          placeholder="1 PLN"
          value={props.plnAmount}
        />
      </div>
    </form>
  );
};

export default CurrencyForm;
