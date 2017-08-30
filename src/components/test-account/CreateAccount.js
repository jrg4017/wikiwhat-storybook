import React from 'react';

class CreateAccount extends React.Component{
	render(){
		return (

			<div className="CreateAccount">
				<form className="loginForm">
					<p>Create an account</p>
					<input type="text" placeholder="Username" required/>
					<input type="text" placeholder="Password" required/>
					<input type="text" placeholder="Email" required/>
					<button type="submit">Create</button>
				</form>
			</div>
		);
	}
}

export default CreateAccount;