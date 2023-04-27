
import { createContext } from 'react';
import { ProductContextType } from '../react-app-env';

type GlobalContextProviderType = {
  children: React.ReactNode
}

const getProducts = async (): Promise<ProductContextType[]> => 
    await (await fetch('https://fakestoreapi.com/products')).json()

export const ProductContext = createContext(getProducts);

export function GlobalContextProvider ({children}: GlobalContextProviderType) {
  return (
    <ProductContext.Provider value={getProducts}>
      {children}
    </ProductContext.Provider>
  )
}