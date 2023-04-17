import * as React from 'react';
import Button from '../../Button/Button';
import Price from '../../Price/Price';
import './CartItem.scss';

const CartItem = ({ item, removeItem }) => {
  return (
    <div className="cartItemContainer">
      <div className="cartItemImagem">
        <img src={item.image} />
      </div>
      <div style={{ width: '-webkit-fill-available' }}>
        <div className="cartItemTitle">{item.name}</div>
        <div className="cartItemInfo">
          <p>Quantidade: {item.quantity}</p>
          <p>Valor: {<Price value={item.price} />}</p>
        </div>
      </div>
      <div className="cartItemActions">
        <Button
          text={item.quantity === 1 ? 'X' : '-'}
          onClick={() => removeItem(item.id)}
        />
      </div>
    </div>
  );
};

export default CartItem;
