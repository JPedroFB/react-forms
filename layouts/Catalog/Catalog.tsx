import * as React from 'react';

import Product from '../../components/Product/Product';
import PageTitle from '../../components/PageTitle/PageTitle';
import ProductContainer from '../../components/ProductContainer/ProductContainer';
import CartAddButton from '../../components/Cart/CartAddButton/CartAddButton';
import CartIconCatalog from '../../components/Cart/CartIconCatalog/CartIconCatalog';

import { findAll } from './CatalogService';

import './Catalogs.scss';

const Catalog = ({ setShowCart, cart, setCart }) => {
  let productList: Array<any> = findAll();

  const addItem = (product) => {
    setCart((cart) => {
      return [...cart, product];
    });
  };

  return (
    <div className="catalogContainer">
      <PageTitle title="Catálogo">
        <CartIconCatalog setShowCart={setShowCart} qtdItens={cart.length} />
      </PageTitle>
      <section>
        {productList.map((product) => (
          <ProductContainer key={product.id}>
            <Product data={product} />
            <CartAddButton
              onClick={() => {
                addItem(product);
              }}
            />
          </ProductContainer>
        ))}
      </section>
    </div>
  );
};

export default Catalog;
