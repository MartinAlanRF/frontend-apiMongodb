import axios from "axios";
import React, { useState } from "react";
import Title from "../components/Title";
//import { loginService } from "../services/authServices";

const initForm = {
  userName: "",
  password: "",
};

const LoginPage = () => {
  const [form, setForm] = useState(initForm);
  //const [auth, setAuth] = useState({});

  const handleForm = async (e) => {
    e.preventDefault();
    console.log(form)

    try{
      const resp = await axios.post("https://apimongonodejs.onrender.com/api/auth/login",
       {
         userName: "Jacqueline",
         password: "password"
       })
      console.log(resp)
    }catch(error){
      console.log(error.response)
    }
    // const data = await loginService(form);
    // console.log(data)
  
  };

  const cambio = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <Title titulo="Login" />
      <section className="row">
 
      </section>
      <main className="row">
        <article className="col">
          <form onSubmit={handleForm}>
            <div className="mb-3">
              <label htmlFor="inputUsername" className="form-label">
                User name
              </label>
              <input
                type="text"
                className="form-control"
                id="inputUsername"
                onChange={cambio}
                value={form.userName}
                name="userName"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="inputPassword" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="inputPassword"
                onChange={cambio}
                value={form.password}
                name="password"
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Iniciar sesion
            </button>
          </form>
        </article>
      </main>
    </>
  );
};

export default LoginPage;