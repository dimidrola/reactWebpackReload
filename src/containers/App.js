import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as pageActions from '../actions/filterActions'
import * as starterActions from '../actions/starterActions'

import FilterBoard from '../components/filterBoard'
import FilterResult from '../components/filterResult'

import '../../scss/common.scss'

class App extends Component {

	componentWillMount() {
		const { loadAllSdk } = this.props.starterActions;
		loadAllSdk();
	}
	
	render() {
		const { selectRadio, setFilter, setFilterText } = this.props.pageActions;

		return <div className='filter'>
			<FilterBoard filtersGroup={ this.props.filtersGroup } selectRadio={selectRadio} setFilter={setFilter} setFindText={setFilterText}/>
			<FilterResult filterResult={ this.props.filterResult} />
		</div>
	}
}


function mapStateToProps(state){
	return{
		filtersGroup: state.filters,
		filterResult: state.filtered
	}
}

function mapDispatchToProps(dispatch) {
	return {
		pageActions: bindActionCreators(pageActions, dispatch),
		starterActions: bindActionCreators(starterActions, dispatch)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(App)