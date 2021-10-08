import axios from 'axios';
import { GET_DIARIES, DELETE_DIARY, ADD_DIARY, DIARY_LOADING } from '../actions/types';


export const getDiaries = () => dispatch => {
    dispatch(setDiaryLoading());
    axios
       .get('/api/diary')
       .then(res => 
        dispatch({
            type: GET_DIARIES,
            payload: res.data
        })
        )
}

export const deleteDiary = id => {
    return {
        type: DELETE_DIARY,
        payload: id
        }
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

export const setDiaryLoading = () => {
     return {
         type: DIARY_LOADING
     }
}