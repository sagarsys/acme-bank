import { combineReducers } from 'redux';
import activityIndicatorReducer from './activityIndicatorReducer';
import loginReducer from './loginReducer';
import profileReducer from './profileReducer';

export default combineReducers({
	activity: activityIndicatorReducer,
	login: loginReducer,
	profile: profileReducer,
})
