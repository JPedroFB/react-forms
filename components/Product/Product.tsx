import * as React from 'react';
import './Product.scss';

const Product = ({ data }) => {
  return (
    <div key={data.id} className="productCard">
      <div className="productTitle">
        <h2>{data.name}</h2>
      </div>
      <div className="productImages">
        <img src={data.image} />
      </div>
      <div className="productPrice">
        <span>{data.price}</span>
      </div>
    </div>
  );
};

export default Product;
