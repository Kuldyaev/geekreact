import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addNewMessageWithThunk } from '../store/messages/actions';
import styles from '../css/sendform.module.css';
import { messagesRef } from "../firebase";
import { nanoid } from 'nanoid';

export const SendForm = (props) => {
  const dispatch = useDispatch();
  const addNewMessageToStore = (newMessage) => {dispatch(addNewMessageWithThunk( props.id, newMessage))};

  const [newmessage, changeNewMessage] = useState('');

  const sendMessage = (event) => {
    event.preventDefault();
    let newMessage = {
      contact: props.id, 
      text: newmessage, 
      answer:false
    };
    if(newmessage.length>0){
      messagesRef.child(props.id).child(nanoid()).set(newMessage)
    }
    changeNewMessage('');
    document.getElementById('newmessage').value = '';
  }
 
  const handleChange = (event) => {
    changeNewMessage(event.target.value);
  }

  return <form onSubmit ={sendMessage}  className = {styles.sendingArea}>
            <div className={styles.newMessageArea}> 
              <input type="text" className={styles.newMessageTextArea} onChange={handleChange} id="newmessage" autoFocus ref={input => input && input.focus()}/> 
            </div>
            <div className={styles.buttonArea}>
              <input type="submit" className={styles.buttonSendMessage} value="ОТПРАВИТЬ" />
            </div>
          </form>
}