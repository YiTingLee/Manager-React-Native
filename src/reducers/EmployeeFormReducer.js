import {
  EMPLOYEE_UPDATE,
  EMPLOYEE_CREATE,
  EMPLOYEES_SAVE_SUCCESS,
  STATE_CLEAR
} from '../actions/types';

const INITIAL_STATE = {
  name: '',
  phone: '',
  shift: ''
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EMPLOYEE_UPDATE:
      //action.payload === { prop: 'name', value: 'jane' }
      // [action.payload.prop] === 'name' or 'phone' ...
      return { ...state, [action.payload.prop]: action.payload.value };
    case EMPLOYEE_CREATE:
      return INITIAL_STATE;
    case EMPLOYEES_SAVE_SUCCESS:
      return INITIAL_STATE;
    case STATE_CLEAR:
      return INITIAL_STATE;
    default:
      return state;
  }
};
