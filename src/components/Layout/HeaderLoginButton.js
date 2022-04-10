import React from 'react';

import classes from './HeaderLoginButton.module.css';


const HeaderCartButton = props => {
	return (
		<button className={classes.button} onClick={props.onClick}>
			<span>Login</span>
		</button>
	)
}

export default HeaderCartButton;