import { createSelector } from 'reselect';

/**
 * Direct selector to the messageInput state domain
 */
const selectMessageInput = () => (state) => state.get('messageInput');

/**
 * Other specific selectors
 */


/**
 * Default selector used by MessageInput
 */

const makeSelectMessageInput = () => createSelector(
  selectMessageInput(),
  (substate) => substate
);

export default makeSelectMessageInput;
export {
  selectMessageInputDomain,
};
