/**
*
* SettingsList
*
*/

import React from 'react';

import SettingsItem from 'components/SettingsItem'

import SettingImg from 'static/img/settings-icon.svg'
import Wrapper from './Wrapper'

function SettingsList() {

  const fakeData = [
    { img: SettingImg, text: "Mute" },
    { img: SettingImg, text: "Edit Nickname" },
    { img: SettingImg, text: "Change Color"},
    { img: SettingImg, text: "Search"}
  ]

  const settingsList = fakeData.map((item, index) => {
    return <SettingsItem key={index} img={item.img} text={item.text} />
  })

  return (
    <Wrapper>
      {settingsList}
    </Wrapper>
  );
}

export default SettingsList;
