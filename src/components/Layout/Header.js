import React, { Fragment } from 'react';

import HeaderCartButton from './HeaderCartButton';
import classes from './Header.module.css';

const Header = props => {
	return (
		<Fragment>
			<header className={classes.header}>
				<div className={classes.container}>
					<h1>MangaShop</h1>
					<HeaderCartButton onClick={props.onOpenCartHandler} />
				</div>
			</header>
			<div className={classes.about}>
				<div className={classes.container}>
					<p>Hi everyone! <br className={classes.br} />This is one of the best online-shops of Manga.Here you can find any type of manga from all over the world.<br className={classes.br} /> We have a lot of most popular manga and manhwa.</p>
				</div>
			</div>
		</Fragment>
	)
}

export default Header;