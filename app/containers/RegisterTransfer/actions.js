/*
 *
 * RegisterTransfer actions
 *
 */

import {
  GET_USERS, GET_USERS_SUCCESS,
  SET_RECEIVER, SET_VALUE,
  SET_PAYER
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