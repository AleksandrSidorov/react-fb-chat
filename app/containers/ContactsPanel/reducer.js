import { fromJS } from 'immutable'

import {
  CHANGE_NAME
} from './constants'

import initData from './initData'

const initialState = fromJS(initData)

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
