import * as React from 'react';
import './CartIconCatalog.scss';

const CartIconCatalog = ({ qtdItens, setShowCart }) => {
  const handleCLick = () => {
    setShowCart((show: boolean) => !show);
  };

  return (
    <div onClick={handleCLick} className="iconCartCatalog">
      Carrinho: {qtdItens}
    </div>
  );
};

export default CartIconCatalog;
