import React, { useContext } from 'react';

import '../styles/index.css';

import AuthContext from './auth/AuthContext';

const Home = () => {
	const auth = useContext(AuthContext);
	console.log({ auth });

	return (
		<div className="text-center-h text-center-v">
			<h1>See a list of products here!</h1>
		</div>
	);
};

export default Home;
