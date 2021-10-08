import { combineReducers } from 'redux';
import diaryReducer from './diaryReducer.js';

export default combineReducers({
    diary: diaryReducer
});
