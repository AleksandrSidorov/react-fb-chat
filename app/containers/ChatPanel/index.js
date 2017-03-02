/*
 *
 * ChatPanel
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import ChatWrapper from './ChatWrapper'
import ChatHeader from './ChatHeader'
import HeaderInfo from './HeaderInfo'
import HeaderInfoName from './HeaderInfoName'
import HeaderInfoActivity from './HeaderInfoActivity'

export class ChatPanel extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    const id = this.props.params.id

    return (
      <ChatWrapper>
        <ChatHeader>
          <HeaderInfo>
            <HeaderInfoName>{id}</HeaderInfoName>
            <HeaderInfoActivity>{'Active'}</HeaderInfoActivity>
          </HeaderInfo>
        </ChatHeader>
        <div>{this.props.params.id}</div>
      </ChatWrapper>
    );
  }
}

ChatPanel.propTypes = {
  dispatch: PropTypes.func.isRequired,
};


function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(null, mapDispatchToProps)(ChatPanel);
