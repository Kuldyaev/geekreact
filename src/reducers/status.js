import {CHECK_ON} from '../constants'

const status = (state = {checkbox: false}, action) => {
  switch (action.type) {
    case CHECK_ON:
      return {checkbox: !state.checkbox }
    default:
      return state
  }
}

export default status