import styled from 'styled-components'

export const Img = styled.img`
  display: block;
  border: 0;
  width: ${props => props.small ? '32px' : '50px'};
  height: ${props => props.small ? '32px' : '50px'};
`
