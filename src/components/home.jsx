import { Link } from 'react-router-dom'
import styles from '../css/home.module.css'

export const Home = (props) => {
  return <div className = {styles.homepage}>
            <div className = {styles.homepageHalf}>
              <Link to={'/profile'} className = {styles.homepageLink}>
                <div className = {styles.homepageLinkImgProfile}></div>
                <h3 className = {styles.homepageLinkText}>profile</h3>
              </Link>
            </div>
            <div className = {styles.homepageHalf}>
              <Link to={'/allchats'} className = {styles.homepageLink}>
                <div className = {styles.homepageLinkImgChats} ></div>
                <h3 className = {styles.homepageLinkText}>chats</h3>
              </Link>
            </div>
          </div>
}