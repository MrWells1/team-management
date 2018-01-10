import firebase from 'firebase';
import { EMAIL_CHANGED, PASSWORD_CHANGED, LOGIN_USER_SUCCESS } from "./types";
import { Actions } from 'react-native-router-flux';

// create emailChanged Action Creator
export const emailChanged = (text) => {
   return {
      type: EMAIL_CHANGED,
      payload: text
   };
};

export const passwordChanged = (text) => {
   return {
      type: PASSWORD_CHANGED,
      payload: text
   };
};

export const loginUser = ( { email, password } ) => {
   return (dispatch) => {
      //login request starts
      firebase.auth().signInWithEmailAndPassword(email, password)
         //dispatch an action after the request completes
         //dispatch & user are passed as parameters allowing to pass the action over to reducers
         .then(user => loginUserSuccess(dispatch, user))
         //if login fails => create new user account
         .catch(() => {
            firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(user => loginUserSuccess(dispatch, user));
         });
   };
};

//helper method for login user success
const loginUserSuccess = (dispatch, user) => {
   dispatch({
      type: LOGIN_USER_SUCCESS,
      payload: user
   });

   Actions.employeeList;
};