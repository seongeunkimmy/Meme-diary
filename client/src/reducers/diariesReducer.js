// import {FETCH_DIARY_PENDING, FETCH_DIARY_SUCCESS, FETCH_DIARY_ERROR } from '../actions/types';

// const initialState = {
//     diaries: [],
//     loading: false,
//     error: null
//   };


// export default function diariesReducer(state = initialState, action) {
//     switch(action.type) {
//       case FETCH_DIARY_PENDING:
//         // Mark the state as "loading" so we can show a spinner or something
//         // Also, reset any errors. We're starting fresh.
//         return {
//           ...state,
//           loading: true,
//           error: null
//         };
  
//       case FETCH_DIARY_SUCCESS:
//         // All done: set loading "false".
//         // Also, replace the items with the ones from the server
//         return {
//           ...state,
//           loading: false,
//           diaries: action.payload.diaries
//         };
  
//       case FETCH_DIARY_ERROR:
//         // The request failed. It's done. So set loading to "false".
//         // Save the error, so we can display it somewhere.
//         // Since it failed, we don't have items to display anymore, so set `items` empty.
//         //
//         // This is all up to you and your app though:
//         // maybe you want to keep the items around!
//         // Do whatever seems right for your use case.
//         return {
//           ...state,
//           loading: false,
//           error: action.payload.error,
//           diaries: []
//         };
  
//       default:
//         // ALWAYS have a default case in a reducer
//         return state;
//     }
//   }

import { FETCH_DIARY_SUCCESS, DELETE_DIARY, ADD_DIARY, DIARY_LOADING  } from '../actions/types'

const initialState = {
  diaries: [],
  loading: false
}

const executeFetchDiarySuccess = (state, action) => {
  return {
    ...state,
    diaries: action.diaries,
    loading: false
  }
}

const executeDeleteDiarySuccess = (state, action) => {
  return {
    ...state,
    diaries: state.diaries.filter(diary => diary._id !== action.payload),
    loading: false
  }
}

const diariesReducer = (state = initialState, action) => {
  switch(action.type) {
    case FETCH_DIARY_SUCCESS:
      return executeFetchDiarySuccess(state, action)
    case DELETE_DIARY:
      return executeDeleteDiarySuccess(state, action)
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

export default diariesReducer;