/*
 *
 * MessageInput reducer
 *
 */

import { fromJS } from 'immutable';
import {
  CHANGE_MESSAGE,
} from './constants';

const initialState = fromJS({
  messageInput: ''
});

function messageInputReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_MESSAGE:
      return state.set('messageInput', action.message.replace(/@/gi, ''))
    default:
      return state;
  }
}

export default messageInputReducer;
