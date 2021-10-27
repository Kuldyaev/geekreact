import React from 'react';
import styles from '../css/messagelist.module.css'
import { Message } from '../components/message'

export const MessageList = (props) => {
  return <div className = {styles.messageList}>
            <div className={styles.messagesArea}>
                  <Message
                  author = {"Anonim"}
                  text = {"Как пройти в библиотеку?"}    />
                  <Message
                  author = {"Vladimir"}
                  text = {"Это в 2 часа ночи?"}    />
                  <Message
                  author = {"Anonim"}
                  text = {'Да. Сегодня акция "Ночь в музее"'}    />
                  <Message
                  author = {"Vladimir"}
                  text = {"Тогда вам два квартала прямо и один налево."}    />
            </div>
          </div>
}