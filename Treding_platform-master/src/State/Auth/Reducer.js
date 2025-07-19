// import {
//   REGISTER_REQUEST,
//   REGISTER_SUCCESS,
//   REGISTER_FAILURE,
//   LOGIN_REQUEST,
//   LOGIN_SUCCESS,
//   LOGIN_FAILURE,
//   GET_USER_REQUEST,
//   GET_USER_SUCCESS,
//   GET_USER_FAILURE
// } from "./ActionTypes";



// const initialState = {
//   user: null,
//   loading: null,
//   error: null,
//   jwt: null,
// };

// const AuthReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case REGISTER_REQUEST:
//     case LOGIN_REQUEST:
//     case GET_USER_REQUEST:
//       return { ...state, loading: true, error: null };

//     case REGISTER_SUCCESS:
//     case LOGIN_SUCCESS:
//       return { ...state, loading: false, error: null, jwt: action.payload };

//     case GET_USER_SUCCESS:
//       return { ...state, user: action.payload, loading: false, error: null };
   
//     case REGISTER_FAILURE:
//     case LOGIN_FAILURE:
//     case GET_USER_FAILURE:
//       return { ...state, loading: false, error: action.payload };

//     default:
//       return state;
//   }
// };

// export default AuthReducer;

import {
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  GET_USER_REQUEST,
  GET_USER_SUCCESS,
  GET_USER_FAILURE,
  LOGOUT,
} from "./ActionTypes";

const initialState = {
  user: null,
  loading: null,
  error: null,
  jwt: null,
   isAuthenticated: false,
};

const AuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_REQUEST:
    case LOGIN_REQUEST:
    case GET_USER_REQUEST:
      return { ...state, loading: true, error: null };

    case REGISTER_SUCCESS:
    case LOGIN_SUCCESS:
      // return { ...state, loading: false, error: null, jwt: action.payload };
         return {
        ...state,
        user: action.payload,
        jwt: action.payload.jwt,
        isAuthenticated: true,
      };

    case GET_USER_SUCCESS:
      return { ...state, user: action.payload, loading: false, error: null };

    case REGISTER_FAILURE:
    case LOGIN_FAILURE:
       return initialState; // Reset state on failure
    case GET_USER_FAILURE:
      return { ...state, loading: false, error: action.payload };

    case LOGOUT:{
       return initialState; 
    }
    default:
      return state;
  }
};

export default AuthReducer;
