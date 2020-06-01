import { useState, useEffect, useCallback } from 'react';
import { Auth } from 'aws-amplify';

const useAuth = () => {
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

	return { isAuthenticted, user, setAuthStatus, setAuthenticatedUser };
};

export default useAuth;
