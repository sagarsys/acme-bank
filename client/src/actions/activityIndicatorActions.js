import { SET_HAS_ACTIVITY, SET_NO_ACTIVITY } from './types';

export const setActivity = () => dispatch => dispatch({
	type: SET_HAS_ACTIVITY
});

export const setNoActivity = () => dispatch => dispatch({
	type: SET_NO_ACTIVITY
});
