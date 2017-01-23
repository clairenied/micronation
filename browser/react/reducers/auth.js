import axios from 'axios'
import { browserHistory } from 'react-router'

import { getAllMessages } from './messages'

const initialState = {
  auth: {
    id: ""
  }
}

export const auth = (state = initialState, action) => {
  const nextState = Object.assign({}, state);
  
  switch (action.type) {
    case GET_AUTH:
      nextState.auth = action.auth;
      break;
    default:
      return state;
  }
  return nextState;
}

const GET_AUTH = 'GET_AUTH'
const setAuth = (auth) => {
  return {
    type: GET_AUTH,
    auth
  }
}

export const loginUser = (email, password) => {
  return dispatch => {
    return axios.post('/api/sessions/local-login', {
      email: email,
      password: password
    })
    .then(() => {
      return axios.get('/api/sessions/whoami')
    })
    .then(res => { 
      if (res.data) {
        dispatch(getAllMessages())
        dispatch(setAuth(res.data))
      }
    })
    .catch(err => {
      browserHistory.push('/login')
      return dispatch(setAuth(null))
    })
  }
}

export const createUser = (email, password, firstName, lastName) => {
  return dispatch => {
    return axios.post('/api/users', {
      email: email,
      password: password,
      firstName: firstName,
      lastName: lastName
    })
    .then(res => { 
      dispatch(setAuth(res.data))
      browserHistory.push('/messages')
    })
  }
}

export const getUser = () => {
  return dispatch => {
    return axios.get('/api/sessions/whoami')
    .then(res => { 
      return dispatch(setAuth(res.data)) 
    })
    .catch(err => {
      browserHistory.push('/login')
      return dispatch(setAuth(null))
    })
  }
}

export const logoutUser = () => {
  return dispatch => {
    return axios.post('/api/sessions/logout')
    .then(res => { 
      dispatch(setAuth({}))
      browserHistory.push('/login')
    })
  }
}