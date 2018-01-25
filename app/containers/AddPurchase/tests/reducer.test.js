
import { fromJS } from 'immutable';
import addPurchaseReducer from '../reducer';

describe('addPurchaseReducer', () => {
  it('returns the initial state', () => {
    expect(addPurchaseReducer(undefined, {})).toEqual(fromJS({}));
  });
});
