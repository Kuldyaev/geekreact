import {ADD_NEW_MESSAGE,  ADD_NEW_CHAT_IN_MESSAGES, DELETE_CHAT_IN_MESSAGES} from './constants'

const messages = (state = {}, action) => {
  switch (action.type) {
    case ADD_NEW_MESSAGE: 
      const [chatId, newMessage] = action.payload;
      return  {...state, [chatId]:{...state[chatId], [newMessage.id]: newMessage}}
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