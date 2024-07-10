import AuthApi from './auth-api.ts';

export default class ApiService {
	static getAuthApi = () => AuthApi;
}
