/**
*
* MessageItem
*
*/

import React from 'react';
// import styled from 'styled-components';
import { Wrapper } from './Wrapper'
import { MessageBaloon } from './MessageBaloon'

function MessageItem(props) {
  console.log('inc: ', props.incoming);
  return (
    <Wrapper>
      <MessageBaloon>
        {props.children}
      </MessageBaloon>
    </Wrapper>
  );
}

MessageItem.propTypes = {

};

export default MessageItem;
