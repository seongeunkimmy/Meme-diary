import axios from 'axios';
import { GET_DIARIES, DELETE_DIARY, ADD_DIARY } from '../actions/types';



export const getDiaries = () => dispatch => {
       axios
         .get('/api/diary')
         .then(res => 
            dispatch({
                type: GET_DIARIES,
                payload: res.data
            })
            )
  }



export const deleteDiary = id => dispatch => {
    axios.delete(`/api/diary/${id}`)
         .then(res => 
            dispatch({
                type: DELETE_DIARY,
                payload: id
            }))
  
}

export const addDiary = diary => dispatch => {
    axios
       .post('/api/diary', diary)
       .then(res => 
        dispatch({
            type: ADD_DIARY,
            payload: res.data
        })
        )
    
}

