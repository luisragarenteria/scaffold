import React, {useEffect, useState, PropsWithChildren} from 'react';
import {getProductsService} from '../Services/product';
import {Context} from './Index';
import {ProductProp} from '../Interfaces/product';
const GlobalState = (props: PropsWithChildren) => {
  const [products, setProducts] = useState<ProductProp[]>([]);
  const getProducts = async () => {
    const newProducts: ProductProp[] = await getProductsService();
    setProducts(newProducts);
  };
  return (
    <Context.Provider
      value={{
        products,
        getProducts,
      }}>
      {props.children}
    </Context.Provider>
  );
};

export default GlobalState;
