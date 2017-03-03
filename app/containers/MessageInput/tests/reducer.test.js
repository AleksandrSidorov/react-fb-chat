
import { fromJS } from 'immutable';
import messageInputReducer from '../reducer';

describe('messageInputReducer', () => {
  it('returns the initial state', () => {
    expect(messageInputReducer(undefined, {})).toEqual(fromJS({}));
  });
});
