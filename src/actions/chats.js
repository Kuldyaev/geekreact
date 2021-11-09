import {ADD_NEW_CHAT, DELETE_CHAT} from '../constants'

const addNewChat = (newChat) => ({
	type: ADD_NEW_CHAT,
	payload:  newChat
})

const deleteChat = (id) => ({
	type: DELETE_CHAT,
	payload: Number(id)
})

export {addNewChat, deleteChat}