/**
*
* ContactsList
*
*/

import React from 'react';
// import styled from 'styled-components';


function ContactsList(props) {
  let content = (<li>Error</li>)
  console.log(typeof props.items);

  if (props.items) {
    content = props.items.map((item, index) => (
      <li key={`item-${index}`}>{item}</li>
    ))
  }

  return (
    <ul>
      {content}
    </ul>
  );
}

ContactsList.propTypes = {

};

export default ContactsList;
