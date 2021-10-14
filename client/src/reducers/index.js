import { combineReducers } from 'redux';
import diaries from './diariesReducer.js';
import auth from './authReducer.js';
import error from './errorReducer.js';

export default combineReducers({
    // diary: diaryReducer,
    diaries,
    auth,
    error
});
