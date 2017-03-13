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

export class MessageInput extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    const { message } = this.props

    return (
      <form onSubmit={this.props.onMessageSubmit}>
      <Wrapper>
          <Textarea
            placeholder="Type a message..."
            value={this.props.message}
            onChange={this.props.onChangeMessage}
           />
          <SendButton type="submit">Send</SendButton>
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
    onMessageSubmit: (evt) => {
      const mess = makeSelectMessageInput();
      console.log();
      if (evt !== undefined && evt.preventDefault) evt.preventDefault()
      dispatch(addMessage('New message'))
      dispatch(clearMessageInput())
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MessageInput);
