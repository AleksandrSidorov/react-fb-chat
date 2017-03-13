/*
 *
 * MessageInput reducer
 *
 */

import { fromJS } from 'immutable';
import {
  CHANGE_MESSAGE,
  CLEAR_MESSAGE_INPUT,
} from './constants';

const initialState = fromJS({
  messageInput: ''
});

function messageInputReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_MESSAGE:
      return state.set('messageInput', action.message.replace(/@/gi, ''))
    case CLEAR_MESSAGE_INPUT:
      return state.set('messageInput', '')
    default:
      return state;
  }
}

export default messageInputReducer;
