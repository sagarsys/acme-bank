import { DEFAULT_STATUS, SAVE_ACTION, SERVER_ERROR, SERVER_ERROR_STATUS } from '../actions/types';

const initialState = {
	status: DEFAULT_STATUS,
	message: '',
	user: {}
};

export default (state = initialState, action) => {
	switch ( action.type ) {
		case SAVE_ACTION:
			return {
				status: action.payload.status,
				message: action.payload.message,
				user: action.payload.user
			};
		case SERVER_ERROR:
			return {
				status: SERVER_ERROR_STATUS,
				message: 'Internal Server Error - Make sure server is running correctly at PORT 5000',
				user: state.user
			};
		default:
			return state;
	}
};
