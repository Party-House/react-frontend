/*
 *
 * MonthlyPurchases reducer
 *
 */

import { fromJS } from 'immutable';
import {
  GET_CURRENT_DATE, SET_MONTH, SET_YEAR,
  GET_PURCHASES_SUCESS
} from './constants';

const initialState = fromJS({
  monthsList: [
    'Jan', 'Fev', 'Mar', 'Abr',
    'Mai', 'Jun', 'Jul', 'Ago',
    'Set', 'Out', 'Nov', 'Dez'],
  yearList:['2017', '2018'],
  selectedMonth: {},
  purchases: [],
});

function monthlyPurchasesReducer(state = initialState, action) {
  switch (action.type) {
    case GET_CURRENT_DATE:
      return state.set('selectedMonth', fromJS(action.value));
    case SET_MONTH:
      return state.setIn(['selectedMonth', 'month'], action.month);
    case SET_YEAR:
      return state.setIn(['selectedMonth', 'year'], action.year);
    case GET_PURCHASES_SUCESS:
      return state.set('purchases', action.payload);
    default:
      return state;
  }
}

export default monthlyPurchasesReducer;
