import React from 'react';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

// Auth
import AuthProvider from './auth/AuthProvider';
import StoreProvider from '../store/index';

// Routes
import Routes from './routes/Routes';

// Styles
import '../styles/index.css';

const theme = createMuiTheme({
	palette: {
		primary: {
			main: '#2196f3',
		},
		secondary: {
			main: '#f50057',
		},
	},
});

const App = () => {
	return (
		<StoreProvider>
			<AuthProvider>
				<ThemeProvider theme={theme}>
					<Routes />
				</ThemeProvider>
			</AuthProvider>
		</StoreProvider>
	);
};

export default App;
