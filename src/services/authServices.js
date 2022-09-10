import axios from "axios";

export const loginService = async (form) => {
  const url =  "https://apimongonodejs.onrender.com/api/auth/login";
  const result = await axios.post(url, form)
  //console.log(form);
  return result.data;
};

