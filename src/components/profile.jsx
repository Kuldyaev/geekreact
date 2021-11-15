import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import styles from '../css/profile.module.css'
import Checkbox from '@material-ui/core/Checkbox';
import {changeCheckBox} from '../store/profile/actions'

export const Profile = (props) => {

  const checkbox = useSelector((state) => state.profile);
  const dispatch = useDispatch();

  const checkCheckBox = () => {dispatch(changeCheckBox)};

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
                  <Checkbox onClick={checkCheckBox} checked={checkbox.checkbox}/>
                  <p>data in store:</p>
                  <p>{String(checkbox.checkbox)}</p>
               </div> 
            </div>
         </div>
}