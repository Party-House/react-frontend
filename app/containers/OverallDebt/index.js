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

import makeSelectOverallDebt from './selectors';
import reducer from './reducer';
import { getDebts } from './actions';
import messages from './messages';
import AppNavBar from '../AppNavBar';
import DebtsPanel from '../../components/DebtsPanel';
import GenericCard from '../../components/GenericCard';

class OverallDebt extends React.PureComponent {
  componentDidMount() {
    return this.props.dispatch(getDebts());
  }
  render() {
    return (
      <div>
        <AppNavBar history={this.props.history}/>
        <GenericCard>
          <DebtsPanel users={this.props.overalldebt.users}/>
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

export default compose(
  withConnect,
)(OverallDebt);
