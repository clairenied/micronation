import { createStore, applyMiddleware, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import createLogger from 'redux-logger'
import thunk from 'redux-thunk'

import { messages } from './reducers/poems-reducer'
import { users } from './reducers/users-reducer'

export default createStore(combineReducers({
	messages, users
}), composeWithDevTools(applyMiddleware(createLogger(), thunk)))