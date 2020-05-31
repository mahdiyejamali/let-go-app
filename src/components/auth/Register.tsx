import React, { Component } from 'react';
import { Auth } from 'aws-amplify';

// Types
import { Event } from '../../ts/types/commonTypes';

class Register extends Component {
	state = {
		username: '',
		email: '',
		password: '',
		confirmpassword: '',
		errors: {
			cognito: null,
			blankfield: false,
			passwordmatch: false,
		},
	};

	clearErrorState = () => {
		this.setState({
			errors: {
				cognito: null,
				blankfield: false,
				passwordmatch: false,
			},
		});
	};

	handleSubmit = async (event: { preventDefault: () => void }) => {
		event.preventDefault();

		// Form validation
		this.clearErrorState();
		const error = {};
		if (error) {
			this.setState({
				errors: { ...this.state.errors, ...error },
			});
		}

		const { username, email, password, errors } = this.state;
		try {
			const signUpResponse = await Auth.signUp({ username, password, attributes: { email } });
			console.log({ signUpResponse });
			this.props.history.push('/welcome');
		} catch (error) {
			console.log({ error });
			this.setState({ errors: { ...errors, cognito: error } });
		}
	};

	onInputChange = (event: Event) => {
		const {
			target: { name, value },
		} = event;
		this.setState({
			[name]: value,
		});
		// document.getElementById(event.target.id).classList.remove('is-danger');
	};

	render() {
		return (
			<section className="section auth">
				<div className="container">
					<h1>Register</h1>
					<form onSubmit={this.handleSubmit}>
						<div className="field">
							<p className="control">
								<input
									className="input"
									type="text"
									name="username"
									aria-describedby="userNameHelp"
									placeholder="Enter username"
									value={this.state.username}
									onChange={this.onInputChange}
								/>
							</p>
						</div>
						<div className="field">
							<p className="control has-icons-left has-icons-right">
								<input
									className="input"
									type="email"
									name="email"
									aria-describedby="emailHelp"
									placeholder="Enter email"
									value={this.state.email}
									onChange={this.onInputChange}
								/>
								<span className="icon is-small is-left">
									<i className="fas fa-envelope"></i>
								</span>
							</p>
						</div>
						<div className="field">
							<p className="control has-icons-left">
								<input
									className="input"
									type="password"
									name="password"
									placeholder="Password"
									value={this.state.password}
									onChange={this.onInputChange}
								/>
								<span className="icon is-small is-left">
									<i className="fas fa-lock"></i>
								</span>
							</p>
						</div>
						<div className="field">
							<p className="control has-icons-left">
								<input
									className="input"
									type="password"
									name="confirmpassword"
									placeholder="Confirm password"
									value={this.state.confirmpassword}
									onChange={this.onInputChange}
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
								<button className="button is-success">Register</button>
							</p>
						</div>
					</form>
				</div>
			</section>
		);
	}
}

export default Register;
