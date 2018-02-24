/*
 *
 * MonthlyPurchases actions
 *
 */

import {
  GET_CURRENT_DATE, SET_MONTH, SET_YEAR,
  GET_PURCHASES, GET_PURCHASES_SUCESS
} from './constants';
import {
  FINANCE_API,
} from '../App/constants';

export function getCurrentDate() {
  const today = new Date()
  return {
    type: GET_CURRENT_DATE,
    value: {
      month: (today.getMonth() + 1).toString(),
      year: (today.getFullYear()).toString(),
    },
  };
}

export function setMonth(month) {
  return {
    type: SET_MONTH,
    month: month.toString(),
  };
}

export function setYear(year) {
  return {
    type: SET_YEAR,
    year: year.toString(),
  };
}

export function getPurchases(selectedMonth) {
  return dispatch => {
    dispatch({type: GET_PURCHASES});
    return fetch(`${FINANCE_API}purchases-in/${selectedMonth.month}/${selectedMonth.year}`, {
      mode: 'cors'
    }).then(
      response => {
        response.json().then(json => dispatch({type: GET_PURCHASES_SUCESS, payload: json}))
      }
    )
  };
}