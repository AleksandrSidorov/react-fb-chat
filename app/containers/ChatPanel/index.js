/*
 *
 * ChatPanel
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

export class ChatPanel extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        {'ChatPanel'}
      </div>
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
