import React, { useState } from 'react';
import { Auth } from 'aws-amplify';

// Components
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

// Types
import { Event } from '../../ts/types/commonTypes';
import { useHistory } from 'react-router';

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
		marginTop: theme.spacing(1),
	},
	submit: {
		margin: theme.spacing(3, 0, 2),
	},
}));

const ForgotPasswordVerification = () => {
	const classes = useStyles();
	const history = useHistory();
	const [formData, setFormData] = useState({
		username: '',
		verificationCode: '',
		newPassword: '',
		errors: {},
	});

	const handleSubmit = async () => {
		// Form validation
		// clearErrorState();
		const error = {}; //Validate(event, this.state);
		if (error) {
			setFormData({
				...formData,
				errors: { ...formData.errors, ...error },
			});
		}

		const { username, verificationCode, newPassword, errors } = formData;
		try {
			await Auth.forgotPasswordSubmit(username, verificationCode, newPassword);
			history.push('/sign-in');
		} catch (error) {
			console.log({ error });
			setFormData({ ...formData, errors: { ...errors, cognito: error } });
		}
	};

	const onInputChange = (event: Event) => {
		setFormData({
			...formData,
			[event.target.id]: event.target.value,
		});
	};

	return (
		<Container component="main" maxWidth="xs">
			<CssBaseline />
			<div className={classes.paper}>
				<Avatar className={classes.avatar}>
					<LockOutlinedIcon />
				</Avatar>
				<Typography component="h1" variant="h5">
					Forgot Passowrd?
				</Typography>
				<form className={classes.form} noValidate>
					<TextField
						variant="outlined"
						margin="normal"
						required
						fullWidth
						id="verificationCode"
						label="Verification Code"
						name="verificationCode"
						autoComplete="verificationCode"
						onChange={onInputChange}
						autoFocus
					/>
					<TextField
						variant="outlined"
						margin="normal"
						required
						fullWidth
						id="username"
						label="Username"
						name="username"
						autoComplete="username"
						onChange={onInputChange}
						autoFocus
					/>
					<TextField
						variant="outlined"
						margin="normal"
						required
						fullWidth
						name="newPassword"
						label="New Password"
						type="password"
						id="newPassword"
						onChange={onInputChange}
					/>
					<Button
						type="button"
						fullWidth
						variant="contained"
						color="primary"
						className={classes.submit}
						onClick={handleSubmit}
					>
						Submit
					</Button>
				</form>
			</div>
		</Container>
	);
};

export default ForgotPasswordVerification;
