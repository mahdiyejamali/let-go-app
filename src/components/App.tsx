import React, { useState, useCallback, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { Auth } from 'aws-amplify';

import Home from './Home';
import ProductsList from './products/ProductsList';
import ProductDetails from './products/ProductDetails';

import AuthContext from './auth/AuthContext';
import Register from './auth/Register';
import Login from './auth/Login';
import Welcome from './auth/Welcome';

import '../styles/index.css';

const App = () => {
	const [isAuthenticted, setIsAuthenticated] = useState(false);
	const [user, setUser] = useState({});

	useEffect(() => {
		const retrieveAuthData = async () => {
			try {
				const session = await Auth.currentSession();
				setIsAuthenticated(true);
				console.log({ session });
				const user = await Auth.currentAuthenticatedUser();
				setUser(user);
			} catch (error) {
				console.log({ error });
			}
		};

		retrieveAuthData();
	}, []);

	const setAuthStatus = useCallback(
		(isAuthenticted: boolean) => {
			setIsAuthenticated(isAuthenticted);
		},
		[isAuthenticted]
	);

	const setAuthenticatedUser = useCallback(
		(user: object) => {
			setUser(user);
		},
		[user]
	);

	return (
		<AuthContext.Provider value={{ isAuthenticted, user, setAuthStatus, setAuthenticatedUser }}>
			<Router>
				<Switch>
					<Route exact path="/" render={props => <Home history={props.history} />} />
					<Route exact path="/register" component={Register} />
					<Route exact path="/login" component={Login} />
					<Route exact path="/welcome" component={Welcome} />
					<Route path="/products/:id" component={ProductDetails} />
					<Route path="/products" render={props => <ProductsList history={props.history} />} />
					<Redirect to="/" />
				</Switch>
			</Router>
		</AuthContext.Provider>
	);
};

export default App;
