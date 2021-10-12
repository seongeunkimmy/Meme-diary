

// export const FETCH_DIARY_PENDING = 'FETCH_DIARY_PENDING';
// export const FETCH_DIARY_SUCCESS = 'FETCH_DIARY_SUCCESS';
// export const FETCH_DIARY_ERROR = 'FETCH_DIARY_ERROR';

// export const fetchDiaryPending = () => {
//     return {
//         type: FETCH_DIARY_PENDING
//     }
// }

//  export const fetchDiarySuccess = (diaries) => {
//     return {
//         type: FETCH_DIARY_SUCCESS,
//         payload: {diaries}
//     }
// }

// export const fetchDiaryError = (error) => {
//     return {
//         type: FETCH_DIARY_ERROR,
//         payload: {error}
//     }
// }
 



// function handleErrors(response) {
//     if (!response.ok) {
//       throw Error(response.statusText);
//     }
//     return response;
//   }

import {FETCH_DIARY_SUCCESS, DELETE_DIARY, ADD_DIARY, DIARY_LOADING } from '../actions/types'
import api from '../api/api.js'

const getDiarySuccess = (diaries) => {
  return {
    type: FETCH_DIARY_SUCCESS,
    diaries: diaries
  }
}

export const getDiary = () => {
    return (dispatch) => {
        api.get('/api/diary')
        .then(res => {
            dispatch(getDiarySuccess(res.data))
        })
        .catch(error => {
            console.log(error)
        })
    }
}

export const diaryLoading = () => {
    return {
        type: DIARY_LOADING
    }
}


export const deleteDiary = id => dispatch => {
    api.delete(`/api/diary/${id}`)
         .then(res => 
            dispatch({
                type: DELETE_DIARY,
                payload: id
            }))
  
}

export const addDiary = diary => dispatch => {
    api
       .post('/api/diary', diary)
       .then(res => 
        dispatch({
            type: ADD_DIARY,
            payload: res.data
        })
        )
    
}