const filterReducer = (state = '', action) => {
	switch (action.type) {
		case 'FILTER':
			return action.data.filter.toUpperCase()
		default:
			return state
	}
}

export const updateFilter = (filter) => {
	return {
		type: 'FILTER',
		data: {
			filter
		}
	}
}

export default filterReducer