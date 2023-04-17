import * as React from 'react';
import Button from '../../components/Button/Button';
import CartItem from '../../components/Cart/CartItem/CartItem';
import CartTotalPrice from '../../components/Cart/CartTotalPrice/CartTotalPrice';
import Price from '../../components/Price/Price';

import './Cart.scss';

const Cart = ({ cart, setCart }) => {
  const [cartItems, setCartItems] = React.useState([]);
  const [total, setTotal] = React.useState(0);

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

  React.useEffect(() => {
    let total = 0;
    if (cartItems.length) {
      for (let item of cartItems) {
        total = total + item.price;
      }
    }
    setTotal(total);
  }, [cartItems]);

  const finishShop = () => {
    alert('Compra finalizada.');
    setCart([]);
  };

  return (
    <div className="cartContainer">
      <div className="cartTitle">
        <h1>Carrinho</h1>
      </div>
      <div className="cartItems">
        <ul>
          {cartItems.map((item) => {
            return (
              <li key={item.id}>
                <CartItem item={item} />
              </li>
            );
          })}
        </ul>
      </div>
      <div className="cartFotter">
        <CartTotalPrice>
          <Price value={total} />
        </CartTotalPrice>
        <Button text="Finalizar" onClick={finishShop} />
      </div>
    </div>
  );
};

export default Cart;
