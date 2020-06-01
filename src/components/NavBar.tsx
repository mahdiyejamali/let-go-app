import React, { useContext, useMemo } from 'react';
import { useHistory } from 'react-router-dom';
import { Auth } from 'aws-amplify';

// Components
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

// Auth
import AuthContext from './auth/AuthContext';

const useStyles = makeStyles(theme => ({
	root: {
		flexGrow: 1,
	},
	menuButton: {
		marginRight: theme.spacing(2),
	},
	title: {
		flexGrow: 1,
	},
	customizeAppBar: {},
}));

const NavBar = () => {
	const classes = useStyles();
	const auth = useContext(AuthContext);
	const { isAuthenticted, user, setAuthStatus, setAuthenticatedUser } = auth;
	const history = useHistory();

	const onSignUpClick = () => {
		history.push('/sign-up');
	};

	const onSignInClick = () => {
		history.push('/sign-in');
	};

	const onSignOutClick = async () => {
		try {
			await Auth.signOut();
			setAuthStatus && setAuthStatus(false);
			setAuthenticatedUser && setAuthenticatedUser(null);
			history.push('/sign-in');
		} catch (error) {
			console.log({ error });
		}
	};

	return useMemo(
		() => (
			<div className={classes.root}>
				<AppBar position="static" className={classes.customizeAppBar}>
					<Toolbar>
						<IconButton
							edge="start"
							className={classes.menuButton}
							color="inherit"
							aria-label="menu"
						>
							<MenuIcon />
						</IconButton>
						<Typography variant="h6" className={classes.title}>
							Let Go
						</Typography>
						{isAuthenticted && (
							<>
								{user && user.username}{' '}
								<Button type="button" color="inherit" onClick={onSignOutClick}>
									Sign Out
								</Button>
							</>
						)}
						{!isAuthenticted && (
							<>
								<Button color="inherit" onClick={onSignUpClick}>
									Sign Up
								</Button>
								<Button color="inherit" onClick={onSignInClick}>
									Sign In
								</Button>
							</>
						)}
					</Toolbar>
				</AppBar>
			</div>
		),
		[isAuthenticted, user]
	);
};

export default NavBar;
