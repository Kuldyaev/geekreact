import { combineReducers } from 'redux'
import profile from './profile/reducer'
import chats from './chats/reducer'
import messages from './messages/reducer'


const reducer = combineReducers({
    profile,
    chats,
    messages
});

export default reducer