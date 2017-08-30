import React from 'react';

class WrongLogin extends React.Component{
	render(){
		return (

			<div className="WrongLogin">
				<form className="loginForm">
					<p>Login to keep track of your score</p>
					<input type="text" placeholder="Username" required/>
					<input type="text" placeholder="Password" required/>
					<button type="submit">Login</button>
					<p id="wrong">Wrong login! Please enter again.</p>
					<a href=" ">Don't have an account? Create one!</a>
				</form>
			</div>
		);
	}
}

export default WrongLogin;