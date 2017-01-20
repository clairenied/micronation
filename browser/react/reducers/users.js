import axios from 'axios'
import { browserHistory } from 'react-router'

import socket from '../socket';

const initialState = {}

export const users = (state = initialState, action) => {
  const nextState = Object.assign({}, state);
  
  switch (action.type) {
    case GET_USERS:
      nextState[action.user.id] = action.user;
      break;
    default:
      return state;
  }
  return nextState;
}

const GET_USERS = 'GET_USERS'
export const setUser = (user) => {
	return {
		type: GET_USERS,
		user
	}
}

export const setAllUsers = (allUsers) => {
	return dispatch => {
    return allUsers.forEach(user => dispatch(setUser(user)))
	}
}

export const subscribeToNewUsers = () =>
  dispatch =>
    socket.on('set-user', (user) => {
    	return dispatch(setUser(user));
    });