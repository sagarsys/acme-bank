import { LOGIN_ACTION, LOGOUT_ACTION, REDIRECT_ACTION, SERVER_ERROR } from './types';
import POST from '../helpers/fetch-post';
import { history } from '../store';

export const checkLogin = (loginDetails) => dispatch => {
	POST('/api/login', loginDetails)
		.then(data => {
			if (data) {
				return dispatch({
					type: LOGIN_ACTION,
					payload: data
				})
			}
			return dispatch({
				type: SERVER_ERROR
			})
		}
	);
};

export const logoutUser = () => dispatch => {
	history.push('/');
	return dispatch({
		type: LOGOUT_ACTION
	});
};

export const redirectUser = (path = '/', data = {}) => dispatch => {
	history.push(path);
	return dispatch({
		type: REDIRECT_ACTION,
		payload: data
	});
};
