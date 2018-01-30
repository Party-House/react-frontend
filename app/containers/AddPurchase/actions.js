/*
 *
 * AddPurchase actions
 *
 */

import {
  SET_BUYER,
} from './constants';

export function setBuyer(value) {
  return {
    type: SET_BUYER,
    buyer: value,
  };
}
