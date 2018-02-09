/*
 *
 * BankDetails reducer
 *
 */

import { fromJS } from 'immutable';
import {
  GET_BANK_ACCOUNTS_SUCCESS,
} from './constants';

const initialState = fromJS({
  accounts: []
});

function bankDetailsReducer(state = initialState, action) {
  switch (action.type) {
    case GET_BANK_ACCOUNTS_SUCCESS:
      return state.set('accounts', action.payload);
    default:
      return state;
  }
}

export default bankDetailsReducer;
