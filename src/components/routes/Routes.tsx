import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

// Components
import NavBar from '../NavBar';
import Home from '../Home';
import ProductsList from '../products/ProductsList';
import ProductDetails from '../products/ProductDetails';
import ProductsCreate from '../products/ProductsCreate';

// Auth
import SignUp from '../auth/SignUp';
import SignIn from '../auth/SignIn';
import Welcome from '../auth/Welcome';
import ForgotPassword from '../auth/ForgotPassword';
import ForgotPasswordVerification from '../auth/ForgotPasswordVerification';

// Routes
import PrivateRoute from './PrivateRoute';
import NonAuthenticatedRoute from './NonAuthenticatedRoute';

const Routes = () => {
	return (
		<Router>
			<NavBar />
			<Switch>
				<Route exact path="/" component={Home} />
				<NonAuthenticatedRoute exact path="/sign-up" component={SignUp} />
				<NonAuthenticatedRoute exact path="/sign-in" component={SignIn} />
				<NonAuthenticatedRoute exact path="/welcome" component={Welcome} />
				<NonAuthenticatedRoute exact path="/forgot-password" component={ForgotPassword} />
				<NonAuthenticatedRoute
					exact
					path="/forgot-password-verification"
					component={ForgotPasswordVerification}
				/>
				<PrivateRoute exact path="/products/create" component={ProductsCreate} />
				<PrivateRoute path="/products/:id" component={ProductDetails} />
				<PrivateRoute path="/products" component={ProductsList} />} />
				<Redirect to="/" />
			</Switch>
		</Router>
	);
};

export default Routes;
