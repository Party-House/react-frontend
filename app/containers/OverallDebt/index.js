/**
 *
 * OverallDebt
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectReducer from 'utils/injectReducer';
import makeSelectOverallDebt from './selectors';
import reducer from './reducer';
import { getDebts } from './actions';
import messages from './messages';
import AppNavBar from '../AppNavBar';
import CardsList from '../../components/CardsList';
import GenericCard from '../../components/GenericCard';

class OverallDebt extends React.PureComponent {
  componentDidMount() {
    return this.props.dispatch(getDebts());
  }
  render() {
    let itens = []
    this.props.overalldebt.users.map((user) => {
      itens.push({
        title: user.user_name,
        subtitle: <FormattedMessage
          {...messages.debtValue}
          values={{debt: <b>{user.debt}</b>}} />,
        details: [
          <div><b><FormattedMessage {...messages.paid} /></b> {user.paid}</div>,
          <div><b><FormattedMessage {...messages.received} /></b> {user.received}</div>,
          <div><b><FormattedMessage {...messages.transfered} /></b> {user.transfered}</div>
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

OverallDebt.propTypes = {
  dispatch: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
  overalldebt: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  overalldebt: makeSelectOverallDebt(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'overallDebt', reducer });

export default compose(
  withReducer,
  withConnect,
)(OverallDebt);
