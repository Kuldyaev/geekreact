import {ADD_NEW_MESSAGE, ADD_NEW_CHAT_IN_MESSAGES, DELETE_CHAT_IN_MESSAGES} from '../constants'

export const addNewMessage = (chatId, newMessage) => ({
	type: ADD_NEW_MESSAGE,
	payload:  [chatId, newMessage]
})

export const addNewChatInMessages = (chatId) => ({
	type: ADD_NEW_CHAT_IN_MESSAGES,
	payload: chatId
})

export const deleteChatInMessages = (chatId) => ({
	type: DELETE_CHAT_IN_MESSAGES,
	payload: chatId
})