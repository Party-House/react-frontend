/*
 *
 * BankDetails actions
 *
 */

import {
  GET_BANK_ACCOUNTS, GET_BANK_ACCOUNTS_SUCCESS
} from './constants';
import {
  API_URI,
} from '../App/constants';

export function getBankDetails() {
  return dispatch => {
    dispatch({type: GET_BANK_ACCOUNTS});
    return fetch(`${API_URI}bank-accounts`, {
      mode: 'cors'
    }).then(
      response => {
        response.json().then(json => dispatch({type: GET_BANK_ACCOUNTS_SUCCESS, payload: json}))
      }
    )
  };
}
