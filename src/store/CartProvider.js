import React, { useReducer } from 'react';

import CartContext from './cart-context';

const defaultCartState = {
	totalAmount: 0,
	items: []
}

const cartReducer = (state, action) => {
	if (action.type === 'ADD') {
		const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount;

		const existingCartItemIndex = state.items.findIndex(item => item.id === action.item.id);

		const existingCartItem = state.items[existingCartItemIndex];
		let updatedItems;

		if (existingCartItem) {
			const updatedItem = {
				...existingCartItem,
				amount: existingCartItem.amount + action.item.amount
			}
			updatedItems = [...state.items];
			updatedItems[existingCartItemIndex] = updatedItem;
		} else {
			updatedItems = state.items.concat(action.item);
		}

		return {
			totalAmount: updatedTotalAmount,
			items: updatedItems
		}
	}
	if(action.type === 'REMOVE') {
		const existingCartItemIndex = state.items.findIndex(item => item.id === action.id);

		const existingCartItem = state.items[existingCartItemIndex];
		const updatedTotalAmount = state.totalAmount - existingCartItem.price;

		let updatedItems;

		if(existingCartItem.amount === 1) {
			updatedItems = state.items.filter(item => item.id !== action.id);
		} else {
			const updatedItem = {
				...existingCartItem,
				amount: existingCartItem.amount - 1
			}
			updatedItems = [...state.items];
			updatedItems[existingCartItemIndex] = updatedItem;
		}

		return {
			totalAmount: updatedTotalAmount,
			items: updatedItems
		}
	}
}

const CartProvider = props => {

	const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState);

	const addItemCartHandler = (item) => {
		dispatchCartAction({ type: 'ADD', item })
	}

	const removeItemCartHandler = (id) => {
		dispatchCartAction({ type: 'REMOVE', id })
	}

	const cartContext = {
		totalAmount: cartState.totalAmount,
		items: cartState.items,
		addItem: addItemCartHandler,
		removeItem: removeItemCartHandler
	}

	return (
		<CartContext.Provider value={cartContext}>
			{props.children}
		</CartContext.Provider>
	)
}

export default CartProvider;