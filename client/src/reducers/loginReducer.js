import { LOGIN_ACTION } from '../actions/types';

const initialState = {
	status: 100,
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
		default:
			return state;
	}
};
