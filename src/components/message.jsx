import React from 'react';
import styles from '../css/message.module.css'

export const Message = (props) => {
  return <div className={styles.messagePlace}>
            <div className = {styles.messageBody}>
              <h5 className = {styles.author}> {props.author}</h5>
              <div className = {styles.text}>
                <p>{props.text}</p>
              </div>
            </div>
          </div>
}