import { createContext } from 'react';

export type AuthUserType = {
	username?: string;
	email?: string;
};

export type AuthContextType = {
	isAuthenticted: boolean | null;
	user?: AuthUserType | null;
	setAuthStatus?: Function;
	setAuthenticatedUser?: Function;
	signIn?: Function;
	signUp?: Function;
	signOut?: Function;
};

const initialAuth: AuthContextType = {
	isAuthenticted: false,
	user: null,
};

const AuthContext = createContext<AuthContextType>(initialAuth);

export default AuthContext;
