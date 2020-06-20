import React, { useMemo } from 'react';
import { useHistory } from 'react-router-dom';

// Components
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography, Button } from '@material-ui/core';

import SideMenu from './SideMenu';

// Auth
import useAuth from '../hooks/useAuth';
import { AuthContextType } from './auth/AuthContext';

const useStyles = makeStyles(() => ({
	root: {
		flexGrow: 1,
		paddingBottom: 20,
	},
	title: {
		flexGrow: 1,
	},
	customizeAppBar: {},
}));

const NavBar = () => {
	const classes = useStyles();
	const auth: AuthContextType = useAuth();
	const { isAuthenticted, user } = auth;
	const history = useHistory();

	const onSignUpClick = () => {
		history.push('/sign-up');
	};

	const onSignInClick = () => {
		history.push('/sign-in');
	};

	const onSignOutClick = () => {
		auth.signOut &&
			auth.signOut(
				() => history.push('/sign-in'),
				(error: any) => console.log({ error })
			);
	};

	const onTitleClick = () => {
		history.push('/');
	};

	return useMemo(
		() => (
			<div className={classes.root}>
				<AppBar position="static" className={classes.customizeAppBar}>
					<Toolbar>
						<SideMenu />
						<Typography variant="button" className={classes.title} onClick={onTitleClick}>
							Let Go
						</Typography>
						{isAuthenticted && (
							<>
								{/* {user && user.username}{' '} */}
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
