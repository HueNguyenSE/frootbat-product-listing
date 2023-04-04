import React from 'react';

export default function SignOut(props) {
	let signOut = () => {
		localStorage.removeItem('token');
		window.location.href = '/';
	};
	return (
		<a href='/' onClick={signOut}>
			Sign Out{' '}
		</a>
	);
}
