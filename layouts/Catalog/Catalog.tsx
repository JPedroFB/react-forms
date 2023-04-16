import * as React from 'react';
import Product from '../../components/Product/Product';
import AddCartButton from '../../components/AddCartButton/AddCartButton';
import CartCatalog from '../../components/CartCatalog/CartCatalog';
import { findAll } from './CatalogService';

const Catalog = () => {
  let productList: Array<any> = findAll();

  return (
    <div>
      <h1>Catálogo</h1>
      <CartCatalog />
      <section>
        {productList.map((product) => (
          <div>
            <Product data={product} />
            <AddCartButton itemId={product.id} />
          </div>
        ))}
      </section>
    </div>
  );
};

export default Catalog;
