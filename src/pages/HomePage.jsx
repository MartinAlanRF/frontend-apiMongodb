/* Se añadió el useContext para obtener la lista de productos */
import React, { useContext } from 'react'
/* Se importa el componente de titutlo */
import Title from '../components/Title'
/* Se importa el ProductContex */
import ProductContext from '../context/ProductContext';


const HomePage = () => {
  /* Este products sale del archivo de producState.jsx, en la parte del 
    <ProductContext.Provider value={{products: initialState.products}}>
    aun falta ver como haré el uso del globalState y del dispatch   
    */
  const { products } = useContext(ProductContext)
  return (
    <>
      <Title titulo="HOME PAGE" />
      <div className="container ">
        <div className="row">
          <div className="col">
            <p>Lista de productos obtenidos de product context</p>
            <br />
            <ul>
              {/* Aquí se realiza el map */}
              {products.map((product) => (
                <li key={product.id}>
                  <h1>{product.name}</h1>
                  <p>{product.description}</p>
                  <p>{product.price}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default HomePage