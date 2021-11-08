import React, { useState } from 'react';
import styles from '../css/sendform.module.css'

export const SendForm = (props) => {
  const [newmessage, changeNewMessage] = useState('');

  const sendMessage = (event) => {
    event.preventDefault();
    if(newmessage.length>0){props.addMessage(props.id, newmessage, false)}
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