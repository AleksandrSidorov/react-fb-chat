import { createSelector } from 'reselect';

const selectContacts = (state) => state.get('contacts')

export const makeSelectContactname = () => createSelector(
  selectContacts,
  contactsState => contactsState.get('contactname')
)

export const makeSelectContacts = () => createSelector(
  selectContacts,
  contactsState => contactsState.get('contactslist')
)

export const makeSelectCurrentContact = () => createSelector(
  selectContacts,
  contactsState => contactsState.get('currentcontact')
)

export const makeSelectMessages = () => createSelector(
  selectContacts,
  (contacts) => {
    const name = contacts.get('currentcontact')
    const cont = contacts.get('contactslist')
    const index = cont.findIndex(x => x.get('id') == name)
    return contacts.getIn('contactslist', index, 'messages')
  }
)
