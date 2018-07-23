import { combineReducers } from 'redux';
import appReducer from './appReducer';
import activityIndicatorReducer from './activityIndicatorReducer';

export default combineReducers({
	app: appReducer,
	activity: activityIndicatorReducer,
})
