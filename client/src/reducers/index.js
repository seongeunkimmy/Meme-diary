import { combineReducers } from 'redux';
import diaryReducer from './diaryReducer.js';
import diaries from './diariesReducer.js';

export default combineReducers({
    // diary: diaryReducer,
    diaries
});
