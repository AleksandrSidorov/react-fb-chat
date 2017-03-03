import { fromJS } from 'immutable'

import {
  TOGGLE_SETTINGS
} from './constants'

const initData = {
  settings: true,
}

const initialState = fromJS(initData)

function chatReducer(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_SETTINGS:
      return state
        .update('settings', settings => !settings)
    default:
      return state
  }
}

export default chatReducer
