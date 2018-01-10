// This reducer is gonna handle all authentication actions
import { EMAIL_CHANGED, PASSWORD_CHANGED, LOGIN_USER_SUCCESS } from '../actions/types';

const initialState = {
   email: null,
   password: null,
   user: null
};

export default (state = initialState, action) => {

   switch (action.type) {
      case EMAIL_CHANGED:
         // create a new object
         return { ...state, email: action.payload};
      
      case PASSWORD_CHANGED: 
         return { ...state, password: action.payload};  
      
      case LOGIN_USER_SUCCESS:
         return { ...state, user: action.payload}

      default:
         return state;
   };
};