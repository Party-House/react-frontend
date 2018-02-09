
import { fromJS } from 'immutable';
import bankDetailsReducer from '../reducer';

describe('bankDetailsReducer', () => {
  it('returns the initial state', () => {
    expect(bankDetailsReducer(undefined, {})).toEqual(fromJS({}));
  });
});
