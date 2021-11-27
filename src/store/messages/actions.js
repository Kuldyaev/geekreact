import {ADD_NEW_MESSAGE, ADD_NEW_CHAT_IN_MESSAGES, DELETE_CHAT_IN_MESSAGES} from './constants'
import { messagesRef } from "../../firebase";

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

export const addNewMessageWithThunk = (chatId, newMessage) =>(dispatch) =>{
	dispatch(addNewMessage(chatId, newMessage));
	if (chatId === 'first'){
		const botMessage = {
			contact: chatId, 
			text: "Hello! I'm ChatBot!", 
			answer: true
		};
		dispatch(addNewMessage(chatId, botMessage));
	}
} 

const getPayloadFromSnapshot = (snapshot) => {
	let newMessage = {};
  	snapshot.forEach((chat) => {
		newMessage[chat.key] = chat.val();
		});
  	return  newMessage
};

export const initMessagesTracking = (chatId) => (dispatch) => {
	messagesRef.child(chatId).on("child_changed", (snapshot) => {
	  const payload = getPayloadFromSnapshot(snapshot);
	  console.log(payload);
	  dispatch(addNewMessage(chatId, payload));
	});
  
	messagesRef.child(chatId).on("child_added", (snapshot) => {
	  const payload = getPayloadFromSnapshot(snapshot);
	  console.log(payload);
	  dispatch(addNewMessage(chatId, payload));
	});
  };

  export const deleteChatWithFirebaseFromMessages = (id) =>(dispatch) => {
	messagesRef.child(id).remove()
		.then(dispatch(deleteChatInMessages(id)));
}