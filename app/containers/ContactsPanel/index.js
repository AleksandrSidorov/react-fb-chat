/*
 *
 * ContactsPanel
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect'

import ContactsPanelWrapper from './ContactsPanelWrapper'
import SearchWrapper from './SearchWrapper'
import Label from './Label'
import Input from './Input'

import ContactsList from 'components/ContactsList'

import { changeContactname } from './actions'
import { makeSelectContactname, makeSelectContacts } from './selectors'

export class ContactsPanel extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
  const { contacts, contactname } = this.props

    return (
      <ContactsPanelWrapper>
        <SearchWrapper>
          <form onSubmit={this.props.onSubmitForm}>
            <Label>
              <Input
                id="contactname"
                type="text"
                placeholder="Search Contact"
                value={this.props.username}
                onChange={this.props.onChangeContactname}
              />
            </Label>
          </form>
        </SearchWrapper>
        <ContactsList items={contacts} />
      </ContactsPanelWrapper>
    );
  }
}

ContactsPanel.propTypes = {
  dispatch: PropTypes.func.isRequired,
  contactname: React.PropTypes.string,
  contacts: React.PropTypes.oneOfType([
    React.PropTypes.array,
    React.PropTypes.bool,
  ]),
  onSubmitForm: React.PropTypes.func,
  onChangeContactname: React.PropTypes.func,
};

const mapStateToProps = createStructuredSelector ({
  contactname: makeSelectContactname(),
  contacts: makeSelectContacts(),
})


function mapDispatchToProps(dispatch) {
  return {
    onChangeContactname: (evt) => dispatch(changeContactname(evt.target.value)),
    onSubmitForm: (evt) => {
      if (evt !== undefined && evt.preventDefault) evt.preventDefault()
      dispatch(searchContacts())
    },
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ContactsPanel);
