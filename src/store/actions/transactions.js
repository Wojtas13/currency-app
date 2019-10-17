import * as actionTypes from './actionTypes';

export const addTransaction = transactionData => {
  return {
    type: actionTypes.ADD_TRANSACTION,
    transactionData
  };
};

export const removeTransaction = transactionId => {
  return {
    type: actionTypes.REMOVE_TRANSACTION,
    transactionId
  };
};

export const sortTransactions = () => {
  return {
    type: actionTypes.SORT_TRANSACTIONS
  };
};
