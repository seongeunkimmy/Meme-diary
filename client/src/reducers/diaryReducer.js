
import { GET_DIARIES, DELETE_DIARY, ADD_DIARY } from '../actions/types';

const initialState = {
        diaries: []
    
}

export default function(state = initialState, action) {
   switch(action.type) {
       case GET_DIARIES:
           console.log(action);
           return {
               ...state,
               diaries: action.payload
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
    
           default:
               return state;
   }
}