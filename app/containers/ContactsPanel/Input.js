import styled from 'styled-components'

const Input = styled.input`
  background-color: #f6f7f9;
  border-radius: 5px;
  border-style: none;
  box-sizing: border-box;
  font-size: 14px;
  font-family: Helvetica, Arial, sans-serif;
  text-align: center;
  height: 30px;
  width: 100%;
  padding: 0 28px;

  &:focus {
    outline: none;
    text-align: left;
  }
`

export default Input
