import { connect } from 'react-redux'
import Navbar from '../components/Navbar'
import { logoutUser } from '../action-creators/users'

const mapStateToProps = (state, ownProps) => {
	return {
		user: state.user.user
	}
}

const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		logoutUser: () => { dispatch(logoutUser()) }
	}
}

const NavbarContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(Navbar)

export default NavbarContainer