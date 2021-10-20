import axios from 'axios';
import { returnErrors } from './errorAction'
import api from '../api/api';
import {
    USER_LOADED, 
    USER_LOADING, 
    AUTH_ERROR, 
    LOGIN_SUCCESS, 
    LOGIN_FAIL, 
    LOGOUT_SUCCESS, 
    REGISTER_SUCCESS, 
    REGISTER_FAIL, 
    CLEAR_ERRORS
} from './types';

//load user
export const loadUser = () => (dispatch, getState) => {
    dispatch({type: USER_LOADING});

    
    api.get('/api/auth/user', tokenConfig(getState))
      .then(res => dispatch({
          type: USER_LOADED,
          payload: res.data
      }))
      .catch(err => {
          dispatch(returnErrors(err.response.data, err.response.status));
          dispatch({
              type: AUTH_ERROR
          });
      
      });
    };

//register user 
export const register = ({firstName, lastName, email, password}) => dispatch => {
  
 const config = {
     headers: {
         'Content-Type': 'application/json'
     }
 }

 const body = JSON.stringify({firstName, lastName, email, password});
 
 api.post('/api/user', body, config)
    .then(res => dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data
    }))
    .then(res => dispatch({
        type: CLEAR_ERRORS
    }))
    .catch(err => {
        dispatch(returnErrors(err.response.data, err.response.status, 'REGISTER_FAIL'));
        dispatch({
            type: REGISTER_FAIL
        })
    }
    )
}
  
//log-out
export const logout = () => {
    return {
        type: LOGOUT_SUCCESS
    }
}


//Get token and add to headers
const tokenConfig = getState => {

const token = getState().auth.token;
const config = {
    headers: {
        "Content-type": "application/json"
    }
}

if(token) {
    config.headers['x-auth-token'] = token;
}
return config;
}

