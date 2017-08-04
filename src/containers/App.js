import React, { Component } from 'react'
import { connect } from 'react-redux'

class App extends Component {
	render() {
		return <div>Привет из App { this.props.data }!</div>
	}
}

function mapStateToProps(state){
	return{
		data: state.data
	}
}

export default connect(mapStateToProps)(App)