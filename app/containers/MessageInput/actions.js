/*
 *
 * MessageInput actions
 *
 */

import {
  CHANGE_MESSAGE,
  CLEAR_MESSAGE_INPUT,
} from './constants';

export function changeMessage(message) {
  return {
    type: CHANGE_MESSAGE,
    message,
  };
}

export function clearMessageInput() {
  return {
    type: CLEAR_MESSAGE_INPUT
  }
}
