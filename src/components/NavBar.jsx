/* Señadio el useCOntext */
import React, { useContext } from "react";
/* Importo authcontext para poder pasar los valores de mi incio de sesison mediante las prop */
import { AuthContext } from "../context/AuthContext";
/*Importo NavLink debido a que este es el componente que 
permite dar clic y redirigir a las demás rutas */
import { NavLink } from 'react-router-dom'



const NavBar = () => {
  const { auth } = useContext(AuthContext);
  return (
    <nav className=" mx-auto navbar navbar-expand-lg navbar-dark bg-dark">
    <div className="container">
      <a className="navbar-brand" href="/">
     {/*  <img src="/docs/5.2/assets/brand/bootstrap-logo.svg" alt width={30} height={24} /> */}
        FRONTEND APIMONGODB
      </a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" 
              data-bs-target="#menuResponsive"  aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="menuResponsive">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <NavLink
                to="/"
                aria-current="page"
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
              INICIO
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink
                to="/products"
                aria-current="page"
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
              PRODUCTOS
            </NavLink>
          </li>
          
          
          <li className="nav-item">
            <NavLink
                to="/peliculas"
                aria-current="page"
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
              PELICULAS
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink
                  to="/login"
                  aria-current="page"
                  className={({ isActive }) =>
                    isActive ? "nav-link active" : "nav-link"
                  }
                >
                LOGIN
              </NavLink>
          </li>


        </ul>
        <div className="">
            <ul className="navbar-nav mb-2 mb-lg-0">
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="/"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  {auth.userName ? auth.userName : "Cuenta"}
                </a>
                <ul className="dropdown-menu dropdown-menu-end">
                  <li>
                    <a className="dropdown-item" href="/">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/">
                      Another action
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <button className="dropdown-item">Logout</button>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
      </div>
    </div>
  </nav>
  )
}

export default NavBar