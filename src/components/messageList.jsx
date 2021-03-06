import styles from '../css/messagelist.module.css'
import { Message } from '../components/message'

export const MessageList = (props) => {

  return <div className = {styles.messageList}>
            <div className={styles.messagesArea}>
            { Object.values(props.list).map((message)=>(
                <Message
                  name={props.name}
                  answer = {message.answer}
                  contact = {message.contact}
                  text = {message.text} 
                  key= {message.id} />
              ))}
            </div>
          </div>
}