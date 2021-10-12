import axios from 'axios';
import { GET_DIARIES, DELETE_DIARY, ADD_DIARY, DIARY_LOADING } from '../actions/types';




// export const getDiaries = () => dispatch => {
//        axios
//          .get('/api/diary')
//          .then(res => 
//             dispatch({
//                 type: GET_DIARIES,
//                 payload: res.data
//             })
//             )
//   }

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
//         diaries: diaries
//     }
// }

// export const fetchDiaryError = (error) => {
//     return {
//         type: FETCH_DIARY_ERROR,
//         error: error
//     }
// }
 
export const diaryLoading = () => {
    return {
        type: DIARY_LOADING
    }
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


