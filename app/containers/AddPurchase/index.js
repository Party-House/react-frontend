/**
 *
 * AddPurchase
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import makeSelectAddPurchase from './selectors';
import reducer from './reducer';
import messages from './messages';
import PurchaseForm from '../../components/PurchaseForm';

export class AddPurchase extends React.PureComponent {
  render() {
    return (
      <div>
        <PurchaseForm />
      </div>
    );
  }
}

AddPurchase.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  addpurchase: makeSelectAddPurchase(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(
  withConnect,
)(AddPurchase);
