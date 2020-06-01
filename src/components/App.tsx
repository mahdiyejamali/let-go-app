import React from 'react';

// Auth
import AuthContext, { AuthContextType } from './auth/AuthContext';
import useAuth from '../customHooks/useAuth';

// Routes
import Routes from './routes/Routes';

// Styles
import '../styles/index.css';

const App = () => {
	const { isAuthenticted, user, setAuthStatus, setAuthenticatedUser } = useAuth();
	const authContextValue: AuthContextType = {
		isAuthenticted,
		user,
		setAuthStatus,
		setAuthenticatedUser,
	};

	return (
		<AuthContext.Provider value={authContextValue}>
			<Routes />
		</AuthContext.Provider>
	);
};

export default App;
