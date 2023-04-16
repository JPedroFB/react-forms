import * as React from 'react';
import './IconCartCatalog.scss';

const IconCartCatalog = ({ qtdItens, setShowCart }) => {
  const handleCLick = () => {
    setShowCart((show: boolean) => !show);
  };

  return (
    <div onClick={handleCLick} className="iconCartCatalog">
      Carrinho: {qtdItens}
    </div>
  );
};

export default IconCartCatalog;
