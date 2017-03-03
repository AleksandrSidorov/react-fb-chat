import { createSelector } from 'reselect'

const selectChat = (state) => state.get('chat')

export const makeSelectToggleSettings = () => createSelector(
  selectChat,
  chatState => chatState.get('settings')
)
