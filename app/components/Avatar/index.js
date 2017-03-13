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
  const { img, online, small } = props
  return (
    <Wrapper>
      <WrapperInner small={small}>
        <Round small={small}>
          <Img src={img} small={small} />
        </Round>
        <OnlineStatus online={online}  small={small}/>
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
