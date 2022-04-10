import React, { useContext } from 'react';

import AvailableManga from './AvailableManga';
import Card from '../UI/Card';
import AuthContext from '../../store/auth-context';

const Manga = () => {
	const authCtx = useContext(AuthContext)
	return (
		<Card>
			{authCtx.isLoggedIn && <AvailableManga />}
		</Card>
	)
}

export default Manga;