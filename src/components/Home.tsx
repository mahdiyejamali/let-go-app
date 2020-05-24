import React from 'react';
import { RouteComponentProps } from 'react-router-dom';

import '../styles/index.css';
import Button from '@material-ui/core/Button';

interface IHomeProps extends RouteComponentProps<any> {}

const Home: React.SFC<IHomeProps> = ({ history }) => {
	const onClick = () => {
		history.push('/products');
	};

	return (
		<div className="text-center-h text-center-v">
			<h1>Let's get started!</h1>
			<Button variant="contained" color="primary" onClick={onClick}>
				Start
			</Button>
		</div>
	);
};

export default Home;
