import {ADD_NEW_CHAT, DELETE_CHAT} from './constants'

const addNewChat = (id, name) => ({
	type: ADD_NEW_CHAT,
	payload:  [id, name]
})

const deleteChat = (id) => ({
	type: DELETE_CHAT,
	payload: id
})

export {addNewChat, deleteChat}