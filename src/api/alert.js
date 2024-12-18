import request from '@/helpers/request'

const endpoints = {
    states: '/alerts/active.json',
}

async function getStatesStatus() {
	return request({
		url: endpoints.states,
		method: 'get',
	});
}
export { getStatesStatus }