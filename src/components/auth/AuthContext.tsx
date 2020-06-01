import { createContext } from 'react';

export type AuthUserType = {
	username?: string;
	email?: string;
};

export type AuthContextType = {
	isAuthenticted: boolean;
	user: AuthUserType | null;
	setAuthStatus?: Function;
	setAuthenticatedUser?: Function;
};

const initialAuth: AuthContextType = {
	isAuthenticted: false,
	user: null,
};

const AuthContext = createContext<AuthContextType>(initialAuth);

export default AuthContext;
