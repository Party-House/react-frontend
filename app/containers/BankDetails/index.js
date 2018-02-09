/**
 *
 * BankDetails
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectReducer from 'utils/injectReducer';
import makeSelectBankDetails from './selectors';
import reducer from './reducer';
import messages from './messages';
import { getBankDetails } from './actions';
import AppNavBar from '../AppNavBar';
import CardsList from '../../components/CardsList';
import GenericCard from '../../components/GenericCard';


export class BankDetails extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  componentDidMount() {
    return this.props.dispatch(getBankDetails());
  }
  render() {
    let itens = []
    this.props.bankdetails.accounts.map((bank) => {
      itens.push({
        title: bank.user_name,
        subtitle: <FormattedMessage
          {...messages.account_header}
          values={{bank: <b>{bank.bank_name}</b>}} />,
        details: [
          <div><b><FormattedMessage {...messages.account} /></b> {bank.account}</div>,
          <div><b><FormattedMessage {...messages.agency} /></b> {bank.agency}</div>,
          <div><b><FormattedMessage {...messages.cpf} /></b> {bank.cpf}</div>
        ]
      })
    })
    return (
      <div>
        <AppNavBar history={this.props.history}/>
        <GenericCard>
          <CardsList infoList={itens}/>
        </GenericCard>
      </div>
    );
  }
}

BankDetails.propTypes = {
  dispatch: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
  bankdetails: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  bankdetails: makeSelectBankDetails(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'bankDetails', reducer });

export default compose(
  withReducer,
  withConnect,
)(BankDetails);
