import {ADD_NEW_MESSAGE, ADD_NEW_CHAT_IN_MESSAGES, DELETE_CHAT} from '../constants'

export const addNewMessage = (chatId, newMessage) => ({
	type: ADD_NEW_MESSAGE,
	payload:  [chatId, newMessage]
})

export const addNewChatInMessages = (chatId) => ({
	type: ADD_NEW_CHAT_IN_MESSAGES,
	payload: chatId
})