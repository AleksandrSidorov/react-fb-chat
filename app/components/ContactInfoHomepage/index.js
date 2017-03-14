/**
*
* ContactInfoHomepage
*
*/

import React from 'react';
// import styled from 'styled-components';
import Wrapper from './Wrapper'
import Header from './Header'


function ContactInfoHomepage(props) {
  return (
    <Wrapper>
      <Header>Profile Link</Header>
      <Link>{props.link}</Link>
    </Wrapper>
  );
}

ContactInfoHomepage.propTypes = {

};

export default ContactInfoHomepage;
