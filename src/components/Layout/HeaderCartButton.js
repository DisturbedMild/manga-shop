import React, { useContext } from 'react';

import CartContext from '../../store/cart-context';
import CartIcon from '../Cart/CartIcon';
import classes from './HeaderCartButton.module.css';


const HeaderCartButton = props => {
	const cartContext = useContext(CartContext);

	const numberOfCartItems = cartContext.items.reduce((acc, item) => {
		return acc + item.amount;
	}, 0)

	return (
		<button className={classes.button} onClick={props.onClick}>
			<CartIcon />
			<span>Cart</span>
			<span className={classes.total}>{numberOfCartItems}</span>
		</button>
	)
}

export default HeaderCartButton;