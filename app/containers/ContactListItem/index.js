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
    const item = this.props.item

    const avatarProps = {
      img: item.img,
      online: item.online
    }

    const contactInfoProps = {
      name: item.name,
    }

    return (
      <ContactWrapper to={`/contacts/${item.id}`} onClick={this.props.onClickContact}>
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
      dispatch(setCurrentContact(ownProps.item.id))
    }
  };
}

export default connect(null, mapDispatchToProps)(ContactListItem);
