import React, { useState, useEffect, useCallback } from 'react';
import { Auth } from 'aws-amplify';

import AuthContext, { AuthContextType } from './AuthContext';

const useProvideAuth = (): AuthContextType => {
	const [isAuthenticted, setIsAuthenticated] = useState<boolean | null>(null);
	const [user, setUser] = useState({});

	useEffect(() => {
		const retrieveAuthData = async () => {
			try {
				const session = await Auth.currentSession();
				const user = await Auth.currentAuthenticatedUser();
				setIsAuthenticated(true);
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

	return { isAuthenticted, user, setAuthStatus, setAuthenticatedUser };
};

const AuthProvider = (props: any) => {
	const auth = useProvideAuth();
	return <AuthContext.Provider value={auth}>{props.children}</AuthContext.Provider>;
};

export default AuthProvider;
