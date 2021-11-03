import React from 'react';
import { Link } from 'react-router-dom'
import styles from '../css/chatlist.module.css'

export const ChatName = (props) => {

  return <div className={styles.chatContact}>
          <Link Link to={'/register'} className={styles.chatContactFirstBlock}>  
             <div className={styles.chatImageBlock}> 
                <div className={styles.chatImage} style={{backgroundImage: "url('../img/" + props.id + ".jpg')"}}></div>
             </div>
             <div className={styles.contactName}>
                {props.contact}
              </div>
          </Link>  
          <div className={styles.contactEdit}>...</div>
        </div>
}