import React, { Component } from 'react'

export default class FilterItem extends Component{
	
	keyPressed = ()=>{
		this.props.searchText(this.searchInput.value)
	}
	
	componentDidUpdate(){
		if(this.searchInput && this.props.data.checked) this.searchInput.focus();
	}

	render() {
		let {type, name, checked, id, filterTag} = this.props.data;

		let content = (type=='search')
			? <input id='search' className='filters-radioBt' type='text' onChange={this.keyPressed} disabled={!checked} ref={(input)=>{this.searchInput = input}} placeholder='search text'/>
			: name;
		
		return <li className='filters-item' onClick={()=>{this.props.click(id, type, filterTag)}}>
			<input id={id} type='radio' name='filter' data-type={type}  checked={checked}  />
			{content}
		</li>
			
		
	}		
}