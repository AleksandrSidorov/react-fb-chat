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
    content = props.items.map((item, index) => (
      <li key={`item-${index}`}>
        <ContactListItem item={item} />
      </li>
    ))
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
