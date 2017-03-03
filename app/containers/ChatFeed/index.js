/*
 *
 * ChatFeed
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect'

import { makeSelectMessages } from 'containers/ContactsPanel/selectors'

export class ChatFeed extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    const { messages } = this.props
    let content = (<li>Error</li>)

    if (messages) {
      content = messages.map((message, index) => (
        <li key={`message-${index}`}>
          {message.text}
        </li>
      ))
    }

    return (
      <ul>
        {content}
      </ul>
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
