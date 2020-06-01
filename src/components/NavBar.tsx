import React, { useContext } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

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

	const onSignUpClick = () => {};
	const onSignInClick = () => {};

	return (
		<div className={classes.root}>
			<AppBar position="static" className={classes.customizeAppBar}>
				<Toolbar>
					<IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
						<MenuIcon />
					</IconButton>
					<Typography variant="h6" className={classes.title}>
						Products
					</Typography>
					<Button color="inherit" onClick={onSignUpClick}>
						Sign Up
					</Button>
					<Button color="inherit" onClick={onSignInClick}>
						Sign In
					</Button>
				</Toolbar>
			</AppBar>
		</div>
	);
};

export default NavBar;
