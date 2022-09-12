import React, {useState, useContext} from 'react'
/* Este productcontext esta por default por eso no se colocan las llaves */
import ProductContext  from '../context/ProductContext';
const initialState = [
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
    {
        id: 3,
        name: "Teclado mecánico",
        description: "Akko",
        price: "1500",
    },
    {
        id: 4,
        name: "Mouse",
        description: "Logitech Master MX 3s",
        price: "1999",
    }
];

const ProductList = () => {

   // const [products] = useState(initialState)

    /* Uso del ProductsContext */
    //const { auth, login } = useContext(AuthContext);  

    /* Este products sale del archivo de producState.jsx, en la parte del 
    <ProductContext.Provider value={{products: initialState.products}}>
    aun falta ver como haré el uso del globalState y del dispatch   
    */
    const { products } = useContext(ProductContext)

  return (
    <>
        <ul>
            {/* Aquí se realiza el map */}
            { products.map((product) =>(
                    <li key={product.id}>
                        <h1>{product.name}</h1>
                        <p>{product.description}</p>
                        <p>{product.price}</p>
                    </li>
            ))}
        </ul>
    </>
  )
}

export default ProductList