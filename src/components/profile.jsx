import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import styles from '../css/profile.module.css'
import Checkbox from '@material-ui/core/Checkbox';

export const Profile = (props) => {

  const checkbox = useSelector((state) => state.status);

  return <div className = {styles.profilepage}>
            <div className = {styles.profileHeader}>
              <Link to={'/'} className = {styles.homepageLink}>&#8592;HomePage</Link>
              <div className = {styles.profileHeaderContent}>
                <div className = {styles.profileHeaderImg}></div>
                <div className = {styles.profileHeaderTitle}>PROFILE</div>
                
              </div>
              <div className = {styles.profileHeaderRight}></div>
              
            </div>
            <div className = {styles.profileBody}>
               <div> Profile Description</div>
               <div>
                  <p>Checkbox for test</p>
                  <Checkbox defaultChecked={checkbox.checkbox}/>
               </div> 
            </div>
         </div>
}