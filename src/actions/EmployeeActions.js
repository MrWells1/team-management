import firebase from 'firebase';
import { EMPLOYEE_UPDATE, EMPLOYEE_CREATE, EMPLOYEE_CREATE_SUCCESS } from './types';
import { Actions } from 'react-native-router-flux';

export const employeeUpdate = ({ prop, value }) => {
   return {
      type: EMPLOYEE_UPDATE,
      payload: {prop, value}
   };
};

export const employeeCreate = ({name,phone,shift}) => {
   //use currentUser as userId
   const {currentUser} = firebase.auth();
   return () => {
      firebase.database().ref(`/users/${currentUser.uid}/employees`)
      .push({ name, phone, shift })
      .then(() => employeeCreateSuccess());
   };
   function employeeCreateSuccess() {
      Actions.pop();
      return {
         type: EMPLOYEE_CREATE_SUCCESS      
      };
   }
};