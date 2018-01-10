import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';

//combine all reducers
export default combineReducers({
   auth: AuthReducer
});