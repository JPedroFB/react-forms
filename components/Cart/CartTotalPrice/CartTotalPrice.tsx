import * as React from 'react';

const CartTotalPrice = ({ children }) => {
  return (
    <div style={{ fontSize: '1.5rem' }}>
      <p>Total: {children}</p>
    </div>
  );
};

export default CartTotalPrice;
