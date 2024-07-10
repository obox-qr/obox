import RestClient from './rest-client.ts';

export default class AuthApi {
	static createUser(url: string, data: { userId: string}) {
		return RestClient.post(url, data)
	}
	static getUser(url: string) {
		return RestClient.get(url);
	}
}
