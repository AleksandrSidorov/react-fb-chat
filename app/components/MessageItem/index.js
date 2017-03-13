/**
*
* MessageItem
*
*/

import React from 'react';

import { Wrapper } from './Wrapper'
import { MessageBaloon } from './MessageBaloon'

function MessageItem(props) {
  return (
    <Wrapper>
      
      <MessageBaloon incoming={props.incoming}>
        {props.children}
      </MessageBaloon>
    </Wrapper>
  );
}

MessageItem.propTypes = {

};

export default MessageItem;
