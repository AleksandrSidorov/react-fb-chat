import {
  CHANGE_NAME
} from './constants'

export function changeContactname(name) {
  return {
    type: CHANGE_NAME,
    name,
  }
}
