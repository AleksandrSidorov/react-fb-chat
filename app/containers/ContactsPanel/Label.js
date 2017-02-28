import styled from 'styled-components'

import SpriteImg from 'static/img/sprite.png'

const Label = styled.label`
  border: none;
  display: inline-block;
  width: 100%;
  height: 30px;
  box-sizing: border-box;
  cursor: default;
  margin: 0;
  position: relative;

  &::before {
    content: '';
    background-image: url(${SpriteImg});
    background-repeat: no-repeat;
    background-size: auto;
    background-position: 0 -404px;
    display: block;
    position: absolute;
    height: 16px;
    left: 8px;
    top: 7px;
    width: 16px;
  }
`

export default Label
