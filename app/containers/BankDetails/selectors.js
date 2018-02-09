import { createSelector } from 'reselect';

/**
 * Direct selector to the bankDetails state domain
 */
const selectBankDetailsDomain = (state) => state.get('bankDetails');

/**
 * Other specific selectors
 */


/**
 * Default selector used by BankDetails
 */

const makeSelectBankDetails = () => createSelector(
  selectBankDetailsDomain,
  (substate) => substate.toJS()
);

export default makeSelectBankDetails;
export {
  selectBankDetailsDomain,
};
