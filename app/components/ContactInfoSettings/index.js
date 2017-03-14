/**
*
* ContactInfoSettings
*
*/
import React from 'react';

import SettingsList from 'components/SettingsList'

import Wrapper from './Wrapper'
import Header from './Header'

function ContactInfoSettings() {
  return (
    <Wrapper>
      <Header>Fake Settings</Header>
      <SettingsList />
    </Wrapper>
  );
}

export default ContactInfoSettings;
