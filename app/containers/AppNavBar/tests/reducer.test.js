
import { fromJS } from 'immutable';
import appNavBarReducer from '../reducer';

describe('appNavBarReducer', () => {
  it('returns the initial state', () => {
    expect(appNavBarReducer(undefined, {})).toEqual(fromJS({}));
  });
});
