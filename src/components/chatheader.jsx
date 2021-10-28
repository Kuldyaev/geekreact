import React from 'react';
import styles from '../css/chatheader.module.css'

export const ChatHeader = (props) => {
  return <div className = {styles.headerArea}>
            <div className = {styles.headerBody}>
              <div className = {styles.chatimage}></div>
              <div className = {styles.chatname}>ChatBot</div>
            </div> 
          </div>
}