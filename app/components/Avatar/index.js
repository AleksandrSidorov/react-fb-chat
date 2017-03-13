/**
*
* Avatar
*
*/
import React, { PropTypes } from 'react'

import { Wrapper } from './Wrapper'
import { WrapperInner } from './WrapperInner'
import { Round } from './Round'
import { Img } from './Img'
import { OnlineStatus } from './OnlineStatus'

function Avatar(props) {
  const { img, online } = props
  return (
    <Wrapper>
      <WrapperInner>
        <Round>
          <Img src={img} />
        </Round>
        <OnlineStatus online={online}/>
      </WrapperInner>
    </Wrapper>
  )
}

Avatar.propTypes = {
  img: PropTypes.string,
  online: PropTypes.bool.isRequired,
}

Avatar.defaultProps = {
  img: '',
  online: false,
}

export default Avatar
