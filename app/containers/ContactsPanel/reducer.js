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
      const id = action.id
      const newcl = state.get('contactslist').slice()
      const index = newcl.findIndex(x => x.id == id)
      console.log(newcl, id, index, action.text);
      newcl[index].messages.push({ incoming: false, text: action.text })
      console.log(newcl)
      return state
        .set('contactslist', newcl)
    default:
      return state
  }
}

export default contactsReducer
