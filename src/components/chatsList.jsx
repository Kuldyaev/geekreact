import React from 'react';
import styles from '../css/messagelist.module.css'
import { ChatName } from '../components/chatname'

export const ChatsList = (props) => {

  return <div className = {styles.messageList}>
            <div className={styles.messagesArea}>
                { props.list.map((message)=>(
                    <ChatName
                      author = {message.author}
                      text = {message.text} 
                      key= {message.id} />
                  ))}
            </div>
          </div>
}