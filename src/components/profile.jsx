import { Link } from 'react-router-dom'
import styles from '../css/profile.module.css'

export const Profile = (props) => {
  return <div className = {styles.profilepage}>
            <div className = {styles.profileHeader}>
              <Link to={'/'} className = {styles.homepageLink}>&#8592;HomePage</Link>
              <div className = {styles.profileHeaderContent}>
                <div className = {styles.profileHeaderImg}></div>
                <div className = {styles.profileHeaderTitle}>PROFILE</div>
              </div>
              <div className = {styles.profileHeaderRight}></div>
            </div>
            <div className = {styles.profileBody}>Profile Description</div>
         </div>
}