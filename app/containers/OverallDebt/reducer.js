/*
 *
 * OverallDebt reducer
 *
 */

import { handle } from 'redux-pack';
import { fromJS } from 'immutable';
import {
  GET_DEBTS_SUCCESS,
} from './constants';

const initialState = fromJS({
  loading: false,
  users: [],
});

function overallDebtReducer(state = initialState, action) {
  switch (action.type) {
    case GET_DEBTS_SUCCESS:
      return state.set('users', action.payload);
    default:
      return state;
  }
}

export default overallDebtReducer;
