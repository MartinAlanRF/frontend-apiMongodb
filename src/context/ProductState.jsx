import React, { useReducer } from 'react'
import ProductContext from './ProductContext';
import ProductReducer from './ProductReducer'

const initialState = {
    products: [
      {   
        id: 1,
        name: "Laptop",
        description: "Asus VivoBook",
        price: "18999",
    },
    {
        id: 2,
        name: "Monitor",
        description: "Samsung 27",
        price: "4999",
    },
    ],
};

const ProductState = ({children}) => {
    /* Ayuda a ejecutar un reducer/dispatch permite utilizar reducers que haya creado */
    const [globlaState, dispatch] = useReducer(ProductReducer, initialState);
    
  return (
    <>
        <ProductContext.Provider value={{products: initialState.products}}>
            {children}
        </ProductContext.Provider>
    </>
  )
}

export default ProductState;