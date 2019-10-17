import * as actionTypes from './actionTypes';

export const convertToEUR = currencyValue => {
  return {
    type: actionTypes.CONVERT_TO_EUR,
    currencyValue
  };
};

export const convertToPLN = currencyValue => {
  return {
    type: actionTypes.CONVERT_TO_PLN,
    currencyValue
  };
};

export const getCurrency = currencyValue => {
  return {
    type: actionTypes.GET_CURRENCY,
    currencyValue
  };
};
