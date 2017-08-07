import React, { Component } from 'react'
import FilterItem from './filterItem'
import '../../scss/filterBoard.scss'

export default class FilterBoard extends Component{

	selectFilter = (id, type, tag) => {
		this.props.selectRadio(id);
		this.props.setFilter(type, id, tag);
	}
	

	render() {
		return <div className='filter-group filters'>
			<ul>
				{this.props.filtersGroup.map((item)=>{
					return <FilterItem data={item} click={this.selectFilter} key={item.id} searchText={this.props.setFindText}/>
				})}
			</ul>
		</div>
	}
}