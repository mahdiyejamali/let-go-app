import React from 'react';

// Auth
import AuthProvider from './auth/AuthProvider';
import StoreProvider from '../store/index';

// Routes
import Routes from './routes/Routes';

// Styles
import '../styles/index.css';

const App = () => {
	return (
		<StoreProvider>
			<AuthProvider>
				<Routes />
			</AuthProvider>
		</StoreProvider>
	);
};

export default App;
