import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, IndexRedirect } from 'react-router';

import { Provider } from 'react-redux'

import LoginFormContainer from './containers/LoginFormContainer'
import CreateAccountContainer from './containers/CreateAccountContainer'
import AppContainer from './containers/AppContainer';
import MessagesContainer from './containers/MessagesContainer';

import store from './store'

import { getAllMessages, subscribeToNewMessages } from './reducers/messages'
import { getAllUsers, subscribeToNewUsers } from './reducers/users'
import { getUser } from './reducers/auth'

const loadUser = () => {
	store.dispatch(getUser())
	store.dispatch(getAllMessages())
	store.dispatch(subscribeToNewMessages())
	store.dispatch(subscribeToNewUsers())
}

ReactDOM.render(
	<Provider store={store}>
	  <Router history={browserHistory}>
	    <Route path='/' component={AppContainer} onEnter={loadUser}>
		    <Route path='/login' component={LoginFormContainer} />
		    <Route path='/create-account' component={CreateAccountContainer} />
	      <Route path='/messages' component={MessagesContainer}/>
	      <IndexRedirect to='/messages' />
	    </Route>
	  </Router>
  </Provider>,
  document.getElementById('app')
);
