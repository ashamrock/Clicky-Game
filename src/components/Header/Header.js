import React from 'react';

function header(props) {
	return(
	<div className="header-fixed">
		<nav>
			<div className="header">
				<a style={{paddingLeft: "20px"}}>Memory Game</a>
					<a style={{float: "right", paddingRight: "20px"}}>Guessed: {props.guessed}</a>
			</div>
		</nav>
	</div>
	)
}

export default header;