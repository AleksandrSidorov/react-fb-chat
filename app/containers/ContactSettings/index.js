/*
 *
 * ContactSettings
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect'

import ContactBage from 'components/ContactBage'
import ContactInfoSettings from 'components/ContactInfoSettings'
import ContactInfoLink from 'components/ContactInfoLink'

import {
  makeSelectContactInfo
} from 'containers/ContactsPanel/selectors'

export class ContactSettings extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const item = this.props.item
    return (
      <div>
        <ContactBage item={item} />
        <ContactInfoSettings />
        <ContactInfoLink link={this.props.item.get('link')} />
      </div>
    );
  }
}

ContactSettings.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector ({
  item: makeSelectContactInfo(),
})


function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ContactSettings);
