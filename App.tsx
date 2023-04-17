import * as React from 'react';
import Cart from './layouts/Cart/Cart';
import Catalog from './layouts/Catalog/Catalog';
import './style.scss';

export default function App() {
  const [showCart, setShowCart] = React.useState(false);
  const [cart, setCart] = React.useState([]);

  React.useEffect(() => {
    setShowCart(false);
  }, [cart]);

  return (
    <div className="container">
      <div className={showCart ? 'catalog hide' : 'catalog'}>
        <Catalog setShowCart={setShowCart} cart={cart} setCart={setCart} />
      </div>
      <div className={showCart ? 'cart' : 'cart hide'}>
        {showCart && <Cart cart={cart} setCart={setCart} />}
      </div>
    </div>
  );
}
