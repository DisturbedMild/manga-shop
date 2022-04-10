import React, { Fragment, useContext } from 'react';

import HeaderCartButton from './HeaderCartButton';
import HeaderLoginButton from './HeaderLoginButton';
import HeaderRegistrationButton from './HeaderRegistrationButton';
import classes from './Header.module.css';
import AuthContext from '../../store/auth-context';


const Header = props => {
	const authCtx = useContext(AuthContext);
	return (
		<Fragment>
			<header className={classes.header}>
				<div className={classes.container}>
					<h1>MangaShop</h1>
					<div className={classes['nav-buttons']}>
						{authCtx.isLoggedIn && <HeaderCartButton onClick={props.onOpenCartHandler} />}
						<HeaderRegistrationButton onClick={props.onOpenRegistrationHandler} />
						<HeaderLoginButton onClick={props.onOpenLoginHandler} />
					</div>
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