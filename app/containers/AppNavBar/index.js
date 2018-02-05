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
      />
    );
  }
}

AppNavBar.propTypes = {
  history: PropTypes.object.isRequired,
};
