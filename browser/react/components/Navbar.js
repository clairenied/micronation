import React from 'react'
import { Link } from 'react-router'

const Navbar = (props) => {
	return(
		<div className="navbar">
	    <div className="navbar-link-container">
	    	<Link onClick={ props.logoutUser }>Logout</Link>
	    </div>
    </div>
	)
}

export default Navbar