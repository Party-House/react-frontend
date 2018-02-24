/*
 *
 * OverallDebt actions
 *
 */
import {
  GET_DEBTS, GET_DEBTS_SUCCESS
} from './constants';
import {
  FINANCE_API,
} from '../App/constants';

export function getDebts() {
  return dispatch => {
    dispatch({type: GET_DEBTS});
    return fetch(`${FINANCE_API}get-total-debt`, {
      mode: 'cors'
    }).then(
      response => {
        response.json().then(json => dispatch({type: GET_DEBTS_SUCCESS, payload: json}))
      }
    )
  };
}
