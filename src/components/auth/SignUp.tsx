import React, { useState } from 'react';
import { useHistory } from 'react-router';

// Components
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

// Auth
import useAuth from '../../hooks/useAuth';

// Types
import { Event } from '../../ts/types/commonTypes';
import { AuthContextType } from './AuthContext';

function Copyright() {
	return (
		<Typography variant="body2" color="textSecondary" align="center">
			{'Copyright © '}
			<Link color="inherit" href="https://material-ui.com/">
				Let Go
			</Link>{' '}
			{new Date().getFullYear()}
			{'.'}
		</Typography>
	);
}

const useStyles = makeStyles(theme => ({
	paper: {
		marginTop: theme.spacing(8),
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
	},
	avatar: {
		margin: theme.spacing(1),
		backgroundColor: theme.palette.secondary.main,
	},
	form: {
		width: '100%', // Fix IE 11 issue.
		marginTop: theme.spacing(3),
	},
	submit: {
		margin: theme.spacing(3, 0, 2),
	},
}));

const SignUp = () => {
	const classes = useStyles();
	const history = useHistory();
	const auth: AuthContextType = useAuth();
	const [formData, setFormData] = useState({
		username: '',
		email: '',
		password: '',
		errors: {
			cognito: null,
			blankfield: false,
		},
	});

	const onInputChange = (event: Event) => {
		const {
			target: { name, value },
		} = event;
		setFormData({
			...formData,
			[name]: value,
		});
	};

	const handleSubmit = () => {
		// Handle Form Validation
		const error = {};
		if (error) {
			// Handle Error
		}

		const { username, email, password, errors } = formData;
		auth.signUp &&
			auth.signUp(
				{ username, email, password },
				() => history.push('/welcome'),
				(error: any) => console.log({ error })
			);
	};

	return (
		<Container component="main" maxWidth="xs">
			<CssBaseline />
			<div className={classes.paper}>
				<Avatar className={classes.avatar}>
					<LockOutlinedIcon />
				</Avatar>
				<Typography component="h1" variant="h5">
					Sign up
				</Typography>
				<form className={classes.form} noValidate>
					<Grid container spacing={2}>
						<Grid item xs={12} sm={12}>
							<TextField
								autoComplete="username"
								name="username"
								variant="outlined"
								required
								fullWidth
								id="username"
								label="Username"
								onChange={onInputChange}
								autoFocus
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField
								variant="outlined"
								required
								fullWidth
								id="email"
								label="Email Address"
								name="email"
								autoComplete="email"
								onChange={onInputChange}
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField
								variant="outlined"
								required
								fullWidth
								name="password"
								label="Password"
								type="password"
								id="password"
								autoComplete="current-password"
								onChange={onInputChange}
							/>
						</Grid>
					</Grid>
					<Button
						type="button"
						fullWidth
						variant="contained"
						color="primary"
						className={classes.submit}
						onClick={handleSubmit}
					>
						Sign Up
					</Button>
					<Grid container justify="flex-end">
						<Grid item>
							<Link href="/sign-in" variant="body2">
								Already have an account? Sign in
							</Link>
						</Grid>
					</Grid>
				</form>
			</div>
			<Box mt={5}>
				<Copyright />
			</Box>
		</Container>
	);
};

export default SignUp;
