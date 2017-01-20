import React from 'react'
import { connect } from 'react-redux'
import { Link, browserHistory } from 'react-router'

import { postMessage } from '../reducers/messages'

import NavbarContainer from '../containers/NavbarContainer'


class Messages extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      text: "",
    }

    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(field, evt){
    this.setState({
      [field]: evt.target.value,
      marked: true
    })
  }

  handleSubmit(evt){
    evt.preventDefault()
    this.props.sendMessage(this.state.text, this.props.auth.auth.id)
    this.setState({text: ""})
  }

  render(){
    console.log('PROPS', this.props)
    let users = this.props.users

    return(
      <div className="container">
        <NavbarContainer/>
        <div className="logo-image">
          <h1>Welcome to Pilandia!</h1>
        </div>


        <div className="conversation-container">
          { this.props.messages.map((message, i) => {
              let thisUser = users[message.userId]
              return (
                <div className="post" key={i}>
                  <span><b>{ thisUser.firstName }:&emsp;</b></span>
                  <span>{ message.text }</span>
                </div>
              )
            })
          }
        </div>
        <form onSubmit={this.handleSubmit}>
          <textarea 
            name="text"
            onChange={this.handleChange.bind(this, 'text')}
            value={this.state.text} 
          />
          <button type="submit">Send</button>
        </form>
        <p>Our national food is the hotdog, our national animal is the llama, our national flower is the tulip, have fun and be nice!</p>
      </div>
    )
  }
}

const dummyMessage = () => {
  return {
    createdAt: "",
    id: "",
    text: "",
    updatedAt: "",
    user: "",
    userId: "",
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    users: state.users,
    auth: state.auth,
    messages: Object.values(state.messages).reverse() || [ dummyMessage() ],
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    sendMessage: (text, loggedInUser) => { 
      dispatch(postMessage(text, loggedInUser)) 
    },
  }
}

const MessagesContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Messages);

export default MessagesContainer



