import {ADD_NEW_CHAT, DELETE_CHAT} from './constants'

const addNewChat = (id, newChat) => ({
	type: ADD_NEW_CHAT,
	payload:  {id: id, name: newChat}
})

const deleteChat = (id) => ({
	type: DELETE_CHAT,
	payload: Number(id)
})

export {addNewChat, deleteChat}