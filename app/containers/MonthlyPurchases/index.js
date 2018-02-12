/**
 *
 * MonthlyPurchases
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectReducer from 'utils/injectReducer';
import makeSelectMonthlyPurchases from './selectors';
import reducer from './reducer';
import {
  getCurrentDate
} from './actions';
import messages from './messages';
import MonthSelector from '../../components/MonthSelector';

export class MonthlyPurchases extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  componentDidMount() {
    return this.props.dispatch(getCurrentDate());
  }
  render() {
    return (
      <div>
        <MonthSelector
          monthsList={this.props.monthlypurchases.monthsList}
          yearList={this.props.monthlypurchases.yearList}
          month={this.props.monthlypurchases.selectedMonth.month}
          year={this.props.monthlypurchases.selectedMonth.year}
          changeMonth={()=>{}}
          changeYear={()=>{}}
        />
      </div>
    );
  }
}

MonthlyPurchases.propTypes = {
  dispatch: PropTypes.func.isRequired,
  monthlypurchases: PropTypes.object
};

const mapStateToProps = createStructuredSelector({
  monthlypurchases: makeSelectMonthlyPurchases(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'monthlyPurchases', reducer });

export default compose(
  withReducer,
  withConnect,
)(MonthlyPurchases);
