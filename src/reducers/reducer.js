import { combineReducers } from 'redux'
import status from './status'
import chats from './chats'
import messages from './messages'


const reducer = combineReducers({
    status,
    chats,
    messages
});

export default reducer