import {
	DEFAULT_STATUS,
	LOGIN_ACTION,
	LOGOUT_ACTION,
	REDIRECT_ACTION,
	UPDATE_ACTION,
	SERVER_ERROR, SERVER_ERROR_STATUS, REDIRECT_STATUS, RESET_REQUEST_STATUS, OK_STATUS, RESET_STATUS
} from '../actions/types';

const initialState = {
	status: DEFAULT_STATUS,
	requestStatus: DEFAULT_STATUS,
	message: '',
	user: {}
};

export default (state = initialState, action) => {
	switch (action.type) {
		case LOGIN_ACTION:
			return  Object.assign({}, state, {
				status: action.payload.status,
				message: action.payload.message,
				user: action.payload.user,
			});
		case LOGOUT_ACTION:
			return  Object.assign({}, state, {
				status: DEFAULT_STATUS,
				message: '',
				user: {}
			});
		case UPDATE_ACTION:
			return Object.assign({}, state, {
				requestStatus: action.payload.status,
				message: action.payload.message,
				user: action.payload.user
			});
		case RESET_STATUS:
			return  Object.assign({}, state, {
				message: '',
				status: DEFAULT_STATUS,
			});
		case RESET_REQUEST_STATUS:
			return  Object.assign({}, state, {
				requestStatus: DEFAULT_STATUS
			});
		case SERVER_ERROR:
			return Object.assign({}, state, {
				status: SERVER_ERROR_STATUS,
				message: 'Internal Server Error - Make sure server is running correctly at PORT 5000',
			});
		case REDIRECT_ACTION:
			const message = action.payload.message || state.status !== OK_STATUS ? 'You must login to proceed any further' : '';
			return  Object.assign({}, state, {
				status: action.payload.status || REDIRECT_STATUS,
				message,
				user: state.user
			});
		default:
			return state;
	}
}
