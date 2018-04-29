/*
 *
 * PurchaseList actions
 *
 */

import {
  GET_LIST, GET_LIST_SUCCESS, UPDATE_INDEX,
  MARK_PURCHASE, MARK_PURCHASE_SUCCESS
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

export function updateIndex(index) {
  return {
    type: UPDATE_INDEX,
    newIndex: index,
  };
}

export function markPurchase(id, currentIndex, length) {
  return {
    type: MARK_PURCHASE_SUCCESS,
    index: currentIndex,
    newIndex: currentIndex % (length -1)
  }
}
