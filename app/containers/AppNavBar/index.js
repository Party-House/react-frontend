/**
 *
 * AppNavBar
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import makeSelectAppNavBar from './selectors';
import messages from './messages';
import NavBar from '../../components/NavBar'

export class AppNavBar extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
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
  dispatch: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
  appnavbar: PropTypes.object
};

const mapStateToProps = createStructuredSelector({
  appnavbar: makeSelectAppNavBar(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(
  withConnect,
)(AppNavBar);
