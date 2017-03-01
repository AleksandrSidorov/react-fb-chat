/*
 *
 * ContactListItem
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components'

import ContactWrapper from './ContactWrapper'
import AvatarWrapper from './AvatarWrapper'
import AvatarWrapperInner from './AvatarWrapperInner'
import AvatarRound from './AvatarRound'
import Img from './Img'
import OnlineStatusWrapper from './OnlineStatusWrapper'
import ContentWrapper from './ContentWrapper'
import ContentWrapperName from './ContentWrapperName'
import ContentName from './ContentName'
import Abbr from './Abbr'


export class ContactListItem extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    const item = this.props.item
    const OnlineStatus = styled.div`
      width: 100%;
      height: 100%;
      background-color: ${item.online === true ? "#0084FF" : "#929292"}
    `

    return (
      <ContactWrapper>
        <AvatarWrapper>
          <AvatarWrapperInner>
            <AvatarRound>
              <Img src={item.img} />
            </AvatarRound>
            <OnlineStatusWrapper>
              <OnlineStatus />
            </OnlineStatusWrapper>
          </AvatarWrapperInner>
        </AvatarWrapper>
        <ContentWrapper>
          <ContentWrapperName>
            <ContentName>
              {item.name}
            </ContentName>
            <div>
              <Abbr>
                Date
              </Abbr>
            </div>
          </ContentWrapperName>
        </ContentWrapper>
      </ContactWrapper>
    );
  }
}

ContactListItem.propTypes = {
  dispatch: PropTypes.func.isRequired,
  item: React.PropTypes.object,
};


function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(null, mapDispatchToProps)(ContactListItem);
