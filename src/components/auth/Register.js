import React, { useState, useEffect } from 'react';
import style from './scss/Register.module.scss';
import { Form, Button } from 'react-bootstrap';
import firebase from '../../firebase';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { LANDING_PATH } from '../../asserts/links';

const Register = ({ history, signInUser }) => {
	const [registerData, setRegisterData] = useState({
		email: '',
		password: '',
		errorMessage: {
			code: '',
			message: '',
		},
		isLoading: false,
	});
	const [error, setError] = useState({
		code: '',
		message: '',
	});
	// const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		if (signInUser !== null) {
			history.push(LANDING_PATH);
		}

		//eslint-disable-next-line
	}, [signInUser]);

	const handleChange = (e) => {
		setRegisterData({ ...registerData, [e.target.name]: e.target.value });
		setError({
			code: '',
			message: '',
		});
	};

	const saveUser = (createdUser) => {
		return firebase.database().ref('users').child(createdUser.user.uid).set({
			name: createdUser.user.displayName,
			avatar: createdUser.user.photoURL,
		});
	};

	const onSubmit = async (e) => {
		e.preventDefault();
		// setIsLoading(true);
		try {
			const createdUser = await firebase
				.auth()
				.createUserWithEmailAndPassword(registerData.email, registerData.password);
			await createdUser.user.updateProfile({
				displayName: registerData.email,
				photoURL: `http://gravatar.com/avatar/${createdUser.user.email}?d=identicon`,
			});
			// console.log(createdUser);
			//no need to wait this method
			saveUser(createdUser);
			history.push(LANDING_PATH);
		} catch (e) {
			setError({
				code: e.code,
				message: e.message,
			});
			console.log(e);
		}
		// setIsLoading(false);
	};

	return (
		<div className={style.Container}>
			<div className={style.Title}>
				<h1>Create an account</h1>
			</div>
			<Form className={style.Register} onSubmit={onSubmit}>
				<Form.Group controlId="formBasicEmail">
					<Form.Control
						type="email"
						name="email"
						required
						value={registerData.name}
						onChange={handleChange}
						placeholder="Enter email"
					/>
				</Form.Group>

				<Form.Group controlId="formBasicPassword">
					<Form.Control
						type="password"
						name="password"
						required
						value={registerData.name}
						onChange={handleChange}
						placeholder="Enter password"
					/>
				</Form.Group>
				{error.code ? <div className={style.ErrorMessage}>{error.message}</div> : null}

				<Button className={style.SubmitButton} type="submit">
					Submit
				</Button>
			</Form>
		</div>
	);
};

Register.propTypes = {
	signInUser: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
	signInUser: state.auth.user,
});

export default connect(mapStateToProps, null)(Register);
