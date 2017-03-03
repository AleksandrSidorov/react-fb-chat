import { fromJS } from 'immutable'

import {
  CHANGE_NAME,
  SET_CURRENT_CONTACT
} from './constants'

const initData = {
  contactname: '',
  currentcontact: 'johndoe',
  contactslist: false
}

const fakeContacts = [
  {
    id: "johndoe",
    name: "John Doe",
    online: true,
    img: "http://www.fillmurray.com/100/100",
    messages: [
      {
        incoming: false,
        text: "Hello"
      },
      {
        incoming: true,
        text: "Hi"
      }
    ]
  },
  {
    id: "janedoe",
    name: "Jane Doe",
    online: false,
    img: "http://www.placecage.com/100/100",
    messages: [
      {
        incoming: true,
        text: "Good morning"
      },
      {
        incoming: false,
        text: "Greetings"
      }
    ]
  }
]

const initialState = fromJS(initData).set('contactslist', fakeContacts)

function contactsReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_NAME:
      return state
        .set('contactname', action.name.replace(/@/gi, ''))
    case SET_CURRENT_CONTACT:
      return state
        .set('currentcontact', action.id)
    default:
      return state
  }
}

export default contactsReducer
