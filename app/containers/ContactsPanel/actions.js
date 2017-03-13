import {
  CHANGE_NAME,
  SET_CURRENT_CONTACT,
  ADD_MESSAGE,
} from './constants'

export function changeContactname(name) {
  return {
    type: CHANGE_NAME,
    name,
  }
}

export function setCurrentContact(id) {
  return {
    type: SET_CURRENT_CONTACT,
    id,
  }
}

export function addMessage(text) {
  return {
    type: ADD_MESSAGE,
    text,
  }
}
