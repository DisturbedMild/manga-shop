import React, { useState } from 'react';

import AuthContext from './store/auth-context';
import CartProvider from './store/CartProvider';
import Header from './components/Layout/Header';
import Cart from './components/Cart/Cart';
import Login from './components/Login/Login';
import Registration from './components/Registration/Registration';
import Manga from './components/Manga/Manga';

function App() {

  const [cartModalState, setCartModalState] = useState(false);
  const [loginModalState, setLoginModalState] = useState(false);
  const [registrationModalState, setRegistrationModalState] = useState(false);

  const openCartHandler = () => {
    setCartModalState(true);
  }

  const closeCartHandler = () => {
    setCartModalState(false);
  }

  const openLoginHandler = () => {
    setLoginModalState(true)
  }
  const closeLoginHandler = () => {
    setLoginModalState(false);
  }

  const openRegistrationHandler = () => {
    setRegistrationModalState(true)
  }
  const closeRegistrationHandler = () => {
    setRegistrationModalState(false);
  }


  return (
    <AuthContext.Provider value={{isLoggedIn: false}}>
      <CartProvider>
        {cartModalState && <Cart onCloseCartHandler={closeCartHandler} />}
        {loginModalState && <Login onCloseLoginHandler={closeLoginHandler} />}
        {registrationModalState && <Registration onCloseRegistrationHandler={closeRegistrationHandler} />}
        <Header onOpenCartHandler={openCartHandler} onOpenLoginHandler={openLoginHandler} onOpenRegistrationHandler={openRegistrationHandler} />
        <main>
          <Manga />
        </main>
      </CartProvider>
    </AuthContext.Provider>
  );
}

export default App;