import EMPLOYEE_UPDATE from '../actions/types';

const initialState = {
   name: '',
   phone: '',
   shift: ''
};

export default (state=initialState, action) => {
   switch(action.type) {
      case EMPLOYEE_UPDATE:
      return {...state, [action.type.prop]: action.type.value};

      default:
      return state;
   }
}