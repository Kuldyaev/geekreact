import {ADD_NEW_CHAT, DELETE_CHAT} from '../constants'

const chats = (state = [
    {
      name: 'ChatBot',
      id: 1,
    },
    {
      name: "Vasiliy",
      id: 2,
    },
    {
      name: "Alisa",
      id: 3,
    },
    {
      name: "Siri",
      id: 4,
    }
  ], action) => {
  switch (action.type) {
    case ADD_NEW_CHAT:
      return state.concat([{name: action.payload, id: (state.length>0 ?state[state.length - 1].id+1  :0)}])
    case DELETE_CHAT:
      return state.filter(chat => chat.id !== action.payload)
    default:
      return state
  }
}

export default chats