import { SET_HAS_ACTIVITY, SET_NO_ACTIVITY } from '../actions/types';

const initialState = {
	hasActivity: false
};

export default (state = initialState, action) => {
	switch ( action.type ) {
		case SET_HAS_ACTIVITY:
			return {
				hasActivity: true
			};
		case SET_NO_ACTIVITY:
			return {
				hasActivity: false
			};
		default:
			return state;
	}
}
