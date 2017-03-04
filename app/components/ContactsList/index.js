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
      const selected = item.id == props.currentContact
      if(!props.search || item.name.toLowerCase().includes(props.search.toLowerCase())) {
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

ContactsList.propTypes = {

};

export default ContactsList;
