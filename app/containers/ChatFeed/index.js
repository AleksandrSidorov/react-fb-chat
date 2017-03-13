/*
 *
 * ChatFeed
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect'

import MessageItem from 'components/MessageItem'

import { makeSelectMessages } from 'containers/ContactsPanel/selectors'

export class ChatFeed extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    const { messages } = this.props

    let content = (<span>Error</span>)

    if (messages) {
      content = messages.map((message, index) => (
        <MessageItem
          key={`message-${index}`}
          incoming={message.get('incoming')}
        >
          {message.get('text')}
        </MessageItem>
      ))
    }

    return (
      <div>
        {content}
      </div>
    );
  }
}

ChatFeed.propTypes = {
  dispatch: PropTypes.func.isRequired,
};


const mapStateToProps = createStructuredSelector ({
  messages: makeSelectMessages(),
})


function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ChatFeed);
