import {SET_DATA} from './constants'
import {SET_LOADING} from './constants'
import {SET_ERROR} from './constants'

export const setLoading = (status) => ({
    type: SET_LOADING,
    payload: status
  });
  
  export const setError = (status) => ({
    type: SET_ERROR,
    payload: status
  });
  
  export const setData = (books) => ({
    type: SET_DATA,
    payload: books
  });

  const BOOKS_API = "https://foodish-api.herokuapp.com/api/";

  export const getBooksWithThunk = async (dispatch) => {
  
    dispatch(setLoading(true))
    dispatch(setError(false))
    dispatch(setData({}))
  
    try {
      const response = await fetch(BOOKS_API);
      console.log(response);

      if (!response.ok) {
        throw new Error('any error')
      }
      
     const result = await response.json()
  
      dispatch(setData(result))
    } catch (e) {
      console.error(e);
      dispatch(setError(true))
    }
  
    dispatch(setLoading(false))
  }