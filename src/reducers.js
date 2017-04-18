import { combineReducers } from 'redux';
import LoginReducer from 'modules/login/LoginReducer';


export default combineReducers({
  auth: LoginReducer
});
