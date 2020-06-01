import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import useAuth from '../../customHooks/useAuth';

const PrivateRoute = (props: any) => {
	const { isAuthenticted } = useAuth();

	return isAuthenticted ? <Route {...props} /> : <Redirect to="/sign-in" />;
};

export default PrivateRoute;
