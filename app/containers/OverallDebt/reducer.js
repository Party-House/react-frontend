/*
 *
 * OverallDebt reducer
 *
 */

import { fromJS } from 'immutable';
import {
  DEFAULT_ACTION,
} from './constants';

const initialState = fromJS({
  loading: false,
  users: [{
    name: "Andre",
    paid: 10,
    debt: 10,
    received: 15,
    transfered: 0,
  }, {
    name: "Duilio",
    paid: 14,
    debt: 8,
    received: 10,
    transfered: 20,
  }],
});

function overallDebtReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;
    default:
      return state;
  }
}

export default overallDebtReducer;
