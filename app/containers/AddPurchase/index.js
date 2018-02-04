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
import {
  getUsers, setBuyer, setTitle,
  setDescription, setValue, sendPurchase
} from './actions';
import PurchaseForm from '../../components/PurchaseForm';
import GenericCard from '../../components/GenericCard';

export class AddPurchase extends React.PureComponent {
  componentDidMount() {
    return this.props.dispatch(getUsers());
  }
  render() {
    return (
      <div>
        <GenericCard>
          <PurchaseForm
            users={this.props.addpurchase.userList}
            buyer={this.props.addpurchase.buyer}
            changeBuyer={(value)=>this.props.dispatch(setBuyer(value))}
            changeTitle={(value)=>this.props.dispatch(setTitle(value))}
            changeDescription={(value)=>this.props.dispatch(setDescription(value))}
            changeValue={(value)=>this.props.dispatch(setValue(value))}
            submit={()=>this.props.dispatch(sendPurchase({
              reason: this.props.addpurchase.title,
              comments: this.props.addpurchase.description,
              value: this.props.addpurchase.value,
              user_id: this.props.addpurchase.buyer,
              is_durable: false
              },[], (() => this.props.history.push('/finance'))
            ))}
          />
        </GenericCard>
      </div>
    );
  }
}

AddPurchase.propTypes = {
  dispatch: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
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
