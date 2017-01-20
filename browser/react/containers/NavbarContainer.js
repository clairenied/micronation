import { connect } from 'react-redux'
import Navbar from '../components/Navbar'
import { logoutUser } from '../reducers/auth'

const mapStateToProps = (state, ownProps) => {
	return {
    auth: state.auth,
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