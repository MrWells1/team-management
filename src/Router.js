import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import EmployeeList from '../src/components/EmployeeList';
import SignupForm from './components/SignupForm';

const RouterComponent = () => {
   return(
      <Router>
         <Scene key="root" hideNavBar>
            <Scene key="auth">
               <Scene key="login" component={LoginForm} title="Login To Your Account" initial />
               <Scene key="signup" component={SignupForm} title="Create A New Account" />
            </Scene>
            
            <Scene key="main">
               <Scene key="employeeList" component={EmployeeList} title="Employee List" />
            </Scene>
         </Scene>
      </Router>
   );
};

export default RouterComponent;