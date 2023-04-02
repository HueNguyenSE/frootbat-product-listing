import './App.css';
import { Component } from 'react';

import Signup from './components/SignUp';

class App extends Component {
	state = {
		user: {},
	};
	render() {
		return (
			<div className='App'>
				<Signup />
			</div>
		);
	}
}

export default App;
