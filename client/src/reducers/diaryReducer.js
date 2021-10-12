
import { GET_DIARIES, DELETE_DIARY, ADD_DIARY, DIARY_LOADING, FETCH_DIARY_PENDING, FETCH_DIARY_SUCCESS, FETCH_DIARY_ERROR  } from '../actions/types';

const initialState = {
        diaries: [],
        loading: false,
        pending: false,
        error: null

}

export default function(state = initialState, action) {
   switch(action.type) {
       case GET_DIARIES:
           console.log(action);
           return {
               ...state,
               diaries: action.payload, 
               loading: false
           }
       case DELETE_DIARY:
           return {
               ...state,
               diaries: state.diaries.filter(diary => diary._id !== action.payload)
           }
       case ADD_DIARY:
           return {
               ...state, 
               diaries: [action.payload, ...state.diaries]
           }
       case DIARY_LOADING:
           return {
               ...state,
               loading: true
           }

    
           default:
               return state;
   }
}

