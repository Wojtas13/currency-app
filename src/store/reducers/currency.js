import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';

const initState = {
  currency: 4.29,
  eurAmount: '',
  plnAmount: ''
};

const convertToEUR = (state, action) => {
  return updateObject(state, {
    eurAmount: (action.currencyValue / state.currency).toFixed(2),
    plnAmount: action.currencyValue
  });
};

const convertToPLN = (state, action) => {
  return updateObject(state, {
    eurAmount: action.currencyValue,
    plnAmount: (action.currencyValue * state.currency).toFixed(2)
  });
};

const getCurrency = (state, action) => {
  return updateObject(state, {
    currency: action.currencyValue
  });
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.CONVERT_TO_EUR:
      return convertToEUR(state, action);
    case actionTypes.CONVERT_TO_PLN:
      return convertToPLN(state, action);
    case actionTypes.GET_CURRENCY:
      return getCurrency(state, action);
    default:
      return state;
  }
};

export default reducer;
