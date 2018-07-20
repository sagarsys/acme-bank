import { LOGIN_ACTION } from './types';
import POST from '../helpers/fetch-post';

export const checkLogin = (loginDetails) => dispatch => {
	POST('/api/login', loginDetails)
		.then(data => dispatch({
			type: LOGIN_ACTION,
			payload: data
		})
	);
};
