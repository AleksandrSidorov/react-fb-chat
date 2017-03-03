/*
 *
 * MessageInput actions
 *
 */

import {
  CHANGE_MESSAGE,
} from './constants';

export function changeMessage(message) {
  return {
    type: CHANGE_MESSAGE,
    message
  };
}
