import React from 'react';
import styles from '../css/sendform.module.css'

export const SendForm = (props) => {
  return <form action='#'  className = {styles.sendingArea}>
            <div className={styles.newMessageArea}> 
              <input type="text" className={styles.newMessageTextArea}></input>
            </div>
            <div className={styles.buttonArea}>
              <input type="submit" className={styles.buttonSendMessage} value="ОТПРАВИТЬ"></input>
            </div>
          </form>
}