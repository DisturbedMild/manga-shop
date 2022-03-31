import React, { useRef, useState } from 'react';

import Input from '../../UI/Input';
import classes from './MangaItemForm.module.css';

const MangaItemForm = props => {
	const [isAmountValid, setIsAmountValid] = useState(true);
	const amountInputRef = useRef();

	const onSubmitHandler = event => {
		event.preventDefault();

		const enteredAmount = amountInputRef.current.value;
		const enteredAmountNumber = +enteredAmount;

		if (enteredAmount.trim().length === 0 || enteredAmountNumber < 1 || enteredAmountNumber > 5) {
			setIsAmountValid(false);
			return
		}

		props.onAddToCart(enteredAmountNumber);
	}
	return (
		<form className={classes.form} onSubmit={onSubmitHandler}>
			<Input
				ref={amountInputRef}
				label="Amount"
				input={{
					id: 'amount' + props.id,
					type: 'number',
					min: '1',
					max: '5',
					step: '1',
					defaultValue: '1'
				}} />
			<button>Add to Cart</button>
			{!isAmountValid && <p>Sorry you entred invalid number</p>}
		</form>
	)
}

export default MangaItemForm;