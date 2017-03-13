import styled from 'styled-components'

export const Round = styled.div`
  width: ${props => props.small ? '32px' : '50px'};
  height: ${props => props.small ? '32px' : '50px'};
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, .05);
  border-radius: 50%;
  overflow: hidden;
`
