/**
*
* SettingsItem
*
*/
import React from 'react';

import Wrapper from './Wrapper'
import WrapperImage from './WrapperImage'
import SettingName from './SettingName'

function SettingsItem(props) {
  return (
    <Wrapper>
      <WrapperImage>
        <img src={props.img} />
      </WrapperImage>
      <SettingName>
        {props.text}
      </SettingName>
    </Wrapper>
  );
}

export default SettingsItem;
