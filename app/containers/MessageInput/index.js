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
import { addMessage, addFakeMessage } from 'containers/ContactsPanel/actions'
import InputFile from 'components/InputFile'

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
    const incoming = false
    if(message !== '') {
      this.props.onMessageSubmit(message, incoming)
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
         <InputFile />
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
    onMessageSubmit: (message, incoming) => {
      dispatch(addMessage(message, incoming))
      dispatch(clearMessageInput())
      setTimeout(() => {dispatch(addFakeMessage())}, 700)
      //dispatch(addFakeMessage())
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MessageInput);
