import styled from 'styled-components'

export const MessageBaloon = styled.div`
  color: #fff;
  background-color: #0084ff;
  border-radius: 1.3em;
  margin: 1px 0;
  padding: 6px 12px;
  word-wrap: break-word;
  max-width: 60%;
  float: ${props => props.incoming == true ? 'left' : 'right'};
`
