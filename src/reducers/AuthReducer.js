// This reducer is gonna handle all authentication actions
import { EMAIL_CHANGED, PASSWORD_CHANGED, LOGIN_USER_SUCCESS,LOGIN_USER_FAIL, SIGNUP_USER_SUCCESS } from '../actions/types';

const initialState = {
   email: '',
   password: '',
   user: null,
   error: ''
};

export default (state = initialState, action) => {

   switch (action.type) {
      case EMAIL_CHANGED:
         // create a new object
         return { ...state, email: action.payload, error: ''};
      
      case PASSWORD_CHANGED: 
         return { ...state, password: action.payload, error: ''};  
      
      case LOGIN_USER_SUCCESS:
         return { ...state, user: action.payload}

      case SIGNUP_USER_SUCCESS:
         return { ...state, user: action.payload}
      
      case LOGIN_USER_FAIL: 
         return { ...state, error: action.payload}

      default:
         return state;
   };
};