import {ADD_NEW_MESSAGE} from '../constants'

const addNewMessage = (newMessage) => ({
	type: ADD_NEW_MESSAGE,
	payload:  newMessage
})

export {addNewMessage}