import axios from 'axios'
import { API_KEY, API_URL } from '@/utils/consts.js'

const headers = {
	Accept: 'application/json',
	'Content-Type': 'application/json',
    'X-API-Key': API_KEY
}

const service = axios.create({
	baseURL: API_URL,
	timeout: 10000,
	headers
})

// Добавляем токен в хидер к каждому запросу (если есть)
// service.interceptors.request.use(
// 	(config) => {
// 		req.pending()
// 		const accessToken = localStorage.getItem('accessToken')
// 		if (accessToken) {
// 			config.headers['Authorization'] = accessToken
// 		}
// 		return config
// 	},
// 	(error) => {
// 		req.done()
// 		return Promise.reject(error)
// 	}
// )

// response interceptor
service.interceptors.response.use(
	response => {
		if (response.status >= 400) {
			console.error('Нет доступа к данной странице')
		} else {
			return response
		}
	},
	error => {
		console.error(error)
		return Promise.reject(error)
	}
)

export default service