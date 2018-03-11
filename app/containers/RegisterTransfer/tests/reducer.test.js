
import { fromJS } from 'immutable';
import registerTransferReducer from '../reducer';

describe('registerTransferReducer', () => {
  it('returns the initial state', () => {
    expect(registerTransferReducer(undefined, {})).toEqual(fromJS({}));
  });
});
