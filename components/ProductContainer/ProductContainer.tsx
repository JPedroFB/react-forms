import * as React from 'react';
import './ProductContainer.scss';

const ProductContainer = ({ children }) => {
  const [Product, AddCartButton] = children;

  return (
    <div className="productContainer">
      <div className="product">{Product}</div>
      <div className="actions">{AddCartButton}</div>
    </div>
  );
};

export default ProductContainer;
