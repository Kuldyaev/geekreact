import { Link } from 'react-router-dom'
import { ChatName } from '../components/chatname'
import styles from '../css/chats.module.css'

export const Chats = (props) => {
  console.log(props);

  return <div className = {styles.profilepage}>
            <div className = {styles.profileHeader}>
              <Link to={'/'} className = {styles.homepageLink}>&#8592;HomePage</Link>
              <div className = {styles.profileHeaderContent}>
                <div className = {styles.profileHeaderImg}></div>
                <div className = {styles.profileHeaderTitle}>CHATS</div>
              </div>
              <div className = {styles.profileHeaderRight}>+</div>
            </div>
            <div className = {styles.profileBody}>
              <div className = {styles.chatList}>
                 { props.list.map((message)=>(
                    <ChatName
                          contact = {message.name}
                          id= {message.id}
                          key= {message.id} />
                  ))}
             </div>
            </div>
         </div>
}