import axios from "axios";

/* En services iran las cuatro acciones get/post/delete y update de nuestra api en render */

/* Nota debes de agreggar la verificación del TOKEN a mi api  */
export const obtenerProductosService = async () => {
  const resp = await axios.get(
    "https://apimongonodejs.onrender.com/api/products",
    {
      headers: {
        "auth-token": localStorage.getItem("token"),
      }
    }
  );
  /* El data en la respueta de axios es todo el data de nuestra respuesta del back end  */
  return resp.data;
};

/* Esta  esta  */
export const crearProductoService = async (form) => {
  const resp = await axios.post(
    "https://apimongonodejs.onrender.com/api/products",
    form,
    {
      headers: {
        "auth-token": localStorage.getItem("token"),
      },
    }
  );
 
  return resp.data;
};

export const eliminarProductoService = async (id) =>{
  const resp = await axios.delete(
    `https://apimongonodejs.onrender.com/api/products/${id}`,
    {
      headers: {
        "auth-token": localStorage.getItem("token"),
      },
    }
  );
  return resp.data
}
