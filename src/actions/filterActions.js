export function selectRadio(id) {
	return {
		type: 'SELECT_FILTER_GROUP',
		payload: id
	}
}

export function setFilter(type, val='', tag) {
	switch(type){
		case 'all':
		case 'search':
			return {
				type: 'SET_FILTER_ALL',
				payload: val
			}
		case 'custom':
			return {
				type: 'SET_FILTER_CUSTOM',
				payload: tag
			}
	}
	
}

export function setFilterText(text) {
	return {
		type: 'SET_FILTER_TEXT',
		payload: text
	}
}