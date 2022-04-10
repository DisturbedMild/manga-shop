import classes from './HeaderRegistrationButton.module.css';

const HeaderRegistrationButton = props => {
	return (
		<button className={classes.button} onClick={props.onClick}>Registration</button>
	)
}

export default HeaderRegistrationButton;