/*
 *
 * RegisterTransfer actions
 *
 */

import {
  GET_USERS, GET_USERS_SUCCESS,
  SET_RECEIVER, SET_VALUE,
  SET_PAYER, SEND_TRANSFER
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

export function sendTransfer(data, redirect) {
  return dispatch => {
    dispatch({type: SEND_TRANSFER});
    return fetch(`${FINANCE_API}add-transfer`, {
      method: 'POST',
      body: JSON.stringify(data),
      mode: 'cors'
    }).then(
      (response) => {
        redirect();
      })
  };
}

export function setReceiver(receiverId) {
  return {
    type: SET_RECEIVER,
    receiver: receiverId,
  };
}

export function setValue(value) {
  return {
    type: SET_VALUE,
    value: value,
  };
}

export function setPayer(payerId) {
  return {
    type: SET_PAYER,
    payer: payerId,
  };
}