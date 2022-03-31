import React, { useState } from 'react';

import CartProvider from './store/CartProvider';
import Header from './components/Layout/Header';
import Cart from './components/Cart/Cart';
import Manga from './components/Manga/Manga';

function App() {

  const [cartModalState, setCartModalState] = useState(false);

  const openCartHandler = () => {
    setCartModalState(true);
  }

  const closeCartHandler = () => {
    setCartModalState(false);
  }

  return (
    <CartProvider>
      {cartModalState && <Cart onCloseCartHandler={closeCartHandler} />}
      <Header onOpenCartHandler={openCartHandler} />
      <main>
        <Manga />
      </main>
    </CartProvider>
  );
}

export default App;