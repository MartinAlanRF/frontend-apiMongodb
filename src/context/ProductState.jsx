import React, { useReducer, useCallback } from "react";
import ProductContext from "./ProductContext";
import ProductReducer from "./ProductReducer";
/* Se importa el archivo de serivide  de productos */
import {
  crearProductoService,
  obtenerProductosService,
  eliminarProductoService,
  obtenerProductoService,
  actualizarProductoService,
} from "../services/productServices";

/* Se crea el estado inicial */
const initialState = {
  products: [],
  /* Se añadade otra variable de estado iniciar la cual es de tipo objeto ya que solo traera al info
  de un solo producto */
  product: {},
};

const ProductState = ({ children }) => {
  /* Ayuda a ejecutar un reducer/dispatch permite utilizar reducers que haya creado */
  const [globalState, dispatch] = useReducer(ProductReducer, initialState);

  /* useCallback se ocupa para memorizar una función y esta no se ejecute varias veces como
    lo hace dentro del useEffect
    */
  const obtenerProductos = useCallback(async () => {
    /* Se manda a llamar al productService que trae la lista d
      productos que se encuentran dentro de la data base de mongo */
    const resp = await obtenerProductosService();
    /* Con la función se hace un nuevo arrelgo con la lista de 
      objetos que se obtienen de la db, como el service ya le filtramos la data
      ahora se vuelve a filtrar la data con .data, de esta manera
      obtenemos todos los productos solamente, omitiendo por ejemplo el msg que
      se creo en el backend  */
    const productos = resp.data.map((obj) => {
      /* Retorna un objeto nuevo */
      return {
        id: obj._id,
        name: obj.name,
        description: obj.description,
        price: obj.price,
      };
    });
    /*El dispatch sirve para disparar el reducer, ya que el reducer
      es quien va alterar el estado global de la app*/
    dispatch({
      type: "OBTENER_PRODUCTOS",
      payload: productos, //Es la informacion que le manda al reducer para que actualice y es la que se
      // obtuveo del api
    });
  }, []);
  /*  */

  // const obtenerProductos =  async () =>{
  //   const resp = await obtenerProductosService();

  //   const productos = resp.data.map((obj)=>{
  //     return {
  //       id: obj._id,
  //       name: obj.name,
  //       description: obj.description,
  //       price: obj.price
  //     }
  //   });

  //   /* En esta parte se utiliza el dispatch */
  //   /* Se manda como un objeto */
  //   dispatch({
  //     type: "OBTENER_PRODUCTOS",
  //     payload: productos,
  //   });

  // }

  /* Función para crear productos se puede colocar form, product etc para represen
    tar los valores del formulario */
  const crearProducto = async (form) => {
    try {
      /* Se manda a llamar a la función de crearProductoService que se encuentra dentro de
      el archivo productService la cual mediante el uso de un formulario creará un producto nuevo */
      await crearProductoService(form);
      /* Se ejecuta de neuvo obtener productos para cargar la lista ya con el nuevo 
        producto creado */
      await obtenerProductos();
    } catch (error) {
      console.log(error);
    }
  };

  /* Función para eliminar un producto en base su id */
  const eliminarProducto = async (id) => {
    try {
      await eliminarProductoService(id);
      /* Se ejecuta de neuvo obtener productos para cargar la lista ya con el nuevo 
      producto creado */
      await obtenerProductos();
    } catch (error) {
      console.log(error);
    }
  };

  /* Función para obtener la información de un solo producto de la lista de productos que se tiene */
/* Se uso use callback para memorizar la función */

/* Nota necesito corregir el modelo de productos desde mi backend */
 const obtenerProducto = useCallback(async (id) =>{
    try {
      /* Se ejecutra la función de obtener producto en el archivo de servicios  */
      const resp =  await obtenerProductoService(id);
      //console.log (resp.data);
      const producto = {
        id: resp.data._id,
        name: resp.data.name,
        description: resp.data.description,
        price: resp.data.price,
      }
      /* SE manda  llamar al reducer  */

      dispatch(
        {
          type: "OBTENER_PRODUCTO",
          payload: producto
        }
      )
    } catch (error) {
      console.log(error)
    }  
  },[]);
  
  const actualizarProducto = async (id,form) =>{
    await actualizarProductoService(id,form);

    await obtenerProducto(id)
  }

  return (
    <>
      {/* <ProductContext.Provider value={{products: initialState.products, obtenerProductos}}></ProductContext.Provider> */}
      <ProductContext.Provider
        value={{
          products: globalState.products,
          obtenerProductos,
          crearProducto,
          eliminarProducto,
          obtenerProducto,
          product: globalState.product,
          actualizarProducto
        }}
      >
        {children}
      </ProductContext.Provider>
    </>
  );
};

export default ProductState;
