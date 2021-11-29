import styles from '../css/chatheader.module.css'

export const ChatHeader = (props) => {
  return <div className = {styles.headerArea}>
            <div className = {styles.headerBody}>
              <div className = {styles.chatimage} style={{backgroundImage: "url('../img/" + props.img + ".jpg')"}}></div>
              <div className = {styles.chatname}>{props.name}</div>
            </div> 
          </div>
}