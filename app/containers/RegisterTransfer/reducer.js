/*
 *
 * RegisterTransfer reducer
 *
 */

import { fromJS } from 'immutable';
import {
  GET_USERS_SUCCESS,
  SET_RECEIVER, SET_VALUE,
  SET_PAYER
} from './constants';

const initialState = fromJS({
  userList: [],
  transferInfo: {}
});

function registerTransferReducer(state = initialState, action) {
  switch (action.type) {
    case GET_USERS_SUCCESS:
      return state.set('userList', action.payload)
    case SET_RECEIVER:
      return state.setIn(['transferInfo', 'receiver_id'], action.receiver)
    case SET_PAYER:
      return state.setIn(['transferInfo', 'payer_id'], action.payer)
    case SET_VALUE:
      return state.setIn(['transferInfo', 'value'], action.value)
    default:
      return state;
  }
}

export default registerTransferReducer;
