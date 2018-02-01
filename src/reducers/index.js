import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import EmployeeReducer from './EmployeeReducer';

//combine all reducers
export default combineReducers({
   auth: AuthReducer,
   employeeUpdate: EmployeeReducer
});