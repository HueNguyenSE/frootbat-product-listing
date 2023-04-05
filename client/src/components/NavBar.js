import React from 'react';
import { NavLink } from 'react-router-dom';
// import { useJwt } from 'react-jwt';

export default function NavBar() {
	// const token = localStorage.getItem('token');
	// let existingToken = 'none';
	// if (token) {
	// 	existingToken = token;
	// }
	// const { decodedToken, isExpired } = useJwt(existingToken);
	// // console.log('decoded', decodedToken);
	// let username;
	// let user_id;
	// if (decodedToken) {
	// 	username = decodedToken.username;
	// 	user_id = decodedToken.user_id;
	// 	// console.log(username, user_id);
	// }

	return (
		<nav>
			<NavLink to='/products'>Products</NavLink>
		</nav>
	);
}
