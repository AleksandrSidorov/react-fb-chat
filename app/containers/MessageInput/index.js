/*
 *
 * MessageInput
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { toJS } from 'immutable';

import { makeSelectMessageInput } from './selectors';

import { changeMessage, clearMessageInput } from './actions'
import { addMessage } from 'containers/ContactsPanel/actions'

import { Wrapper } from './Wrapper'
import { Textarea } from './Textarea'
import { SendButton } from './SendButton'

export class MessageInput extends React.Component {
  constructor(props) {
    super(props)
    this.submitMessage = this.submitMessage.bind(this)
  }

  submitMessage(evt) {
    if (evt !== undefined && evt.preventDefault) evt.preventDefault()
    const { message } = this.props
    if(message !== '') {
      this.props.onMessageSubmit(message)
    }
  }

  render() {
    const { message } = this.props

    return (
      <form onSubmit={this.submitMessage}>
      <Wrapper>
        <Textarea
          placeholder="Type a message..."
          value={this.props.message}
          onChange={this.props.onChangeMessage}
         />
         {this.props.message ? <SendButton type="submit">Send</SendButton> : <div/>}

        </Wrapper>
      </form>
    );
  }
}

MessageInput.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  message: makeSelectMessageInput(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    onChangeMessage: (evt) => dispatch(changeMessage(evt.target.value)),
    onMessageSubmit: (message) => {
      dispatch(addMessage(message))
      dispatch(clearMessageInput())
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MessageInput);
