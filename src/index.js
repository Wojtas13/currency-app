import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

import App from './App';
import currencyReducer from './store/reducers/currency';
import transactionReducer from './store/reducers/transactions';

import './index.scss';

const composeEnhancers =
  process.env.NODE_ENV === 'development'
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : null || compose;

const rootReducer = combineReducers({
  currency: currencyReducer,
  transactions: transactionReducer
});

const store = createStore(rootReducer, composeEnhancers(applyMiddleware()));

const app = (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(app, document.getElementById('root'));
