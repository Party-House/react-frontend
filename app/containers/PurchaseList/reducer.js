/*
 *
 * PurchaseList reducer
 *
 */

import { fromJS } from 'immutable';
import {
  GET_LIST_SUCCESS, UPDATE_INDEX
} from './constants';

const initialState = fromJS({
  list: [],
  currentIndex: 0
});

function purchaseListReducer(state = initialState, action) {
  switch (action.type) {
    case GET_LIST_SUCCESS:
      return state.set('list', action.payload);
    case UPDATE_INDEX:
      return state.set('currentIndex', action.newIndex);
    default:
      return state;
  }
}

export default purchaseListReducer;
