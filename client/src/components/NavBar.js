import React from 'react';
import { NavLink } from 'react-router-dom';
import { useJwt } from 'react-jwt';

import SignOut from './SignOut';

export default function NavBar() {
	const token = localStorage.getItem('token');
	let existingToken = 'none';
	if (token) {
		existingToken = token;
	}
	const { decodedToken, isExpired } = useJwt(existingToken);
	// console.log('decoded', decodedToken);
	let username;
	let user_id;
	if (decodedToken) {
		username = decodedToken.username;
		user_id = decodedToken.user_id;
		// console.log(username, user_id);
	}

	if (!token) {
		return (
			<nav>
				<ul>
					<li>
						<NavLink to='/products'>Products</NavLink>
					</li>
					<li>
						<NavLink to='/signin'>Sign In</NavLink>
					</li>
					<li>
						<NavLink to='/signup'>Sign Up</NavLink>
					</li>
				</ul>
			</nav>
		);
	} else {
		return (
			<nav>
				<ul>
					<li>
						<NavLink to='/products'>Products</NavLink>
					</li>
					<li>
						<NavLink to='#'>Your Account</NavLink>
					</li>
					<li>
						<SignOut />
						<a href={'/users/' + user_id}>({username})</a>
					</li>
				</ul>
			</nav>
		);
	}
}
