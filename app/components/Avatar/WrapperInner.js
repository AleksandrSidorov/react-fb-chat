import styled from 'styled-components'

export const WrapperInner = styled.div`
  width: ${props => props.small ? '32px' : '50px'};
  height: ${props => props.small ? '32px' : '50px'};
  position: relative;
`
