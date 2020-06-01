import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import NavBar from './NavBar';
import Home from './Home';
import ProductsList from './products/ProductsList';
import ProductDetails from './products/ProductDetails';

import AuthContext from './auth/AuthContext';
import SignUp from './auth/SignUp';
import SignIn from './auth/SignIn';
import Welcome from './auth/Welcome';

import useAuth from '../customHooks/useAuth';

import '../styles/index.css';

const App = () => {
	const { isAuthenticted, user, setAuthStatus, setAuthenticatedUser } = useAuth();

	return (
		<AuthContext.Provider value={{ isAuthenticted, user, setAuthStatus, setAuthenticatedUser }}>
			<NavBar />
			<Router>
				<Switch>
					<Route exact path="/" component={Home} />
					<Route exact path="/sign-up" component={SignUp} />
					<Route exact path="/sign-in" component={SignIn} />
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
