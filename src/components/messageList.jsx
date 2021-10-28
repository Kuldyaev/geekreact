import React from 'react';
import styles from '../css/messagelist.module.css'
import { Message } from '../components/message'

export const MessageList = (props) => {

  return <div className = {styles.messageList}>
            <div className={styles.messagesArea}>
                { props.list.map((message)=>(
                    <Message
                      author = {message.author}
                      text = {message.text} 
                      key= {message.id} />
                  ))}
            </div>
          </div>
}