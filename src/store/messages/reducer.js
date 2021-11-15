import {ADD_NEW_MESSAGE,  ADD_NEW_CHAT_IN_MESSAGES, DELETE_CHAT_IN_MESSAGES} from './constants'

const messages = (state = {1:[], 2:[], 3:[], 4:[]}, action) => {
  switch (action.type) {
    case ADD_NEW_MESSAGE: 
      return  {...state, [action.payload[0]]:[...state[action.payload[0]], action.payload[1]]}
    case  ADD_NEW_CHAT_IN_MESSAGES: 
      return  {...state, [action.payload]:[]}   
    case  DELETE_CHAT_IN_MESSAGES: 
      delete state[action.payload]
      return  state      
    default:
      return state
  }
}

export default messages