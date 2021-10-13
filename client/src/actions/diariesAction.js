import {FETCH_DIARY_SUCCESS, DELETE_DIARY, ADD_DIARY, DIARY_LOADING, DELETE_DIARY_SUCCESS } from './types'
import api from '../api/api.js'

const getDiarySuccess = (diaries) => {
  return {
    type: FETCH_DIARY_SUCCESS,
    diaries: diaries
  }
}

// const deleteDiarySuccess = (response) => {
//     return {
//         type: DELETE_DIARY_SUCCESS,
//         response: response
//     }
// }

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


// export const deleteDiary = (id) => {
//     return (dispatch) => {
//         api.delete(`/api/diary/${id}`)
//         .then(response => {
//            dispatch(deleteDiarySuccess(response))
//         })
//         .catch(error => {
//             console.log(error)
//         })
//     }
  
//         }

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