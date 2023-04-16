import * as React from 'react';

import Product from '../../components/Product/Product';
import PageTitle from '../../components/PageTitle/PageTitle';
import ProductContainer from '../../components/ProductContainer/ProductContainer';
import CartCatalog from '../../components/Cart/CartCatalog/CartCatalog';
import AddCartButton from '../../components/Cart/AddCartButton/AddCartButton';

import { findAll } from './CatalogService';

import './Catalogs.scss';

const Catalog = () => {
  let productList: Array<any> = findAll();
  const [cart, setCart] = React.useState([]);

  const addItem = (product) => {
    setCart((cart) => {
      return [...cart, product];
    });
  };

  return (
    <div>
      <PageTitle title="Catálogo">
        <CartCatalog qtdItens={cart.length} />
      </PageTitle>
      <section>
        {productList.map((product) => (
          <ProductContainer>
            <Product data={product} />
            <AddCartButton
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
