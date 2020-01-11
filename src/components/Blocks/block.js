import React from 'react';

function Clicked(props) {
	props.changeBlocks();
	props.clickedBlock(props.id);}

function blockClick(props) {
	return (
		<div className="card img-container" onClick={() => Clicked(props)}>
		</div>
	)
}

export default blockClick