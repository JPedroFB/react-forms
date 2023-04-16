import * as React from 'react';
import Cart from './layouts/Cart/Cart';
import Catalog from './layouts/Catalog/Catalog';
import './style.scss';

export default function App() {
  const [showCart, setShowCart] = React.useState(true);
  const [cart, setCart] = React.useState([]);

  return (
    <div className="container">
      <div className="catalog">
        <Catalog setShowCart={setShowCart} cart={cart} setCart={setCart} />
      </div>
      {showCart && (
        <div className="cart">
          <Cart cart={cart} setCart={setCart} />
        </div>
      )}
    </div>
  );
}
