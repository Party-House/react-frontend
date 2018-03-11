/**
 *
 * RegisterTransfer
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectReducer from 'utils/injectReducer';
import makeSelectRegisterTransfer from './selectors';
import reducer from './reducer';
import messages from './messages';
import {
  getUsers, setValue,
  setReceiver, setPayer
} from './actions';
import GenericCard from '../../components/GenericCard';
import TransferForm from '../../components/TransferForm';

export class RegisterTransfer extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  componentWillMount() {
    return this.props.dispatch(getUsers());
  }

  render() {
    return (
      <div>
        <GenericCard>
          <TransferForm
            users={this.props.registertransfer.userList}
            transferInfo={this.props.registertransfer.transferInfo}
            changeReceiver={(value)=>this.props.dispatch(setReceiver(value))}
            changePayer={(value)=>this.props.dispatch(setPayer(value))}
            changeValue={(value)=>this.props.dispatch(setValue(value))}
          />
        </GenericCard>
      </div>
    );
  }
}

RegisterTransfer.propTypes = {
  dispatch: PropTypes.func.isRequired,
  registertransfer: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  registertransfer: makeSelectRegisterTransfer(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'registerTransfer', reducer });

export default compose(
  withReducer,
  withConnect,
)(RegisterTransfer);
