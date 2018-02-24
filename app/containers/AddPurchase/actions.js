/*
 *
 * AddPurchase actions
 *
 */

import {
  SEND_PURCHASE, SET_DATE,
  GET_USERS, GET_USERS_SUCCESS,
  SET_BUYER, SET_TITLE,
  SET_DESCRIPTION, SET_VALUE
} from './constants';
import {
  FINANCE_API,
} from '../App/constants';

export function getUsers() {
  return dispatch => {
    dispatch({type: GET_USERS});
    return fetch(`${FINANCE_API}users`, {
      mode: 'cors'
    }).then(
      response => {
        response.json().then(json => dispatch({type: GET_USERS_SUCCESS, payload: json}))
      }
    )
  };
}

export function sendPurchase(purchase, exceptions, redirect) {
  purchase.value = parseFloat(purchase.value)
  const data = {
    purchase: purchase,
    exceptions: exceptions
  }
  return dispatch => {
    dispatch({type: SEND_PURCHASE});
    return fetch(`${FINANCE_API}add-purchase`, {
      method: 'POST',
      body: JSON.stringify(data),
      mode: 'cors'
    }).then(
      (response) => {
        redirect();
      })
  };
}

export function setBuyer(value) {
  return {
    type: SET_BUYER,
    buyer: value,
  };
}
export function setTitle(value) {
  return {
    type: SET_TITLE,
    title: value,
  };
}

export function setDescription(value) {
  return {
    type: SET_DESCRIPTION,
    description: value,
  };
}

export function setValue(value) {
  return {
    type: SET_VALUE,
    value: value,
  };
}

export function setDate(value) {
  return {
    type: SET_DATE,
    value: value,
  };
}


