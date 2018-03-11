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
  setReceiver, setPayer, sendTransfer
} from './actions';
import AppNavBar from '../AppNavBar';
import GenericCard from '../../components/GenericCard';
import TransferForm from '../../components/TransferForm';

export class RegisterTransfer extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  componentWillMount() {
    return this.props.dispatch(getUsers());
  }

  render() {
    return (
      <div>
        <AppNavBar history={this.props.history} />
        <GenericCard>
          <TransferForm
            users={this.props.registertransfer.userList}
            transferInfo={this.props.registertransfer.transferInfo}
            changeReceiver={(value)=>this.props.dispatch(setReceiver(value))}
            changePayer={(value)=>this.props.dispatch(setPayer(value))}
            changeValue={(value)=>this.props.dispatch(setValue(value))}
            submit={()=>this.props.dispatch(sendTransfer(
              this.props.registertransfer.transferInfo,
              (() => this.props.history.push('/finance'))
            ))}
          />
        </GenericCard>
      </div>
    );
  }
}

RegisterTransfer.propTypes = {
  dispatch: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
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
