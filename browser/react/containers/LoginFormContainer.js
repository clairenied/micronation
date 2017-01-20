import React from 'react'
import { connect } from 'react-redux'
import { Link, browserHistory } from 'react-router'

import validator from 'validator'

import { loginUser } from '../reducers/auth'

class LoginForm extends React.Component {
	constructor(props){
		super(props)

		this.state = {
			email: '',
			password: ''
		}

		this.handleSubmit = this.handleSubmit.bind(this)
		this.loginWithGoogle = this.loginWithGoogle.bind(this)
	}

	handleChange(field, evt){
		this.setState({
			[field]: evt.target.value,
			marked: true
		})
	}

	handleSubmit(evt){
		evt.preventDefault()
		this.props.loginUser(this.state.email, this.state.password)
	}

	loginWithGoogle(evt){
		evt.preventDefault()
		this.props.loginUserWithGoogle()
	}

	render(){
		return(
			<div>
				<div className="login-form">
					<div className="login-title">
						<div className="logo-image">
							<h1>Welcome to Pilandia!</h1>
						</div>
					</div>
					
					<form onSubmit={this.handleSubmit}>
						{ this.showInvalidField }
						<h2>Login</h2>

				  	<label>Your email</label>
				  	<input 
				  		type="text" 
				  		onChange={this.handleChange.bind(this, 'email')} 
				  		value={this.state.email} 
				  		name="email"
				  	/>
				  	
				  	<label>Your password</label>
				  	<input 
				  		type="password" 
				  		onChange={this.handleChange.bind(this, 'password')} 
				  		value={this.state.password} 
				  		name="password"
				  	/>

						{ this.state.email.length > 0 
							&& validator.isEmail(this.state.email)
							&& this.state.password.length >= 8 
							? <button type="submit">Login</button> :
							<button disabled="true" type="submit">Login</button> }
						
						<div className="buffer oauth">
			        <Link to="/create-account"><span>Or, become a citizen!</span></Link>
		        </div>
					</form>
				</div>
			</div>
		)
	}
}

const mapStateToProps = (state, ownProps) => {
	return {}
}

const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		loginUser: (email, password) => { 
			dispatch(loginUser(email, password))
			browserHistory.push('/messages') 
		},
	}
}

const LoginFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginForm);

export default LoginFormContainer


