import './App.css';
import { Component } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import NavBar from './components/NavBar';
import Products from './components/Products';

class App extends Component {
	state = {
		user: {},
		error: '',
	};

	componentDidMount() {
		let token = localStorage.getItem('token');
		if (token) {
			fetch('http://localhost:3000/profile', {
				method: 'GET',
				headers: {
					Authorization: `Bearer ${token}`,
				},
			})
				.then((response) => response.json())
				.then((result) => {
					if (result.id) {
						this.setState({
							user: result,
						});
					}
				});
		}
	}

	signUp = (user) => {
		fetch('http://localhost:3000/users', {
			method: 'POST',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				user: {
					username: user.username,
					password: user.password,
					email: user.email,
				},
			}),
		})
			.then((response) => response.json())
			.then((user) => this.setState({ user: user }));
	};

	signIn = (user) => {
		fetch('http://localhost:3000/login', {
			method: 'POST',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				user: {
					email: user.email,
					password: user.password,
				},
			}),
		})
			.then((response) => response.json())
			.then((result) => {
				if (result.token) {
					localStorage.setItem('token', result.token);
					this.setState({ user: result.user });
				} else {
					this.setState({ error: result.error });
				}
			});
	};

	render() {
		return (
			<div className='App'>
				<div className='app-container'>
					<nav>
						<h1>FROOT BAT PROJECT</h1>
						
					</nav>
					<Router>
						<Routes>
							<Route path='/' element={<Products />}></Route>
							<Route path='/products' element={<Products />}></Route>
							<Route
								path='/signin'
								element={
									<SignIn signIn={this.signIn} error={this.state.error} />
								}
							></Route>
							<Route
								path='signup'
								element={<SignUp signUp={this.signUp} />}
							></Route>
						</Routes>
					</Router>
				</div>
			</div>
		);
	}
}

export default App;
