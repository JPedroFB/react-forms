import * as React from 'react';
import Button from '../../Button/Button';
import Price from '../../Price/Price';
import './CartItem.scss';

const CartItem = ({ item, removeItem, index }) => {
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
      <div className="cartItemActions">
        <Button text="X" onClick={() => removeItem(index)} />
      </div>
    </div>
  );
};

export default CartItem;
