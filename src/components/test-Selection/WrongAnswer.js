import React from 'react';

class WrongAnswer extends React.Component{
	render(){
		return (
			<div className="Selection">
				<h1 id="top-title">What is the title of this wikiHow article?</h1>

				<div className="result">
					<p>WRONG!</p>
					<p>How To Cook Fish</p>
				</div>
				
			</div>
		);
	}
}

export default WrongAnswer;