import request from '@/helpers/request'

const endpoints = {
    states: '/states',
}

async function getStatesStatus() {
	return request({
		url: endpoints.states,
		method: 'get',
	});
}
export { getStatesStatus }