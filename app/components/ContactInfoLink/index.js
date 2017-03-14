/**
*
* ContactInfoHomepage
*
*/

import React, { PropTypes } from 'react';

import Wrapper from './Wrapper'
import Header from './Header'
import Link from './Link'


function ContactInfoLink(props) {
  return (
    <Wrapper>
      <Header>Profile Link</Header>
      <Link href={props.link} target="_blank">{props.link}</Link>
    </Wrapper>
  );
}

ContactInfoLink.propTypes = {
  link: PropTypes.string
};

export default ContactInfoLink;
