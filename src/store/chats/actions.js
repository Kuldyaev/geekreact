import {ADD_NEW_CHAT, DELETE_CHAT, CHANGE_CHATS} from './constants';
import { chatsRef } from "../../firebase";

const getPayloadFromSnapshot = (snapshot) => {
	let newChat = {};
  	snapshot.forEach((chat) => {
		  newChat[chat.key] = chat.val();
		});
  	return  newChat
};

export const addNewChat = (id, name) => ({
	type: ADD_NEW_CHAT,
	payload:  [id, name]
});

export const deleteChat = (id) => ({
	type: DELETE_CHAT,
	payload: id
});

export const deleteChatWithFirebase = (id) =>(dispatch) => {
	chatsRef.child(id).remove()
		.then(dispatch(deleteChat(id)))
}

export const initChatsTracking = () => (dispatch) => {
	chatsRef.on("child_changed", (snapshot) => {
	  const payload = getPayloadFromSnapshot(snapshot);
	  dispatch({
		type: CHANGE_CHATS,
		payload
	  });
	});
  
	chatsRef.on("child_added", (snapshot) => {
	  const payload = getPayloadFromSnapshot(snapshot);
	  dispatch({
		type: CHANGE_CHATS,
		payload
	  });
	});
  };