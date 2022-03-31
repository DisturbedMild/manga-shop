import React, { useContext } from 'react';

import CartContext from '../../store/cart-context';
import Modal from '../UI/Modal';
import classes from './Cart.module.css';
import CartItem from './CartItem.js';

const Cart = props => {
	const cartContext = useContext(CartContext);

	const totalAmount = `$${cartContext.totalAmount.toFixed(2)}`;

	const cartItemRemoveHandler = id => {
		cartContext.removeItem(id)
	}

	const cartItemAddHandler = item => {
		cartContext.addItem({...item, amount: 1})
	}

	return (
		<Modal onClose={props.onCloseCartHandler}>
			<div className={classes.total}>
				<span>Total Amount: &nbsp;</span>
				<span>{totalAmount}</span>
			</div>
			<ul className={classes.list}>
				{cartContext.items.map(item => <CartItem key={item.id} name={item.name} price={item.price} amount={item.amount} onRemove={cartItemRemoveHandler.bind(null, item.id)}  onAdd={cartItemAddHandler.bind(null, item)} />)}
			</ul>
			<div className={classes.actions}>
				{cartContext.items.length > 0 && <button className={classes.close} onClick={props.onCloseCartHandler}>Close</button>}
				<button className={classes.order}>Order</button>
			</div>
		</Modal>
	)
}

export default Cart;