import React, { PureComponent } from 'react';

import '../styles/index.css';
import Button from '@material-ui/core/Button';

class App extends PureComponent {
	handleClick = () => {
		// Open setting goal page
	};

	render() {
		return (
			<div className="text-center-h text-center-v">
				<h1>Let's get started!</h1>
				<Button variant="contained" color="primary" onClick={this.handleClick}>
					Start
				</Button>
			</div>
		);
	}
}

export default App;
