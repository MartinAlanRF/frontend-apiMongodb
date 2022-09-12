import React, { useState, createContext } from "react";

/*  */
import { loginService } from "../services/authServices"

export const AuthContext  = createContext ({});

/* El estado inicial de cada varaible de estado */

const intialState = {
    id: null,
    email: null,
    password: null
}

/* Recibe todos los componentes que se encuentren dentro de auth provider */
export const AuthProvider = ({children}) => {

    /* Guardar el estado (useStare) en una variable global */
    const [auth, setAuth] = useState(intialState)


    const login = async (form) => {
        /* En esta parte lo que se hace ahora es que se hara uso del servicio de authService para que ahora
        ese authService pase de manera global a todas las demás rutas */

    const data = await loginService(form);
    setAuth(
        {
         id: data.data.id,
         email: data.data.email,
         userName: data.data.userName,
         password: data.data.password       
    });
    localStorage.setItem("token", data.token)

    }

  return (
    /* Exportando la variable de estado y la función mediante las props de AuthProvider */
    <AuthContext.Provider value={{auth, login}}>
        {children}
    </AuthContext.Provider>
  )
};

