import { combineReducers } from 'redux';
import loginReducer from './loginReducer';
import activityIndicatorReducer from './activityIndicatorReducer';

export default combineReducers({
	activity: activityIndicatorReducer,
	login: loginReducer,
})
