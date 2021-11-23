import { Link } from 'react-router-dom'
import styles from '../css/home.module.css'

const authed = false;

const LogBlock = () => {
  return <div className = {styles.navbar}>
            <Link to={'/signup'} className = {styles.homepageLink}>SignUp</Link>
            <Link to={'/login'} className = {styles.homepageLink}>LogIn</Link>
          </div>
}

const ProfileLink = () => {
  return <div className = {styles.navbar}>
            <div className = {styles.homepageLinkImgProfile}></div>
            <Link to={'/profile'} className = {styles.homepageLink}>Profile</Link>
          </div> 
}

export const Home = (props) => {

  return <div className = {styles.homepagebase}>
          {!authed && <LogBlock/> }
          { authed && <ProfileLink/> }
          <div className = {styles.homepage}>
            <div className = {styles.homepageHalf}>
              <Link to={'/testAPI'} className = {styles.homepageLink}>
                 <h3 className = {styles.homepageLinkText}>test Page for API</h3>
              </Link>
            </div>
            <div className = {styles.homepageHalf}>
              <Link to={'/allchats'} className = {styles.homepageLink}>
                <div className = {styles.homepageLinkImgChats} ></div>
                <h3 className = {styles.homepageLinkText}>chats</h3>
              </Link>
            </div>
          </div>
         </div> 
}