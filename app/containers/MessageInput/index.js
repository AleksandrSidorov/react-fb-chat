/*
 *
 * MessageInput
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import makeSelectMessageInput from './selectors';

import { changeMessage } from './actions'

export class MessageInput extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <form>
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

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    onChangeMessage: (evt) => dispatch(changeMessage(evt.target.value)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MessageInput);
