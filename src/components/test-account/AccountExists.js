import React from 'react';

class AccountExists extends React.Component{
	render(){
		return (

			<div className="WrongLogin">
				<form className="loginForm">
					<p>Create an account</p>
					<input type="text" placeholder="Username" required/>
					<input type="text" placeholder="Password" required/>
					<input type="text" placeholder="Email" required/>
					<button type="submit">Create</button>
					<p id="wrong">Username already exists.</p>
				</form>
			</div>
		);
	}
}

export default AccountExists;