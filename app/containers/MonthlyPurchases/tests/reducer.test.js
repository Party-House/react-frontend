
import { fromJS } from 'immutable';
import monthlyPurchasesReducer from '../reducer';

describe('monthlyPurchasesReducer', () => {
  it('returns the initial state', () => {
    expect(monthlyPurchasesReducer(undefined, {})).toEqual(fromJS({}));
  });
});
