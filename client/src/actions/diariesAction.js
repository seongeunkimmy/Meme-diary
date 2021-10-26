import {FETCH_DIARY_SUCCESS, DELETE_DIARY, ADD_DIARY, DIARY_LOADING, ADD_DIARY_FAIL } from './types'
// import  axios  from 'axios';
import { tokenConfig } from './authAction';
import { returnErrors } from './errorAction';
import api from '../api/api.js'

const getDiarySuccess = (diaries) => {
  return {
    type: FETCH_DIARY_SUCCESS,
    diaries: diaries
  }
}


export const getDiary = id => (dispatch, getState) => {
    dispatch(diaryLoading());
        api.get(`/api/diary/${id}`, tokenConfig(getState))
        .then(res => {
            dispatch(getDiarySuccess(res.data))
        })
        .catch(err=> {
            dispatch(returnErrors(err.response.data, err.response.status))
        })
    }


export const diaryLoading = () => {
    return {
        type: DIARY_LOADING
    }
}


export const deleteDiary = id => (dispatch, getState) => {
    api.delete(`/api/diary/delete/${id}`, tokenConfig(getState))
         .then(res => 
            dispatch({
                type: DELETE_DIARY,
                payload: id
            }))
            .catch (err => 
                dispatch(returnErrors(err.response.data, err.response.status))
                )
  
}

export const addDiary = diary => (dispatch, getState) => {

    const body = JSON.stringify(diary);

    api
       .post('/api/diary', body, tokenConfig(getState))
       .then(res => 
        dispatch({
            type: ADD_DIARY,
            payload: res.data
        })
        )
        .catch (err => {
            dispatch(returnErrors(err.response.data, err.response.status, 'ADD_DIARY_FAIL'));
            dispatch({type: ADD_DIARY_FAIL})
         });
        }
           
    
