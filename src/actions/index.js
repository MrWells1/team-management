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
      firebase.auth().signInWithEmailAndPassword(email, password)
         .then(user => loginUserSuccess(dispatch, user))
         .catch(() => {
            firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(user => loginUserSuccess(dispatch, user));
         });
   };
};

const loginUserSuccess = (dispatch, user) => {
   dispatch({
      type: LOGIN_USER_SUCCESS,
      payload: user
   });
   //Actions match with the key of Scence in Router.js
   Actions.employeeList();
};