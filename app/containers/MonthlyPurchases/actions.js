/*
 *
 * MonthlyPurchases actions
 *
 */

import {
  GET_CURRENT_DATE,
} from './constants';

export function getCurrentDate() {
  const today = new Date()
  return {
    type: GET_CURRENT_DATE,
    value: {
      month: (today.getMonth() + 1).toString(),
      year: (today.getFullYear()).toString(),
    },
  };
}
