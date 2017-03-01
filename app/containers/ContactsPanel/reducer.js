import { fromJS } from 'immutable'

import {
  CHANGE_NAME
} from './constants'

const initData = {
  contactname: '',
  contactslist: false
}

const fakeContacts = [
  {
    name: "John Doe",
    messages: [
      {
        text: "Hello"
      },
      {
        text: "Hi"
      }
    ]
  },
  {
    name: "Jane Doe",
    messages: [
      {
        text: "Good morning"
      },
      {
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
    default:
      return state
  }
}

export default contactsReducer
