import React from 'react';

import './TransactionsSummary.scss';

const TransactionsSummary = props => (
  <span className="summary">Transactions Summary: {props.summary} EUR</span>
);

export default TransactionsSummary;
