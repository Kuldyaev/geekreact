import {CHECK_ON, CHECK_OFF} from '../constants'

const status = (state = {checkbox: false}, action) => {
  switch (action.type) {
    case CHECK_ON:
      return {checkbox: true }
    case CHECK_OFF:
      return {checkbox: false }
    default:
      return state
  }
}

export default status