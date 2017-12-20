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
import messages from './messages';
import DebtsPanel from '../../components/DebtsPanel';

function OverallDebt() {
  return (
    <div>
      <DebtsPanel />
    </div>
  );
}

OverallDebt.propTypes = {
  dispatch: PropTypes.func.isRequired,
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

const withReducer = injectReducer({ key: 'overalldebt', reducer });

export default compose(
  withReducer,
  withConnect,
)(OverallDebt);
