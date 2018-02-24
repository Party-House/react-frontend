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
  getCurrentDate, setMonth, setYear, getPurchases
} from './actions';
import messages from './messages';
import MonthSelector from '../../components/MonthSelector';
import AppNavBar from '../AppNavBar';
import CardsList from '../../components/CardsList';
import GenericCard from '../../components/GenericCard';

export class MonthlyPurchases extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  componentDidMount() {
    return this.props.dispatch(getCurrentDate());
  }
  render() {
    let itens = []
    this.props.monthlypurchases.purchases.map((purchase) => {
      itens.push({
        title: purchase.reason,
        subtitle: <FormattedMessage
          {...messages.purchase}
          values={{value: <b>{purchase.value}</b>, name:<b>{purchase.user_name}</b>}} />,
        details: [
          <div><b><FormattedMessage {...messages.comments} /></b> {purchase.comments}</div>,
          <div><b><FormattedMessage {...messages.purchase_date} /></b> {purchase.purchase_date}</div>,
        ]
      })
    })
    return (
      <div>
        <AppNavBar history={this.props.history}/>
        <GenericCard>
          <div>
            <MonthSelector
              monthsList={this.props.monthlypurchases.monthsList}
              yearList={this.props.monthlypurchases.yearList}
              month={this.props.monthlypurchases.selectedMonth.month}
              year={this.props.monthlypurchases.selectedMonth.year}
              changeMonth={(month)=>this.props.dispatch(setMonth(month))}
              changeYear={(year)=>this.props.dispatch(setYear(year))}
              submit={()=>this.props.dispatch(getPurchases(
                this.props.monthlypurchases.selectedMonth))}
            /> <br/>
            <CardsList infoList={itens}/>
          </div>
        </GenericCard>
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
