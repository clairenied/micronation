import { createStore, applyMiddleware, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import createLogger from 'redux-logger'
import thunk from 'redux-thunk'

import { messages } from './reducers/messages'
import { users } from './reducers/users'
import { auth } from './reducers/auth'

export default createStore(combineReducers({
	messages, users, auth
}), composeWithDevTools(applyMiddleware(createLogger(), thunk)))