import * as React from 'react';
import Cart from './layouts/Cart/Cart';
import Catalog from './layouts/Catalog/Catalog';
import './style.scss';

export default function App() {
  const [showCart, setShowCart] = React.useState(false);

  React.useEffect(() => {
    console.log('exibir carrinho');
  }, [showCart]);

  return (
    <div className="container">
      <div className="catalog">
        <Catalog setShowCart={setShowCart} />
      </div>
      {showCart && (
        <div className="cart">
          <Cart />
        </div>
      )}
    </div>
  );
}
