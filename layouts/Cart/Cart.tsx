import * as React from 'react';
import CartItem from '../../components/Cart/CartItem/CartItem';
import CartTotalPrice from '../../components/Cart/CartTotalPrice/CartTotalPrice';

import './Cart.scss';

const Cart = ({ cart, setCart }) => {
  const [cartItems, setCartItems] = React.useState([]);

  React.useEffect(() => {
    const cartItems = cart.reduce((items, product) => {
      const itemIndex = items.findIndex((item) => item.id === product.id);
      if (itemIndex >= 0) {
        items[itemIndex].quantity += 1;
        items[itemIndex].price += product.price;
      } else {
        items.push({
          id: product.id,
          name: product.name,
          image: product.image,
          price: product.price,
          quantity: 1,
        });
      }
      return items;
    }, []);

    setCartItems(cartItems);
  }, [cart]);

  return (
    <div className="cartContainer">
      <h1>Carrinho</h1>
      <ul>
        {cartItems.map((item) => {
          return (
            <li key={item.id}>
              <CartItem item={item} />
            </li>
          );
        })}
      </ul>

      <CartTotalPrice
        total={cartItems.reduce((itemA, itemB) => itemA.price + itemB.price)}
      />
    </div>
  );
};

export default Cart;
