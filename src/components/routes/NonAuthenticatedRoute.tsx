import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const NonAuthenticatedRoute = (props: any) => {
	const { isAuthenticted } = useAuth();

	return isAuthenticted ? <Redirect to="/" /> : <Route {...props} />;
};

export default NonAuthenticatedRoute;
