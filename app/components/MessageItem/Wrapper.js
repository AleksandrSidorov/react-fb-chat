import styled from 'styled-components'

export const Wrapper = styled.div`
display: flex;
  margin-top: 16px;
  margin-right: 10px;
  margin-left: 36px;
  position: relative;
  justify-content: ${props => props.incoming ? 'flex-start' : 'flex-end'}
`
