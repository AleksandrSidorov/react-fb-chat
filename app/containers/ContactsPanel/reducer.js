import { fromJS } from 'immutable'

import { fakeContacts } from './contactsData'

import {
  CHANGE_NAME,
  SET_CURRENT_CONTACT,
  ADD_MESSAGE,
} from './constants'

const initData = {
  contactname: '',
  currentcontact: 'johndoe',
  //contactslist: false
  contactslist: fakeContacts
}

//const initialState = fromJS(initData).set('contactslist', fakeContacts)

const initialState = fromJS(initData)

function contactsReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_NAME:
      return state
        .set('contactname', action.name.replace(/@/gi, ''))
    case SET_CURRENT_CONTACT:
      return state
        .set('currentcontact', action.id)
    case ADD_MESSAGE:
      const current = state.get('currentcontact')
      const index = state.get('contactslist').findIndex(x => x.get('id') == current)
      const message = fromJS({ incoming: false, text: action.text })
      const newState = state.updateIn(['contactslist', index, 'messages'], arr => arr.push(message))
      return newState
    default:
      return state
  }
}

export default contactsReducer
