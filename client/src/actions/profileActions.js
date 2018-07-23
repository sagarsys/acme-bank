import { UPDATE_ACTION, SERVER_ERROR, RESET_REQUEST_STATUS } from './types';
import { PUT } from '../helpers/fetch-put';

export const updateProfileDetails = (profile) => dispatch => {
	PUT('/api/profile', profile)
		.then(data => {
			if (data) {
				return dispatch({
					type: UPDATE_ACTION,
					payload: data
				});
			}
			return dispatch({
				type: SERVER_ERROR
			});
		})
};


export const resetRequestStatus = () => dispatch => dispatch({
	type: RESET_REQUEST_STATUS
});
