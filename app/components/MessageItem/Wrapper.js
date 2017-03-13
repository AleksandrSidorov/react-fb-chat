import styled from 'styled-components'

export const Wrapper = styled.div`
  margin-top: 16px;
  margin-right: 10px;
  margin-left: 36px;
  position: relative;

  &:after {
    content: ".";
    display: block;
    clear: both;
    font-size: 0;
    height: 0;
    line-height: 0;
    visibility: hidden;
  }
`
