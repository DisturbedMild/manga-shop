import React, { useState } from 'react';

import classes from './Registration.module.css';
import Modal from '../UI/Modal';
import RegistrationForm from './RegistrationForm';

const Registration = props => {
	const [isUserExist, setIsUserExist] = useState(false);

	const newUserRegistrationHandler = async (user) => {
		const getUsers = await fetch('https://react-http-3dc7a-default-rtdb.europe-west1.firebasedatabase.app/users.json');
		const usersData = await getUsers.json();
		const usersDataArray = [];
		for (const key in usersData) {
			usersDataArray.push(usersData[key]);
		}



		const userDataItemIndex = usersDataArray.findIndex(item => item.username === user.username);
		const userDataItem = usersDataArray[userDataItemIndex];
		if (userDataItem) {
			setIsUserExist(true);
			return
		} else {
			setIsUserExist(false);

			fetch('https://react-http-3dc7a-default-rtdb.europe-west1.firebasedatabase.app/users.json', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(user)
			})
		}
	}

	return (
		<Modal onClose={props.onCloseRegistrationHandler}>
			<h2 className={classes.title}>Registration</h2>
			<RegistrationForm newUserRegistration={newUserRegistrationHandler} isUserExist={isUserExist} />
			{isUserExist && <p className={classes.invalid}>Sorry user with that name already exists.</p>}
		</Modal>
	)

}

export default Registration;