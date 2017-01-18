const initialState = {}

export const messages = (prev=initialState, action) => {
	switch(action.type){
		case 'RECEIVE_POEMS':
			return Object.assign({}, prev, {
				poems: action.poems
			})
			break
		case 'LOAD_ALL_MY_POEMS':
			return Object.assign({}, prev, {
				poems: action.poems
			})
		default:
			return prev
	}
}