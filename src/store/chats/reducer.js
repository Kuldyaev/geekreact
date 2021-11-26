import {ADD_NEW_CHAT, DELETE_CHAT, CHANGE_CHATS} from './constants'

const chats = (state = {}, action) => {
  switch (action.type) {
    case ADD_NEW_CHAT:
      const [id, name] = action.payload;
      return {...state, [id]: {name: name, id: id, img: 0}}
    case DELETE_CHAT:{
      if(!action.payload){
        return state
      }
      const newChats = {...state};
      delete newChats[action.payload];
      return newChats
    }
      return state
    case CHANGE_CHATS:
      return {...state,[action.payload.id]:action.payload}
    default:
      return state
  }
}

export default chats