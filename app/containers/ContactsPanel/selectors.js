import { createSelector } from 'reselect';

const selectContacts = (state) => state.get('contacts')

export const makeSelectContactname = () => createSelector(
  selectContacts,
  contactsState => contactsState.get('contactname')
)

export const makeSelectContacts = () => createSelector(
  selectContacts,
  contactsState => contactsState.get('contactslist')
    //.map(contact => contact.name)
)
