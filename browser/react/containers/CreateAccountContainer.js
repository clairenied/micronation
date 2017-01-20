import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'

import validator from 'validator'

import { createUser } from '../reducers/auth'

class CreateAccount extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      email: '',
      password: '',
      confirmPassword: '',
      firstName: '',
      lastName: ''
    }

    this.handleSubmit = this.handleSubmit.bind(this)
    this.passwordMatch = this.passwordMatch.bind(this)
  }

  passwordMatch(){
  	return this.state.password === this.state.confirmPassword
  }

  handleChange(field, evt){
    this.setState({
      [field]: evt.target.value
    })
  }

  handleSubmit(evt){
    evt.preventDefault()
    const userToCreate = this.state
    this.props.createUser(this.state.email, this.state.password, this.state.firstName, this.state.lastName)
    return
  }

  render(){
    return(
    	<div>
	      <div className="login-form">
	        <form onSubmit={this.handleSubmit}>
	          <h2>Create Account</h2>

	          <label>First Name</label>
	          <input 
	            type="text" 
	            onChange={this.handleChange.bind(this, 'firstName')} 
	            value={this.state.firstName} 
	            name="firstName"/>

	          <label>Last Name</label>
	          <input 
	            type="text" 
	            onChange={this.handleChange.bind(this, 'lastName')} 
	            value={this.state.lastName} 
	            name="lastName"
	          />
	            
	          <label>Email</label>
	          <input 
	            type="email" 
	            onChange={this.handleChange.bind(this, 'email')} 
	            value={this.state.email} 
	            name="email"
	          />
	          
	          <label>Password (no less than 8 characters, please)</label>
	          <input 
	            type="password" 
	            onChange={this.handleChange.bind(this, 'password')} 
	            value={this.state.password} 
	            name="password"
	          />

	          <label>Confirm Password</label>
	          <input 
	            type="password" 
	            onChange={this.handleChange.bind(this, 'confirmPassword')} 
	            value={this.state.confirmPassword} 
	            name="confirmPassword"
	          />

	          { this.state.email.length > 0 
							&& validator.isEmail(this.state.email)
							&& this.state.password.length >= 8
							&& this.passwordMatch() === true
							&& this.state.firstName.length >= 0
							&& this.state.lastName.length >=0
							? <button type="submit">Create Account</button> :
							<button disabled="true" type="submit">Create Account</button> }

	          <div className="buffer oauth">
			        <Link to="/login"><span> Have an Account Already? </span></Link>
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
		createUser: (email, password, firstName, lastName) => { dispatch(createUser(email, password, firstName, lastName)) }
	}
}

const CreateAccountContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateAccount);

export default CreateAccountContainer