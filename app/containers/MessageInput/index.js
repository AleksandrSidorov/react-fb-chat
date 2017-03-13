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

import { changeMessage } from './actions'
import { addMessage } from 'containers/ContactsPanel/actions'

export class MessageInput extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    const { message } = this.props

    return (
      <div>
        <form onSubmit={this.props.onMessageSubmit}>
          <label>Message:
            <input
              placeholder="Enter Message"
              value={this.props.message}
              onChange={this.props.onChangeMessage}
             />
          </label>
        </form>
      </div>
    );
  }
}

MessageInput.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  message: makeSelectMessageInput(),
});

function mapDispatchToProps(dispatch, ownProps) {
  return {
    dispatch,
    onChangeMessage: (evt) => dispatch(changeMessage(evt.target.value)),
    onMessageSubmit: (evt) => {
      const mess = makeSelectMessageInput();
      console.log('message: ', ownProps);
      if (evt !== undefined && evt.preventDefault) evt.preventDefault()
      dispatch(addMessage('johndoe', 'message'))
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MessageInput);
