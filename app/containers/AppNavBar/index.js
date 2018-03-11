/**
 *
 * AppNavBar
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';

import messages from './messages';
import NavBar from '../../components/NavBar'

export default class AppNavBar extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <NavBar
        overallDebtRedirect={()=>this.props.history.push('/finance')}
        addPurchaseRedirect={()=>this.props.history.push('/finance/add-purchase')}
        bankDetailsRedirect={()=>this.props.history.push('/finance/accounts')}
        monthlyPurchaseRedirect={()=>this.props.history.push('/finance/monthly')}
        addTransferRedirect={()=>this.props.history.push('/finance/transfer')}
      />
    );
  }
}

AppNavBar.propTypes = {
  history: PropTypes.object.isRequired,
};
