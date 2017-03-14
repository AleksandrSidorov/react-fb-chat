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

const selectCurrentIndex = () => createSelector(
  selectContacts,
  contacts => {
    const currId = contacts.get('currentcontact')
    const cont = contacts.get('contactslist')
    return cont.findIndex(x => x.get('id') == currId)
  }
)

export const makeSelectContactInfo = () => createSelector(
  selectContacts,
  selectCurrentIndex(),
  (contacts, index) => {
    const fullInfo = contacts.getIn(['contactslist', index])
    return fullInfo.delete('messages')
  }
)

export const makeSelectCurrentContactName = () => createSelector(
  selectContacts,
  selectCurrentIndex(),
  (contacts, index) => {
    return contacts.getIn(['contactslist', index, 'name'])
  }
)

export const makeSelectMessages = () => createSelector(
  selectContacts,
  selectCurrentIndex(),
  (contacts, index) => {
    return contacts.getIn(['contactslist', index, 'messages'])
  }
)

export const makeSelectOnlineStatus = () => createSelector(
  selectContacts,
  selectCurrentIndex(),
  (contacts, index) => {
    return contacts.getIn(['contactslist', index, 'online'])
  }
)

export const makeSelectAvatar = () => createSelector(
  selectContacts,
  selectCurrentIndex(),
  (contacts, index) => {
    return contacts.getIn(['contactslist', index, 'img'])
  }
)
