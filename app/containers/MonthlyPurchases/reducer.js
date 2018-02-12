/*
 *
 * MonthlyPurchases reducer
 *
 */

import { fromJS } from 'immutable';
import {
  GET_CURRENT_DATE,
} from './constants';

const initialState = fromJS({
  monthsList: [
    'Jan', 'Fev', 'Mar', 'Abr',
    'Mai', 'Jun', 'Jul', 'Ago',
    'Set', 'Out', 'Nov', 'Dez'],
  yearList:['2017', '2018'],
  selectedMonth: {}
});

function monthlyPurchasesReducer(state = initialState, action) {
  switch (action.type) {
    case GET_CURRENT_DATE:
      return state.set('selectedMonth', action.value);
    default:
      return state;
  }
}

export default monthlyPurchasesReducer;
