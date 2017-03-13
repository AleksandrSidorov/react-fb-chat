/*
 *
 * ContactListItem
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components'

import Avatar from 'components/Avatar'
import ContactBageInfo from 'components/ContactBageInfo'

import { setCurrentContact } from 'containers/ContactsPanel/actions'

import ContactWrapper from './ContactWrapper'

export class ContactListItem extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    const { item, selected } = this.props

    const avatarProps = {
      img: item.get('img'),
      online: item.get('online'),
      small: false,
    }

    const contactInfoProps = {
      name: item.get('name'),
    }

    return (
      <ContactWrapper to={`/contacts/${item.get('id')}`} onClick={this.props.onClickContact} selected={selected}>
        <Avatar {...avatarProps} />
        <ContactBageInfo {...contactInfoProps} />
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
