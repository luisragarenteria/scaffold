import {ResponseApi} from '../Interfaces/api';
import { ProductProp } from '../Interfaces/product';
import {get} from './api';

export const getProductsService = async ():Promise<ProductProp[]> => {
  const {status, data, message}: ResponseApi = await get('/products');
  if (status) {
    return [
      {
        id: 1,
        name: 'Producto 1',
        description:'',
        price: 20000
      },

      {
        id: 2,
        name: 'Producto 2',
        description:'',
        price: 20000
      },
      {
        id: 3,
        name: 'Producto 3',
        description:'',
        price: 20000
      },
    ];
  }else{
    return []
  }
};
