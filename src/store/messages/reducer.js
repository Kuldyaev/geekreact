import {ADD_NEW_MESSAGE,  ADD_NEW_CHAT_IN_MESSAGES, DELETE_CHAT_IN_MESSAGES} from './constants'
import { nanoid } from 'nanoid';

const messages = (state = {"first":[], "second":[], "third":[], "fourth":[]}, action) => {
  switch (action.type) {
    case ADD_NEW_MESSAGE: 
      const [chatId, newMessage] = action.payload;
      let nextMessageId = '';
      const nextMessageIdIsUnique = state[chatId].filter(message => message.id === nextMessageId);
      do {
        nextMessageId = nanoid(16);
      } while (nextMessageIdIsUnique.length > 0);





      return  {...state, [chatId]:[...state[chatId], {...newMessage, id: nextMessageId}]}
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