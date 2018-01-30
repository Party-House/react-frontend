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
import { setBuyer } from './actions';
import PurchaseForm from '../../components/PurchaseForm';
import GenericCard from '../../components/GenericCard';

export class AddPurchase extends React.PureComponent {
  render() {
    return (
      <div>
        <GenericCard>
          <PurchaseForm
            users={this.props.addpurchase.userList}
            buyer={this.props.addpurchase.buyer}
            changeBuyer={(value)=>this.props.dispatch(setBuyer(value))} />
        </GenericCard>
      </div>
    );
  }
}

AddPurchase.propTypes = {
  dispatch: PropTypes.func.isRequired,
  addpurchase: PropTypes.object
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
