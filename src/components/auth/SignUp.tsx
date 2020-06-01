import React, { useState } from 'react';
import { Auth } from 'aws-amplify';

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

// Types
import { Event } from '../../ts/types/commonTypes';

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

const SignUp = (props: object) => {
	const classes = useStyles();
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
		// document.getElementById(event.target.id).classList.remove('is-danger');
	};

	const handleSubmit = async () => {
		// event.preventDefault();

		// Form validation
		// this.clearErrorState();
		const error = {};
		if (error) {
			// this.setState({
			// 	errors: { ...this.state.errors, ...error },
			// });
		}

		const { username, email, password, errors } = formData;
		try {
			const signUpResponse = await Auth.signUp({ username, password, attributes: { email } });
			console.log({ signUpResponse });
			props.history.push('/welcome');
		} catch (error) {
			console.log({ error });
			// this.setState({ errors: { ...errors, cognito: error } });
		}
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

// class Register extends Component {
// 	state = {
// 		username: '',
// 		email: '',
// 		password: '',
// 		confirmpassword: '',
// 		errors: {
// 			cognito: null,
// 			blankfield: false,
// 			passwordmatch: false,
// 		},
// 	};

// 	clearErrorState = () => {
// 		this.setState({
// 			errors: {
// 				cognito: null,
// 				blankfield: false,
// 				passwordmatch: false,
// 			},
// 		});
// 	};

// 	render() {
// 		return (
// 			<section className="section auth">
// 				<div className="container">
// 					<h1>Register</h1>
// 					<form onSubmit={this.handleSubmit}>
// 						<div className="field">
// 							<p className="control">
// 								<input
// 									className="input"
// 									type="text"
// 									name="username"
// 									aria-describedby="userNameHelp"
// 									placeholder="Enter username"
// 									value={this.state.username}
// 									onChange={this.onInputChange}
// 								/>
// 							</p>
// 						</div>
// 						<div className="field">
// 							<p className="control has-icons-left has-icons-right">
// 								<input
// 									className="input"
// 									type="email"
// 									name="email"
// 									aria-describedby="emailHelp"
// 									placeholder="Enter email"
// 									value={this.state.email}
// 									onChange={this.onInputChange}
// 								/>
// 								<span className="icon is-small is-left">
// 									<i className="fas fa-envelope"></i>
// 								</span>
// 							</p>
// 						</div>
// 						<div className="field">
// 							<p className="control has-icons-left">
// 								<input
// 									className="input"
// 									type="password"
// 									name="password"
// 									placeholder="Password"
// 									value={this.state.password}
// 									onChange={this.onInputChange}
// 								/>
// 								<span className="icon is-small is-left">
// 									<i className="fas fa-lock"></i>
// 								</span>
// 							</p>
// 						</div>
// 						<div className="field">
// 							<p className="control has-icons-left">
// 								<input
// 									className="input"
// 									type="password"
// 									name="confirmpassword"
// 									placeholder="Confirm password"
// 									value={this.state.confirmpassword}
// 									onChange={this.onInputChange}
// 								/>
// 								<span className="icon is-small is-left">
// 									<i className="fas fa-lock"></i>
// 								</span>
// 							</p>
// 						</div>
// 						<div className="field">
// 							<p className="control">
// 								<a href="/forgotpassword">Forgot password?</a>
// 							</p>
// 						</div>
// 						<div className="field">
// 							<p className="control">
// 								<button className="button is-success">Register</button>
// 							</p>
// 						</div>
// 					</form>
// 				</div>
// 			</section>
// 		);
// 	}
// }

export default SignUp;
