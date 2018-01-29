import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import EmployeeList from '../src/components/EmployeeList';
import SignupForm from './components/SignupForm';

const RouterComponent = () => {
   return(
      <Router>
         <Scene key="root">
            <Scene key="login" component={LoginForm} title="Please Login" initial />
            <Scene key="employeeList" component={EmployeeList} title="Employee List" />
            <Scene key="signup" component={SignupForm} title="Create A New Account" />
         </Scene>
      </Router>
   );
};

export default RouterComponent;