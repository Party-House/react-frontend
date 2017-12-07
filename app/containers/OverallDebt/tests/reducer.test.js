
import { fromJS } from 'immutable';
import overallDebtReducer from '../reducer';

describe('overallDebtReducer', () => {
  it('returns the initial state', () => {
    expect(overallDebtReducer(undefined, {})).toEqual(fromJS({}));
  });
});
