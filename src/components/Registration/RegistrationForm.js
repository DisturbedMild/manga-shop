import React, { useRef, useState } from 'react';

import classes from './RegistrationForm.module.css';
import Input from '../UI/Input';

const RegistrationForm = props => {
	const [validationErrorMessage, setValidationErrorMessage] = useState('');
	const [usernameInvalid, setUsernameInvalid] = useState(false)
	const [passwordInvalid, setPasswordInvalid] = useState(false)

	const usernameRef = useRef();
	const passwordRef = useRef();
	const repeatedPasswordRef = useRef();

	const onSubmit = event => {
		event.preventDefault();
		let name = usernameRef.current.value;
		let password = passwordRef.current.value;
		let repeatedPassword = repeatedPasswordRef.current.value;

		if (name.trim().length === 0 || name.trim().length < 6 || Number(name) === true) {
			setValidationErrorMessage('Sorry, your entered invalid username.');
			setUsernameInvalid(true);
			return
		} else if (password.trim().length === 0 || repeatedPassword.trim().length === 0) {
			setValidationErrorMessage('Sorry, your entered invalid password');
			setUsernameInvalid(false);
			setPasswordInvalid(true);
			console.log('pass || repeated = 0')
			return
		} else if (password.trim().length > 7 && repeatedPassword.trim().length > 7 && password !== repeatedPassword) {
			setPasswordInvalid(true);
			setValidationErrorMessage('Sorry, your entered different passwords.');
			return
		}
		else if ((name.trim().length === 0 || Number(name)) && (password.trim().lengh === 0 || repeatedPassword.trim().length === 0)) {
			setValidationErrorMessage('Sorry, your entered invalid values.');
			setUsernameInvalid(false);
			setPasswordInvalid(true);
			console.log('pass and name false')
			return
		} else if (name.trim().length > 6 && !Number(name) && password.trim().length > 7 && repeatedPassword.trim().length > 7 && password === repeatedPassword) {
			const newUser = {
				username: name,
				password: password,
				repeaterPassword: repeatedPassword
			}
			props.newUserRegistration(newUser);
			setUsernameInvalid(false);
			setPasswordInvalid(false);
			setValidationErrorMessage('');
			usernameRef.current.value = '';
			passwordRef.current.value = '';
			repeatedPasswordRef.current.value = '';
		}
	}

	return (
		<form id={classes['registration-form']} onSubmit={onSubmit}>
			<Input label="Username" input={{ type: 'text', }} ref={usernameRef} hasError={usernameInvalid || props.isUserExist ? true : false} />
			<Input label="Password" input={{ type: 'password', autoComplete: "on" }} ref={passwordRef} hasError={passwordInvalid ? true : false} />
			<Input label="Repeat password" input={{ type: 'password', autoComplete: "on" }} ref={repeatedPasswordRef} hasError={passwordInvalid ? true : false} />
			<button>Register</button>
			{validationErrorMessage && <p className={classes.validationErrorMessage}>{validationErrorMessage}</p>}
		</form>
	)
}

export default RegistrationForm;