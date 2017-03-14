import styled from 'styled-components'

export const OnlineStatus = styled.div`
  position: absolute;
  bottom: -1px;
  right: -1px;
  height: ${props => props.small ? '11px' : '16px'};
  width: ${props => props.small ? '11px' : '16px'};
  overflow: hidden;
  border-radius: 50%;
  border: 2px solid #fafafa;
  background-color: ${props => props.online ? "#0084FF" : "#929292"};
`
