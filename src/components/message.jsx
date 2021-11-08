import React from 'react';
import styles from '../css/message.module.css'

export const Message = (props) => {
  if(props.answer===true){
    return <div className={styles.messagePlaceRight}>
          <div className = {styles.messageBody}>
            <h5 className = {styles.author}> {props.name}</h5>
            <div className = {styles.text}>
              <p>{props.text}</p>
            </div>
          </div>
        </div>
  }else{
    return <div className={styles.messagePlace}>
            <div className = {styles.messageBody}>
              <h5 className = {styles.authorLeft}> You</h5>
              <div className = {styles.text}>
                <p>{props.text}</p>
              </div>
            </div>
          </div>
  }
}