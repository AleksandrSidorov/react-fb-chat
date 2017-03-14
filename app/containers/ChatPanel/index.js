/*
 *
 * ChatPanel
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect'
import { Scrollbars } from 'react-custom-scrollbars'

import ChatFeed from 'containers/ChatFeed'
import MessageInput from 'containers/MessageInput'
import InfoIcon from 'components/InfoIcon'
import ContactSettings from 'containers/ContactSettings'

import { toggleChatSettings } from './actions'
import { makeSelectToggleSettings } from './selectors'

import {
  makeSelectCurrentContactName,
  makeSelectOnlineStatus,
} from 'containers/ContactsPanel/selectors'

import ChatWrapper from './ChatWrapper'
import ChatHeader from './ChatHeader'
import HeaderInfo from './HeaderInfo'
import HeaderInfoName from './HeaderInfoName'
import HeaderInfoActivity from './HeaderInfoActivity'
import HeaderSettings from './HeaderSettings'
import ChatMainWrapper from './ChatMainWrapper'
import ChatMain from './ChatMain'
import ChatSettingsWrapper from './ChatSettingsWrapper'
import ChatFeedWrapper from './ChatFeedWrapper'
import ChatNewMessageWrapper from './ChatNewMessageWrapper'

export class ChatPanel extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    const id = this.props.params.id

    return (
      <ChatWrapper>
        <ChatHeader>
          <HeaderInfo>
            <HeaderInfoName>{this.props.currentContactName}</HeaderInfoName>
            <HeaderInfoActivity>{this.props.onlineStatus ? 'Active' : 'Offline'}</HeaderInfoActivity>
          </HeaderInfo>
          <HeaderSettings onClick={this.props.onToggleSettings}>
            <InfoIcon />
          </HeaderSettings>
        </ChatHeader>
        <ChatMainWrapper>
          <ChatMain>
            <ChatFeedWrapper>
              <Scrollbars autoHide={true}  style={{ height: '100%' }}>
                <ChatFeed />
              </Scrollbars>
            </ChatFeedWrapper>
            <ChatNewMessageWrapper>
              <MessageInput />
            </ChatNewMessageWrapper>
          </ChatMain>
          {this.props.settings ? <ChatSettingsWrapper><ContactSettings /></ChatSettingsWrapper> : null}
        </ChatMainWrapper>
      </ChatWrapper>
    );
  }
}

ChatPanel.propTypes = {
  dispatch: PropTypes.func.isRequired,
  settings: PropTypes.bool.isRequired,
};

const mapStateToProps = createStructuredSelector ({
  settings: makeSelectToggleSettings(),
  currentContactName: makeSelectCurrentContactName(),
  onlineStatus: makeSelectOnlineStatus(),
})

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    onToggleSettings: () => dispatch(toggleChatSettings()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ChatPanel);
