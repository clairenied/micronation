const initialState = {
	user: {
		email: '',
		firstName: '',
		lastName: '',
		fullName: ''
	}
}

export const users = (prev=initialState, action) => {
	switch(action.type){
		case 'LOGIN_USER':
			return Object.assign({}, prev, {
				user: action.user
			})
			break
		case 'ADD_USER':
			return Object.assign({}, prev, {
				user: action.user
			})
			break
		case 'GET_USER':
			return Object.assign({}, prev, {
				user: action.user
			})
			break
		case 'LOGOUT_USER':
			return Object.assign({}, prev, {
				user: action.user
			})
			break
		default:
			return prev
	}
}