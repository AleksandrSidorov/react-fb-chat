import {
  CHANGE_NAME,
  SET_CURRENT_CONTACT
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
