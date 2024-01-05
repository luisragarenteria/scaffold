import {  createContext } from "react";
import { ProductProp } from "../Interfaces/product";

interface ContextProps {
    products: ProductProp[]; // Puedes reemplazar "any" con el tipo específico de tus productos
    getProducts: () => void;
  }

export const Context = createContext<ContextProps>({
    products: [],
    getProducts: ()=>{}
})

