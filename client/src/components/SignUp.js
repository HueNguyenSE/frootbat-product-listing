import { Component } from 'react';

export default class Signup extends Component {
	state = {
		username: '',
		email: '',
		password: '',
	};

	handleChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value,
		});
	};

	handleSubmit = (e) => {
		e.preventDefault();
	};

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<h1>Sign Up Form</h1>
				<div>
					<label>Username:</label>
					<input
						name='username'
						id='username'
						type='text'
						value={this.state.username}
						onChange={this.handleChange}
					></input>
				</div>
				<div>
					<label>Email: </label>
					<input
						name='email'
						id='email'
						type='email'
						value={this.state.email}
						onChange={this.handleChange}
					></input>
				</div>
				<div>
					<label>Password: </label>
					<input
						id='password'
						name='password'
						type='password'
						value={this.state.password}
						onChange={this.handleChange}
					></input>
				</div>
				<input type='submit' value='Register' />
			</form>
		);
	}
}
