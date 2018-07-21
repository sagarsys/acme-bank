import {
	DEFAULT_STATUS,
	LOGIN_ACTION,
	LOGOUT_ACTION,
	REDIRECT_ACTION, REDIRECT_STATUS,
	SERVER_ERROR,
	SERVER_ERROR_STATUS
} from '../actions/types';

const initialState = {
	status: DEFAULT_STATUS,
	message: '',
	user: {}
};

export default (state = initialState, action) => {
	switch (action.type) {
		case LOGIN_ACTION:
			return {
				status: action.payload.status,
				message: action.payload.message,
				user: action.payload.user,
			};
		case LOGOUT_ACTION:
			return {
				status: DEFAULT_STATUS,
				message: '',
				user: {}
			};
		case SERVER_ERROR:
			return {
				status: SERVER_ERROR_STATUS,
				message: 'Internal Server Error - Make sure server is running correctly at PORT 5000',
			};
		case REDIRECT_ACTION:
			return {
				status: REDIRECT_STATUS,
				message: 'You must login to proceed any further'
			};
		default:
			return state;
	}
};
