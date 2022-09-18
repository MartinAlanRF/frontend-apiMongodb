import axios from "axios";
/* Esto lo ahgure de la clase semana 23 part 2 */

const URL = "https://apimongonodejs.onrender.com/api/products";
//const URLLocal = "http://localhost:4000/api/products";
/* Nota la urllocal es una raviable para hacer pruebas sin necesidad de hacer el push a mi repositorio */

const ConfigHeader =     {
  headers: {
    "auth-token": localStorage.getItem("token"),
  }
}

/* En services iran las cuatro acciones get/post/delete y update de nuestra api en render */
/* Nota debes de agreggar la verificación del TOKEN a mi api  */
export const obtenerProductosService = async () => {
  const resp = await axios.get(URL,ConfigHeader);
  /* El data en la respueta de axios es todo el data de nuestra respuesta del back end  */
  return resp.data;
};

/* Esta  esta  */
export const crearProductoService = async (form) => {
  const resp = await axios.post(URL,form,ConfigHeader);
 
  return resp.data;
};

export const eliminarProductoService = async (id) =>{
  const resp = await axios.delete(`${URL}/${id}`,ConfigHeader);
  return resp.data
}


export const obtenerProductoService = async (id) =>{
  const resp = await axios.get( `${URL}/${id}`,
    {
      headers: {
        "auth-token": localStorage.getItem("token"),
      },
    }
  );
  
  return resp.data;
}

export const actualizarProductoService = async (id, form) =>{
  const resp = await axios.put(`${URL}/${id}`, form,
  {
   headers: {
      "auth-token": localStorage.getItem("token"),
   }, 
  });
  return resp.data;
}