import { EMPLOYEE_UPDATE, EMPLOYEE_CREATE_SUCCESS } from '../actions/types';

const initialState = {
   name: '',
   phone: '',
   shift: ''
};

export default (state=initialState, action) => {
   switch(action.type) {
      case EMPLOYEE_UPDATE:
      return {...state, [action.payload.prop]: action.payload.value};

      case EMPLOYEE_CREATE_SUCCESS: 
      return { ...state, initialState};

      default:
      return state;
   };
};