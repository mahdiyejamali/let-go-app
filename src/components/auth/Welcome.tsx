import React from 'react';

import Container from '@material-ui/core/Container';

const Welcome = () => {
	return (
		<Container component="main" maxWidth="xs">
			<div className="container">
				<h1>Welcome!</h1>
				<p>You have successfully registered a new account.</p>
				<p>An Email has been sent to you. Please verify your account.</p>
			</div>
		</Container>
	);
};

export default Welcome;
