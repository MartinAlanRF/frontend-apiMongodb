import React from 'react';
/* Se importa el enrutador */
import AppRouter from './routers/AppRouter';
/* Se importa el provideer */
import { AuthProvider } from './context/AuthContext';
/* Se importa el Product state de manera default */
import ProductState from './context/ProductState';
/* Importando el peliculas state */
import PeliculasState from './context/Peliculas/PeliculasState';
/* Aquí importo el modulo de bootstrap5 */
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"

/* App es el punto más alto de la aplicación */
const App = () => {
  return (
    /* Se coloca el auth provider encima de approutes para que todas las vistas que se encuentran dentro
        de approuter sean "hijas de authprovider que le pasa sus props a todas las demás vistas" */
    <AuthProvider>
      <ProductState>
        <PeliculasState>
          <AppRouter/>
        </PeliculasState>
      </ProductState>
    </AuthProvider>
  );
};

export default App;

