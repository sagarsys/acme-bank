import { SAVE_ACTION, SERVER_ERROR } from './types';
import { PUT } from '../helpers/fetch-put';

export const updateProfileDetails = (profile) => dispatch => {
	PUT('/api/profile', profile)
		.then(data => {
			if (data) {
				return dispatch({
					type: SAVE_ACTION,
					payload: data
				});
			}
			return dispatch({
				type: SERVER_ERROR
			});
		})
};
