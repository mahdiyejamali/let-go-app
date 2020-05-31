import React, { PureComponent } from 'react';

import '../styles/index.css';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import Home from './Home';
import ProductsList from './products/ProductsList';
import ProductDetails from './products/ProductDetails';
import Register from './auth/Register';

class App extends PureComponent {
	render() {
		return (
			<Router>
				<Switch>
					<Route exact path="/" render={props => <Home history={props.history} />} />
					<Route exact path="/register" component={Register} />
					<Route path="/products/:id" component={ProductDetails} />
					<Route path="/products" render={props => <ProductsList history={props.history} />} />
					<Redirect to="/" />
				</Switch>
			</Router>
		);
	}
}

export default App;
