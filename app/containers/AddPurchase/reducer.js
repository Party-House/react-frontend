/*
 *
 * AddPurchase reducer
 *
 */

import { fromJS } from 'immutable';
import {
  SET_BUYER,
} from './constants';

const initialState = fromJS({
  userList: [
    {id: 1, name: 'Andre'},
    {id: 2, name: 'Duilio'},
    {id: 3, name: 'Victor'},
    {id: 4, name: 'Vinicius'}],
  title: "",
  description: "",
  value: 0,
  date: "",
  buyer: 0,
});

function addPurchaseReducer(state = initialState, action) {
  switch (action.type) {
    case SET_BUYER:
      return state.set('buyer', action.buyer);
    default:
      return state;
  }
}

export default addPurchaseReducer;
