import { Component } from 'react';

export default class SignIn extends Component {
	state = {
		email: '',
		password: '',
	};

	handleChange = (event) => {
		this.setState({
			[event.target.name]: event.target.value,
		});
	};

	handleSubmit = (event) => {
		event.preventDefault();
		this.props.signIn(this.state);
	};

	render() {
		return (
			<div>
				<form onSubmit={this.handleSubmit}>
					<h1>Sign In Form</h1>
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
					{this.props.error ? (
						<p style={{ color: 'red' }}>{this.props.error}</p>
					) : null}
					<input type='submit' value='Authenticate' />
				</form>
			</div>
		);
	}
}
