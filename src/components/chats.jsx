import { Link } from 'react-router-dom'
import styles from '../css/chats.module.css'

export const Chats = (props) => {
  return <div className = {styles.profilepage}>
            <div className = {styles.profileHeader}>
              <Link to={'/'} className = {styles.homepageLink}>&#8592;HomePage</Link>
              <div className = {styles.profileHeaderContent}>
                <div className = {styles.profileHeaderImg}></div>
                <div className = {styles.profileHeaderTitle}>CHATS</div>
              </div>
              <div className = {styles.profileHeaderRight}>+</div>
            </div>
            <div className = {styles.profileBody}>Profile Description</div>
         </div>
}