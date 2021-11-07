import React from 'react';
import styles from '../css/chatlist.module.css'

export const ChatName = (props) => {

  return <div className={styles.chatContact}>
           <div className={styles.chatImage} style={{backgroundImage: "url('../img/" + props.id + ".jpg')"}}>
           </div>
           <div className={styles.contactName}>
              {props.contact}
            </div>   
        </div>
}