/**
*
* MessageItem
*
*/
import React from 'react';

import Avatar from 'components/Avatar'

import { Wrapper } from './Wrapper'
import { MessageBaloon } from './MessageBaloon'

function MessageItem(props) {
  return (
    <Wrapper incoming={props.incoming}>
      {props.incoming ? <Avatar img={props.avatar} online={props.online} small={true} /> : null}
      <MessageBaloon incoming={props.incoming}>
        {props.children}
      </MessageBaloon>
    </Wrapper>
  );
}

MessageItem.propTypes = {

};

export default MessageItem;
