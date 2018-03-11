import { createSelector } from 'reselect';

/**
 * Direct selector to the registerTransfer state domain
 */
const selectRegisterTransferDomain = (state) => state.get('registerTransfer');

/**
 * Other specific selectors
 */


/**
 * Default selector used by RegisterTransfer
 */

const makeSelectRegisterTransfer = () => createSelector(
  selectRegisterTransferDomain,
  (substate) => substate.toJS()
);

export default makeSelectRegisterTransfer;
export {
  selectRegisterTransferDomain,
};
