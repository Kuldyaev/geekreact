import styles from '../css/chatlist.module.css'
import { ChatName } from '../components/chatname'

export const ChatsList = (props) => {

  return <div className = {styles.chatList}>
             { props.list.map((message)=>(
                <ChatName
                      contact = {message.name}
                      id= {message.id}
                      key= {message.id} 
                      img = {message.img}/>
              ))}
         </div>
}