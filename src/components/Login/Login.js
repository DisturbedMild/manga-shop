import React  from 'react';

import Modal from '../UI/Modal';
import LoginForm from './LoginForm';

const Login = props => {
	

	return (
		<Modal onClose={props.onCloseLoginHandler}>
			<h3>Login</h3>
			<LoginForm/>
		</Modal>
	)
}

export default Login;