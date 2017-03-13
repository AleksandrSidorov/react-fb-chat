/**
*
* InfoIcon
*
*/

import React from 'react';

import InfoSVG from 'static/img/info.svg'

function InfoIcon(props) {
  return (
    <div>
      <img src={InfoSVG}></img>
    </div>
  );
}

InfoIcon.propTypes = {

};

export default InfoIcon;
