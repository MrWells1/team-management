import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import EmployeeFormReducer from './EmployeeFormReducer';

//combine all reducers
export default combineReducers({
   auth: AuthReducer,
   employeeUpdate: EmployeeFormReducer
});