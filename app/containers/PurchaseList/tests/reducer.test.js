
import { fromJS } from 'immutable';
import purchaseListReducer from '../reducer';

describe('purchaseListReducer', () => {
  it('returns the initial state', () => {
    expect(purchaseListReducer(undefined, {})).toEqual(fromJS({}));
  });
});
