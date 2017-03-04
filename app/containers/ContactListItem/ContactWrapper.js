import styled from 'styled-components'
import { Link } from 'react-router'

const ContactWrapper = styled(Link)`
  height: 64px;
  display: flex;
  cursor: pointer;
  padding-left: 12px;
  text-decoration: none;
  background-color: ${props => props.selected ? 'rgba(0, 0, 0, .05)' : 'rgba(0, 0, 0, 0)'};

  &:hover {
    background-color: rgba(0, 0, 0, .05)
  }
`

export default ContactWrapper
