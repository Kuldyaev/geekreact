import { Link } from 'react-router-dom';
import { useSelector } from "react-redux";
import { getIsAuth } from "../store/user/selectors";
import { auth } from "../firebase/index";
import styles from '../css/home.module.css';

const LogBlock = () => {
  return <div className = {styles.navbar}>
            <Link to={'/signup'} className = {styles.homepageLink}>SignUp</Link>
            <Link to={'/login'} className = {styles.homepageLink}>LogIn</Link>
          </div>
}

const ProfileLink = () => {

  const signOutFunction = async (e) => {
    e.preventDefault();
    try {
      await auth.signOut()
     } catch (error) {
      console.log(error.message);
    }
  };


  return <div className = {styles.navbar}>
            <div className = {styles.homepageLinkImgProfile}></div>
            <Link to={'/profile'} className = {styles.homepageLink}>Profile</Link>
            <button onClick={signOutFunction}>SignOut</button>
          </div> 
}

export const Home = (props) => {

  const authed = useSelector(getIsAuth);

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