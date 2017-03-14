import styled from 'styled-components'

export const MessageBaloon = styled.div`
  align-self: ${props => props.incoming == true ? 'flex-start' : 'flex-end'};
  color: ${props => props.incoming ? '#000' : '#fff'};
  background-color:${props => props.incoming ? '#f1f0f0' : '#0084ff'};
  border-radius: 1.3em;
  margin: 1px 0;
  padding: 6px 12px;
  word-wrap: break-word;
  max-width: 60%;
`
