import { createSelector } from 'reselect';

/**
 * Direct selector to the messageInput state domain
 */
const selectMessage = (state) => state.get('message');

/**
 * Other specific selectors
 */


/**
 * Default selector used by MessageInput
 */

export const makeSelectMessageInput = () => createSelector(
  selectMessage,
  messageState => {
    console.log(messageState.get('messageInput'))
    return messageState.get('messageInput')
  }
);
