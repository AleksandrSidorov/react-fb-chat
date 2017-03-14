/**
*
* InputFile
*
*/

import React from 'react';

import Wrapper from './Wrapper'
import Input from './Input'
import Label from './Label'

import FileIcon from 'static/img/file.svg'

function InputFile() {
  return (
    <Wrapper>
      <Label>
        <img src={FileIcon} />
        <Input type="file" id="addfile" />
      </Label>
    </Wrapper>
  );
}

export default InputFile;
