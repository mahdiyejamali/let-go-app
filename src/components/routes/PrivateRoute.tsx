import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import useAuth from '../../hooks/useAuth';

const PrivateRoute = (props: any) => {
	const { isAuthenticted } = useAuth();

	// Show nothing until auth data is loaded from local storage.
	if (isAuthenticted === null) {
		return null;
	}

	return isAuthenticted ? <Route {...props} /> : <Redirect to="/sign-in" />;
};

export default PrivateRoute;
