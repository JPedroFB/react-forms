import * as React from 'react';
import Price from '../../Price/Price';
import './CartItem.scss';

const CartItem = ({ item }) => {
  return (
    <div className="cartItemContainer">
      <div className="cartItemImagem">
        <img src={item.image} />
      </div>
      <div>
        <div className="cartItemTitle">{item.name}</div>
        <div className="cartItemInfo">
          <p>Quantidade: {item.quantity}</p>
          <p>Valor: {<Price value={item.price} />}</p>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
