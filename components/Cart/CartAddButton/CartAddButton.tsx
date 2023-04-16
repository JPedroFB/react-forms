import * as React from 'react';
import './CartAddButton.scss';

const CartAddButton = ({ onClick }) => {
  return (
    <button type="button" className="AddCartButton" onClick={onClick}>
      Adicionar
    </button>
  );
};

export default CartAddButton;
