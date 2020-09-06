import React, { useState, useEffect } from 'react';
import style from './scss/Register.module.scss';
import { Form, Button } from 'react-bootstrap';
import firebase from '../../firebase';

const Register = ({ history }) => {
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

	const handleChange = (e) => {
		setRegisterData({ ...registerData, [e.target.name]: e.target.value });
		setError({
			code: '',
			message: '',
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
			// this.saveUser(createdUser);

			history.push('/');
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

export default Register;
