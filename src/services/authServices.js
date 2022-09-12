import axios from "axios";

export const loginService = async (form) => {
  const url =  "https://apimongonodejs.onrender.com/api/auth/login";
  const result = await axios.post(url, form)
  //console.log(form);

  /* Se puede colocar resp solo y ya con este vienne todo la respuesta compleata,
  encaso de ser necesario se puede colocar solo lo que se quieres recibir */
  return result.data;
  /* Retornar solo el result lo que hará es que venga completo la respuesa
  y tengamos que seleccionar que es lo que queremos en cada paga o utro lugar en el que se a
  usar */
  //return result;
};

