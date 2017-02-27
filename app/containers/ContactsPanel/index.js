/*
 *
 * ContactsPanel
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components'

const ContactsPanelWrapper = styled.div`
  flex: 0 0 25%;
  max-width: 420px;
  min-width: 240px;
  border-right: 1px solid rgba(0, 0, 0, .20);
`

export class ContactsPanel extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <ContactsPanelWrapper>
        {'Contacts Panel'}
        <ul>
          <li>Contact 1</li>
          <li>Contact 2</li>
          <li>Contact 3</li>
          <li>Contact 4</li>
        </ul>
      </ContactsPanelWrapper>
    );
  }
}

ContactsPanel.propTypes = {
  dispatch: PropTypes.func.isRequired,
};


function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(null, mapDispatchToProps)(ContactsPanel);
