/*
 *
 * ContactListItem
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components'

import ContactBage from 'components/ContactBage'

import { setCurrentContact } from 'containers/ContactsPanel/actions'

import ContactWrapper from './ContactWrapper'

export class ContactListItem extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    const { item, selected } = this.props

    return (
      <ContactWrapper to={`/contacts/${item.get('id')}`} onClick={this.props.onClickContact} selected={selected}>
        <ContactBage item={item} />
      </ContactWrapper>
    );
  }
}

ContactListItem.propTypes = {
  dispatch: PropTypes.func.isRequired,
  item: PropTypes.object,
};

function mapDispatchToProps(dispatch, ownProps) {
  return {
    dispatch,
    onClickContact: () => {
      dispatch(setCurrentContact(ownProps.item.get('id')))
    }
  };
}

export default connect(null, mapDispatchToProps)(ContactListItem);
