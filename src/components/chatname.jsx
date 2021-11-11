import React from 'react';
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import styles from '../css/chatlist.module.css'
import {deleteChat} from '../actions/chats'
import { deleteChatInMessages } from '../actions/messages'

export const ChatName = (props) => {

  const dispatch = useDispatch();
  const deleteChatInStore = (event) => {dispatch(deleteChat(event.currentTarget.dataset.id)); dispatch(deleteChatInMessages(event.currentTarget.dataset.id))};


  return <div className={styles.chatContact}>
          <Link to={`/chat/${props.id}`} className={styles.chatContactFirstBlock} key={props.id}>  
            <div className={styles.chatImageBlock}> 
              <div className={styles.chatImage} style={{backgroundImage: "url('../img/" + props.id + ".jpg')"}}></div>
            </div>
            <div className={styles.contactName}>
              {props.contact}
            </div>
          </Link>  
          <div className={styles.contactEdit}>
            <h4 className={styles.contactEditText}>...</h4>
            <button onClick={deleteChatInStore} data-id={props.id} className={styles.deleteBtn}>Delete</button>
          </div>
        </div>
}