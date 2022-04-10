import React, { useRef } from 'react';

import Input from '../UI/Input';

const LoginForm = () => {

	const usernameRef = useRef();
	const passwordRef = useRef();

	const onSubmitLoginHandler = () => {
			fetch()
	}

	return (
		<form  onSubmit={onSubmitLoginHandler}> 
			<Input
				label='Username'
				input={{
					type: 'text',
					placeholder: 'Enter your username...'
				}}
				ref={usernameRef}
			/>
			<Input
				label='Password'
				input={{
					type: 'password',
					min: '6',
					max: '30'
				}}
				ref={passwordRef}
			/>
			<button>Submit</button>
		</form>
	)
}

export default LoginForm;