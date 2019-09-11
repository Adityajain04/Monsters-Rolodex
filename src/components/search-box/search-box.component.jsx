import React from 'react';
import './search-box.styles.css';

export const SearchBox = (props) => {
	return(
		<div className="form-group search">
      <input type="text" className="form-control" placeholder={props.placeholder} onKeyUp={props.handleChange}/>
		</div>
	);
}