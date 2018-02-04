/*
 *
 * AddPurchase reducer
 *
 */

import { fromJS } from 'immutable';
import {
  GET_USERS_SUCCESS,
  SET_BUYER, SET_TITLE,
  SET_DESCRIPTION,
  SET_VALUE, SET_DATE
} from './constants';

const initialState = fromJS({
  userList: [],
  title: "",
  description: "",
  value: 0,
  date: "",
  buyer: 0,
  date:"",
});

function addPurchaseReducer(state = initialState, action) {
  switch (action.type) {
    case SET_BUYER:
      return state.set('buyer', action.buyer);
    case SET_TITLE:
      return state.set('title', action.title);
    case SET_DESCRIPTION:
      return state.set('description', action.description);
    case SET_VALUE:
      return state.set('value', action.value);
    case SET_DATE:
      return state.set('date', action.value);
    case GET_USERS_SUCCESS:
      return state.set('userList', action.payload)
    default:
      return state;
  }
}

export default addPurchaseReducer;
