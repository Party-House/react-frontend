/*
 *
 * PurchaseList reducer
 *
 */

import { fromJS } from 'immutable';
import {
  GET_LIST_SUCCESS, UPDATE_INDEX,
  MARK_PURCHASE, MARK_PURCHASE_SUCCESS
} from './constants';

const initialState = fromJS({
  list: [],
  currentIndex: 0
});

function purchaseListReducer(state = initialState, action) {
  switch (action.type) {
    case GET_LIST_SUCCESS:
      return state.set('list', fromJS(action.payload));
    case UPDATE_INDEX:
      return state.set('currentIndex', action.newIndex);
    case MARK_PURCHASE_SUCCESS:
      {
        let newState = state;
        Object.assign(
          newState,
          newState,
          state.set('currentIndex', action.newIndex));
        newState = state.deleteIn(['list', action.index]);
        return newState;
      }
    default:
      return state;
  }
}

export default purchaseListReducer;
