import React from 'react';

class Login extends React.Component{
	render(){
		return (
			<div className="Login">
				<form className="loginForm">
					<p>Login to keep track of your score</p>
					<input type="text" placeholder="Username" required/>
					<input type="text" placeholder="Password" required/>
					<button type="submit">Login</button>
					<a href=" ">Don't have an account? Create one!</a>
				</form>
			</div>
		);
	}
}

export default Login;