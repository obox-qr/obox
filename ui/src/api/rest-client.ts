import axios, { AxiosRequestConfig } from 'axios';
import { config } from '../config';

const client = axios.create({
	baseURL: config.apiUrl
	//...
})

export default class RestClient {
	static get(url: string, config?: AxiosRequestConfig<unknown| undefined>) {
		return client.get(url, config)
	}

	static post(url: string, data: unknown, config?: AxiosRequestConfig<unknown| undefined>) {
		return client.post(url, data, config)
	}

	//update, patch, delete...
}

