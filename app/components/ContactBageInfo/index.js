/**
*
* ContactBageInfo
*
*/
import React, { PropTypes } from 'react';

import { Wrapper } from './Wrapper'
import { WrapperName } from './WrapperName'
import { WrapperEvent } from './WrapperEvent'
import { Name } from './Name'
import { Abbr } from './Abbr'
import { EventText } from './EventText'

function ContactBageInfo(props) {
  const { name } = props
  return (
    <Wrapper>
      <WrapperName>
        <Name>
          {name}
        </Name>
        <div>
          <Abbr>
            {'Date'}
          </Abbr>
        </div>
      </WrapperName>
      <WrapperEvent>
        <EventText>
          {'Last Event'}
        </EventText>
      </WrapperEvent>
    </Wrapper>
  )
}

ContactBageInfo.propTypes = {
  name: PropTypes.string.isRequired
};

ContactBageInfo.defaultProps = {
  name: "Uncnown User"
}

export default ContactBageInfo;
