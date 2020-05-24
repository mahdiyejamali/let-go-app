import React, { PureComponent } from 'react';

import '../styles/index.css';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import Home from './Home';
import ProductsList from './products/ProductsList';

class App extends PureComponent {
	render() {
		return (
			<Router>
				<Switch>
					<Route exact path="/" render={props => <Home history={props.history} />} />
					<Route path="/products" component={ProductsList} />
					<Redirect to="/" />
				</Switch>
			</Router>
		);
	}
}

export default App;
