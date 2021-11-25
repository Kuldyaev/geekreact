import {ADD_NEW_CHAT, DELETE_CHAT} from './constants';

export const addNewChat = (id, name) => ({
	type: ADD_NEW_CHAT,
	payload:  [id, name]
})

export const deleteChat = (id) => ({
	type: DELETE_CHAT,
	payload: id
})