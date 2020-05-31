import React, { useState, useContext } from 'react';
import { Auth } from 'aws-amplify';

// Types
import { Event } from '../../ts/types/commonTypes';

import AuthContext from './AuthContext';

const Login = (props: object) => {
	const auth = useContext(AuthContext);
	console.log(auth);
	const [formData, setFormData] = useState({
		username: '',
		password: '',
		errors: {
			cognito: null,
			blankfield: false,
		},
	});

	const clearErrorState = () => {
		setFormData({
			...formData,
			errors: {
				cognito: null,
				blankfield: false,
			},
		});
	};

	const handleSubmit = async (event: { preventDefault: () => void }) => {
		event.preventDefault();

		// Form validation
		clearErrorState();
		const error = {}; //Validate(event, this.state);
		if (error) {
			setFormData({
				...formData,
				errors: { ...formData.errors, ...error },
			});
		}

		const { username, password, errors } = formData;
		try {
			const user = await Auth.signIn(username, password);
			// auth.setAuthStatus(true);
			// auth.setAuthenticatedUser(user);
			props.history.push('/');
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
		// document.getElementById(event.target.id).classList.remove('is-danger');
	};

	return (
		<section className="section auth">
			<div className="container">
				<h1>Log in</h1>
				{/* <FormErrors formerrors={this.state.errors} /> */}

				<form onSubmit={handleSubmit}>
					<div className="field">
						<p className="control">
							<input
								className="input"
								type="text"
								id="username"
								aria-describedby="usernameHelp"
								placeholder="Enter username or email"
								value={formData.username}
								onChange={onInputChange}
							/>
						</p>
					</div>
					<div className="field">
						<p className="control has-icons-left">
							<input
								className="input"
								type="password"
								id="password"
								placeholder="Password"
								value={formData.password}
								onChange={onInputChange}
							/>
							<span className="icon is-small is-left">
								<i className="fas fa-lock"></i>
							</span>
						</p>
					</div>
					<div className="field">
						<p className="control">
							<a href="/forgotpassword">Forgot password?</a>
						</p>
					</div>
					<div className="field">
						<p className="control">
							<button className="button is-success">Login</button>
						</p>
					</div>
				</form>
			</div>
		</section>
	);
};

export default Login;
