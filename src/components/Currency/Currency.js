import React from 'react';
import { connect } from 'react-redux';

import CurrencyForm from './CurrencyForm/CurrencyForm';
import CurrencyHeader from './CurrencyHeader/CurrencyHeader';
import CurrencyList from './CurrencyList/CurrencyList';
import TransactionForm from './TransactionForm/TransactionForm';
import TransactionsSummary from './TransactionsSummary/TransactionsSummary';

import * as actions from '../../store/actions/index';

import './Currency.scss';

class Currency extends React.Component {
  render() {
    return (
      <section className="wrapper">
        <CurrencyHeader
          currencyRate={this.props.currencyRate}
          getCurrency={this.props.onGetCurrency}
        />

        <div className="currency-form-wrapper">
          <CurrencyForm
            btnTitle="&#8595;&#8593;"
            convertToEUR={this.props.onConvertToEUR}
            convertToPLN={this.props.onConvertToPLN}
            eurAmount={this.props.currencyEURAmount}
            plnAmount={this.props.currencyPLNAmount}
          />
          <TransactionForm
            btnTitle="Add"
            addTransaction={event => this.props.onAddTransaction(event)}
            convertToPLN={event => this.props.onConvertToPLN(event)}
            transactions={this.props.transactions}
            currencyRate={this.props.currencyRate}
            sortTransactions={this.props.onSortTransactions}
          />
        </div>

        <div className="currency-wrapper">
          <div className="currency-lists">
            <CurrencyList
              title="Your transactions"
              transactions={this.props.transactions}
              removeTransaction={this.props.onRemoveTransaction}
            />
            <CurrencyList
              title="Top transactions"
              transactions={this.props.topTransactions}
              removeTransaction={this.props.onRemoveTransaction}
            />
          </div>
          {this.props.transactions.length !== 0 ? (
            <TransactionsSummary summary={this.props.summary} />
          ) : null}
        </div>
      </section>
    );
  }
}

const mapStateToProps = state => {
  return {
    currencyRate: state.currency.currency,
    currencyEURAmount: state.currency.eurAmount,
    currencyPLNAmount: state.currency.plnAmount,
    summary: state.transactions.transactionsSummary,
    transactions: state.transactions.transactions,
    topTransactions: state.transactions.topTransactions
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onConvertToEUR: currValue => dispatch(actions.convertToEUR(currValue)),
    onConvertToPLN: currValue => dispatch(actions.convertToPLN(currValue)),
    onGetCurrency: currValue => dispatch(actions.getCurrency(currValue)),
    onAddTransaction: transactionData =>
      dispatch(actions.addTransaction(transactionData)),
    onRemoveTransaction: transactionId =>
      dispatch(actions.removeTransaction(transactionId)),
    onSortTransactions: transactionData =>
      dispatch(actions.sortTransactions(transactionData))
  };
};

const currency = connect(
  mapStateToProps,
  mapDispatchToProps
)(Currency);

export default currency;
