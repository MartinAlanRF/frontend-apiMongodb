import axios from "axios";

// export const loginService = async (form) => {
//   const url =  "https://apimongonodejs.onrender.com/api/auth/login";
//   const result = await axios.post(url, form)
//   console.log(form);
//   return form;
// };

export const loginService = async (form) =>
{
  try{
    const resp = await axios.post("https://apimongonodejs.onrender.com/api/auth/login",
     {
       form
     });
     //return (resp.data)
    return resp  
  }catch(a){
    console.log(a.response)
  }
}

// const login = async (formData) =>{
//   axios.post("https://apimongonodejs.onrender.com/api/auth/login",
//   {
//     formData
//   })
//   .then(response => {
//     console.log(response)
//   })
// }