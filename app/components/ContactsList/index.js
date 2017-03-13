/**
*
* ContactsList
*
*/

import React from 'react';

import ContactListItem from 'containers/ContactListItem'

import Ul from './Ul'

function ContactsList(props) {
  let content = (<li>Error</li>)

  if (props.items) {
    content = props.items.map((item, index) => {
      console.log(index);
      const selected = item.get('id') == props.currentContact
      if(!props.search || item.get('name').toLowerCase().includes(props.search.toLowerCase())) {
        return (
          <li key={`item-${index}`}>
            <ContactListItem item={item} selected={selected} />
          </li>
        )
      }
    })
  }

  return (
    <Ul>
      {content}
    </Ul>
  );
}

export default ContactsList;
