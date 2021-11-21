import { combineReducers } from 'redux'
import profile from './profile/reducer'
import chats from './chats/reducer'
import messages from './messages/reducer'
import { picsReducer } from './testAPI/reducer'


const reducer = combineReducers({
    profile,
    chats,
    messages,
    picsReducer
});

export default reducer