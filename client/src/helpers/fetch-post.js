import { DEFAULT_XHR_HEADERS } from '../actions/types';

export const POST = async (url, data = null, headers = DEFAULT_XHR_HEADERS) => {
	return await fetch(url, {
		method: 'POST',
		mode: 'cors',
		cache: 'no-cache',
		credentials: 'same-origin',
		headers,
		body: data ? JSON.stringify(data) : null
	})
	.then(response => response.json())
	.catch(error => console.error(`Fetch error \n`, error));
};

export default POST;
