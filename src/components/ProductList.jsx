import React, { useContext, useEffect } from "react";
import { NavLink } from "react-router-dom";
/* Este productcontext esta por default por eso no se colocan las llaves */
import ProductContext from "../context/ProductContext";

const ProductList = () => {
  // const [products] = useState(initialState)

  /* Uso del ProductsContext */
  //const { auth, login } = useContext(AuthContext);

  /* Este products sale del archivo de producState.jsx, en la parte del 
    <ProductContext.Provider value={{products: initialState.products}}>
    aun falta ver como haré el uso del globalState y del dispatch   
    */
  const { products, obtenerProductos, eliminarProducto } = useContext(ProductContext);

  // const printID = (id)=>{
  //   console.log(id)
  // }

  useEffect(() => {
    obtenerProductos();
  }, [obtenerProductos]);

  return (
    <>
      <ul>
        {/* Aquí se realiza el map */}
        {products.map((product) => (
          <li key={product.id}>
            <p>{product.id}</p>
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>{product.price}</p>
            <NavLink
               to={`/products/${product.id}`}
              className="btn btn-info" 
            >
              Ver más
            </NavLink>
            <button
              className="btn btn-danger"
             onClick={()=> eliminarProducto(product.id)}
              //onClick={() => printID(product.id)} //Esta función ess llamada así
             //porque se pasana parametros en caso de que no pase parametros
             //se pone por ejp. printID(), ya que sino se colca como se hizo
             //la función la ejecuta automaticamente
            >
              Eliminar
            </button>
            <br />
            <br />  
          </li>
          
        ))}
      </ul>
    </>
  );
};

export default ProductList;
