import { createSelector } from 'reselect';

/**
 * Direct selector to the purchaseList state domain
 */
const selectPurchaseListDomain = (state) => state.get('purchaseList');

/**
 * Other specific selectors
 */


/**
 * Default selector used by PurchaseList
 */

const makeSelectPurchaseList = () => createSelector(
  selectPurchaseListDomain,
  (substate) => substate.toJS()
);

export default makeSelectPurchaseList;
export {
  selectPurchaseListDomain,
};
