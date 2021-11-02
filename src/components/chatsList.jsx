import React from 'react';
import styles from '../css/chatlist.module.css'
import { ChatName } from '../components/chatname'

export const ChatsList = (props) => {

  return <div className = {styles.chatList}>
             { props.list.map((message)=>(
                <ChatName
                      contact = {message.contact}
                      id= {message.id}
                      key= {message.id} />
              ))}
         </div>
}