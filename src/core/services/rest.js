import axios from 'axios';
import { baseUrl } from '../../configs/app_configs';

async function request(method, url, data = {}, header = {}, params = {}) {
	if(!header['Content-Type']) header['Content-Type'] = 'application/json';
	try {
		const response = await axios({
				method,
				url: `${baseUrl}${url}`,
				data,
				headers: header,
				params,
		});

		if (response && response.data) {
				return response.data;
		}
	} catch (err) {
		if(err.response && err.response.data) {
			if(err.response.data.error) {
				return Promise.reject(new Error(err.response.data.error))
			}
			return Promise.reject(new Error(err.response.data))
		}
		return Promise.reject(new Error("Unexpected error!"))
	}
}

async function get(url, {data, header, params}) {
  return request('get', url, data, header, params);
}

export default {
	request,
	get,
}
