import { connect } from 'react-redux'
import App from '../components/App'


const mapStateToProps = (state, ownProps) => {
	return {
		poems: state.poems,
		user: state.user
	}
}

const mapDispatchToProps = (dispatch, ownProps) => {
	return {}
}

const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default AppContainer