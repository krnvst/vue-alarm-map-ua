import axios from 'axios'
export const { VUE_APP_API_TOKEN, VUE_APP_API_URL } = process.env

const headers = {
	Accept: 'application/json',
	'Content-Type': 'application/json',
	Authorization: `Bearer ${VUE_APP_API_TOKEN}`
}

const service = axios.create({
	baseURL: VUE_APP_API_URL,
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