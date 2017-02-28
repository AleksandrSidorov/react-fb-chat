import { createSelector } from 'reselect'

const selectContacts = (state) => state.get('contacts')

const makeSelectContactname = () => createSelector(
  selectContacts,
  (contactsState) => contactsState.get('contactname')
)

const makeSelectContacts = () => createSelector(
  selectContacts,
  (contactsState) => contactsState.get(['name'])
)

export {
  selectContacts,
  makeSelectContactname,
  makeSelectContacts,
}
