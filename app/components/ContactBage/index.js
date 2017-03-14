/**
*
* ContactBage
*
*/

import React from 'react';

import Avatar from 'components/Avatar'
import ContactBageInfo from 'components/ContactBageInfo'

import { Wrapper } from './Wrapper'

function ContactBage(props) {

  const item = props.item

  const avatarProps = {
    img: item.get('img'),
    online: item.get('online'),
    small: false,
  }

  const contactInfoProps = {
    name: item.get('name'),

  }

  return (
    <Wrapper>
      <Avatar {...avatarProps} />
      <ContactBageInfo {...contactInfoProps} />
    </Wrapper>
  );
}

ContactBage.propTypes = {

};

export default ContactBage;
