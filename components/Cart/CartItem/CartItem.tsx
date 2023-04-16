import * as React from 'react';
import './CartItem.scss';

const CartItem = ({ item }) => {
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'decimal',
  });

  return (
    <div className="cartItemContainer">
      <div className="cartItemImagem">
        <img src={item.imagem} />
      </div>
      <div>
        <div className="cartItemTitle">{item.name}</div>
        <div className="cartItemInfo">
          <p>Quantidade: {item.quantity}</p>
          <p>Valor: {formatter.format(item.price)}</p>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
