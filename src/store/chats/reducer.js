import {ADD_NEW_CHAT, DELETE_CHAT} from './constants'

const chats = (state = [
    {name: 'ChatBot',  id: 'first', img: 1}, 
    {name: 'Vasiliy',  id: 'second', img: 2},
    {name: 'Alisa',    id: 'third', img: 3},
    {name: 'Siri',     id: 'fourth', img: 4}
  ], action) => {
  switch (action.type) {
    case ADD_NEW_CHAT:
      const [id, name] = action.payload;
      return state.concat([{name: name, id: id, img: 0}])
    case DELETE_CHAT:
      return state.filter(chat => chat.id !== action.payload)
    default:
      return state
  }
}

export default chats