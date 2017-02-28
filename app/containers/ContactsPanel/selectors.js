import { createSelector } from 'reselect';

const selectContacts = (state) => state.get('contacts');
// const contactsListSelector = (state) => state.contacts.get('contactslist');

const makeSelectContactname = () => createSelector(
  selectContacts,
  (contactsState) => contactsState.get('contactname')
);

const makeSelectContacts = () => createSelector(
  selectContacts,
  (contactsState) => contactsState
    .get('contactslist')
    // .map((item, key) => item.name)
);
/*
const makeSelectContacts = createSelector(
  contactsListSelector,
  items => items.map((contact, key) => contact.name)
)
*/

export {
  selectContacts,
  makeSelectContactname,
  makeSelectContacts,
};
