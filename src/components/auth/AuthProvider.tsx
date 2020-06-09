import React, { useState, useEffect, useCallback } from 'react';
import { Auth } from 'aws-amplify';

import AuthContext, { AuthContextType, AuthUserType } from './AuthContext';

const useProvideAuth = (): AuthContextType => {
	const [isAuthenticted, setIsAuthenticated] = useState<boolean | null>(null);
	const [user, setUser] = useState<AuthUserType | null>({});

	useEffect(() => {
		const retrieveAuthData = async () => {
			try {
				await Auth.currentSession();
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
		(user: AuthUserType | null) => {
			setUser(user);
		},
		[user]
	);

	const signUp = async (formData: object = {}, onSuccess: Function, onFailure: Function) => {
		const { username, password, email }: any = formData;
		try {
			await Auth.signUp({ username, password, attributes: { email } });
			onSuccess();
		} catch (error) {
			onFailure(error);
		}
	};

	const signIn = async (formData: object = {}, onSuccess: Function, onFailure: Function) => {
		const { username, password }: any = formData;
		try {
			const user = await Auth.signIn(username, password);
			setAuthStatus(true);
			setAuthenticatedUser(user);
			onSuccess();
		} catch (error) {
			onFailure(error);
		}
	};

	const signOut = async (onSuccess: Function, onFailure: Function) => {
		try {
			await Auth.signOut();
			setAuthStatus(false);
			setAuthenticatedUser(null);
			onSuccess();
		} catch (error) {
			onFailure(error);
		}
	};

	return { isAuthenticted, user, setAuthStatus, setAuthenticatedUser, signUp, signIn, signOut };
};

const AuthProvider = (props: any) => {
	const auth = useProvideAuth();
	return <AuthContext.Provider value={auth}>{props.children}</AuthContext.Provider>;
};

export default AuthProvider;
