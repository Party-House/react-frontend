/*
 *
 * PurchaseList actions
 *
 */

import {
  GET_LIST, GET_LIST_SUCCESS, UPDATE_INDEX
} from './constants';

import {
  PURCHASE_API,
} from '../App/constants';

export function getPurchaseList() {
  return dispatch => {
    dispatch({type: GET_LIST});
    return fetch(`${PURCHASE_API}get-list`, {
      mode: 'cors'
    }).then(
      response => {
        response.json().then(json => dispatch({type: GET_LIST_SUCCESS, payload: json}))
      }
    )
  };
}

export function updateIndex(listLength, curIndex) {
  return {
    type: UPDATE_INDEX,
    newIndex: (curIndex + 1) % listLength,
  };
}
