/**
*
* InfoIcon
*
*/

import React from 'react';

import InfoSVG from 'static/img/info.svg'
import Wrapper from './Wrapper'

function InfoIcon(props) {
  return (
    <Wrapper>
      <img src={InfoSVG}></img>
    </Wrapper>
  );
}

InfoIcon.propTypes = {

};

export default InfoIcon;
