/* Se agrego useContext para traer mi estadoglobalziado del login */
import React, { useState, useContext } from "react";
/* Importo el archivo useContext que se creo */
import { AuthContext } from "../context/AuthContext";
import Title from "../components/Title";
//import { loginService } from "../services/authServices";

const initForm = {
  userName: "",
  password: "",
};

const LoginPage = () => {
  const [form, setForm] = useState(initForm);
 // const [auth, setAuth] = useState({})

  /* Se extraer la función login de mi authProvider que esta dentro
  del authContext y el atuh que guarda los datos del usuario */
  const { auth, login } = useContext(AuthContext);  
  const handleForm = async (e) => {
    e.preventDefault();
   // console.log(form)


/* Se impplementa el uso de la función login del authContex->AuthProvider */

  const resp =  await login(form);
    console.log(resp)

/*     const resp = await loginService(form);
    //setAuth(resp.data.data)
    setAuth(resp.data)
    localStorage.setItem("token", resp.token)
    console.log(resp) */
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
        <article className="col">
          <p>{auth.id}</p>
        </article>
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