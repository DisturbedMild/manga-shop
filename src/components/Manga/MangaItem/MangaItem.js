import React, { useContext } from 'react';


import CartContext from '../../../store/cart-context';
import MangaItemForm from './MangaItemForm';
import classes from './MangaItem.module.css';

const MangaItem = props => {
	const cartContext = useContext(CartContext);

	const price = `$${props.price.toFixed(2)}`;


	const onAddItemHandler = amount => {
		cartContext.addItem({
			id: props.id,
			name: props.name,
			price: props.price,
			amount: amount
		})
	}

	return (
		<li className={classes.item}>
			<img src={props.img} alt={props.name} />
			<div className={classes['item-content']}>
				<p className={classes.name}>{props.name}</p>
				<p className={classes.description}>{props.description}</p>
				<p className={classes.price}>{price}</p>
				<MangaItemForm onAddToCart={onAddItemHandler} id={props.id} />
			</div>
		</li>)
}

export default MangaItem;