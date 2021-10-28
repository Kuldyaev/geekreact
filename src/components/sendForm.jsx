import React, { useState } from 'react';
import styles from '../css/sendform.module.css'

export const SendForm = (props) => {

  const [newmessage, changeNewMessage] = useState('');

  const sendMessage = () => {
    if(newmessage.length>0){ props.addMessage(newmessage); }
    changeNewMessage('');
    document.getElementById('newmessage').value = '';
  }
 
  const handleChange = (event) => {
    changeNewMessage(event.target.value);
  }

  return <form action ='#'  className = {styles.sendingArea}>
            <div className={styles.newMessageArea}> 
              <input type="text" className={styles.newMessageTextArea} onChange={handleChange} id="newmessage"></input>
            </div>
            <div className={styles.buttonArea}>
              <input type="submit" className={styles.buttonSendMessage} value="ОТПРАВИТЬ" onClick={sendMessage}></input>
            </div>
          </form>
}