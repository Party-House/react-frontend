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
        finance_links = {[
          {
            message: <FormattedMessage {...messages.overallDebt} />,
            link: ()=>this.props.history.push('/finance')
          },{
            message: <FormattedMessage {...messages.addPurchase} />,
            link: ()=>this.props.history.push('/finance/add-purchase')
          },{
            message: <FormattedMessage {...messages.monthlyPurchase} />,
            link: ()=>this.props.history.push('/finance/monthly')
          },{
            message: <FormattedMessage {...messages.bankDetails} />,
            link: ()=>this.props.history.push('/finance/accounts')
          },{
            message: <FormattedMessage {...messages.addTransfer} />,
            link: ()=>this.props.history.push('/finance/transfer')
          },

        ]}
      />
    );
  }
}

AppNavBar.propTypes = {
  history: PropTypes.object.isRequired,
};
