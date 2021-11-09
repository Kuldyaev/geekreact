import {ADD_NEW_MESSAGE} from '../constants'

const messages = (state = [], action) => {
  switch (action.type) {
    case ADD_NEW_MESSAGE:
      return state.concat([{...action.payload, id: (state.length>0 ?state[state.length - 1].id+1  :0)}])
    default:
      return state
  }
}

export default messages