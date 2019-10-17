import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';

const initState = {
  transactions: [],
  topTransactions: [],
  transactionsSummary: 0
};

const addTransaction = (state, action) => {
  const newTransaction = updateObject(action.transactionData);

  const summary = (
    parseFloat(state.transactionsSummary) +
    parseFloat(action.transactionData.amount)
  ).toFixed(2);

  return updateObject(state, {
    transactions: state.transactions.concat(newTransaction),
    topTransactions: state.transactions.concat(newTransaction),
    transactionsSummary: summary
  });
};

const removeTransaction = (state, action) => {
  return updateObject(state, {
    transactions: state.transactions.filter(
      trans => trans.id !== action.transactionId
    ),
    topTransactions: state.topTransactions.filter(
      topTrans => topTrans.id !== action.transactionId
    )
  });
};

const sortTransactions = (state, action) => {
  const sortedTransactions = state.topTransactions.sort((a, b) => {
    return b.amount - a.amount;
  });

  return updateObject(state, {
    topTransactions: sortedTransactions
  });
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.ADD_TRANSACTION:
      return addTransaction(state, action);
    case actionTypes.REMOVE_TRANSACTION:
      return removeTransaction(state, action);
    case actionTypes.SORT_TRANSACTIONS:
      return sortTransactions(state, action);
    default:
      return state;
  }
};

export default reducer;
