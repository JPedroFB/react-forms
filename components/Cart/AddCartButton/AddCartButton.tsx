import * as React from 'react';
import './AddCartButton.scss';

const AddCartButton = ({ onClick }) => {
  return (
    <button type="button" className="AddCartButton" onClick={onClick}>
      Adicionar
    </button>
  );
};

export default AddCartButton;
