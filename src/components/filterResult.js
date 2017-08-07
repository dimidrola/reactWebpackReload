import React, { Component } from 'react'

import '../../scss/filterResult.scss'


export default class FilterResult extends Component{

	render() {
		return <div className='filter-result result'>
			{this.props.filterResult.length>0 ? this.props.filterResult.map((item, index)=>{
				let filters = item.tags.map((item, index, array)=>{
					return <span className='result-sdk_tag' key={index}>
						{item}
						{array.length-index > 1 && ', '}
						</span>
				})
				return <div className='result-sdk' key={index}><div>{item.title}</div> {filters} </div>
			}):null}
		</div>
	}
}