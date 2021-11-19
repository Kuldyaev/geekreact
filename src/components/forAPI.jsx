import { useEffect } from "react";
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import styles from '../css/forAPI.module.css'
import { Loader } from "../components/loader";
import { Error } from "../components/error";
import {getBooksWithThunk} from "../store/testAPI/actions";
import {getPics, getLoading, getError} from '../store/testAPI/selectors';

export const ForAPI = (props) => {

  const dispatch = useDispatch();

  const GetPic = () => {
    dispatch(getBooksWithThunk);
  }

  useEffect(() => {
    GetPic();
  }, [])

  const isError = useSelector(getError)
  const isLoading = useSelector(getLoading)
  const pic = useSelector(getPics);
  console.log(pic.image);

  return <div>
      <div className = {styles.top}>
        <Link to={'/'} className = {styles.homepageLink}>HomePage</Link>
        <h5>Test Page for API</h5>
        <button onClick={GetPic}>отправить запрос еще раз</button>
      </div>
      <div className = {styles.contentplace}>
        {isLoading &&<Loader/>}
        {isError &&<Error reload={GetPic}/>}
        {!isLoading && !isError && <img src={pic.image} className = {styles.img} alt="случайная картинка с едой"></img>}
      </div>
      <div className = {styles.footer}>
        <h6>материал с API https://foodish-api.herokuapp.com/api/</h6>  
      </div>
    </div>
}