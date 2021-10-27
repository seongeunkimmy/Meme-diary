import { FETCH_DIARY_SUCCESS, DELETE_DIARY, ADD_DIARY, DIARY_LOADING, ADD_DIARY_FAIL  } from '../actions/types'

const initialState = {
  diaries: [],
  loading: false
}

// const executeFetchDiarySuccess = (state, action) => {
//   return {
//     ...state,
//     diaries: action.diaries,
//     loading: false
//   }
// }


const diariesReducer = (state = initialState, action) => {
  switch(action.type) {
    case FETCH_DIARY_SUCCESS:
      console.log(action)
      return {
          ...state,
          diaries: action.diaries,
          loading: false
        
      }
    case DELETE_DIARY:
      console.log(action)
      return {
        ...state,
        diaries: state.diaries.filter(diary => diary._id !== action.payload)
    }
    case ADD_DIARY:
        return {
            ...state, 
            diaries: [action.payload, ...state.diaries]
        }
    case ADD_DIARY_FAIL:
        return {
          ...state
        };
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