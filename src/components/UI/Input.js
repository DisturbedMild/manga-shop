import React from 'react'

import classes from './Input.module.css';

const Input = React.forwardRef((props, ref) => {
	return (
		<div className={`${classes.input} ${props.hasError ? classes.error : '' }`}>
			<label htmlFor={props.id}>{props.label}</label>
			<input ref={ref} {...props.input} />
		</div>
	)
}
)

export default Input;